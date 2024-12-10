import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Globe, Palette } from "lucide-react";

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
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="text-center p-6 slide-up">
              <CardContent className="pt-6">
                {category.icon}
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground">
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