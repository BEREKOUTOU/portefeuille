import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import kasaImg from '../assets/img/kasa.webp';
import argentBankImg from '../assets/img/argentBank.webp';
import bonifacesImg from '../assets/img/Ohmyfood.webp';

import { useEffect, useRef, useState } from 'react';
const Projects = () => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: t('projectsSection.projects.immobilier.title'),
      description: t('projectsSection.projects.immobilier.description'),
      image: kasaImg,
      technologies: ["React", "webpack", "Sass", "Reponsive design"],
      githubLink: "https://github.com/BEREKOUTOU/Kasa__Fr",
      liveLink: "https://kasa-fr-git-main-berekoutous-projects.vercel.app",
    },
    {
      title: t('projectsSection.projects.bank.title'),
      description: t('projectsSection.projects.bank.description'),
      image: argentBankImg,
      technologies: ["React", "Vite", "Css", "Redux", "Reponsive design"],
      githubLink: "https://github.com/BEREKOUTOU/ArgentBank",
      liveLink: "https://berekoutou.github.io/ArgentBank/",
    },
    {
      title: t('projectsSection.projects.restaurant.title'),
      description: t('projectsSection.projects.restaurant.description'),
      image: bonifacesImg,
      technologies: ["HTML", "Sass", "animations CSS", "responsive design"],
      githubLink: "https://github.com/BEREKOUTOU/Ohmyfood",
      liveLink: "https://berekoutou.github.io/Ohmyfood/",
    }
  ];

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    const currentRef = projectsRef.current;
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 bg-white"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projectsSection.title')}</h2>
        <p className="text-gray-600 leading-relaxed text-center description-font pb-8">{t('projectsSection.details')}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-50 rounded-lg overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full object-cover "
                loading="lazy"
                decoding="async"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 description-font">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink}
                    className="flex items-center text-gray-600 px-2 rounded-md hover:text-white hover:bg-blue-800 transition duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-2" />
                    {t('projectsSection.viewCode')}
                  </a>
                  <a 
                    href={project.liveLink}
                    className="flex items-center text-gray-600 px-2 hover:text-white hover:bg-blue-800 rounded-md transition duration-300 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    {t('projectsSection.viewDemo')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
