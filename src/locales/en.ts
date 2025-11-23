import type { Translation } from '../types';

export const en: Translation = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contactMe: 'Contact Me',
  },
  hero: {
    availableBadge: 'Open to opportunities',
    title: 'Building intelligent',
    titleHighlight: 'web solutions.',
    description:
      "I'm Ali, a Senior Computer Science student and Full-Stack Developer specialized in AI. I build scalable microservices, intuitive frontends, and intelligent systems using .NET Core, Java Spring and React.",
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
  },
  about: {
    title: 'About Me',
    paragraph1:
      'I am a Senior Computer Science student at Özyeğin University with a specialized focus on Artificial Intelligence, maintaining a 3.78/4.00 CGPA.',
    paragraph2:
      'Currently, I work as a Full-Stack Developer, bridging the gap between complex backend architectures and responsive user interfaces. My journey involves everything from optimizing microservices in .NET to building modern React frontends.',
    paragraph3:
      "When I'm not coding, you can find me on the football field with the Salzburg Club or participating in the Business and Economics Club activities.",
    education: 'Education',
    university: 'Özyeğin University',
    degree: 'B.Sc. in Computer Science',
    specialization: 'Specialization in AI',
    cgpa: 'CGPA: 3.78/4.00',
    honors: 'Honors: Full Scholarship (Top 2000 Nationally), High Honor Student',
    date: 'Sep 2021 - Present',
  },
  experience: {
    title: 'Experience',
    partTime: 'Part-Time',
    internship: 'Internship',
    academic: 'Academic',
    experiences: [
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
        date: 'July 2025 - present',
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
    ],
  },
  projects: {
    title: 'Featured Projects',
    viewOnGithub: 'View on GitHub',
    items: [
      {
        title: 'Spring Course Project',
        tech: ['Java', 'Spring Boot', 'REST API'],
        description:
          'A comprehensive backend project demonstrating core development principles using the Spring framework. Implemented a car renting API with robust data handling.',
      },
      {
        title: 'VeloCar-React',
        tech: ['React', 'Web Dev', 'Collaboration'],
        description:
          'Collaborative group project developed for the Web Programming elective course. Features a modern frontend interface for vehicle management.',
      },
      {
        title: 'QR Code Scanner App',
        tech: ['ASP.NET Core', 'Webcam API', 'Database'],
        description:
          'Web application capable of scanning QR codes via webcam to automatically record receipt data like dates and expenditure amounts into a persistent database.',
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: {
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      databases: 'Databases & Tools',
    },
  },
  footer: {
    copyright: 'Ali İlan. Built with React & Tailwind.',
  },
};
