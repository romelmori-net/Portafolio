import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "30+", label: "Projects completed" },
  { value: "5+", label: "Technologies mastered" },
  { value: "100+", label: "Happy clients" },
];

export default function Stats() {
  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary font-headline">{stat.value}</p>
              <p className="mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
