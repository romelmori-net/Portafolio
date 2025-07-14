import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/icons";

const skillsData = {
  frontend: [
    { name: "React", level: 95, icon: Icons.react },
    { name: "Next.js", level: 90, icon: Icons.react },
    { name: "TypeScript", level: 85, icon: () => <span className="font-bold">TS</span> },
    { name: "Tailwind CSS", level: 95, icon: () => <span className="font-bold">T</span> },
  ],
  backend: [
    { name: "Node.js", level: 90, icon: Icons.node },
    { name: "Python (Django)", level: 80, icon: Icons.python },
    { name: "Java (Spring)", level: 75, icon: Icons.java },
    { name: "Firebase", level: 85, icon: () => <span className="font-bold">F</span> },
  ],
  devops: [
    { name: "Docker", level: 80, icon: Icons.docker },
    { name: "AWS", level: 70, icon: Icons.aws },
    { name: "GitHub Actions", level: 85, icon: Icons.node },
    { name: "Vercel", level: 95, icon: () => <span className="font-bold">V</span> },
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="bg-secondary py-24 sm:py-32 animate-fade-in-up">
      <div className="container">
        <h2 className="text-center font-headline text-3xl md:text-4xl font-bold">Habilidades Técnicas</h2>
        <p className="text-center mt-4 max-w-2xl mx-auto text-muted-foreground">
          Un vistazo a las tecnologías en las que destaco, desde el front-end hasta el back-end y DevOps.
        </p>
        <Tabs defaultValue="frontend" className="mt-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="devops">DevOps</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillsData.frontend.map((skill) => (
                <Card key={skill.name}>
                  <CardHeader className="items-center pb-4">
                    <skill.icon className="w-12 h-12 mb-2 text-primary" />
                    <CardTitle>{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={skill.level} aria-label={`Nivel en ${skill.name}`} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="backend" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillsData.backend.map((skill) => (
                <Card key={skill.name}>
                  <CardHeader className="items-center pb-4">
                    <skill.icon className="w-12 h-12 mb-2 text-primary" />
                    <CardTitle>{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={skill.level} aria-label={`Nivel en ${skill.name}`} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="devops" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillsData.devops.map((skill) => (
                <Card key={skill.name}>
                  <CardHeader className="items-center pb-4">
                    <skill.icon className="w-12 h-12 mb-2 text-primary" />
                    <CardTitle>{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={skill.level} aria-label={`Nivel en ${skill.name}`} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
