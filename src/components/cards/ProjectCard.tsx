import { Code, ExternalLink, Github } from 'lucide-react';
import type { ProjectCardProps } from '../../types';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tech,
  description,
  link,
  github,
}) => (
  <div className="group relative bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
    <div className="flex justify-between items-start mb-4">
      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
        <Code size={24} />
      </div>
      <div className="flex gap-2">
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        )}
        {github && (
          <a
            href={`https://${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
        )}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">{description}</p>
    <div className="flex flex-wrap gap-2 mt-auto">
      {tech.map((t, i) => (
        <span key={i} className="text-xs font-mono text-slate-300 bg-slate-900/50 px-2 py-1 rounded">
          {t}
        </span>
      ))}
    </div>
  </div>
);
