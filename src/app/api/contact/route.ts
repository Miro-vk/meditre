import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/email";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const values = contactFormSchema.parse(payload);

    await sendContactEmail(values);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
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