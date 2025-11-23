import type { LucideIcon } from 'lucide-react';

export interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

export interface SkillTagProps {
  name: string;
  icon?: LucideIcon;
}

export interface ExperienceCardProps {
  role: string;
  company: string;
  location: string;
  date: string;
  description: string[];
  type?: string;
}

export interface ProjectCardProps {
  title: string;
  tech: string[];
  description: string;
  link?: string;
  github?: string;
}

export interface NavLink {
  name: string;
  id: string;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
}
