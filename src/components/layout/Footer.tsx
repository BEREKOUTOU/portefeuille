import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const socialLinks = [
    { name: "GitHub", icon: <FiGithub />, url: "https://github.com/BEREKOUTOU" },
    { name: "LinkedIn", icon: <FiLinkedin />, url: "https://www.linkedin.com/in/boniface-berekoutou/" },
    { name: "Twitter", icon: <FiTwitter />, url: "#" },
    { name: "Email", icon: <FiMail />, url: "mailto:allahtoralphdjamel@gmail.com" },
  ];

  return (
    <footer className="py-8 border-t border-border mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-bold text-primary mb-4 md:mb-0"
          >
            Portfolio
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6 mb-4 md:mb-0"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                aria-label={link.name}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Portfolio. {t('footer1.description')}.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}