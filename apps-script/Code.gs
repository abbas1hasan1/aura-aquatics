/**
 * Aura Aquatics — Reservation Form receiver.
 *
 * Paste this into a Google Apps Script project bound to a Google Sheet
 * named "Aura Aquatics Reservations", then deploy as a Web App
 * (Execute as: Me, Who has access: Anyone). Drop the deployment URL into
 * the NEXT_PUBLIC_RESERVATION_ENDPOINT env var. See ./README.md.
 */

const NOTIFY_EMAIL = "Info@auraaquatics.com";

const HEADERS = [
  "timestamp",
  "community",
  "firstName",
  "lastName",
  "email",
  "phone",
  "eventName",
  "date",
  "startTime",
  "endTime",
  "partySize",
  "kids",
  "adults",
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    const row = [
      new Date(),
      data.community || "",
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.eventName || "",
      data.date || "",
      data.startTime || "",
      data.endTime || "",
      data.partySize || "",
      data.kids || "",
      data.adults || "",
    ];
    sheet.appendRow(row);

    sendNotification(data);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function sendNotification(data) {
  const subject = `New reservation request — ${data.eventName || "Event"} (${data.community || "Community"})`;
  const lines = [
    `Community: ${data.community || ""}`,
    `Name: ${data.firstName || ""} ${data.lastName || ""}`.trim(),
    `Email: ${data.email || ""}`,
    `Phone: ${data.phone || ""}`,
    "",
    `Event: ${data.eventName || ""}`,
    `Date: ${data.date || ""}`,
    `Time: ${data.startTime || ""} – ${data.endTime || ""}`,
    `Party size: ${data.partySize || ""} (Kids: ${data.kids || "0"}, Adults: ${data.adults || "0"})`,
  ];
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: data.email || NOTIFY_EMAIL,
    subject: subject,
    body: lines.join("\n"),
  });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
