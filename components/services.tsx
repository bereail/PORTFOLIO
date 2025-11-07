import { dataServices } from "@/data";
import Title from "./shared/tittle";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <section
      id="services"
      role="region"
      aria-labelledby="services-title"
      className="mx-auto max-w-5xl p-6 md:px-12 md:py-24"
    >
      {/* Título accesible */}
      <div id="services-title" className="sr-only">
        Servicios que ofrezco
      </div>
      <Title title="Servicios" subtitle="Lo que ofrezco 💼" />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {dataServices?.map((service) => (
          <article
            key={service.id}
            className="
              flex flex-col rounded-xl border-2 border-slate-300 p-6 shadow-sm 
              transition duration-300 hover:shadow-md hover:border-primary/60 
              dark:border-slate-700 dark:bg-slate-800 dark:hover:border-primary/40
            "
          >
            {/* Encabezado */}
            <h4 className="mb-4 flex items-center gap-2 text-xl font-semibold text-foreground">
              <span className="text-primary">{service.icon}</span>
              {service.title}
            </h4>

            {/* Lista de características */}
            <ul className="space-y-3 text-sm text-muted-foreground">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 leading-relaxed"
                >
                  <Check
                    size={18}
                    className="mt-0.5 flex-shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;