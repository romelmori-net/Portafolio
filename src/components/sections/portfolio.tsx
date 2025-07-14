import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A full-stack web application for managing tasks and collaborating with teams. Features real-time updates and a modern UI.",
    image: "https://placehold.co/600x400.png",
    technologies: ["Next.js", "Firebase", "Tailwind CSS"],
    demoUrl: "#",
    repoUrl: "#",
    aiHint: "dashboard analytics"
  },
  {
    title: "Project Beta",
    description: "An e-commerce platform with a custom CMS, payment gateway integration, and advanced filtering options.",
    image: "https://placehold.co/600x400.png",
    technologies: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    repoUrl: "#",
    aiHint: "online store"
  },
  {
    title: "Project Gamma",
    description: "A cloud-native data processing pipeline on AWS, designed for scalability and high-throughput.",
    image: "https://placehold.co/600x400.png",
    technologies: ["Python", "AWS Lambda", "Docker"],
    demoUrl: "#",
    repoUrl: "#",
    aiHint: "server architecture"
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-secondary py-24 sm:py-32">
      <div className="container">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Portfolio</h2>
        <p className="text-center mt-4 max-w-2xl mx-auto text-muted-foreground">
          A selection of projects that showcase my skills and passion for development.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <div className="flex flex-col flex-1 p-6">
                <CardTitle className="font-headline">{project.title}</CardTitle>
                <CardContent className="p-0 mt-4 flex-1">
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <CardFooter className="p-0 mt-6">
                  <div className="flex w-full justify-between">
                    <Button asChild variant="ghost">
                      <Link href={project.repoUrl}>Repo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild>
                      <Link href={project.demoUrl}>Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
