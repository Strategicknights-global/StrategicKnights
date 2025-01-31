'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const welcomeSlides = [
  {
    text: 'Welcome to Strategic Knights',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1366',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    text: 'Digital Marketing Excellence',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2426&h=1366',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    text: 'Transform Your Business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2426&h=1366',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    text: 'Let\'s Create Together',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2426&h=1366',
    gradient: 'from-pink-500 to-orange-500'
  }
];

export function WelcomeAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem('hasVisited');
    if (visited) {
      setShowAnimation(false);
      return;
    }

    const timer = setInterval(() => {
      if (currentIndex < welcomeSlides.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(timer);
        setTimeout(() => {
          setShowAnimation(false);
          sessionStorage.setItem('hasVisited', 'true');
        }, 1500);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  if (!showAnimation) return null;

  return (
    <div className="fixed inset-0 z-50">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${welcomeSlides[currentIndex].image})` }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${welcomeSlides[currentIndex].gradient} opacity-75`} />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center p-8 rounded-3xl glass-card"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                {welcomeSlides[currentIndex].text}
              </h1>
              <div className="flex justify-center gap-2 mt-8">
                {welcomeSlides.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}