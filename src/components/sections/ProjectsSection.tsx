import { Terminal } from 'lucide-react';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { ProjectCard } from '../cards/ProjectCard';
import { useTranslation } from '../../hooks/useTranslation';

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Terminal className="text-blue-500" />
          {t.projects.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.projects.items.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
