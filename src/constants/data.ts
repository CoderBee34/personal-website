import { Code, Server, Database } from 'lucide-react';
import type { NavLink, ExperienceCardProps, ProjectCardProps, SkillCategory } from '../types';

export const NAV_LINKS: NavLink[] = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Skills', id: 'skills' },
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/CoderBee34',
  linkedin: 'https://www.linkedin.com/in/ali-ilan-a55949220/',
  email: 'mailto:ali.ilan@ozu.edu.tr',
} as const;

export const EXPERIENCES: ExperienceCardProps[] = [
  {
    role: 'Part-Time Full-Stack Developer',
    company: 'Gelecek Varlık Yönetimi',
    location: 'Istanbul, Turkey',
    type: 'Part-Time',
    date: 'Oct 2025 - Present',
    description: [
      'Executed various Backend and Frontend development tasks assigned by senior engineers.',
      'Maintained and optimized existing microservices.',
      'Solved various complex Frontend bugs to ensure platform stability.',
    ],
  },
  {
    role: 'Full-Stack Developer Intern',
    company: 'Gelecek Varlık Yönetimi',
    location: 'Istanbul, Turkey',
    type: 'Internship',
    date: 'July 2025 - Feb 2025',
    description: [
      'Developed a Backend microservice using .NET Core (N-Tier architecture) with JWT token authentication and SQL Server.',
      'Built the Frontend using React and TypeScript with modern libraries including Material UI and Tanstack Query.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Presidency Digital Transformation Office',
    location: 'Ankara, Turkey',
    type: 'Internship',
    date: 'July 2024 - Aug 2024',
    description: [
      'Developed an ASP.NET Core web application allowing user registration and data persistence.',
      'Implemented a webcam-based QR code scanner to read and record receipt data (date, expenditure amount) directly into the database.',
    ],
  },
  {
    role: 'Undergraduate Mathematics Assistant',
    company: 'Özyeğin University',
    location: 'Istanbul, Turkey',
    type: 'Academic',
    date: 'July 2023 - Sep 2024',
    description: [
      'Assisted undergraduate students in solving mathematical problems and understanding course concepts.',
    ],
  },
];

export const PROJECTS: ProjectCardProps[] = [
  {
    title: 'Spring Course Project',
    tech: ['Java', 'Spring Boot', 'REST API'],
    description:
      'A comprehensive backend project demonstrating core development principles using the Spring framework. Implemented a car renting API with robust data handling.',
    github: 'github.com/CoderBee34/spring-course-project',
  },
  {
    title: 'VeloCar-React',
    tech: ['React', 'Web Dev', 'Collaboration'],
    description:
      'Collaborative group project developed for the Web Programming elective course. Features a modern frontend interface for vehicle management.',
    github: 'github.com/erendarak/VeloCar-React-',
  },
  {
    title: 'QR Code Scanner App',
    tech: ['ASP.NET Core', 'Webcam API', 'Database'],
    description:
      'Web application capable of scanning QR codes via webcam to automatically record receipt data like dates and expenditure amounts into a persistent database.',
    github: 'github.com/CoderBee34/qr-scanner-app-staj',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code,
    color: 'purple',
    skills: ['Java', 'C++', 'Python', 'C#', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    color: 'green',
    skills: [
      '.NET Core',
      'Spring',
      'React',
      'Material UI',
      'Tanstack Query',
      'NumPy',
      'Pandas',
      'Scikit-Learn',
      'TensorFlow',
    ],
  },
  {
    title: 'Databases & Tools',
    icon: Database,
    color: 'orange',
    skills: ['PostgreSQL', 'SQL Server', 'Git/GitHub', 'MS Office'],
  },
];
