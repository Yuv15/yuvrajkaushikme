import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Send, Mail, Linkedin, Github, FileText } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { icon: <Mail className="w-5 h-5" />, href: "mailto:kaushikyuvraj15@gmail.com", label: "Email" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/yuvraj-kaushik/", label: "LinkedIn" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Yuv15", label: "GitHub" },
    { icon: <FileText className="w-5 h-5" />, href: "/1DT22CG051_Yuvraj_Kaushik.pdf", label: "Resume", download: "Yuvraj_Kaushik_Resume.pdf" },
  ];

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <section id="connect" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#2D3748]/10 dark:bg-[#EEE5DA]/10" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Send className="w-32 h-32 text-[#2D3748]/20 dark:text-[#EEE5DA]/20" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Mail className="w-24 h-24 text-[#2D3748]/20 dark:text-[#EEE5DA]/20" />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-medium mb-4 text-[#171c24] dark:text-[#dacdbf]">
            Contact Me
          </h2>
          <p className="text-muted-foreground">
            Let's connect and discuss opportunities or collaborations
          </p>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form Card */}
          <motion.div
            variants={itemVariants}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <motion.div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden bg-card"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Send className="w-6 h-6 text-card-foreground relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/20 dark:bg-black/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg group-hover:text-[#1d232e] dark:group-hover:text-[#ddd0bf] transition-colors mb-2">
                  Send a Message
                </h3>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-card/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D3748] dark:focus:ring-[#EEE5DA] transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-card/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D3748] dark:focus:ring-[#EEE5DA] transition-all"
                  placeholder="kaushikyuvraj15@gmail.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-card/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D3748] dark:focus:ring-[#EEE5DA] transition-all resize-none"
                  placeholder="Tell me about your project or just say hello..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-[#2D3748] dark:bg-[#EEE5DA] hover:bg-[#2D3748]/90 dark:hover:bg-[#EEE5DA]/90 text-white dark:text-[#2D3748] py-3 px-6 rounded-lg flex items-center justify-center space-x-3 hover:shadow-lg transition-all group"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="font-medium">Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>

          {/* Quick Contact Card */}
          <motion.div
            variants={itemVariants}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <motion.div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden bg-card"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail className="w-6 h-6 text-card-foreground relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/20 dark:bg-black/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg group-hover:text-[#1d232e] dark:group-hover:text-[#EEE5DA] transition-colors mb-2">
                  Quick Connect
                </h3>
              </div>
            </div>
            
            <div className="space-y-2">
              <p className="font-medium text-[#232b38] dark:text-[#EEE5DA]">kaushikyuvraj15@gmail.com</p>
              <p className="text-sm text-muted-foreground">+91 7483965548</p>
              <p className="text-sm text-muted-foreground">Available for new opportunities</p>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            variants={itemVariants}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <motion.div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden bg-card"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Linkedin className="w-6 h-6 text-card-foreground relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/20 dark:bg-black/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg group-hover:text-[#181e27] dark:group-hover:text-[#EEE5DA] transition-colors mb-2">
                  Find Me Online
                </h3>
              </div>
            </div>
            
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  download={link.download}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background transition-colors group"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-muted-foreground group-hover:text-[#1f2530] dark:group-hover:text-[#EEE5DA] transition-colors">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Availability Card */}
          <motion.div
            variants={itemVariants}
            className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-300 group"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="flex items-start space-x-4 mb-4">
              <div className="flex-shrink-0">
                <motion.div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden bg-card"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Github className="w-6 h-6 text-card-foreground relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-white/20 dark:bg-black/20"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg group-hover:text-[#222a36] dark:group-hover:text-[#EEE5DA] transition-colors mb-2">
                  Currently Available
                </h3>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium text-[#2D3748] dark:text-[#EEE5DA]">Open for new projects</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Open for new projects and collaborations. Let's build something amazing together!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
