import { Code2, Palette, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useEffect, useRef, useState } from 'react';
const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    const currentRef = aboutRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('aboutSection.title')}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code2 className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('aboutSection.frontend.title')}</h3>
            <p className="text-gray-600 description-font">
              {t('aboutSection.frontend.description')}
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <Palette className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('aboutSection.uiux.title')}</h3>
            <p className="text-gray-600 description-font">
              {t('aboutSection.uiux.description')}
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <Globe className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('aboutSection.responsive.title')}</h3>
            <p className="text-gray-600 description-font">
              {t('aboutSection.responsive.description')}
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">{t('aboutSection.journey.title')}</h3>
          <p className="text-gray-600 leading-relaxed description-font">
            {t('aboutSection.journey.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
