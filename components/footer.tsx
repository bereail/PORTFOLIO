import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="mx-auto max-w-4xl px-6 py-10 text-center md:text-left"
    >
      {/* Encabezado del footer */}
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <h4
          className="text-3xl font-extrabold tracking-tight text-primary md:text-4xl"
          aria-label="Marca personal BEREAIL"
        >
          PORTFOLIO
        </h4>

        {/* Navegación */}
        <nav aria-label="Navegación del sitio">
          <ul className="flex flex-wrap justify-center gap-4 text-sm md:gap-8 md:text-base">
            <li>
              <Link
                href="#about-me"
                className="transition hover:text-primary hover:underline"
              >
                Sobre mí
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="transition hover:text-primary hover:underline"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="transition hover:text-primary hover:underline"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="transition hover:text-primary hover:underline"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="transition hover:text-primary hover:underline"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Separador visual */}
      <Separator className="my-6 opacity-70 dark:opacity-50" />

      {/* Créditos */}
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} | Landing Page creada por{" "}
        <span className="font-medium text-primary">AILonline</span>
      </p>
    </footer>
  );
};

export default Footer;