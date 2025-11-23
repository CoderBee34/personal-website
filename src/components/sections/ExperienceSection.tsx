import { Briefcase } from 'lucide-react';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { ExperienceCard } from '../cards/ExperienceCard';
import { EXPERIENCES } from '../../constants/data';

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Briefcase className="text-blue-500" />
          Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
