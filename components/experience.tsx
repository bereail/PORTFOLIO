import { dataExperience } from "@/data";
import Title from "./shared/tittle";
import { BadgeCheck } from "lucide-react";
import { Progress } from "./ui/progress";

const Experience = () => {
  return (
    <section
      id="experience"
      role="region"
      aria-labelledby="experience-title"
      className="mx-auto max-w-5xl p-6 md:px-12 md:py-44"
    >
      {/* Título accesible */}
      <div className="sr-only" id="experience-title">
        Experiencia y habilidades
      </div>
      <Title title="Experiencia" subtitle="Skills que tengo" />

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {dataExperience?.map((category) => (
          <article
            key={category.id}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-slate-800"
          >
            <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
              {category.title}
            </h3>

            <div className="grid gap-5 sm:grid-cols-2">
              {category.experience.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center gap-2 mb-1 text-sm font-medium text-foreground">
                    <BadgeCheck
                      size={18}
                      className="text-primary flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{skill.name}</span>
                  </div>

                  {skill.subtitle && (
                    <p className="mb-2 text-xs text-muted-foreground">
                      {skill.subtitle}
                    </p>
                  )}

                  <div className="relative w-full">
                    <Progress
                      value={skill.value}
                      className="h-2 w-full bg-gray-200 dark:bg-slate-700"
                    />
                    <span
                      className="absolute right-0 -top-5 text-xs text-muted-foreground"
                      aria-label={`Nivel ${skill.value}%`}
                    >
                      {skill.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;