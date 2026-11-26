/**
 * Call Requests: Google Apps Script web app for the "Request a call" form on sarahateia.com.
 *
 * Paste this whole file into the Apps Script project attached to the Call Requests sheet
 * (Extensions → Apps Script), replacing what's there. Setup steps: docs/call-request-sheet.md.
 *
 * What it does:
 * - Saves every request as a new row, matching columns by their header name, so the Email
 *   column always fills. Any column it needs that's missing (Email, Reach by, Session type, ...)
 *   is added to the header row automatically.
 * - Checks the Cloudflare Turnstile spam token when TURNSTILE_SECRET is set in Script
 *   Properties, and quietly drops bots that fill the hidden _gotcha field.
 * - Stops anything typed from running as a spreadsheet formula.
 * - deleteOldRequests() removes requests older than KEEP_DAYS, so contact details for people
 *   who never became clients don't pile up. Run setUpAutoDelete() once to schedule it daily.
 *
 * Nothing here contains a secret. Keep the Turnstile secret in Script Properties only.
 */

// Change this to the sheet tab's name if it isn't the first tab.
const SHEET_NAME = "";
// How long to keep a request before it's deleted automatically.
const KEEP_DAYS = 90;

// Each column: the header it gets if it has to be created, other header names that count as the
// same column (matched without case, spaces or punctuation), and how to read the value.
const COLUMNS = [
  { header: "Received", aliases: ["timestamp", "date", "submitted"], value: () => new Date() },
  { header: "First name", aliases: ["name"], value: (d) => d.name },
  { header: "Phone", aliases: ["phonenumber", "tel"], value: (d) => d.phone },
  { header: "Email", aliases: ["emailaddress", "e-mail"], value: (d) => d.email },
  { header: "Reach by", aliases: ["contactmethod", "bestway"], value: (d) => d.contact_method },
  { header: "Session type", aliases: ["sessiontype"], value: (d) => d.session_type },
  { header: "Best times", aliases: ["besttime", "besttimes"], value: (d) => d.best_time },
  { header: "Notes", aliases: ["reason"], value: (d) => d.reason },
];

function doPost(e) {
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || "{}");

    // Bots fill the hidden field; people never see it. Answer "ok" so bots learn nothing.
    if (data._gotcha) return reply({ ok: true });

    if (!passesSpamCheck(data.turnstile_token)) {
      return reply({ ok: false, error: "The spam check didn't pass. Please try again." });
    }

    const phone = clean(data.phone);
    const email = clean(data.email);
    if (!clean(data.name) || (!phone && !email)) {
      return reply({ ok: false, error: "Please add your first name and a phone number or email." });
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const sheet = getSheet();
      const columnFor = ensureColumns(sheet);
      const row = new Array(sheet.getLastColumn()).fill("");
      COLUMNS.forEach((col) => {
        const raw = col.value(data);
        row[columnFor[col.header] - 1] = raw instanceof Date ? raw : safeCell(clean(raw));
      });
      sheet.appendRow(row);
    } finally {
      lock.releaseLock();
    }
    return reply({ ok: true });
  } catch (err) {
    console.error(err);
    return reply({ ok: false, error: "Something went wrong. Please call or text instead." });
  }
}

/** Finds each needed column by header name, adding any that are missing. Returns name → column. */
function ensureColumns(sheet) {
  const lastCol = Math.max(sheet.getLastColumn(), 1);
  const headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(String);
  const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
  const columnFor = {};
  COLUMNS.forEach((col) => {
    const names = [col.header, ...col.aliases].map(norm);
    let index = headers.findIndex((h) => h && names.includes(norm(h)));
    if (index === -1) {
      index = headers.findIndex((h) => !h); // reuse an empty header cell if there is one
      if (index === -1) index = headers.length;
      headers[index] = col.header;
      sheet.getRange(1, index + 1).setValue(col.header).setFontWeight("bold");
    }
    columnFor[col.header] = index + 1;
  });
  sheet.setFrozenRows(1);
  return columnFor;
}

function passesSpamCheck(token) {
  const secret = PropertiesService.getScriptProperties().getProperty("TURNSTILE_SECRET");
  if (!secret) return true; // Not set up yet: same as the site running without the check.
  if (!token) return false;
  const res = UrlFetchApp.fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "post",
    payload: { secret: secret, response: String(token) },
    muteHttpExceptions: true,
  });
  try {
    return JSON.parse(res.getContentText()).success === true;
  } catch (err) {
    return false;
  }
}

/** Deletes requests older than KEEP_DAYS. Safe to run any time. */
function deleteOldRequests() {
  const sheet = getSheet();
  const columnFor = ensureColumns(sheet);
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return;
  const cutoff = new Date(Date.now() - KEEP_DAYS * 24 * 60 * 60 * 1000);
  const dates = sheet.getRange(2, columnFor["Received"], lastRow - 1, 1).getValues();
  // Bottom up, so deleting a row doesn't shift the ones still to check.
  for (let i = dates.length - 1; i >= 0; i--) {
    const when = dates[i][0];
    if (when instanceof Date && when < cutoff) sheet.deleteRow(i + 2);
  }
}

/** Run once by hand: schedules deleteOldRequests every night. */
function setUpAutoDelete() {
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === "deleteOldRequests")
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger("deleteOldRequests").timeBased().everyDays(1).atHour(3).create();
}

function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet();
  return (SHEET_NAME && book.getSheetByName(SHEET_NAME)) || book.getSheets()[0];
}

function clean(value) {
  return value == null ? "" : String(value).trim().slice(0, 500);
}

// A value starting with = + - @ would run as a formula in the sheet. A leading ' keeps it as text.
function safeCell(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
