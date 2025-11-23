import { Cpu } from 'lucide-react';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { SkillTag } from '../common/SkillTag';
import { SKILL_CATEGORIES } from '../../constants/data';

const getColorClass = (color: string) => {
  const colors: Record<string, string> = {
    purple: 'text-purple-400',
    green: 'text-green-400',
    orange: 'text-orange-400',
  };
  return colors[color] || 'text-blue-400';
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Cpu className="text-blue-500" />
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Icon size={18} className={getColorClass(category.color)} /> {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </section>
  );
};
