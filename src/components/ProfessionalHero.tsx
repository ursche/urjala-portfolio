import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import cv from "@/assets/Urjala_Pariyar_CV.pdf";

const ProfessionalHero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-accent text-lg font-medium tracking-wide uppercase">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Hi, I'm <span className="gradient-text">Urjala Pariyar</span>
            </h1>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/80">
              Laravel Developer
            </h2>

            <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating innovative digital solutions that make a
              difference. I transform ideas into beautiful, functional
              applications using cutting-edge technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg group"
              onClick={() =>
                window.open("https://github.com/ursche", "_blank").focus()
              }
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg group"
              onClick={() => window.open(cv, "_blank").focus()}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>

          {/* Floating Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto">
            {[
              { number: "1+", text: "Years Experience" },
              { number: "5+", text: "Projects Completed" },
              { number: "3+", text: "Technologies Mastered" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border p-6 text-center hover-lift rounded-lg shadow-sm"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-foreground/70 font-medium">
                  {stat.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHero;
