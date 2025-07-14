import Header from '@/components/header';
import Hero from '@/components/sections/hero';
import Stats from '@/components/sections/stats';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
