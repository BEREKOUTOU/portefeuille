import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FiArrowRight, FiMail, FiCode } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

// Typewriter component for animated text
function Typewriter({
  words = ["Developer", "Designer", "Creator"],
  delay = 150,
  pauseFor = 2000,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        // If deleting, remove a character
        if (isDeleting) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          // Otherwise add a character
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }

        // Switch to deleting once full word is written
        if (!isDeleting && currentText === currentWord) {
          setTimeout(() => setIsDeleting(true), pauseFor);
        }
        // Move to next word when deletion is complete
        else if (isDeleting && currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      },
      isDeleting ? delay / 2 : delay
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, delay, pauseFor]);

  return (
    <span className="inline-block min-w-[120px] text-primary">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
}

// Background particles component
function Particles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 md:h-3 md:w-3 rounded-full bg-primary/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title> Portfolio | Home </title>
        <meta name="description" content="BEREKOUTOU Boniface - Développeur passionné avec une expertise dans React, TypeScript, Tailwind CSS et les technologies web modernes. J'adore construire des interfaces visuellement attrayantes." />
      </Helmet>

      <section className="relative min-h-screen pt-20 flex items-center">
        <Particles />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary"
            >
              {t("welcome_message")}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {t("greeting")} <span className="text-primary"> BEREKOUTOU Boniface</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-muted-foreground "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {t("typewriter_intro")}{" "}
              <Typewriter
                words={[
                  t("typewriter_word1"),
                  t("typewriter_word2"),
                  t("typewriter_word3"),
                  t("typewriter_word4"),
                ]}
              />
            </motion.div>

            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto description-font"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {t("about_me_paragraph1")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button asChild size="lg">
                <Link to="/projects">
                  {t("view_projects")} <FiCode className="ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact">
                  {t("contact_me")} <FiMail className="ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative bottom-10 flex justify-center top-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                document
                  .getElementById("about-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("scroll_down")} <FiArrowRight className="ml-1 rotate-90" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Brief About Section */}
      <section id="about-section" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              {t("about_me_title")}
            </h2>
            <p className="text-muted-foreground description-font">
              {t("about_me_paragraph2")}
            </p>
            <Button asChild variant="outline">
              <Link to="/about">
                {t("learn_more")} <FiArrowRight className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
