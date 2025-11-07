import { dataContact } from "@/data";
import Title from "./shared/tittle";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section
      id="contact"
      role="region"
      aria-labelledby="contact-title"
      className="mx-auto max-w-5xl p-6 md:px-12 md:py-44"
    >
      {/* Título accesible */}
      <div className="sr-only" id="contact-title">
        Contacta conmigo
      </div>
      <Title title="Contacta conmigo" subtitle="Ponte en contacto conmigo 👋" />

      {/* Intro breve (opcional, ayuda UX/SEO) */}
      <p className="mt-4 text-sm text-muted-foreground">
        Elegí el medio que prefieras o completá el formulario. Te respondo a la
        brevedad.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-7">
        {/* Tarjetas de contacto */}
        <div className="space-y-5">
          {dataContact?.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-center rounded-lg border bg-white p-4 shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-primary dark:border-gray-800 dark:bg-slate-800"
            >
              {/* Icono decorativo */}
              <div aria-hidden className="mb-2 text-2xl">
                {item.icon}
              </div>

              {/* Título y subtítulo */}
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="mt-1 text-sm text-muted-foreground text-center">
                  {item.subtitle}
                </p>
              )}

              {/* Enlace/acción */}
              {item.link && (
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  prefetch={false}
                  className="mt-3 inline-flex items-center rounded-md border px-3 py-1.5 text-sm font-medium text-foreground transition hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`Enviar mensaje por ${item.title}`}
                >
                  Enviar mensaje
                </Link>
              )}
            </article>
          ))}
        </div>

        {/* Formulario */}
        <div className="md:col-span-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;