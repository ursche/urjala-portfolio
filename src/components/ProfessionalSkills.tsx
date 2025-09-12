import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Users,
} from "lucide-react";

const ProfessionalSkills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React js", level: 80 },
        { name: "TypeScript", level: 60 },
        { name: "Tailwind CSS", level: 70 },
        // { name: "Vue.js", level: 75 },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92 },
        { name: "Laravel", level: 85 },
        { name: "MySQL", level: 88 },
        // { name: "GraphQL", level: 80 },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 82 },
        // { name: "Flutter", level: 75 },
        // { name: "PWA", level: 88 },
        { name: "Expo", level: 80 },
      ],
    },

    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Project Management", level: 88 },
        { name: "Problem Solving", level: 95 },
        { name: "Communication", level: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-wide mb-4">
            Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What I Bring to the
            <span className="gradient-text"> Table</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            A comprehensive skill set covering the full spectrum of modern web
            development, from user interface design to scalable backend
            architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-lift bg-surface-elevated border-border-subtle"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-muted" />
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              "React js",
              "Digital Marketing Workshop",
              "UI/UX Design Workshop",
              "Laravel Workshop",
            ].map((cert, index) => (
              <Card
                key={index}
                className="p-4 text-center hover-lift bg-accent/5 border-accent/20"
              >
                <div className="text-sm font-medium text-foreground">
                  {cert}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkills;
