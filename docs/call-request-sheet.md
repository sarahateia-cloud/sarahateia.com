# Call Requests sheet: setup and protection

The "Request a call" form on the site sends first name, phone, email, best way to reach you,
session type and best times to a Google Apps Script web app, which saves them to the
Call Requests sheet. The website already sends the email address. If the Email column is empty,
the script in Google isn't writing it. `call-request-apps-script.gs` fixes that.

## 1. Update the script (10 minutes)

Do this signed in to the Google account that owns the Call Requests sheet.

1. Open the Call Requests sheet → **Extensions → Apps Script**.
2. Before deleting anything, look for a Turnstile secret in the old code (a long string near
   `TURNSTILE` or `secret`). Copy it somewhere safe for step 4.
3. Select everything in `Code.gs`, delete it, and paste in all of `call-request-apps-script.gs`.
   Save.
4. **Project Settings** (gear icon) → **Script Properties** → **Add script property**:
   name `TURNSTILE_SECRET`, value = the secret from step 2, or from Cloudflare dashboard →
   Turnstile → the sarahateia.com widget → Secret key. Save. Without it, the spam check is skipped.
5. **Deploy → Manage deployments** → pencil icon on the existing web app → Version:
   **New version** → **Deploy**. Edit the existing deployment. Don't create a new one, or the
   web address changes and the website form stops saving.
6. In the editor, pick `setUpAutoDelete` from the function menu and click **Run** once. Approve
   the permission prompt. Requests older than 90 days are then deleted every night
   (change `KEEP_DAYS` at the top of the script to keep them longer or shorter).
7. Test: send a request from the website with a test name and an email. A new row should
   appear with the email in the **Email** column. Delete the test row.

The script finds columns by their header name and adds any that are missing, so it works with
the sheet's current headers. Old rows stay as they are; only new requests fill the new columns.

## 2. Protecting the sheet

Google Sheets can't be given a password, and there's no way to make Google ask for one before a
single file opens. Google already encrypts the sheet in storage and in transit. The real risk
is someone getting into the Google account or the file being shared, so protect those:

- **Turn on 2-Step Verification with a passkey or security key** on the Google account that owns
  the sheet: myaccount.google.com → Security → 2-Step Verification. This is the closest thing to
  "a password on the sheet" and protects everything in the account.
- **Keep the sheet unshared.** Share → General access should say **Restricted**, with only your
  own account listed.
- **Keep less.** The nightly auto-delete (step 6 above) means old requests don't sit there.
- **Turn off offline access** for Google Sheets on shared computers.

### HIPAA

Call requests are names and contact details of people seeking counseling. Under Texas law
(Health and Safety Code ch. 181) that can count as protected health information even for a
self-pay practice. Google signs a HIPAA Business Associate Agreement (BAA) only for
**Google Workspace** accounts, not for personal @gmail.com accounts. If the sheet lives in a
personal Gmail account, the safer setup is to:

1. Move the sheet and its script to a Google Workspace account for the practice,
2. Accept Google's BAA in the Workspace Admin console (Account → Account settings → Legal and
   compliance), and
3. Use only Workspace's HIPAA-covered services for client information.

Confirm with your supervisor, and an attorney if needed, before relying on this.
