import Link from "next/link";
import { Mail, Paperclip } from "lucide-react";
import { buttonVariants } from "@/components/ui/button"; // ajustá el path si hace falta
import Container from "./shared/container";

const Introduction = () => {
  return (
<Container>
  <section
    id="home"
    className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 py-10"
  >
    <div className="text-center md:text-left">
      <h3 className="text-xl mb-2">Hola, soy</h3>
      <h1 className="text-4xl font-bold mb-2">Berenice Solohaga</h1>
      <h2 className="text-2xl text-muted-foreground mb-6">
        Fullstack Developer
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <Link href="#contact" className={buttonVariants()}>
          <Mail className="mr-2 h-4 w-4" />
          Contacta conmigo
        </Link>

        <Link
          className={buttonVariants({ variant: "secondary" })}
          href="/cv-berenice.pdf"
          target="_blank"
        >
          <Paperclip className="mr-2 h-4 w-4" />
          Descargar CV
        </Link>
      </div>
    </div>

   
  </section>
</Container>

  );
};

export default Introduction;
 /*<Image
      src="/profile.png"
      alt="Foto de perfil"
      width={400}
      height={400}
      className="rounded-full shadow-lg object-cover"
      priority
    />*/