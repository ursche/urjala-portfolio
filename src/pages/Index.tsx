import ProfessionalHeader from "@/components/ProfessionalHeader";
import ProfessionalHero from "@/components/ProfessionalHero";
import ProfessionalAbout from "@/components/ProfessionalAbout";
import ProfessionalSkills from "@/components/ProfessionalSkills";
import ProfessionalPortfolio from "@/components/ProfessionalPortfolio";
import ProfessionalContact from "@/components/ProfessionalContact";
import ProfessionalFooter from "@/components/ProfessionalFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ProfessionalHeader />
      <main>
        <ProfessionalHero />
        <ProfessionalAbout />
        <ProfessionalSkills />
        <ProfessionalPortfolio />
        <ProfessionalContact />
      </main>
      <ProfessionalFooter />
    </div>
  );
};

export default Index;
