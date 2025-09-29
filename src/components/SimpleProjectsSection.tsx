import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { motion } from "framer-motion";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoLink?: string;
  githubLink?: string;
}

const projectsData: Project[] = [
  {
    title: "ACI – Animal Classifier Web App",
    description: "Developed a Flask-based web app integrating a deep-learning model with Google's Teachable Machine, achieving 92% plus accuracy in animal classification. (July 2025)",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Flask", "Teachable Machine", "Render"],
    image: `${import.meta.env.BASE_URL}aci.png`,
    demoLink: "https://simple-animal-classifier.onrender.com/",
    githubLink: "https://github.com/Yuv15/Simple-ACI-Animal-Classifier-"
  },
  {
    title: "Knight2D – 2D Godot Game",
    description: "Created a 2D game in Godot featuring a knight avatar that collects coins and dodges enemies and hazards. Published on Itch.io. (Dec 2024)",
    technologies: ["Godot Engine", "GDScript"],
    image: `${import.meta.env.BASE_URL}knight2d.png`,
    demoLink: "https://yuvraj-15.itch.io/knight2d",
    githubLink: "https://github.com/Yuv15/First-2D-Game-Godot-"
  },
  {
    title: "Smart Placement Diary (MERN)",
    description: "Building a MERN stack application enabling students to manage placement records; designed to handle 5+ concurrent users and track 10+ placement entries for now. (Sept 2025)",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "MongoDB Atlas"],
    image: `${import.meta.env.BASE_URL}smartplacemnet.png`,
    demoLink: "https://placelog.onrender.com/",
    githubLink: "https://github.com/Yuv15/Simple-Placement-Diary"
  },
  {
    title: "UI/UX Intern CodSoft (Virtual Internship)",
    description: "Designed and prototyped multiple sign-up and login pages during a 4-week virtual internship using Figma. Applied UI/UX principles to improve user flows and usability. (May 2024 - June 2024)",
    technologies: ["Figma", "UI/UX"],
    image: `${import.meta.env.BASE_URL}uiux intern.png`,
    demoLink: "https://www.behance.net/gallery/234753939/Music-Streaming-Platform"
  }
];

export const SimpleProjectsSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        
      }
    }
  };

  const colorGradients = [
    'from-chart-1 to-chart-2',
    'from-chart-2 to-chart-3',
    'from-chart-1 to-chart-3',
    'from-chart-2 to-chart-1'
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-chart-1/5 via-background to-chart-2/10" />
      
      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-chart-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              
            }}
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i % 3) * 30}%`
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-medium mb-4 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-muted-foreground">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden group relative"
              whileHover={{ 
                y: -10,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${colorGradients[index % colorGradients.length]} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg`} />
              
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-t ${colorGradients[index % colorGradients.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-medium text-lg group-hover:text-chart-1 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 ml-4">
                    {project.demoLink && (
                      <motion.a
                        href={project.demoLink}
                        className="p-2 rounded-lg border border-border hover:bg-chart-1 hover:text-white transition-all duration-300"
                        aria-label="View demo"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        className="p-2 rounded-lg border border-border hover:bg-chart-2 hover:text-white transition-all duration-300"
                        aria-label="View code"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className={`px-3 py-1 bg-gradient-to-r ${colorGradients[techIndex % colorGradients.length]} text-white rounded-full text-xs font-medium shadow-md`}
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};