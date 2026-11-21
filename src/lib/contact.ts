export const PHONE_DISPLAY = "(972) 482-9526";
export const PHONE_HREF = "tel:+19724829526";
// Free 15-minute phone consultation on Calendly. Change days and hours in Calendly, not here.
export const BOOKING_URL = "https://calendly.com/attya-llc/consultation";

// When the free consultation can be booked. Keep this matching the hours set in Calendly.
export const CONSULT_HOURS = "Free calls available daily, 10 a.m. to 7 p.m. Central.";

// Booking for current clients (people who've had the free call and signed consent forms).
// Paste a session scheduler link here to show a "Book a session" button; while it's empty,
// clients text or call to book.
export const SESSION_BOOKING_URL = "";
// Session availability, one line per day or range, e.g. "Thursday: 10 a.m. to 6 p.m.".
// Leave empty to hide the hours list.
export const SESSION_HOURS: string[] = [];

const SMS_NUMBER = "+19724829526";
// Pre-filled text message for booking. No health details, just a day and time.
export const SESSION_SMS_HREF = `sms:${SMS_NUMBER}?&body=${encodeURIComponent(
  "Hi Sarah, I'm a current client and I'd like to book a session. Day: ___ Time: ___",
)}`;
