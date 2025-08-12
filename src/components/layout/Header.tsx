import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

export default function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' }
  ];

  const navigation = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('projects'), path: '/projects' },
    { name: t('skills'), path: '/skills' },
    { name: t('contact'), path: '/contact' },
    { name: t('cv.title'), path: '/cv' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close language menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsLangMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Portfolio
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link className='link'
                key={item.name} 
                to={item.path}
              >
                <motion.div
                  className={`px-4 py-2 rounded-md transition-colors ${
                    location.pathname === item.path 
                      ? 'text-primary font-medium' 
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
            <div className="ml-4 flex items-center space-x-2">
              <ThemeToggle />
              <div className="relative" ref={langMenuRef}>
                <button
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  aria-haspopup="true"
                  aria-expanded={isLangMenuOpen}
                >
                  <span className="mr-2">{currentLanguage.flag}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-background border border-muted rounded-md shadow-lg z-50">
                    {languages.map(lang => (
                      <button
                        key={lang.code}
                        className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted"
                        onClick={() => changeLanguage(lang.code)}
                      >
                        <span className="mr-2">{lang.flag}</span> {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </Button>
          </div>
        </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    className={`px-4 py-2 rounded-md transition-colors ${
                      location.pathname === item.path 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'text-muted-foreground hover:bg-muted hover:text-primary'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                {/* Language Button for Mobile */}
                <div className="relative mt-2" ref={langMenuRef}>
                  <button
                    className="flex items-center w-full px-4 py-2 rounded-md text-sm font-medium hover:bg-muted"
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    aria-haspopup="true"
                    aria-expanded={isLangMenuOpen}
                  >
                    <span className="mr-2">{currentLanguage.flag}</span>
                    {currentLanguage.name}
                    <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isLangMenuOpen && (
                    <div className="absolute right-0 mt-2 w-full bg-background border border-muted rounded-md shadow-lg z-50">
                      {languages.map(lang => (
                        <button
                          key={lang.code}
                          className="flex items-center w-full px-4 py-2 text-sm hover:bg-muted"
                          onClick={() => {
                            changeLanguage(lang.code);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <span className="mr-2">{lang.flag}</span> {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
      </div>
    </header>
  );
}
