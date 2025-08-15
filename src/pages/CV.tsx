import { useRef } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import {
  FiDownload,
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiGlobe,
  FiMusic,
  FiBookOpen,
} from "react-icons/fi";
import { GiCommercialAirplane } from "react-icons/gi";

interface CVData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    website: string;
    photo: string;
  };
  summary: string;
  experience: Array<{
    id: number;
    company: string;
    position: string;
    duration: string;
    location: string;
    description: string[];
    technologies: string[];
  }>;
  education: Array<{
    id: number;
    institution: string;
    degree: string;
    duration: string;
    description: string;
  }>;
  skills: {
    technical: string[];
    soft: string[];
    languages: Array<{
      name: string;
      level: string;
    }>;
  };
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
  }>;
}

export default function CV() {
  const { t } = useTranslation();
  const cvRef = useRef<HTMLDivElement>(null);
  const cvData = t("cvData", { returnObjects: true }) as CVData;

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `${cvData.personal.name}-CV`,
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      @media print {
        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
      }
    `,
  });

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
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <Helmet>
        <title>Portfolio | CV </title>
        <meta
          name="description"
          content={`Professional CV of ${cvData.personal.name}, ${cvData.personal.title}`}
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 mt-20 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold mb-4">{t("cv.title1")}</h1>
            <p className="text-muted-foreground mb-6">{t("cv.subtitle")}</p>
            <Button
              onClick={() => handlePrint()}
              size="lg"
              className="print:hidden"
            >
              <FiDownload className="mr-2" />
              {t("cv.download")}
            </Button>
          </motion.div>

          <motion.div
            ref={cvRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto bg-card shadow-lg rounded-lg overflow-hidden"
          >
            {/* Header Section */}
            <motion.div
              variants={itemVariants}
              className="bg-primary/10 p-8 border-b"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={cvData.personal.photo}
                    alt={cvData.personal.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-2">
                    {cvData.personal.name}
                  </h2>
                  <p className="text-xl text-primary mb-4">
                    {cvData.personal.title}
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                    <a
                      href={`mailto:${cvData.personal.email}`}
                      className="flex items-center hover:text-primary"
                    >
                      <FiMail className="mr-1" /> {cvData.personal.email}
                    </a>
                    <span className="flex items-center">
                      <FiPhone className="mr-1" /> {cvData.personal.phone}
                    </span>
                    <span className="flex items-center">
                      <FiMapPin className="mr-1" /> {cvData.personal.location}
                    </span>
                  </div>

                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground mt-2">
                    <a
                      href={`https://${cvData.personal.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-primary"
                    >
                      <FiLinkedin className="mr-1" /> LinkedIn
                    </a>
                    <a
                      href={`https://${cvData.personal.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-primary"
                    >
                      <FiGithub className="mr-1" /> GitHub
                    </a>
                    <a
                      href={`https://${cvData.personal.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-primary"
                    >
                      <FiGlobe className="mr-1" /> Portfolio
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="p-8 space-y-8">
              {/* Summary Section */}
              <motion.section variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("cv.summary")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {cvData.summary}
                </p>
              </motion.section>

              {/* Experience Section */}
              <motion.section variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("cv.experience")}
                </h3>
                <div className="space-y-6">
                  {cvData.experience.map((exp) => (
                    <div
                      key={exp.id}
                      className="border-l-2 border-primary/20 pl-4"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="text-lg font-semibold">
                            {exp.position}
                          </h4>
                          <p className="text-primary">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">
                            {exp.duration}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mb-3">
                        {exp.description.map((desc: string, index: number) => (
                          <li key={index}>{desc}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Education Section */}
              <motion.section variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("cv.education")}
                </h3>
                <div className="space-y-4">
                  {cvData.education.map((edu) => (
                    <div
                      key={edu.id}
                      className="border-l-2 border-primary/20 pl-4"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-semibold">
                            {edu.degree}
                          </h4>
                          <p className="text-primary">{edu.institution}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {edu.duration}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {edu.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* Skills Section */}
              <motion.section variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("cv.skills")}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">{t("cv.technical")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.technical.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">{t("cv.soft")}</h4>
                    <div className="flex flex-wrap gap-2">
                      {cvData.skills.soft.map((skill: string) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">{t("cv.languages")}</h4>
                    <div className="space-y-2">
                      {cvData.skills.languages.map(
                        (lang: { name: string; level: string }) => (
                          <div key={lang.name} className="flex justify-between">
                            <span>{lang.name}</span>
                            <span className="text-muted-foreground">
                              {lang.level}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Certifications Section */}
              <motion.section variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("cv.certifications")}
                </h3>
                <div className="space-y-3">
                  {cvData.certifications.map(
                    (cert: { name: string; issuer: string; date: string }) => (
                      <div
                        key={cert.name}
                        className="flex justify-between items-center"
                      >
                        <div>
                          <h4 className="font-semibold">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {cert.issuer}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {cert.date}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </motion.section>

              {/* Interests Section */}
              <motion.section variants={itemVariants}>
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {t("cv.interests")}
                </h3>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="flex items-center gap-2">
                    <GiCommercialAirplane className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{t("cv.travel")}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <FiMusic className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{t("cv.music")}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <FiBookOpen className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{t("cv.reading")}</span>
                  </div>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
