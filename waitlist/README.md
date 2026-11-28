# Vault waitlist → Google Sheet

The form at `coastlab.dev/waitlist` posts sign-ups to a Google Apps Script web app,
which appends them to a Google Sheet you own. No server, no cost.

## Setup (about 2 minutes)

1. Create a Google Sheet named **Vault Waitlist** (use the Google account that should own the list).
2. In the Sheet: **Extensions → Apps Script**. Delete the starter code and paste in `Code.gs` from this folder. Save.
3. Click **Deploy → New deployment**. Gear icon → **Web app**.
   - Description: `vault waitlist`
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, approve the permissions prompt (it only needs this one Sheet), and copy the **Web app URL**. It ends in `/exec`.
5. Paste it into `src/config.js`:
   ```js
   export const WAITLIST = { endpoint: 'https://script.google.com/macros/s/XXXX/exec', ... }
   ```
6. Commit and push to `main`. The GitHub Pages workflow deploys it.

Check it works: open the `/exec` URL in a browser. You should see `{"ok":true,"service":"vault-waitlist"}`.
Then sign up on the live page with your own email and look for the new row in the **Waitlist** tab.

## What lands in the Sheet

| Joined (UTC) | Email | Source | Age 13+ | Page |
|---|---|---|---|---|

**Source** comes from the link people used. Use tagged links in ads so you can see what worked:

- TikTok bio: `https://coastlab.dev/waitlist?utm_source=tiktok&utm_campaign=bio`
- TikTok ads: `https://coastlab.dev/waitlist?utm_source=tiktok&utm_campaign=launch&utm_content=<ad name>`

## Notes

- Repeat sign-ups don't create duplicate rows. The visitor sees "you're already in".
- If you edit `Code.gs` later, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.
- The Sheet holds personal data (emails). Keep it private, and delete the list once you've sent the launch email or no longer need it, as the Privacy Policy says.
- Google Sheets has no "send email to everyone" button. For the launch email, export the Email column to a CSV and import it into your email tool, or use a mail-merge add-on.
