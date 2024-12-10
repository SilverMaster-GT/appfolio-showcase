import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16">
      <div className="fade-in space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Full Stack Developer
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Building beautiful and functional web applications with modern technologies
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={scrollToProjects} size="lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;