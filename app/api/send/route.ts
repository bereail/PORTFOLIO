import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

// Evita que Next intente prerender / instanciar el módulo en build
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({
  username: z.string().trim().min(2).max(50),
  email: z.string().trim().email().max(100),
  message: z.string().trim().min(10).max(2000),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { username, email, message } = schema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      // No clave en entorno => error de servidor (pero NO truena el build)
      return NextResponse.json(
        { error: "Falta RESEND_API_KEY en el servidor." },
        { status: 500 }
      );
    }

    // Instanciar DENTRO del handler (no en top-level)
    const resend = new Resend(apiKey);

    const to = process.env.MAIL_TO ?? "tu@correo.com";
    const from = process.env.MAIL_FROM ?? "Portfolio <onboarding@resend.dev>";

await resend.emails.send({
  from,
  to,
  subject: `Nuevo mensaje de ${username}`,
  replyTo: email, // ← aquí el fix
  text: `De: ${username} <${email}>\n\n${message}`,
});

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: "No se pudo enviar el correo" }, { status: 500 });
  }
}
