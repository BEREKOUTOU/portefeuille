import { Code2, Palette, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('aboutSection.title')}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <Code2 className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('aboutSection.frontend.title')}</h3>
            <p className="text-gray-600">
              {t('aboutSection.frontend.description')}
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <Palette className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('aboutSection.uiux.title')}</h3>
            <p className="text-gray-600">
              {t('aboutSection.uiux.description')}
            </p>
          </div>
          
          <div className="p-6 bg-gray-50 rounded-lg">
            <Globe className="w-12 h-12 text-gray-900 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{t('aboutSection.responsive.title')}</h3>
            <p className="text-gray-600">
              {t('aboutSection.responsive.description')}
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">{t('aboutSection.journey.title')}</h3>
          <p className="text-gray-600 leading-relaxed">
            {t('aboutSection.journey.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;