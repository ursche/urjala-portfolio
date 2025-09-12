import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

const ProfessionalContact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "urjalaa@gmail.com",
      href: "mailto:urjalaa@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977-9848856927",
      href: "tel:+9779848856927",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dhapakhel, Lalitpur, Nepal",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/urjala-pariyar-97694027a/",
      color: "hover:text-blue-600",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/ursche/",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    // {
    //   icon: Twitter,
    //   name: "Twitter",
    //   href: "#",
    //   color: "hover:text-blue-400",
    // },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold uppercase tracking-wide mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's Work
            <span className="gradient-text"> Together</span>
          </h2>
          <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life with cutting-edge technology and
            exceptional design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-surface-elevated border-border-subtle">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send me a message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input
                    placeholder="John"
                    className="bg-background border-border-subtle"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input
                    placeholder="Doe"
                    className="bg-background border-border-subtle"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background border-border-subtle"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input
                  placeholder="Project Inquiry"
                  className="bg-background border-border-subtle"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background border-border-subtle resize-none"
                />
              </div>

              <Button
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3"
                size="lg"
                disabled
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card
                      key={index}
                      className="p-4 bg-surface-elevated border-border-subtle hover-lift"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-accent/10 rounded-lg">
                          <IconComponent className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <div className="font-medium text-foreground">
                            {info.title}
                          </div>
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-surface-elevated border border-border-subtle rounded-lg hover-lift transition-colors ${social.color}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="p-6 bg-accent/5 border-accent/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-foreground">
                  Available for Work
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently available for freelance projects and full-time
                opportunities. Let's discuss how I can help bring your vision to
                life.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalContact;
