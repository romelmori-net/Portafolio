import Image from "next/image";
import { Icons } from "@/components/icons";

const technologies = [
  { name: 'React', icon: Icons.react },
  { name: 'Node.js', icon: Icons.node },
  { name: 'Java', icon: Icons.java },
  { name: 'Python', icon: Icons.python },
  { name: 'AWS', icon: Icons.aws },
  { name: 'Docker', icon: Icons.docker },
];

export default function About() {
  return (
    <section id="about" className="container py-24 sm:py-32 animate-fade-in-up">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Sobre Mí"
            width={600}
            height={600}
            className="rounded-xl shadow-lg"
            data-ai-hint="person coding"
          />
        </div>
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Sobre Mí</h2>
          <p className="mt-4 text-muted-foreground">
            Un Ingeniero de Sistemas apasionado y orientado a resultados con una década de experiencia en el diseño, desarrollo e implementación de soluciones de software de alta calidad. Mi viaje en la tecnología ha sido impulsado por una curiosidad incesante y el deseo de resolver problemas complejos con código elegante y eficiente.
          </p>
          <div className="mt-8 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-primary">Mi Misión</h3>
              <p className="text-muted-foreground">Aprovechar la tecnología para construir productos que no solo cumplan los objetivos de negocio, sino que también ofrezcan una experiencia de usuario fluida y agradable.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">Mi Visión</h3>
              <p className="text-muted-foreground">Estar a la vanguardia de la innovación, aprendiendo y adaptándome continuamente a las nuevas tecnologías para crear un mundo digital mejor y más conectado.</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-primary mb-4">Tecnologías que Manejo</h3>
            <div className="flex flex-wrap gap-4">
              {technologies.map(tech => (
                <div key={tech.name} className="flex items-center gap-2 p-2 bg-secondary rounded-md">
                  <tech.icon className="h-6 w-6 text-muted-foreground" />
                  <span className="font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
