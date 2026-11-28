/**
 * Vault waitlist — Google Apps Script web app that appends sign-ups to this Sheet.
 * Paste into Extensions → Apps Script of the waitlist Google Sheet. Setup: waitlist/README.md
 *
 * Columns: Joined (UTC) | Email | Source | Age 13+ | Page
 * - Rejects malformed emails and anyone who didn't confirm 13+.
 * - Dedupes by email (case-insensitive): a repeat sign-up returns { ok: true, already: true }.
 * - Uses a script lock so a TikTok spike can't write two rows at once.
 */

const SHEET_NAME = 'Waitlist';
const HEADERS = ['Joined (UTC)', 'Email', 'Source', 'Age 13+', 'Page'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function doPost(e) {
  const p = (e && e.parameter) || {};
  const email = String(p.email || '').trim().toLowerCase().slice(0, 254);
  const source = clean_(p.source, 80);
  const page = clean_(p.page, 80);

  if (!EMAIL_RE.test(email)) return json_({ ok: false, error: 'invalid_email' });
  if (p.age13 !== 'yes') return json_({ ok: false, error: 'age' });

  const lock = LockService.getScriptLock();
  if (!lock.tryLock(8000)) return json_({ ok: false, error: 'busy' });
  try {
    const sheet = sheet_();
    const last = sheet.getLastRow();
    if (last > 1) {
      const found = sheet.getRange(2, 2, last - 1, 1)
        .createTextFinder(email).matchEntireCell(true).matchCase(false).findNext();
      if (found) return json_({ ok: true, already: true });
    }
    sheet.appendRow([new Date().toISOString(), email, source, 'yes', page]);
    return json_({ ok: true, already: false });
  } finally {
    lock.releaseLock();
  }
}

// Visiting the /exec URL in a browser just confirms it's live.
function doGet() {
  return json_({ ok: true, service: 'vault-waitlist' });
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) sh = ss.insertSheet(SHEET_NAME);
  if (sh.getLastRow() === 0) {
    sh.appendRow(HEADERS);
    sh.setFrozenRows(1);
  }
  return sh;
}

// Strip anything that would make Sheets treat the value as a formula.
function clean_(v, max) {
  return String(v || '').replace(/^[=+\-@\t\r]+/, '').slice(0, max);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
