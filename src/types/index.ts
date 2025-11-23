import type { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'tr';

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

export interface Translation {
  nav: {
    about: string;
    experience: string;
    projects: string;
    skills: string;
    contactMe: string;
  };
  hero: {
    availableBadge: string;
    title: string;
    titleHighlight: string;
    description: string;
    github: string;
    linkedin: string;
    email: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    education: string;
    university: string;
    degree: string;
    specialization: string;
    cgpa: string;
    honors: string;
    date: string;
  };
  experience: {
    title: string;
    partTime: string;
    internship: string;
    academic: string;
    experiences: ExperienceCardProps[];
  };
  projects: {
    title: string;
    viewOnGithub: string;
    items: ProjectCardProps[];
  };
  skills: {
    title: string;
    categories: {
      languages: string;
      frameworks: string;
      databases: string;
    };
  };
  footer: {
    copyright: string;
  };
}
