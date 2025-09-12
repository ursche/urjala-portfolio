import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import professionalPortrait from "@/assets/urjala.jpeg";

const ProfessionalAbout = () => {
  const technologies = [
    "React",
    "JavaScript",
    "Node.js",
    "PHP",
    "Laravel",
    "MySQL",
    "Tailwind CSS",
  ];

  const achievements = [
    {
      year: "2025",
      title: "President @ Nagarjuna ICT Club",
      description: "Led the club to organize IT events.",
    },
    {
      year: "2024",
      title: "General Secretary @ Nagarjuna ICT Club",
      description: "Strengthened club governance and operational efficiency",
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={professionalPortrait}
                alt="Urjala Pariyar - Professional Photo"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">6+</div>
                <div className="text-sm">Years</div>
              </div>
            </div>
            <div className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <p className="text-accent font-semibold uppercase tracking-wide mb-4">
                About Me
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Crafting Digital
                <span className="gradient-text"> Experiences</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Urjala Pariyar, a passionate Laravel developer
                  based in Nepal. I specialize in creating modern, scalable web
                  applications that deliver exceptional user experiences.
                </p>
                <p>
                  I've worked with startups and established companies to bring
                  innovative ideas to life. My expertise spans from backend
                  frameworks to cloud infrastructure.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new
                  technologies, traveling, or sharing knowledge with the
                  developer community.
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Technologies I Love
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <Card
                    key={index}
                    className="p-4 border-l-4 border-l-accent bg-background hover-lift"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {achievement.year}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {achievement.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalAbout;
