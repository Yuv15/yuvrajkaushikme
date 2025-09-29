import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Code, Palette, Database, Brain, Globe, Zap } from 'lucide-react';

interface Skill {
  name: string;
  category: 'design' | 'development' | 'data' | 'ai' | 'platform' | 'creative';
  level: number;
  description: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'Python', category: 'development', level: 90, description: 'Programming language for web and data', icon: <Code className="w-5 h-5" /> },
  { name: 'JavaScript', category: 'development', level: 85, description: 'Frontend and backend scripting', icon: <Code className="w-5 h-5" /> },
  { name: 'React.js', category: 'development', level: 80, description: 'Building user interfaces', icon: <Code className="w-5 h-5" /> },
  { name: 'Node.js', category: 'development', level: 75, description: 'Server-side JavaScript runtime', icon: <Database className="w-5 h-5" /> },
  { name: 'Express.js', category: 'development', level: 75, description: 'Web application framework for Node.js', icon: <Database className="w-5 h-5" /> },
  { name: 'Flask', category: 'development', level: 70, description: 'Micro web framework for Python', icon: <Database className="w-5 h-5" /> },
  { name: 'MongoDB', category: 'data', level: 75, description: 'NoSQL database', icon: <Database className="w-5 h-5" /> },
  { name: 'MySQL', category: 'data', level: 70, description: 'Relational database management', icon: <Database className="w-5 h-5" /> },
  { name: 'Figma', category: 'design', level: 80, description: 'UI/UX design and prototyping', icon: <Palette className="w-5 h-5" /> },
  { name: 'Git/GitHub', category: 'platform', level: 85, description: 'Version control and collaboration', icon: <Globe className="w-5 h-5" /> },
  { name: 'Render/Vercel', category: 'platform', level: 75, description: 'Deployment platforms', icon: <Globe className="w-5 h-5" /> },
  { name: 'Power BI', category: 'data', level: 70, description: 'Business intelligence and data visualization', icon: <Brain className="w-5 h-5" /> },
  { name: 'Godot/Unreal Engine', category: 'creative', level: 65, description: 'Game development engines', icon: <Zap className="w-5 h-5" /> },
  { name: 'Canva/Vimeo', category: 'creative', level: 75, description: 'Design and video tools', icon: <Zap className="w-5 h-5" /> },
];

const categoryColors = {
  design: 'bg-[#2D3748] dark:bg-[#EEE5DA]',
  development: 'bg-[#2D3748] dark:bg-[#EEE5DA]', 
  data: 'bg-[#2D3748] dark:bg-[#EEE5DA]',
  ai: 'bg-[#2D3748] dark:bg-[#EEE5DA]',
  platform: 'bg-[#2D3748] dark:bg-[#EEE5DA]',
  creative: 'bg-[#2D3748] dark:bg-[#EEE5DA]'
};

export const ToolkitSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="toolkit" className="py-24 bg-[#2D3748]/10 dark:bg-[#EEE5DA]/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif mb-6">The Toolkit</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of technologies and methodologies I leverage to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <motion.div
                className="bg-card border border-border rounded-xl p-6 h-full cursor-pointer transition-all hover:shadow-lg"
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${categoryColors[skill.category]} flex items-center justify-center text-white`}>
                    {skill.icon}
                  </div>
                  <div className="text-xs text-muted-foreground bg-accent rounded-full px-2 py-1">
                    {skill.level}%
                  </div>
                </div>
                
                <h3 className="font-medium mb-2">{skill.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                
                {/* Progress Bar */}
                <div className="w-full bg-accent rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${categoryColors[skill.category]}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>

                {/* Tooltip */}
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-foreground text-background text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10"
                  >
                    Used in 12+ projects
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-serif mb-6">Learning Journey</h3>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="space-y-2">
                <div className="w-3 h-3 bg-[#EEE5DA] rounded-full mx-auto mb-2" />
                <h4 className="font-medium">Computer Science and Design</h4>
                <p className="text-sm text-muted-foreground">Dayananda Sagar Academy of Technology and Management • 2022-2026</p>
                <p className="text-sm text-muted-foreground">CGPA: 8.84/10 • Coursework: ML, AI, Deep Learning, Blockchain, UI/UX</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
