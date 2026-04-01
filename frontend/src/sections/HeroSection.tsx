import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircleIcon, BarChart3Icon } from 'lucide-react';
export function HeroSection() {
  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear'
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
        
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          <motion.h1
            className="font-bebas text-6xl sm:text-8xl lg:text-9xl text-white tracking-wider mb-4"
            initial={{
              opacity: 0,
              y: 50
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4
            }}>
            
            MILKIAS
            <span className="block text-neon-green">TEKLE</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light mb-12">
          
          Rising Football Talent
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          
          <motion.button
            onClick={() => handleScroll('#highlights')}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="w-full sm:w-auto bg-neon-green text-gray-950 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-neon-green/90 transition-colors">
            
            <PlayCircleIcon size={24} />
            Watch Highlights
          </motion.button>

          <motion.button
            onClick={() => handleScroll('#stats')}
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            className="w-full sm:w-auto bg-transparent border-2 border-neon-green text-neon-green px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-neon-green/10 transition-colors">
            
            <BarChart3Icon size={24} />
            View Stats
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          y: [0, 10, 0]
        }}
        transition={{
          opacity: {
            delay: 1.2,
            duration: 0.5
          },
          y: {
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut'
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        
        <div className="w-6 h-10 border-2 border-neon-green rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: 'easeInOut'
            }}
            className="w-1.5 h-1.5 bg-neon-green rounded-full" />
          
        </div>
      </motion.div>
    </section>);

}