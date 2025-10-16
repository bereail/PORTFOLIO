import { Phone } from "lucide-react";
import Title from "./shared/tittle";
import { Button } from "./ui/button";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center px-6 md:px-12 py-20 max-w-4xl mx-auto text-center"
    >
      {/* Título */}
      <Title title="Sobre mí" subtitle="Conóceme" />

      {/* Texto principal */}
      <p className="my-8 leading-relaxed text-gray-700 dark:text-gray-300 text-base md:text-lg">
        Soy <strong>Berenice Solohaga</strong>, desarrolladora <strong>Full-Stack</strong> con experiencia en la
        creación de aplicaciones web y móviles utilizando tecnologías como{" "}
        <strong>Django / REST Framework</strong> y <strong>React / Next.js</strong>.
        <br /><br />
        Me especializo en construir soluciones escalables y mantenibles, aplicando
        principios de <strong>arquitectura limpia, SOLID y buenas prácticas</strong>.
        También tengo experiencia en desarrollo móvil con <strong>React Native</strong>,
        integración de APIs, manejo de bases de datos SQL y despliegues con{" "}
        <strong>Nginx</strong> y <strong>Certbot</strong>.
        <br /><br />
        Entre mis proyectos más destacados se encuentran <strong>StatuApp</strong>, una app
        cultural para la ciudad de Rosario que combina datos, mapas y QR, y{" "}
        <strong>ReadMe</strong>, una aplicación para registrar lecturas y anotaciones
        integrando la API de OpenLibrary.
        <br /><br />
        Busco formar parte de un equipo donde pueda seguir aprendiendo, aportar mi
        creatividad y experiencia técnica, y participar en el desarrollo de productos
        que generen un impacto real.
      </p>

      {/* Botón centrado */}
      <Button asChild>
        <a href="#contact" className="flex items-center justify-center">
          <Phone size={20} className="mr-2" />
          Hablamos
        </a>
      </Button>
    </section>
  );
};

export default AboutMe;
