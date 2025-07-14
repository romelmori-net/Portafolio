import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { value: "10+", label: "Años de experiencia" },
  { value: "30+", label: "Proyectos completados" },
  { value: "5+", label: "Tecnologías dominadas" },
  { value: "100+", label: "Clientes satisfechos" },
];

export default function Stats() {
  return (
    <section className="bg-secondary py-20 animate-fade-in-up">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-background/50 rounded-lg shadow-sm">
              <p className="text-4xl md:text-5xl font-bold text-primary font-headline">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
