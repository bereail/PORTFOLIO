import { dataPortfolio } from "@/data";
import Title from "./shared/tittle";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

type PortfolioItem = {
  id: string | number;
  title: string;
  description: string;
  image: string;
  urlGithub?: string;
  urlDemo?: string;
  tags?: string[];
};

const Proyectos = () => {
  return (
    <section
      id="portfolio" // ✅ coincide con el Navbar
      role="region"
      aria-labelledby="portfolio-title"
      className="mx-auto max-w-6xl p-6 md:px-12 md:py-24"
    >
      <div id="portfolio-title" className="sr-only">
        Proyectos
      </div>
      <Title title="Proyectos" subtitle="Trabajos recientes 💼" />

      <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {dataPortfolio?.map((item: PortfolioItem) => {
          const hasDemo = !!item.urlDemo && item.urlDemo !== "#";

          return (
            <article
              key={item.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Imagen (clickable si hay demo) */}
              <div className="relative h-48 w-full">
                {hasDemo ? (
                  <Link
                    href={item.urlDemo!}
                    target="_blank"
                    rel="noopener noreferrer"
                    prefetch={false}
                    aria-label={`Abrir demo de ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={`Vista previa del proyecto ${item.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                      priority={false}
                    />
                  </Link>
                ) : (
                  <Image
                    src={item.image}
                    alt={`Vista previa del proyecto ${item.title}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                )}
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col p-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>

                  {/* Tags (opcional) */}
                  {item.tags?.length ? (
                    <ul className="mb-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border px-2.5 py-0.5 text-xs text-foreground dark:border-slate-700"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                {/* Botones */}
                <div className="mt-auto flex gap-3">
                  {item.urlGithub && (
                    <Link
                      href={item.urlGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                      className={buttonVariants({ variant: "outline" })}
                      aria-label={`Ver código en GitHub de ${item.title}`}
                    >
                      GitHub
                    </Link>
                  )}

                  {hasDemo && (
                    <Link
                      href={item.urlDemo!}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                      className={buttonVariants()}
                      aria-label={`Abrir demo en vivo de ${item.title}`}
                    >
                      Live demo
                    </Link>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Proyectos;
