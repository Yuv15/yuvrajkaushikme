import React from 'react';
import { motion } from "framer-motion";
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-accent/20 border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>by Alex Rivera</span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            © 2024 Alex Rivera. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};