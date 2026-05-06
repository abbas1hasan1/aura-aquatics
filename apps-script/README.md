# Reservation form → Google Sheet + email

The reservation form on `/services/reservation` POSTs JSON to a Google Apps Script Web App. The script appends a row to a Google Sheet and emails `Info@auraaquatics.com`.

Free, unlimited, owned by Aura Aquatics' Google account. No third-party services.

## One-time setup

1. **Create the Sheet.** In the Aura Aquatics Google account, create a new Google Sheet. Name it `Aura Aquatics Reservations`. Leave it empty — the script writes the header row on the first submission.

2. **Open Apps Script.** From the Sheet: `Extensions › Apps Script`. A new tab opens with a `Code.gs` file.

3. **Paste the script.** Replace the default contents of `Code.gs` with the contents of [`Code.gs`](./Code.gs) in this folder. Save (⌘S). Name the project `Aura Aquatics Reservations`.

4. **Deploy as Web App.** Click `Deploy › New deployment`. Click the gear icon → `Web app`. Configure:
   - **Description:** `Reservation form receiver`
   - **Execute as:** `Me (the owner)`
   - **Who has access:** `Anyone`

   Click `Deploy`. On first deploy, Google asks for authorization — click `Authorize access`, pick the account, click `Advanced › Go to Aura Aquatics Reservations (unsafe)`, then `Allow`. (The "unsafe" warning is normal for unverified personal scripts.)

5. **Copy the Web App URL.** It looks like `https://script.google.com/macros/s/AKfyc.../exec`. Copy it.

6. **Set the env var.**
   - **Vercel:** Project Settings → Environment Variables → add `NEXT_PUBLIC_RESERVATION_ENDPOINT` with the URL from step 5. Apply to Production, Preview, and Development. Redeploy.
   - **Local dev:** create `.env.local` in the project root with `NEXT_PUBLIC_RESERVATION_ENDPOINT=<url>` and restart `npm run dev`.

## Test it

1. Visit `/services/reservation`, fill in every field, submit.
2. Confirm a new row appeared in the Sheet (with `timestamp` first column).
3. Confirm an email arrived at `Info@auraaquatics.com`.

If the success screen never shows, open the browser devtools Network tab and re-submit. A 4xx/5xx on the Apps Script URL usually means the deployment isn't set to "Anyone" or wasn't redeployed after a code change.

## Updating the script later

Apps Script deployments are versioned. After editing `Code.gs`, you must `Deploy › Manage deployments › ✏️ edit › Version: New version › Deploy`. The Web App URL stays the same — no env var update needed.
