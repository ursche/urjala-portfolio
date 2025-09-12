import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import workspaceImage from "@/assets/workspace.jpg";

const ProfessionalPortfolio = () => {
  const projects = [
    {
      title: "HamroMechanics",
      description:
        "Real-time service booking platform with React Native and Django REST Framework. Features include user authentication, location tracking, role-based access for customers and mechanics, and booking management.",
      image: workspaceImage,
      technologies: ["React Native", "PostgreSQL", "Expo", "Django"],
      liveUrl: "#",
      githubUrl: "https://github.com/ursche/HamroMechanics",
      featured: true,
    },
    {
      title: "National Budget Allocation System",
      description:
        "National budget allocation system built with the MERN stack. Features include ministry-wise, provincial, and local government allocations, role-based dashboards, and interactive data visualization for transparency",
      image: workspaceImage,
      technologies: ["Node", "React", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "https://github.com/b0tish/E-GovApp",
      featured: true,
    },
    {
      title: "Ecommerce Application",
      description:
        "Full-stack eCommerce platform built with the MERN stack. Features include product catalog, secure user authentication, shopping cart, checkout with payment integration, and order management dashboard.",
      image: workspaceImage,
      technologies: ["Node", "React", "MongoDB", "Express"],
      liveUrl: "#",
      githubUrl: "https://github.com/PaceDE/mr-jucify",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="portfolio" className="py-24 bg-surface-elevated">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-wide mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured
            <span className="gradient-text"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack
            development, modern frameworks, and user-centered design.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {featuredProjects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-lift bg-background border-border-subtle"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div
                  className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                >
                  <div className="mb-4">
                    <Badge className="bg-accent/10 text-accent border-accent/20 mb-3">
                      Featured Project
                    </Badge>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-3 py-1 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {/*<Button
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>*/}
                    <Button
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      variant="outline"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        {/*<div>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-lift bg-background border-border-subtle"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-2 py-1 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="px-2 py-1 text-xs"
                        >
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button  size="sm" variant="outline" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default ProfessionalPortfolio;
