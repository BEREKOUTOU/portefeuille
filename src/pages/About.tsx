import { motion } from 'framer-motion';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FiBookmark, FiBriefcase, FiCoffee, } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
const Boniface = '/portefeuille/images/Boniface.webp';

export default function About() {
  // Removed unused activeTab state
  const { t } = useTranslation();

  // Fun facts with auto-rotation
  const [factIndex, setFactIndex] = useState(0);
  const funFacts = [
    t("abouts.slide1"),
    t("abouts.slide2"),
    t("abouts.slide3"),
    t("abouts.slide4"),
    t("abouts.slide5")
  ];

  // Auto-rotate fun facts
  useState(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % funFacts.length);
    }, 5000);
    return () => clearInterval(interval);
  });

  // Timeline data
  const education = [
    {
      id: 1,
      year: t("abouts.education1"),
      institution: t("abouts.interaction"),
      degree: t("abouts.degree"),
      description: t("abouts.description0")
    },
    {
      id: 2,
      year: t("abouts.education2"),
      institution: t("abouts.interaction1"),
      degree: t("abouts.degree1"),
      description: t("abouts.description1")
    }
  ];

  const experience = [
    {
      id: 1,
      year: t("abouts.experience1"),
      company: t("abouts.company1"),
      position: t("abouts.position1"),
      description: t("abouts.description2")
    },
    {
      id: 2,
      year: t("abouts.experience2"),
      company: t("abouts.company2"),
      position: t("abouts.position2"),
      description: t("abouts.description3")
    },
    {
      id: 3,
      year:  t("abouts.experience3"),
      company: t("abouts.company3"),
      position: t("abouts.position3"),
      description: t("abouts.description4")
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | About Me</title>
        <meta name="description" content="Learn more about my background, experience, and what drives me as a developer." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-24 pb-16"
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('abouts.title')}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto description-font">
              {t('abouts.description')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-5 gap-8 mb-16">
              <motion.div 
                variants={itemVariants}
                className="md:col-span-2 flex justify-center"
              >
                <motion.div 
                  className="relative w-64 h-64 rounded-xl overflow-hidden shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    rotateX: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <div className="absolute inset--0 bg-gradient-to-br from-primary/20 to-primary/60 dark:from-primary/40 dark:to-primary/80" />
                  <div className="absolute inset--0 flex items-center justify-center">
                    <img src={Boniface} alt="B. Boniface" className="w-full h-64" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                    <h3 className="font-bold">B. Boniface</h3>
                    <p className="text-sm">{t('abouts.position')}</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="md:col-span-3 space-y-6"
              >
                <h2 className="text-2xl font-bold">{t('abouts.greeting')}</h2>
                <p className="description-font">
                  {t('abouts.introduction')}
                </p>
                <p className="description-font">
                  {t('abouts.approach')}
                </p>
                <p className="description-font">
                  {t('abouts.approach2')}
                </p>
                
                <div className="pt-4">
                  <motion.div
                    className="bg-primary/10 border border-primary/20 rounded-lg p-4 relative overflow-hidden"
                    animate={{ 
                      backgroundColor: ["rgba(var(--primary-rgb), 0.1)", "rgba(var(--primary-rgb), 0.2)", "rgba(var(--primary-rgb), 0.1)"],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <h3 className="flex items-center text-lg font-medium mb-2">
                      <FiCoffee className="mr-2" /> {t('abouts.know')}
                    </h3>
                    <motion.p
                      className='description-font'
                      key={factIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {funFacts[factIndex]}
                    </motion.p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mb-16">
              <Tabs defaultValue="education" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid w-full max-w-md grid-cols-2">
                    <TabsTrigger value="education" className="flex items-center">
                      <FiBookmark className="mr-2" /> {t('abouts.education')}
                    </TabsTrigger>
                    <TabsTrigger value="experience" className="flex items-center">
                      <FiBriefcase className="mr-2" /> {t('abouts.experience')}
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="education" className="space-y-4">
                  <h2 className="text-2xl font-bold text-center mb-8">{t('abouts.education')}</h2>
                  <motion.div
                    className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {education.map((item, index) => (
                      <motion.div 
                        key={item.id}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        variants={itemVariants}
                        custom={index}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                          <FiBookmark className="text-primary" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg shadow-md border border-border bg-card hover:shadow-lg transition-shadow">
                          <div className="flex items-center justify-between mb-1">
                            <div className="font-semibold text-primary">{item.institution}</div>
                            <time className="text-sm text-muted-foreground">{item.year}</time>
                          </div>
                          <div className="text-lg font-medium mb-1">{item.degree}</div>
                          <div className="text-muted-foreground description-font">{item.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="experience" className="space-y-4">
                  <h2 className="text-2xl font-bold text-center mb-8">{t('abouts.experience')}</h2>
                  <motion.div
                    className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {experience.map((item, index) => (
                      <motion.div 
                        key={item.id}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                        variants={itemVariants}
                        custom={index}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                          <FiBriefcase className="text-primary" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-lg shadow-md border border-border bg-card hover:shadow-lg transition-shadow">
                          <div className="flex items-center justify-between mb-1">
                            <div className="font-semibold text-primary ">{item.company}</div>
                            <time className="text-sm text-muted-foreground">{item.year}</time>
                          </div>
                          <div className="text-lg font-medium mb-1">{item.position}</div>
                          <div className="text-muted-foreground description-font">{item.description}</div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </TabsContent>
              </Tabs>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold text-center mb-8">{t('abouts.more')}</h2>
              <Accordion type="single" collapsible className="max-w-2xl mx-auto">
                <AccordionItem value="skills">
                  <AccordionTrigger>{t('abouts.skills')}</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      <li>JavaScript/TypeScript (React, Vue)</li>
                      <li>HTML5, CSS3, Tailwind CSS, SCSS</li>
                      <li>UI/UX Design principles</li>
                      <li>Responsive Design</li>
                      <li>Performance Optimization</li>
                      <li>Accessibility (WCAG)</li>
                      <li>Version Control (Git)</li>
                      <li>Testing (Jest, Cypress)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="values">
                  <AccordionTrigger>{t('abouts.values')}</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">{t('abouts.values2')}</p>
                    <ul className="space-y-2">
                      <li>{t('abouts.values3')}</li>
                      <li>{t('abouts.values4')}</li>
                      <li>{t('abouts.values5')}</li>
                      <li>{t('abouts.values6')}</li>
                      <li>{t('abouts.values7')}</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="interests">
                  <AccordionTrigger>{t('abouts.interests')}</AccordionTrigger>
                  <AccordionContent>
                    <p>{t('abouts.interests2')}</p>
                    <ul className="space-y-2">
                      <li>{t('abouts.interests3')}</li>
                      <li>{t('abouts.interests4')}</li>
                      <li>{t('abouts.interests5')}</li>
                      <li>{t('abouts.interests6')}</li>
                      <li>{t('abouts.interests7')}</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}