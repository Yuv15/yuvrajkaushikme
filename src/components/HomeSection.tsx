import React from 'react';
import { Code, Sparkles, Zap, Github, Linkedin, Download } from 'lucide-react';
import { FaBehance } from 'react-icons/fa'; 
import { motion } from "framer-motion";
import { ImageWithFallback } from './figma/ImageWithFallback';

export const HomeSection: React.FC = () => {
  const floatingIcons = [
    { icon: Code, color: 'text-[#2D3748]/70 dark:text-[#EEE5DA]/70', delay: 0 },
    { icon: Sparkles, color: 'text-[#2D3748]/70 dark:text-[#EEE5DA]/70', delay: 0.5 },
    { icon: Zap, color: 'text-[#2D3748]/70 dark:text-[#EEE5DA]/70', delay: 1 }
  ];

  return (
    <section id="home" className="pt-32 pb-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#2D3748]/5 dark:bg-[#EEE5DA]/5" />
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`absolute ${item.color}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3],
              y: [20, -20, 20],
              x: [0, 10, 0]
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + index * 30}%`,
              top: `${30 + index * 20}%`
            }}
          >
            <item.icon className="w-8 h-8" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start md:items-center">
          {/* Left Column: Text Content */}
          <motion.div 
            className="space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            {/* Name & Title */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-7xl font-medium text-[#2D3748] dark:text-[#EEE5DA] leading-tight whitespace-nowrap">
                YUVRAJ KAUSHIK
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-medium">
                Web Dev | UI/UX | Data Analyst
              </h2>
            </motion.div>

            {/* Quick Intro */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Final-year Computer Science and Design student with foundational skills in Web Development (MERN, Flask), Data Analysis, and UI/UX Design.
              </p>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex justify-start space-x-4">
                <a
                  href="https://github.com/Yuv15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-lg flex items-center justify-center text-[#2D3748] dark:text-[#EEE5DA] hover:bg-gray-300 dark:hover:bg-[#EEE5DA]/20 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/yuvraj-kaushik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-lg flex items-center justify-center text-[#2D3748] dark:text-[#EEE5DA] hover:bg-gray-300 dark:hover:bg-[#EEE5DA]/20 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.behance.net/yuvrajkaushik15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-lg flex items-center justify-center text-[#2D3748] dark:text-[#EEE5DA] hover:bg-gray-300 dark:hover:bg-[#EEE5DA]/20 transition-colors duration-200"
                  aria-label="Behance"
                >
                  <FaBehance className="w-5 h-5" />
                </a>
                <a
                  href="/1DT22CG051_Yuvraj_Kaushik.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-lg flex items-center justify-center text-[#2D3748] dark:text-[#EEE5DA] hover:bg-gray-300 dark:hover:bg-[#EEE5DA]/20 transition-colors duration-200 "
                  aria-label="Resume"
                >
                  <Download className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Profile Photo */}
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.5, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-transparent p-1 dark:border-4 dark:border-chart-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <ImageWithFallback
                    src="/myphoto.png"
                    alt="Yuvraj Kaushik"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -inset-2 rounded-full bg-[#2D3748]/20 dark:bg-[#EEE5DA]/20 blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};