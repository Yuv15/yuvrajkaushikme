import React from 'react';
import { motion } from "framer-motion";
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../lib/themeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="text-xl font-serif tracking-tight"
          >
            Alex Rivera
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
            <a href="#toolkit" className="text-muted-foreground hover:text-foreground transition-colors">Toolkit</a>
            <a href="#beyond" className="text-muted-foreground hover:text-foreground transition-colors">Beyond</a>
            <a href="#connect" className="text-muted-foreground hover:text-foreground transition-colors">Connect</a>
          </nav>

          {/* Unique Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="relative w-14 h-14 bg-accent rounded-full flex items-center justify-center overflow-hidden group"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-primary"
              initial={false}
              animate={{
                scale: theme === 'dark' ? 1 : 0,
                rotate: theme === 'dark' ? 0 : 180,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ borderRadius: '50%' }}
            />
            <motion.div
              className="relative z-10 flex items-center justify-center"
              animate={{ rotate: theme === 'dark' ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-foreground" />
              ) : (
                <Sun className="w-5 h-5 text-primary-foreground" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};