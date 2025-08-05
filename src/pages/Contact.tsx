import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { FiSend, FiGithub,  FiLinkedin, FiMail, FiMapPin, FiCheck, FiFacebook } from 'react-icons/fi';
import { toast } from 'sonner';
import { t } from 'i18next';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Form validation
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Replace these with your EmailJS service details
      // For demo purposes we'll just simulate a successful submission
      // In production, you would use:
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current!,
      //   'YOUR_USER_ID'
      // );
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      toast.success(t('contact1.success'), {
        description: t('contact1.successDescription'),
        position: 'top-center',
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly.',
        position: 'top-center',
      });
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
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

  return (
    <>
      <Helmet>
        <title>Portfolio | Contact Me</title>
        <meta name="description" content="Get in touch with me for collaborations, job opportunities, or just to say hello" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact1.title')}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto description-font">
                {t('contact1.description')}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-0">{t('contact1.informations')}</h2>
                <p className="description-font mb-4 text-muted-foreground">{t('contact1.description2')}</p>
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FiMail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{t('contact1.email')}</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                          allahtoralphdjamel@gmail.com
                        </a>
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start space-x-4"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FiMapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{t('contact1.location')}</h3>
                      <p className="text-muted-foreground">Cherbourg-En-Cotentin, France</p>
                    </div>
                  </motion.div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium mb-4">{t('contact1.connect')}</h3>
                    <div className="flex space-x-4">
                      <motion.a 
                        href="https://github.com/BEREKOUTOU" 
                        aria-label="GitHub"
                        className="bg-muted p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        whileHover={{ y: -5 }}
                      >
                        <FiGithub className="h-5 w-5" />
                      </motion.a>
                      <motion.a 
                        href="https://www.linkedin.com/in/boniface-berekoutou-4b068a36a/" 
                        aria-label="LinkedIn"
                        className="bg-muted p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        whileHover={{ y: -5 }}
                      >
                        <FiLinkedin className="h-5 w-5" />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        aria-label="Twitter"
                        className="bg-muted p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        whileHover={{ y: -5 }}
                      >
                        <FiFacebook className="h-5 w-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>{t('contact1.send')}</CardTitle>
                    <CardDescription className="description-font">
                      {t('contact1.cardescription')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t('contact1.name')}</Label>
                        <Input 
                          id="name"
                          name="name" 
                          placeholder={t('contact1.name1')} 
                          value={formData.name}
                          onChange={handleChange}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">{t('contact1.email')}</Label>
                        <Input 
                          id="email"
                          name="email" 
                          type="email" 
                          placeholder={t('contact1.email1')} 
                          value={formData.email}
                          onChange={handleChange}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">{t('contact1.subject')}</Label>
                        <Input 
                          id="subject"
                          name="subject" 
                          placeholder={t('contact1.subject1')} 
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">{t('contact1.message')}</Label>
                        <Textarea 
                          id="message"
                          name="message" 
                          placeholder={t('contact1.message1')} 
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className={errors.message ? "border-red-500" : ""}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm">{errors.message}</p>
                        )}
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {t('contact1.send')}
                          </span>
                        ) : isSubmitted ? (
                          <span className="flex items-center">
                            <FiCheck className="mr-2" /> {t('contact1.send')}
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <FiSend className="mr-2" /> {t('contact1.send')}
                          </span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="w-full h-64 md:h-80 rounded-xl overflow-hidden">
              <iframe 
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.123456789012!2d2.1234567890123456!3d49.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e9a12345678901%3A0x1234567890123456!2sCherbourg-En-Cotentin%2C%20France!5e0!3m2!1sen!2sus!4v1612345678901" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}