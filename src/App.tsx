import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { BackgroundGradient } from './components/layout/BackgroundGradient';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { useActiveSection } from './hooks/useActiveSection';


export default function App() {
  const { activeSection, scrollToSection } = useActiveSection('home');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
        <BackgroundGradient />
        <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

        <main className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}