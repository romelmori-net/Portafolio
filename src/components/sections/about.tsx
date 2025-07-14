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
    <section id="about" className="container py-24 sm:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full max-w-md mx-auto">
          <Image
            src="https://placehold.co/600x600.png"
            alt="About me"
            width={600}
            height={600}
            className="rounded-xl shadow-lg"
            data-ai-hint="person coding"
          />
        </div>
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-muted-foreground">
            A passionate and results-driven System Engineer with a decade of experience in designing, developing, and deploying high-quality software solutions. My journey in tech has been fueled by a relentless curiosity and a drive to solve complex problems with elegant and efficient code.
          </p>
          <div className="mt-8 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-primary">My Mission</h3>
              <p className="text-muted-foreground">To leverage technology to build products that not only meet business goals but also provide a seamless and enjoyable user experience.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary">My Vision</h3>
              <p className="text-muted-foreground">To be at the forefront of innovation, continuously learning and adapting to new technologies to create a better, more connected digital world.</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-primary mb-4">Technologies I Handle</h3>
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
