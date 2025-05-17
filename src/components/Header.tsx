import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../index.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800" onClick={handleNavClick}>BB.</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="link text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={handleNavClick}>{t('about')}</a>
            <a href="#skills" className="link text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={handleNavClick}>{t('skills')}</a>
            <a href="#projects" className="link text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={handleNavClick}>{t('projects')}</a>
            <a href="#contact" className="link text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={handleNavClick}>{t('contact')}</a>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
                <span>{languages.find(lang => lang.code === i18n.language)?.flag}</span>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <div className="relative">
              <button 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#about" className="link text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={handleNavClick}>{t('about')}</a>
              <a href="#skills" className="link text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={handleNavClick}>{t('skills')}</a>
              <a href="#projects" className="link text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={handleNavClick}>{t('projects')}</a>
              <a href="#contact" className="link text-gray-600 hover:text-gray-900 transition-colors duration-300" onClick={handleNavClick}>{t('contact')}</a>
              
              <div className="border-t pt-4">
                <p className="text-sm text-gray-500 mb-2">{t('selectLanguage')}</p>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;