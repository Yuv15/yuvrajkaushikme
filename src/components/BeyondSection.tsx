import React, { useState } from 'react';
import { motion , AnimatePresence} from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Calendar, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Activity {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
  lesson: string;
  description: string;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Hiking the Himalayas",
    location: "Nepal",
    date: "March 2024",
    image: "https://images.unsplash.com/photo-1752281739029-0594d372b96c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGhpa2luZyUyMGFkdmVudHVyZSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NTg5OTMzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lesson: "Learned patience",
    description: "Three weeks in the Annapurna region taught me that the most complex systems often require the simplest solutions."
  },
  {
    id: 2,
    title: "Organizing TechConnect SF",
    location: "San Francisco",
    date: "November 2023",
    image: "https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbiUyMHNwZWFrZXJ8ZW58MXx8fHwxNzU4OTkzMzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lesson: "Tested leadership",
    description: "Leading a team of 20 volunteers to create a 500-person conference showed me the power of shared vision."
  },
  {
    id: 3,
    title: "Teaching Kids to Code",
    location: "Local Library",
    date: "Ongoing",
    image: "https://images.unsplash.com/photo-1648469941040-b1c1fac2d4b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ25lciUyMHdvcmtzcGFjZSUyMGNsZWFuJTIwbWluaW1hbHxlbnwxfHx8fDE3NTg5OTMzMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lesson: "Discovered empathy",
    description: "Weekly coding sessions with 8-12 year olds remind me why simplicity and joy should be at the heart of every interface."
  },
  {
    id: 4,
    title: "48-Hour Game Jam",
    location: "UC Berkeley",
    date: "September 2023",
    image: "https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2plY3QlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4OTkzMzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    lesson: "Embraced creativity",
    description: "Building a game in 48 hours with strangers taught me that constraints often unlock the most innovative solutions."
  }
];

export const BeyondSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === activities.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? activities.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <section id="beyond" className="py-24 bg-gradient-to-b from-accent/10 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif mb-6">Beyond the Screen</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world experiences that shape my approach to digital design
          </p>
        </motion.div>

        {/* Interactive Gallery Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute inset-0 grid lg:grid-cols-2 gap-8 p-8"
              >
                {/* Image Side */}
                <div className="relative group">
                  <motion.div
                    className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={activities[currentIndex].image}
                      alt={activities[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Date & Location Badge */}
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-chart-1" />
                        <span>{activities[currentIndex].date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm mt-1">
                        <MapPin className="w-4 h-4 text-chart-2" />
                        <span>{activities[currentIndex].location}</span>
                      </div>
                    </div>

                    {/* Lesson Learned */}
                    <motion.div
                      className="absolute bottom-6 left-6 right-6"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                        <div className="flex items-center space-x-3">
                          <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                          <span className="font-medium text-sm">{activities[currentIndex].lesson}</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="flex flex-col justify-center space-y-6">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl lg:text-3xl font-serif mb-4">
                      {activities[currentIndex].title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {activities[currentIndex].description}
                    </p>
                  </motion.div>

                  {/* Progress Indicators */}
                  <div className="flex space-x-2">
                    {activities.map((_, index) => (
                      <motion.button
                        key={index}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex 
                            ? 'w-8 bg-chart-1' 
                            : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                        }`}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-10"
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-10"
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Activity Cards Preview */}
          <motion.div
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {activities.map((activity, index) => (
              <motion.button
                key={activity.id}
                className={`relative h-24 rounded-xl overflow-hidden transition-all ${
                  index === currentIndex ? 'ring-2 ring-chart-1 scale-105' : 'opacity-60 hover:opacity-100'
                }`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: index === currentIndex ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-medium truncate">
                    {activity.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};