import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight, Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Content - Asymmetric Layout */}
          <motion.div 
            className="lg:col-span-7 lg:col-start-1 space-y-8"
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl lg:text-6xl font-serif leading-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Building Innovative Solutions,
                <br />
                <span className="text-chart-1">in Computer Science & Design</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground max-w-md leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Final-year Computer Science and Design student with foundational skills in Web Development (MERN, Flask), Data Analysis, and UI/UX Design. Have worked on small-scale applications, including productivity tools and introductory AI-powered projects. Enthusiastic about learning new technologies, improving skills through hands-on projects, and contributing to solutions that enhance usability and performance.
              </motion.p>
            </div>

            <motion.div
              className="flex items-center space-x-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.button
                className="group bg-primary text-primary-foreground px-8 py-4 rounded-lg flex items-center space-x-3 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="group flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-chart-1 group-hover:text-white transition-colors">
                  <Play className="w-4 h-4 ml-0.5" />
                </div>
                <span>Watch Story</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual Element - Integrated CTA */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-8 relative"
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.6 }}
              >
                <ImageWithFallback
                  src={`${import.meta.env.BASE_URL}myphoto.png`}
                  alt="Yuvraj Kaushik"
                  className="w-full h-96 object-cover"
                />
                
                {/* Floating CTA Element */}
                <motion.div
                  className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-md rounded-full p-4 shadow-lg border border-border"
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowRight className="w-6 h-6 text-chart-1" />
                </motion.div>
              </motion.div>

              {/* Geometric Accent */}
              <motion.div
                className="absolute -top-8 -left-8 w-24 h-24 bg-chart-1 rounded-full opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-chart-2 rounded-lg opacity-30"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-muted-foreground rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};