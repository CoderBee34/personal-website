import type { SkillTagProps } from '../../types';

export const SkillTag: React.FC<SkillTagProps> = ({ name, icon: Icon }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-colors cursor-default">
    {Icon && <Icon size={14} className="mr-2" />}
    {name}
  </span>
);
