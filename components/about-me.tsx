import { Phone } from "lucide-react";
import Title from "./shared/tittle";
import { Button } from "./ui/button";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      role="region"
      aria-labelledby="aboutme-title"
      className="mx-auto max-w-4xl px-6 md:px-12 py-20 text-center"
    >
      {/* Título */}
      <div className="sr-only" id="aboutme-title">Sobre mí</div>
      <Title title="Sobre mí" subtitle="Conóceme" />

      {/* Texto principal */}
      <div className="mx-auto mt-8 max-w-prose text-gray-700 dark:text-gray-300">
        <p className="leading-relaxed text-base md:text-lg">
          Soy <strong>Berenice Solohaga</strong>, <strong>Full-Stack Developer</strong>. 
          Construyo aplicaciones web y móviles con <strong>React / Next.js</strong> y 
          <strong> Django REST Framework</strong>, enfocándome en calidad, rendimiento y 
          experiencia de usuario.
        </p>

        <p className="mt-5 leading-relaxed text-base md:text-lg">
          Aplico <strong>arquitectura limpia</strong>, principios <strong>SOLID</strong> y 
          buenas prácticas para crear soluciones <strong>escalables</strong> y 
          <strong> mantenibles</strong>. Tengo experiencia en <strong>React Native</strong>, 
          integración de APIs, bases de datos SQL y despliegues con <strong>Nginx</strong> 
          y <strong>Certbot</strong>.
        </p>

        <p className="mt-5 leading-relaxed text-base md:text-lg">
          Algunos proyectos destacados: <strong>StatuApp</strong> —app cultural de Rosario 
          con datos, mapas y QR— y <strong>ReadMe</strong> —registro de lecturas y 
          anotaciones integrando OpenLibrary—.
        </p>

        <p className="mt-5 leading-relaxed text-base md:text-lg">
          Busco sumarme a un equipo donde seguir aprendiendo, aportar creatividad y 
          desarrollar productos con <strong>impacto real</strong>.
        </p>
      </div>

      {/* Highlights (badges rápidos) */}
      <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base">
        <li className="rounded-full border px-3 py-1 text-gray-800 dark:text-gray-100 dark:border-gray-700">
          React / Next.js
        </li>
        <li className="rounded-full border px-3 py-1 text-gray-800 dark:text-gray-100 dark:border-gray-700">
          Django / DRF
        </li>
        <li className="rounded-full border px-3 py-1 text-gray-800 dark:text-gray-100 dark:border-gray-700">
          Arquitectura limpia & SOLID
        </li>
        <li className="rounded-full border px-3 py-1 text-gray-800 dark:text-gray-100 dark:border-gray-700">
          APIs & SQL
        </li>
        <li className="rounded-full border px-3 py-1 text-gray-800 dark:text-gray-100 dark:border-gray-700">
          Deploy con Nginx / Certbot
        </li>
      </ul>

      {/* Botón centrado */}
      <div className="mt-10">
        <Button asChild className="text-base md:text-lg">
          <a href="#contact" className="inline-flex items-center" aria-label="Ir a la sección de contacto">
            <Phone size={20} className="mr-2" />
            Hablemos
          </a>
        </Button>
      </div>
    </section>
  );
};

export default AboutMe;