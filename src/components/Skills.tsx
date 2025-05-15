import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const skills = [
    { 
      category: t('skillsSection.categories.frontend'), 
      items: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Vue.js", level: 75 }
      ]
    },
    { 
      category: t('skillsSection.categories.styling'), 
      items: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Sass", level: 85 },
        { name: "CSS3", level: 90 },
        { name: "Styled Components", level: 80 }
      ]
    },
    { 
      category: t('skillsSection.categories.tools'), 
      items: [
        { name: "Git", level: 90 },
        { name: "Webpack", level: 75 },
        { name: "Vite", level: 85 },
        { name: "Jest", level: 80 }
      ]
    },
    { 
      category: t('skillsSection.categories.design'), 
      items: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX", level: 85 }
      ]
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('skillsSection.title')}</h2>
        
        <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={skillGroup.category} 
              className="bg-white p-6 rounded-lg shadow-sm transform transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${groupIndex * 100}ms`
              }}
            >
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gray-900 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(groupIndex * 100) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;