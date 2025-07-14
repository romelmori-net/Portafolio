import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cloud, ShieldCheck, LifeBuoy, Search } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const servicesData: Service[] = [
  {
    title: "Desarrollo Full Stack",
    description: "Construcción de aplicaciones web responsivas y escalables, desde el front-end hasta el back-end.",
    icon: Code,
  },
  {
    title: "Consultoría TI",
    description: "Asesoramiento experto para ayudarte a tomar las decisiones tecnológicas correctas.",
    icon: Search,
  },
  {
    title: "Infraestructura en la Nube",
    description: "Diseño y gestión de soluciones robustas en la nube en plataformas como AWS y Firebase.",
    icon: Cloud,
  },
  {
    title: "Seguridad y Pruebas",
    description: "Asegurando que tus aplicaciones sean seguras, fiables y de alto rendimiento a través de pruebas rigurosas.",
    icon: ShieldCheck,
  },
  {
    title: "Mantenimiento de Sistemas",
    description: "Soporte y mantenimiento continuo para que tus sistemas funcionen sin problemas.",
    icon: LifeBuoy,
  },
];

export default function Services() {
  return (
    <section id="services" className="container py-24 sm:py-32 animate-fade-in-up">
      <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Servicios que Ofrezco</h2>
      <p className="text-center mt-4 max-w-2xl mx-auto text-muted-foreground">
        Desde desarrollo personalizado hasta infraestructura en la nube, así es como puedo ayudarte a tener éxito.
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <Card key={service.title} className="text-center flex flex-col items-center p-6">
            <CardHeader className="p-0">
              <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-headline">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4">
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
