import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Palette } from "lucide-react";
import { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Palette className="w-6 h-6 mb-4" />,
    skills: ["React", "Vue.js", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 mb-4" />,
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
  },
  {
    title: "DevOps",
    icon: <Globe className="w-6 h-6 mb-4" />,
    skills: ["Docker", "AWS", "CI/CD", "Linux"]
  },
  {
    title: "Languages",
    icon: <Code2 className="w-6 h-6 mb-4" />,
    skills: ["JavaScript", "TypeScript", "Python", "SQL"]
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.skill-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-secondary/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gradient">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="skill-card border-gradient transition-all duration-500"
              style={{ 
                opacity: 0,
                transform: 'translateY(20px)',
                transition: 'all 0.5s ease-out'
              }}
            >
              <CardContent className="pt-6">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gradient">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;