import type { ExperienceCardProps } from '../../types';

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  role,
  company,
  location,
  date,
  description,
  type,
}) => (
  <div className="relative pl-8 pb-12 border-l-2 border-slate-700 last:border-0">
    <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 ring-4 ring-slate-900" />
    <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
      <h3 className="text-xl font-bold text-slate-100">{role}</h3>
      <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded mt-1 sm:mt-0 w-fit">
        {date}
      </span>
    </div>
    <div className="mb-4 flex flex-wrap gap-2 text-sm text-slate-400">
      <span className="font-semibold text-blue-400">{company}</span>
      <span>•</span>
      <span>{location}</span>
      {type && (
        <>
          <span>•</span>
          <span className="italic">{type}</span>
        </>
      )}
    </div>
    <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm leading-relaxed marker:text-blue-500">
      {description.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);
