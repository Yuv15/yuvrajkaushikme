import React from 'react';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';
import { motion } from "framer-motion";
import { FaBehance } from 'react-icons/fa';

export const SimpleContactSection: React.FC = () => {
  const contactLinks = [
    {
      href: "https://mail.google.com/mail/u/0/#inbox",
      icon: Mail,
      label: "Email",
      value: "kaushikyuvraj15@gmail.com",
      gradient: "from-chart-1 to-chart-2",
      hoverColor: "hover:text-chart-1"
    },
    {
      href: "https://linkedin.com/in/yuvrajkaushik",
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/yuvrajkaushik",
      gradient: "from-chart-2 to-chart-3",
      hoverColor: "hover:text-chart-2"
    },
    {
      href: "https://github.com/yuvrajkaushik",
      icon: Github,
      label: "GitHub",
      value: "github.com/yuvrajkaushik",
      gradient: "from-chart-1 to-chart-3",
      hoverColor: "hover:text-chart-3"
    },
    {
      href: "https://www.behance.net/yuvrajkaushik",
      icon: FaBehance,
      label: "Behance",
      value: "behance.net/yuvrajkaushik",
      gradient: "from-chart-1 to-chart-3",
      hoverColor: "hover:text-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-chart-1/10 via-background to-chart-2/10" />
      
      {/* Floating Message Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-chart-1"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 5,
              delay: i * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + (i * 18)}%`,
              top: `${20 + (i % 2) * 40}%`
            }}
          >
            <MessageCircle className="w-5 h-5" />
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
            Contact Me
          </h2>
          <p className="text-muted-foreground">
            Let's connect and discuss opportunities or collaborations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="font-medium mb-6 bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center space-x-4 p-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg group relative overflow-hidden`}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 15px 30px -12px rgba(0, 0, 0, 0.1)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${link.gradient} rounded-lg flex items-center justify-center shadow-lg relative z-10`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <link.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <div className="relative z-10">
                      <div className={`font-medium ${link.hoverColor} transition-colors`}>
                        {link.label}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {link.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
