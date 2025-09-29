import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { motion } from "framer-motion";

interface Education {
  institution: string;
  degree: string;
  duration: string;
  type: 'university' | 'school';
}

const educationData: Education[] = [
  {
    institution: "BGS Public School",
    degree: "SSLC (Secondary School Leaving Certificate)",
    duration: "2019 - 2020",
    type: "school"
  },
  {
    institution: "BGS Public School",
    degree: "HSLC(Higher School Leaving Certificate)",
    duration: "2021 - 2022",
    type: "school"
  },
  {
    institution: "Dayananda Sagar Academy of Technology and Management, Bengaluru",
    degree: "B.E. in Computer Science and Design",
    duration: "2022 - 2026",
    type: "university"
  }
];

export const AcademicSection: React.FC = () => {
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
    <section id="academic" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#2D3748]/10 dark:bg-[#EEE5DA]/10" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <BookOpen className="w-32 h-32 text-[#2D3748]/20 dark:text-[#EEE5DA]/20" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Award className="w-24 h-24 text-[#2D3748]/20 dark:text-[#EEE5DA]/20" />
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
          <h2 className="text-3xl font-medium mb-4 text-[#2D3748] dark:text-[#EEE5DA]">
            Academic Journey
          </h2>
          <p className="text-muted-foreground">
            My educational background and qualifications
          </p>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-xl transition-all duration-300 group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center relative overflow-hidden bg-card"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-6 h-6 text-card-foreground relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-white/20 dark:bg-black/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-medium text-lg group-hover:text-[#2D3748] dark:group-hover:text-[#EEE5DA] transition-colors">
                      {edu.institution}
                    </h3>
                    <motion.div 
                      className="flex items-center space-x-2 text-muted-foreground mt-1 md:mt-0"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.duration}</span>
                    </motion.div>
                  </div>
                  
                  <p className="text-muted-foreground">
                    {edu.degree}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};