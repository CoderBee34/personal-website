import { useState } from 'react';

export const useActiveSection = (initialSection = 'home') => {
  const [activeSection, setActiveSection] = useState(initialSection);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return {
    activeSection,
    setActiveSection,
    scrollToSection,
  };
};
