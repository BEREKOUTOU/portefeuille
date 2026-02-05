import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { FiExternalLink, FiGithub, FiTag } from "react-icons/fi";
const images = import.meta.glob<string>("@/assets/images/*.webp", {
  eager: true,
  import: "default",
});
import { useTranslation } from "react-i18next";

// Get all unique tags
const getAllTags = (projects: any[]) => [
  ...new Set(projects.flatMap((project) => project.tags)),
];

export default function Projects() {
  const { t } = useTranslation();
  const [isTimelineMode, setIsTimelineMode] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Project data - moved inside component to use translation hook
  const projects = [
    {
      id: 1,
      title: t("projects1.title1"),
      description: t("projects1.description1"),
      image:
        images["@/assets/images/kasa.webp"] ||
        "/portefeuille/assets/images/kasa.webp",
      demoUrl: "https://kasa-fr-git-main-berekoutous-projects.vercel.app",
      githubUrl: "https://github.com/BEREKOUTOU/Kasa__Fr",
      date: "2025-02",
      tags: ["React", "CSS", "SCSS Modules", "Responsive Design", "API"],
    },
    {
      id: 2,
      title: t("projects1.title2"),
      description: t("projects1.description2"),
      image:
        images["@/assets/images/argentBank.webp"] ||
        "/portefeuille/assets/images/argentBank.webp",
      demoUrl: "https://berekoutou.github.io/ArgentBank/",
      githubUrl: "https://github.com/BEREKOUTOU/ArgentBank",
      date: "2025-04",
      tags: ["React", "TypeScript", "Firebase", "Material UI", "Redux"],
    },
    {
      id: 3,
      title: t("projects1.title3"),
      description: t("projects1.description3"),
      image:
        images["@/assets/images/Ohmyfood.webp"] ||
        "/portefeuille/assets/images/Ohmyfood.webp",
      demoUrl: "https://berekoutou.github.io/Ohmyfood/",
      githubUrl: "https://github.com/BEREKOUTOU/Ohmyfood",
      date: "2025-05",
      tags: ["HTML5", "animations CSS", "SCSS", "Responsive Design"],
    },
    {
      id: 4,
      title: t("projects1.title4"),
      description: t("projects1.description4"),
      image:images["@/assets/images/Ohmyfood.webp"] ||
        "/portefeuille/assets/images/BankApp.webp", 
      demoUrl: "https://berekoutou.github.io/BankApp/",
      githubUrl: "https://github.com/BEREKOUTOU/BankApp",
      date: "2025-09",
      tags: ["React",   "JavaScript", "Tailwind CSS", "Jest", "Tests"],
    },
    {
      id: 5,
      title: t("projects1.title5"),
      description: t("projects1.description5"),
      image:
        images["@/assets/images/Ohmyfood.webp"] ||
        "/portefeuille/assets/images/Recette.webp",
      demoUrl: "https://berekoutou.github.io/Recette/",
      githubUrl: "https://github.com/BEREKOUTOU/Recette",
      date: "2025-10",
      tags: ["React", "TypeScript", "Food API", "Styled Components"],
    },
    {
      id: 6,
      title: t("projects1.title6"),
      description: t("projects1.description6"),
      image:images["@/assets/images/Ohmyfood.webp"] ||
        "/portefeuille/assets/images/Portfolio.webp",
      demoUrl: "https://berekoutou.github.io/portefeuille/",
      githubUrl: "https://github.com/BEREKOUTOU/portefeuille.git",
      date: "2024-11",
      tags: ["React", "TypeScript", "Framer Motion", "Tailwind CSS"],
    },
  ];

  const allTags = getAllTags(projects);

  // Filter projects by tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  // Sort projects by date for timeline view
  const sortedProjects = [...filteredProjects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | Projects</title>
        <meta name="description"content="Découvrez mes projets de développement web, mettant en avant mes compétences en React, TypeScript, Tailwind CSS et plus encore. Explorez mes réalisations et les technologies utilisées." />
        <meta name="keywords" content="BEREKOUTOU Boniface, projets, développement web, React, TypeScript, Tailwind CSS, portfolio, réalisations" />
        <meta name="author" content="BEREKOUTOU Boniface" />
        <meta name="google-site-verification" content="uVyY4pdQUE2Zl7Yo7A6TjR7h_lInZerqyqUm-TV_djI"
        />
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
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t("projects1.title")}
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto description-font">
                {t("projects1.description")}
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
            >
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedTag === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(null)}
                >
                  {t("projects1.all")}
                </Button>
                {allTags.map((tag) => (
                  <Button
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-sm"> {t("projects1.timeline")}</span>
                <Switch
                  checked={isTimelineMode}
                  onCheckedChange={setIsTimelineMode}
                  id="timeline-mode"
                />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              {isTimelineMode ? (
                // Timeline view
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="relative mt-16 pb-16 overflow-x-auto"
                  style={{ minHeight: "500px" }}
                >
                  {/* Timeline bar */}
                  <div className="absolute top-8 left-0 right-0 h-1 bg-muted" />

                  <div className="relative flex space-x-24 min-w-max px-10">
                    {sortedProjects.map((project, index) => {
                      // Alternate between top and bottom positioning
                      const isTop = index % 2 === 0;

                      return (
                        <motion.div
                          key={project.id}
                          className={`relative ${
                            isTop ? "mt-10" : "mt-28"
                          } flex flex-col items-center`}
                          initial={{ opacity: 0, y: isTop ? 20 : -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ y: isTop ? -5 : 5 }}
                        >
                          {/* Timeline node */}
                          <div className="absolute top-0 -mt-8 w-4 h-4 rounded-full bg-primary" />

                          {/* Date */}
                          <div className="text-sm font-medium mb-3">
                            {new Date(project.date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                              }
                            )}
                          </div>

                          <Card className="w-60 h-auto overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <div className="h-32 overflow-hidden">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform hover:scale-110"
                              />
                            </div>
                            <CardHeader className="p-4">
                              <CardTitle className="text-lg">
                                {project.title}
                              </CardTitle>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {project.tags.slice(0, 2).map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                                {project.tags.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{project.tags.length - 2}
                                  </Badge>
                                )}
                              </div>
                            </CardHeader>
                            <CardFooter className="p-3 pt-0 flex justify-between">
                              <Button size="sm" variant="outline" asChild>
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FiExternalLink className="mr-1" /> Demo
                                </a>
                              </Button>
                              <Button size="sm" variant="outline" asChild>
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <FiGithub className="mr-1" /> Code
                                </a>
                              </Button>
                            </CardFooter>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                // Grid view
                <motion.div
                  key="grid"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -20 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                            <div className="text-white">
                              <div className="font-medium">
                                {new Date(project.date).toLocaleDateString(
                                  "en-US",
                                  {
                                    year: "numeric",
                                    month: "short",
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <CardHeader>
                          <CardTitle>{project.title}</CardTitle>
                          <CardDescription className="line-clamp-2 description-font">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="cursor-pointer hover:bg-primary/10"
                              >
                                <FiTag className="mr-1 h-3 w-3" /> {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button size="sm" asChild>
                                  <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <FiExternalLink className="mr-2" />{" "}
                                    {t("projects1.demo")}
                                  </a>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{t("projects1.demo")}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>

                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button size="sm" variant="outline" asChild>
                                  <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <FiGithub className="mr-2" />{" "}
                                    {t("projects1.code")}
                                  </a>
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{t("projects1.code")}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-lg text-muted-foreground">
                  {t("projects1.noProjects")}
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setSelectedTag(null)}
                >
                  {t("projects1.clearFilter")}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
