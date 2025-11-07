import Link from "next/link";
import { Mail, Paperclip } from "lucide-react";
import { buttonVariants } from "@/components/ui/button"; // ajustá el path si hace falta
import Container from "./shared/container";
import Image from "next/image"; // ✅ Import correcto

const Introduction = () => {
  return (
    <Container>
      <section
        id="home"
        role="region"
        aria-labelledby="intro-title"
        className="flex flex-col-reverse items-center justify-center gap-10 py-16 md:flex-row"
      >
        {/* Texto */}
        <div className="text-center md:text-left max-w-2xl">
          <h3 className="mb-2 text-xl text-muted-foreground">Hola, soy</h3>

          {/* Título accesible */}
          <h1
            id="intro-title"
            className="mb-2 text-4xl font-extrabold tracking-tight sm:text-5xl"
          >
            Berenice Solohaga
          </h1>

          <h2 className="mb-6 text-2xl leading-snug text-muted-foreground sm:text-3xl">
            Desarrollo productos digitales con{" "}
            <span className="font-semibold text-foreground">React</span> y{" "}
            <span className="font-semibold text-foreground">Django</span>,
            combinando diseño, datos e inteligencia artificial.
          </h2>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-start justify-center">
            <Link
              href="#contact"
              className={buttonVariants()}
              aria-label="Ir a la sección de contacto"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contacta conmigo
            </Link>

            {/* Para archivos estáticos /public usa <a> con download */}
            <a
              href="/cv-berenice.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "secondary" })}
              aria-label="Abrir o descargar el CV en PDF"
              download
            >
              <Paperclip className="mr-2 h-4 w-4" />
              Descargar CV
            </a>
          </div>

          {/* Badges rápidas opcionales */}
          <ul className="mt-6 flex flex-wrap items-center gap-2 text-sm">
            <li className="rounded-full border px-3 py-1 dark:border-gray-700">
              React / Next.js
            </li>
            <li className="rounded-full border px-3 py-1 dark:border-gray-700">
              Django / DRF
            </li>
            <li className="rounded-full border px-3 py-1 dark:border-gray-700">
              Arquitectura limpia & SOLID
            </li>
            <li className="rounded-full border px-3 py-1 dark:border-gray-700">
              IA aplicada
            </li>
          </ul>
        </div>

        {/* Imagen de perfil (opcional) */}
        <div className="shrink-0">
          <Image
            src="/profile.png" // coloca tu imagen en /public/profile.png
            alt="Foto de perfil de Berenice Solohaga"
            width={380}
            height={380}
            className="h-auto w-[260px] rounded-full object-cover shadow-lg md:w-[320px] xl:w-[380px]"
            priority
          />
        </div>
      </section>
    </Container>
  );
};

export default Introduction;