import { useState, useEffect } from 'react';
import { motion, useAnimation, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FiCode, FiLayers, FiTool, FiCheck, FiX } from 'react-icons/fi';
import { 
  SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, 
  SiCss3, SiNodedotjs, SiNextdotjs, SiGit, SiFigma, 
  SiVite, SiSass, SiJest
} from 'react-icons/si';
import { t } from 'i18next';

// Types
interface Skill {
  name: string;
  level: number;
  icon: JSX.Element;
}

interface SkillCategory {
  name: string;
  icon: JSX.Element;
  skills: Skill[];
}

// Skill quiz type
interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: string;
  icon: JSX.Element;
}

export default function Skills() {
  // Refs for animations
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // States for quiz
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  // Start animation when skills section is in view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Skill categories with data
  const skillCategories: SkillCategory[] = [
    {
      name: t('skills1.title1'),
      icon: <FiCode />,
      skills: [
        { name: "React", level: 90, icon: <SiReact /> },
        { name: "JavaScript", level: 85, icon: <SiJavascript /> },
        { name: "TypeScript", level: 80, icon: <SiTypescript /> },
        { name: "HTML5", level: 95, icon: <SiHtml5 /> },
        { name: "CSS3", level: 90, icon: <SiCss3 /> },
        { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss /> },
        { name: "Vite", level: 70, icon: <SiVite /> },
        { name: "SASS/SCSS", level: 75, icon: <SiSass /> },
      ]
    },
    {
      name: t('skills1.title2'),
      icon: <FiTool />,
      skills: [
        { name: "Node.js", level: 75, icon: <SiNodedotjs /> },
        { name: "Next.js", level: 80, icon: <SiNextdotjs /> },
        { name: "Git", level: 85, icon: <SiGit /> },
        { name: "Jest", level: 70, icon: <SiJest /> },
        { name: "UI Design", level: 75, icon: <SiFigma /> },
      ]
    },
    {
      name: t('skills1.title3'),
      icon: <FiLayers />,
      skills: [
        { name: t('skills1.ProblemSolving'), level: 90, icon: <FiCode /> },
        { name: t('skills1.Communication'), level: 85, icon: <FiCode /> },
        { name: t('skills1.Teamwork'), level: 95, icon: <FiCode /> },
        { name: t('skills1.TimeManagement'), level: 80, icon: <FiCode /> },
        { name: t('skills1.Adaptability'), level: 85, icon: <FiCode /> },
        { name: t('skills1.Debugging'), level: 70, icon: <FiCode /> },
      ]
    }
  ];

  // Quiz questions
  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: t('skills1.question1'),
      options: ["JSX", "CSS-in-JS", "HTML", "XML"],
      answer: "CSS-in-JS",
      icon: <SiReact className="text-4xl text-blue-500" />
    },
    {
      id: 2,
      question: t('skills1.question2'),
      options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"],
      answer: "JavaScript XML",
      icon: <SiJavascript className="text-4xl text-yellow-400" />
    },
    {
      id: 3,
      question: t('skills1.question3'),
      options: ["Bootstrap", "Tailwind CSS", "Bulma", "Foundation"],
      answer: "Tailwind CSS",
      icon: <SiTailwindcss className="text-4xl text-cyan-500" />
    },
    {
      id: 4,
      question: t('skills1.question4'),
      options: ["Docker", "Jenkins", "Git", "Kubernetes"],
      answer: "Git",
      icon: <SiGit className="text-4xl text-orange-600" />
    },
    {
      id: 5,
      question: t('skills1.question5'),
      options: ["React", "Angular", "Django", "Vue"],
      answer: "Django",
      icon: <SiNodedotjs className="text-4xl text-green-600" />
    }
  ];

  // Handle quiz answer selection
  const handleAnswerOptionClick = (option: string) => {
    setSelectedOption(option);
    setShowAnswer(true);
    
    if (option === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      setShowAnswer(false);
      setSelectedOption(null);
      
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizQuestions.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
    }, 1500);
  };

  // Reset quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const progressVariants = {
    hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: easeOut }
  })
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | Skills</title>
        <meta name="description" content="Explore my technical and professional skills" />
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
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('skills1.title')}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto description-font">
                {t('skills1.description')}
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-16">
              <Tabs defaultValue="frontend" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid min-w-[321px] grid-cols-3">
                    {skillCategories.map((category) => (
                      <TabsTrigger key={category.name} value={category.name.toLowerCase().replace(/\s+/g, '')}>
                        <span className="flex items-center">
                          <span className="mr-2">{category.icon}</span>
                          {category.name}
                        </span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>
                
                {skillCategories.map((category) => (
                  <TabsContent 
                    key={category.name} 
                    value={category.name.toLowerCase().replace(/\s+/g, '')}
                  >
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-8"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {category.skills.map((skill) => (
                        <motion.div key={skill.name} variants={itemVariants}>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <span className="mr-3 text-xl text-primary">{skill.icon}</span>
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-primary to-violet-500 rounded-full"
                              custom={skill.level}
                              variants={progressVariants}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-16">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <FiCode className="mr-2" /> {t('skills1.technicalSkills')}
                  </CardTitle>
                  <CardDescription className="description-font">
                    
                    {t('skills1.CardDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {[SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiNodedotjs, SiNextdotjs].map((Icon, index) => (
                      <motion.div 
                        key={index}
                        className="flex flex-col items-center p-4 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors"
                        whileHover={{ y: -5, scale: 1.05 }}
                      >
                        <Icon className="text-4xl text-primary mb-2" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{t('skills1.quizTitle')}</CardTitle>
                  <CardDescription className="description-font">
                    {t('skills1.quizDescription')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {showScore ? (
                    <motion.div 
                      className="text-center py-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-2xl font-bold mb-4">
                        {t('skills1.quizComplete')}
                      </h3>
                      <p className="text-xl mb-6">
                        {t('skills1.quizScore', { score, total: quizQuestions.length })}
                      </p>
                      <div className="text-5xl mb-8">
                        {score > (quizQuestions.length / 2) ? '🎉' : '🤔'}
                      </div>
                      <Button onClick={resetQuiz}>
                        {t('skills1.backToQuiz')}
                      </Button>
                    </motion.div>
                  ) : (
                    <div className="py-4">
                      <div className="mb-8 flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          {t('skills1.question')} {currentQuestion + 1}/{quizQuestions.length}
                        </div>
                        <div className="text-sm font-medium">
                          {t('skills1.score')}: {score}
                        </div>
                      </div>
                      
                      <motion.div
                        key={currentQuestion}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                        className="mb-8"
                      >
                        <div className="flex items-center justify-center mb-6">
                          {quizQuestions[currentQuestion].icon}
                        </div>
                        <h3 className="text-xl font-medium mb-6 text-center">
                          {quizQuestions[currentQuestion].question}
                        </h3>
                        <div className="space-y-3">
                          {quizQuestions[currentQuestion].options.map((option, index) => (
                            <Button
                              key={index}
                              variant={
                                showAnswer
                                  ? option === quizQuestions[currentQuestion].answer
                                    ? "default"
                                    : selectedOption === option
                                    ? "destructive"
                                    : "outline"
                                  : selectedOption === option
                                  ? "default"
                                  : "outline"
                              }
                              disabled={selectedOption !== null}
                              className="w-full justify-start text-left h-auto py-3 px-4 mb-3"
                              onClick={() => handleAnswerOptionClick(option)}
                            >
                              <div className="flex items-center justify-between w-full">
                                <span>{option}</span>
                                {showAnswer && (
                                  option === quizQuestions[currentQuestion].answer ? (
                                    <FiCheck className="text-green-500" />
                                  ) : selectedOption === option ? (
                                    <FiX className="text-red-500" />
                                  ) : null
                                )}
                              </div>
                            </Button>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}