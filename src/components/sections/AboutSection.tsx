import { User } from 'lucide-react';
import { RevealOnScroll } from '../common/RevealOnScroll';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <RevealOnScroll>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="text-blue-500" />
              About Me
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I am a Senior Computer Science student at Özyeğin University with a specialized
                focus on Artificial Intelligence, maintaining a 3.78/4.00 CGPA.
              </p>
              <p>
                Currently, I work as a Full-Stack Developer, bridging the gap between complex
                backend architectures and responsive user interfaces. My journey involves
                everything from optimizing microservices in .NET to building modern React
                frontends.
              </p>
              <p>
                When I'm not coding, you can find me on the football field with the Salzburg Club
                or participating in the Business and Economics Club activities.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 rounded-full" />
            <div className="relative bg-slate-800/50 border border-slate-700 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-bold text-blue-400">Özyeğin University</span>
                    <span className="text-xs font-mono text-slate-500">Sep 2021 - Present</span>
                  </div>
                  <p className="text-sm text-slate-300">B.Sc. in Computer Science</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Specialization in AI • CGPA: 3.78/4.00
                  </p>
                  <p className="text-xs text-slate-400 mt-2 italic">
                    Honors: Full Scholarship (Top 2000 Nationally), High Honor Student
                  </p>
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
