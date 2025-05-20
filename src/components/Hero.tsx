import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef } from 'react';
import laptopImg from '../assets/img/laptop.webp';
import backImg from '../assets/img/Boniface.webp';

const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const frontImageRef = useRef<HTMLImageElement>(null);
  const backImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !frontImageRef.current || !backImageRef.current) return;
      // Get the current scroll position and viewport height
      // Get the top position of the element relative to the viewport
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementTop = containerRef.current.getBoundingClientRect().top + scrollTop;
      const elementHeight = containerRef.current.offsetHeight;

      // Calculate the scroll progress of the element in viewport (0 to 1)
      const progress = Math.min(Math.max((scrollTop + windowHeight - elementTop) / (windowHeight + elementHeight), 0), 1);

      // Parallax effect values
      const frontTranslateY = progress * 30; // front image moves down up to 30px
      const backTranslateY = progress * 15;  // back image moves down up to 15px

      // Apply smooth transform with requestAnimationFrame
      frontImageRef.current.style.transform = `translateY(${frontTranslateY}px)`;
      backImageRef.current.style.transform = `translateY(${backTranslateY}px) rotateY(180deg)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial call to set position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <div
            ref={containerRef}
            className="md:w-1/2 mt-12 md:mt-0 h-80"
            style={{
              perspective: '1000px',
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto',
              backgroundColor: 'transparent',
              borderRadius: '20px',
              boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              height: '500px',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transformStyle: 'preserve-3d',
              marginTop: '20px',
              marginBottom: '20px',
              marginRight: '20px',
              marginLeft: '20px',
            }}
          >
            <div
              className="flip-card-inner"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transition: 'transform 0.8s',
                transformStyle: 'preserve-3d',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'rotateY(180deg)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = 'rotateY(0deg)';
              }}
            >
              <img
                ref={frontImageRef}
                src={laptopImg}
                loading="lazy"
                decoding="async"
                alt="Laptop with code"
                className="rounded-lg shadow-2xl w-full h-auto"
                style={{
                  backfaceVisibility: 'hidden',
                  position: 'absolute',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  top: -15,
                  left: 0,
                  transition: 'transform 0.3s ease-out',
                  willChange: 'transform',
                }}
              />
              <img
                ref={backImageRef}
                src={backImg}
                loading="lazy"
                decoding="async"
                alt="Boniface"
                className="rounded-lg shadow-2xl w-full h-auto padding-14"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                  position: 'absolute',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  top: -8,
                  left: 0,
                  transition: 'transform 0.3s ease-out',
                  willChange: 'transform',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
