import { SOCIAL_LINKS } from '../../constants/data';
import { useTranslation } from '../../hooks/useTranslation';
import { LanguageToggle } from '../common/LanguageToggle';

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection, onNavigate }) => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t.nav.about, id: 'about' },
    { name: t.nav.experience, id: 'experience' },
    { name: t.nav.projects, id: 'projects' },
    { name: t.nav.skills, id: 'skills' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
        >
          Ali İlan<span className="text-blue-500"></span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium items-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`hover:text-blue-400 transition-colors ${
                activeSection === link.id ? 'text-blue-400' : 'text-slate-400'
              }`}
            >
              {link.name}
            </button>
          ))}
          <LanguageToggle />
        </div>
        <a
          href={SOCIAL_LINKS.email}
          className="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20"
        >
          {t.nav.contactMe}
        </a>
      </div>
    </nav>
  );
};
