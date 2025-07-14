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
    title: "Full Stack Development",
    description: "Building responsive and scalable web applications from front-end to back-end.",
    icon: Code,
  },
  {
    title: "IT Consulting",
    description: "Providing expert advice to help you make the right technology decisions.",
    icon: Search,
  },
  {
    title: "Cloud Infrastructure",
    description: "Designing and managing robust cloud solutions on platforms like AWS and Firebase.",
    icon: Cloud,
  },
  {
    title: "Security & Testing",
    description: "Ensuring your applications are secure, reliable, and performant through rigorous testing.",
    icon: ShieldCheck,
  },
  {
    title: "System Maintenance",
    description: "Offering ongoing support and maintenance to keep your systems running smoothly.",
    icon: LifeBuoy,
  },
];

export default function Services() {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Services I Offer</h2>
      <p className="text-center mt-4 max-w-2xl mx-auto text-muted-foreground">
        From custom development to cloud infrastructure, here's how I can help you succeed.
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
