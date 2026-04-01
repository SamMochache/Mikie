import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircleIcon } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
import { GlassCard } from '../components/GlassCard';
export function HighlightsSection() {
  const highlights = [
  {
    id: 1,
    title: 'Goal vs Academy Rivals',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    id: 2,
    title: 'Assist Compilation',
    color: 'from-green-500/20 to-teal-500/20'
  },
  {
    id: 3,
    title: 'Skills & Dribbling',
    color: 'from-orange-500/20 to-red-500/20'
  },
  {
    id: 4,
    title: 'Match Highlights',
    color: 'from-pink-500/20 to-purple-500/20'
  }];

  return (
    <SectionWrapper id="highlights" className="bg-gray-900">
      <div className="text-center mb-12">
        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white mb-4">
          
          <span className="text-neon-green">HIGHLIGHTS</span>
        </motion.h2>
      </div>

      {/* Main Video */}
      <motion.div
        initial={{
          opacity: 0,
          y: 30
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        transition={{
          duration: 0.6
        }}
        className="mb-8">
        
        <GlassCard hover={false}>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent" />
            <motion.div
              whileHover={{
                scale: 1.1
              }}
              className="relative z-10 cursor-pointer">
              
              <PlayCircleIcon size={80} className="text-neon-green" />
            </motion.div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-oswald text-xl sm:text-2xl text-white">
                Season Highlights 2024
              </h3>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Highlight Gallery */}
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max lg:grid lg:grid-cols-4 lg:min-w-0">
          {highlights.map((highlight, index) =>
          <motion.div
            key={highlight.id}
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="w-64 lg:w-auto">
            
              <GlassCard>
                <div
                className={`aspect-video bg-gradient-to-br ${highlight.color} rounded-lg flex items-center justify-center relative overflow-hidden cursor-pointer`}>
                
                  <motion.div
                  whileHover={{
                    scale: 1.2
                  }}
                  transition={{
                    duration: 0.3
                  }}>
                  
                    <PlayCircleIcon size={48} className="text-neon-green" />
                  </motion.div>
                </div>
                <p className="text-gray-300 text-sm mt-3 font-medium text-center">
                  {highlight.title}
                </p>
              </GlassCard>
            </motion.div>
          )}
        </div>
      </div>
    </SectionWrapper>);

}