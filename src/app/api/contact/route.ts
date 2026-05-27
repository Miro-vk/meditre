import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    // Log minimal info to help debugging in production logs without leaking entire payload
    try {
      // attempt to log identifying fields
      const maybeEmail = payload?.email;
      const maybeName = payload?.fullName;
      const maybeDestination = payload?.destination;
      console.log(`[contact] received request from ${maybeName ?? "(unknown)"} <${maybeEmail ?? "(unknown)"}> destination=${maybeDestination ?? "(unknown)"}`);
    } catch (e) {
      console.log("[contact] received request (could not extract identifying fields)");
    }

    const values = contactFormSchema.parse(payload);

    await sendContactEmail(values);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    // Emit detailed error to logs for debugging (will appear in Vercel logs)
    try {
      if (error instanceof Error) {
        console.error("[contact] error:", error.stack ?? error.message);
      } else {
        console.error("[contact] error (non-error):", error);
      }
    } catch (logErr) {
      console.error("[contact] error logging failed:", logErr);
    }

    const message = error instanceof Error ? error.message : "Invalid request.";
    const status = message.includes("SMTP") || message.includes("CONTACT_TO_EMAIL") || message.includes("CONTACT_FROM_EMAIL") ? 500 : 400;

    return NextResponse.json(
      {
        ok: false,
        error: message,
      },
      { status },
    );
  }
}