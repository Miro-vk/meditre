import nodemailer from "nodemailer";

import type { ContactFormValues } from "@/lib/validation";

const htmlEscapeMap: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => htmlEscapeMap[character] ?? character);
}

function prettyLabel(value: string) {
  return value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function buildContactMessage(values: ContactFormValues) {
  const lines = [
    `Full Name: ${values.fullName}`,
    `Email: ${values.email}`,
    `Destination: ${prettyLabel(values.destination)}`,
    `Preferred Travel Dates: ${values.travelDates}`,
    `Travelers: ${prettyLabel(values.travelers)}`,
    `Experience: ${prettyLabel(values.experience)}`,
    `Budget: ${prettyLabel(values.budget)}`,
    "",
    "Message:",
    values.message,
  ];

  return lines.join("\n");
}

function buildContactHtml(values: ContactFormValues) {
  const items = [
    ["Full Name", values.fullName],
    ["Email", values.email],
    ["Destination", prettyLabel(values.destination)],
    ["Preferred Travel Dates", values.travelDates],
    ["Travelers", prettyLabel(values.travelers)],
    ["Experience", prettyLabel(values.experience)],
    ["Budget", prettyLabel(values.budget)],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:8px 0;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#1f2937;line-height:1.6;">
      <h2 style="margin:0 0 16px;font-size:20px;">New contact request</h2>
      <table style="border-collapse:collapse;margin-bottom:18px;">${items}</table>
      <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb;">
        <div style="font-weight:600;margin-bottom:8px;">Message</div>
        <div style="white-space:pre-wrap;">${escapeHtml(values.message)}</div>
      </div>
    </div>
  `;
}

function getMailer() {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
    throw new Error("SMTP configuration is missing.");
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: Number(smtpPort),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
}

export async function sendContactEmail(values: ContactFormValues) {
  const envRecipient = process.env.CONTACT_TO_EMAIL;
  const recipient = envRecipient ?? "info@meditretravel.com";
  const sender = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER;

  if (!sender) {
    throw new Error("CONTACT_FROM_EMAIL or SMTP_USER is required.");
  }

  if (process.env.NODE_ENV === "production" && !envRecipient) {
    throw new Error("CONTACT_TO_EMAIL must be set in production.");
  }

  const transporter = getMailer();

  await transporter.sendMail({
    from: sender,
    to: recipient,
    replyTo: values.email,
    subject: `New travel inquiry from ${values.fullName}`,
    text: buildContactMessage(values),
    html: buildContactHtml(values),
  });
}