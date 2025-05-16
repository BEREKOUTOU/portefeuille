import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import laptopImg from '../assets/img/laptop.webp';
import backImg from '../assets/img/Boniface.webp';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 animate-oaoFadeIn">
              {t('hero.title')}
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 description-font">
              {t('hero.role')}
            </h2>
            <p className="text-lg text-gray-600 max-w-lg description-font">
              {t('hero.description')}
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                {t('hero.contactButton')}
                <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-all duration-300"
              >
                {t('hero.projectsButton')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 h-80">
              <img
                src={laptopImg}
                loading="lazy"
                decoding="async"
                alt="Laptop with code"
                className="rounded-lg shadow-2xl w-full h-auto"
                
              />
              <img
                src={backImg}
                loading="lazy"
                decoding="async"
                alt="Back of laptop"
                className="rounded-lg shadow-2xl w-full h-auto padding-4"
                
              />
            </div>
          </div>
        </div>
      
    </section>
  );
};
export default Hero;
