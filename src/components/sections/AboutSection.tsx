import { User } from 'lucide-react';
import { RevealOnScroll } from '../common/RevealOnScroll';
import { useTranslation } from '../../hooks/useTranslation';

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20">
      <RevealOnScroll>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="text-blue-500" />
              {t.about.title}
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
              <p>{t.about.paragraph3}</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full" />
            <div className="relative bg-slate-800/50 border border-slate-700 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">{t.about.education}</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-blue-400">{t.about.university}</span>
                    <span className="text-xs font-mono text-slate-500">{t.about.date}</span>
                  </div>
                  <p className="text-sm text-slate-300">{t.about.degree}</p>
                  <p className="text-xs text-slate-500 mt-1">
                    {t.about.specialization} • {t.about.cgpa}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 italic">{t.about.honors}</p>
                </div>

                <div className="w-full h-px bg-slate-700/50" />

                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-slate-300">Arnavutköy Anatolian HS</span>
                    <span className="text-xs font-mono text-slate-500">2017 - 2021</span>
                  </div>
                  <p className="text-sm text-slate-400">High School Diploma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
