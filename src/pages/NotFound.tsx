import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
const { t } = useTranslation();
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
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
        <title>Portfolio | 404 - Page Not Found</title>
        <meta name="description" content="The page you're looking for doesn't exist" />
        <meta name="keywords" content="404, page not found, error, portfolio" />
        <meta name="author" content="BEREKOUTOU Boniface" />
        <meta name="google-site-verification" content="uVyY4pdQUE2Zl7Yo7A6TjR7h_lInZerqyqUm-TV_djI" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            variants={itemVariants}
            className="relative mb-8"
          >
            <div className="text-9xl font-bold text-primary opacity-10">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl font-bold">Oops!</div>
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-3xl font-bold mb-4"
          >
           [{t('page_not_found')}] 
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            {t('page_not_found_message')}
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild>
              <Link to="/">
                <FiHome className="mr-2" />{t('go_to_homepage')} 
              </Link>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.history.back()}
            >
              <FiArrowLeft className="mr-2" /> {t('go_back')} 
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}