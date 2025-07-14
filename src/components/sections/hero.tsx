import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="container flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-[calc(100vh-56px)] py-16 md:py-24">
      <div className="md:w-1/2 md:pr-12">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
          John Doe
        </h1>
        <p className="text-xl md:text-2xl text-primary font-medium mt-2">
          System Engineer
        </p>
        <p className="mt-4 max-w-xl mx-auto md:mx-0 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Button asChild size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href="#portfolio">Hire Me</Link>
          </Button>
        </div>
        <div className="mt-8 flex justify-center md:justify-start gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="#" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:example@example.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow duration-300">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Profile picture"
              width={400}
              height={400}
              priority
              className="object-cover w-full h-full"
              data-ai-hint="professional portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
