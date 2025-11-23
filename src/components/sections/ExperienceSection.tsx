import { Briefcase } from 'lucide-react';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { ExperienceCard } from '../cards/ExperienceCard';
import { useTranslation } from '../../hooks/useTranslation';

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Briefcase className="text-blue-500" />
          {t.experience.title}
        </h2>
        <div className="max-w-3xl mx-auto">
          {t.experience.experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};
