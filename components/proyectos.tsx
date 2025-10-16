import { dataPortfolio } from "@/data";
import Title from "./shared/tittle";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Proyectos = () => {
  return (
    <section
      id="proyectos"
      className="p-6 md:px-12 md:py-24 max-w-6xl mx-auto"
    >
      <Title title="Proyectos" subtitle="Trabajos recientes 💼" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
        {dataPortfolio.map((data) => (
          <div
            key={data.id}
            className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            {/* Imagen */}
            <div className="w-full h-[180px] overflow-hidden rounded-t-2xl">
              <Image
                src={data.image}
                alt={data.title}
                width={400}
                height={250}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Contenido */}
            <div className="flex flex-col justify-between p-4 flex-grow">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">
                  {data.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {data.description}
                </p>
              </div>

              {/* Botones */}
              <div className="flex gap-3 mt-auto">
                <Link
                  href={data.urlGithub}
                  target="_blank"
                  className={buttonVariants({ variant: "outline" })}
                >
                  GitHub
                </Link>

                {data.urlDemo && data.urlDemo !== "#" && (
                  <Link
                    href={data.urlDemo}
                    target="_blank"
                    className={buttonVariants()}
                  >
                    Live demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
