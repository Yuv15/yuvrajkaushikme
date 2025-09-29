import React from 'react';
import { motion } from "framer-motion";
// Removed unused imports: Users, Clock
import { ExternalLink, Github, TrendingUp, Code } from 'lucide-react'; 
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  impact: string;
  metric: string;
  tags: string[];
  image: string;
  links: {
    demo?: string;
    github?: string;
  };
}

const projects: Project[] = [
  {
    title: "ACI – Animal Classifier Web App",
    description: "Developed a Flask-based web app integrating a deep-learning model with Google's Teachable Machine, achieving 92% plus accuracy in animal classification.",
    impact: "92%+ accuracy in classification",
    metric: "July 2025",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Teachable Machine", "Render"],
    image: "/aci.png",
    links: { demo: "https://simple-animal-classifier.onrender.com/", github: "https://github.com/Yuv15/Simple-ACI-Animal-Classifier-" }
  },
  {
    title: "Knight2D – 2D Godot Game",
    description: "Created a 2D game in Godot featuring a knight avatar that collects coins and dodges enemies and hazards.",
    impact: "Published on Itch.io",
    metric: "Dec 2024",
    tags: ["Godot Engine", "GDScript"],
    image: "/knight2d.png",
    links: { demo: "https://yuvraj-15.itch.io/knight2d", github: "https://github.com/Yuv15/First-2D-Game-Godot-" }
  },
  {
    title: "Smart Placement Diary (MERN)",
    description: "Building a MERN stack application enabling students to manage placement records; designed to handle 5+ concurrent users and track 10+ placement entries for now.",
    impact: "Handles 5+ concurrent users",
    metric: "Sept 2025",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "MongoDB Atlas"],
    image: "/smartplacemnet.png",
    links: { demo: "https://placelog.onrender.com/", github: "https://github.com/Yuv15/Simple-Placement-Diary" }
  },
  {
    title: "UI/UX Intern CodSoft (Virtual Internship)",
    description: "Designed and prototyped multiple sign-up and login pages during a 4-week virtual internship using Figma. Applied UI/UX principles to improve user flows and usability.",
    impact: "4-week virtual internship",
    metric: "May 2024 - June 2024",
    tags: ["Figma", "UI/UX"],
    image: "/public/uiux intern.png",
    links: { demo: "https://www.behance.net/gallery/234753939/Music-Streaming-Platform" }
  }
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

export const ProjectsSection: React.FC = () => {
  return (
    <section id="work" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#2D3748]/10 dark:bg-[#EEE5DA]/10" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Code className="w-32 h-32 text-[#2D3748]/20 dark:text-[#EEE5DA]/20" />
        </div>
        <div className="absolute bottom-20 right-20">
          <TrendingUp className="w-24 h-24 text-[#2D3748]/20 dark:text-[#EEE5DA]/20" />
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
          <h2 className="text-3xl font-medium mb-4 text-[#171b24] dark:text-[#d8cfc3]">
            Projects
          </h2>
          <p className="text-muted-foreground">
            A showcase of my work and personal projects
          </p>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
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
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-12 h-12 rounded-lg object-cover relative z-10"
                    />
                    <motion.div
                      className="absolute inset-0 bg-[#2D3748]/20 dark:bg-[#EEE5DA]/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-medium text-lg group-hover:text-[#242b38] dark:group-hover:text-[#EEE5DA] transition-colors">
                      {project.title}
                    </h3>
                    <motion.div 
                      className="flex items-center space-x-2 text-muted-foreground mt-1 md:mt-0"
                      whileHover={{ scale: 1.05 }}
                    >
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm">{project.metric}</span>
                    </motion.div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3">
                    {project.description}
                  </p>

                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-2 h-2 bg-[#2D3748] dark:bg-[#EEE5DA] rounded-full" />
                    <span className="font-medium text-[#202733] dark:text-[#EEE5DA]">{project.impact}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#2D3748]/10 dark:bg-[#EEE5DA]/10 text-[#2D3748] dark:text-[#EEE5DA] rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    {project.links.demo && (
                      <motion.a
                        href={project.links.demo}
                        className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        className="w-8 h-8 bg-card border border-border rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
