import { Terminal } from 'lucide-react';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { ProjectCard } from '../cards/ProjectCard';
import { PROJECTS } from '../../constants/data';

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Terminal className="text-blue-500" />
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
