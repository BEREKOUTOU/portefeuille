import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import kasaImg from '../assets/img/kasa.webp';
import argentBankImg from '../assets/img/argentBank.webp';
import bonifacesImg from '../assets/img/Omyfood.webp';

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projectsSection.projects.immobilier.title'),
      description: t('projectsSection.projects.immobilier.description'),
      image: kasaImg,
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: t('projectsSection.projects.bank.title'),
      description: t('projectsSection.projects.bank.description'),
      image: argentBankImg,
      technologies: ["React", "TypeScript", "D3.js", "Material-UI"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: t('projectsSection.projects.restaurant.title'),
      description: t('projectsSection.projects.restaurant.description'),
      image: bonifacesImg,
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('projectsSection.title')}</h2>
        
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
                    className="flex items-center text-gray-600 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-2" />
                    {t('projectsSection.viewCode')}
                  </a>
                  <a 
                    href={project.liveLink}
                    className="flex items-center text-gray-600 hover:text-gray-900"
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
