import React from 'react';
import { Trophy, Users } from 'lucide-react';
import { motion } from "framer-motion";

interface Activity {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const activitiesData: Activity[] = [
  {
    title: "Tech Fest Organizer",
    description: "Organized and led a 3-day Tech Fest with 500+ participants from 10+ colleges, securing a sponsorship from Domino's",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "Discord Community Manager",
    description: "Managed a Discord community of 1,000+ active members, ensuring smooth engagement and a positive environment",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "eSports Event Head",
    description: "Headed an eSports event for 10+ teams",
    icon: <Users className="w-5 h-5" />
  }
];

export const ActivitiesSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      }
    }
  };

  return (
    <section id="activities" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[#2D3748]/10 dark:bg-[#EEE5DA]/10" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <Trophy className="w-32 h-32 text-[#2D3748]/20 dark:text-[#EEE5DA]/20" />
        </div>
        <div className="absolute bottom-20 right-20">
          <Users className="w-24 h-24 text-[#2D3748]/20 dark:text-[#EEE5DA]/20" />
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
            Activities
          </h2>
          <p className="text-muted-foreground">
            My involvement in extracurricular activities and community initiatives
          </p>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {activitiesData.map((activity) => (
            <motion.div
              key={activity.title}
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
                    <div className="text-card-foreground relative z-10">
                      {activity.icon}
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-white/20 dark:bg-black/20"
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-lg group-hover:text-[#2D3748] dark:group-hover:text-[#EEE5DA] transition-colors mb-2">
                    {activity.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Activity Proof Images */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-medium mb-6 text-center text-[#2D3748] dark:text-[#EEE5DA]">
            Gallery
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              className="aspect-square rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}activity.jpg`}
                alt="Activity proof 1"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="aspect-square rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}activity2.jpg`}
                alt="Activity proof 2"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="aspect-square rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}activity3.jpg`}
                alt="Activity proof 3"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="aspect-square rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`${import.meta.env.BASE_URL}activity4.jpg`}
                alt="Activity proof 4"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
