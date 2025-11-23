export function getPersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ali İlan',
    jobTitle: 'Full-Stack Developer',
    url: 'https://aliilan.com',
    sameAs: [
      'https://github.com/CoderBee34',
      'https://www.linkedin.com/in/ali-ilan-a55949220/',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Gelecek Varlık Yönetimi',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Özyeğin University',
    },
    knowsAbout: [
      'React',
      'TypeScript',
      'JavaScript',
      '.NET Core',
      'C#',
      'Java',
      'Spring Boot',
      'SQL Server',
      'Web Development',
      'Full-Stack Development',
    ],
  };
}

export function getWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ali İlan - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in React, .NET Core, and modern web technologies',
    url: 'https://aliilan.com',
  };
}
