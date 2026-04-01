import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
export function TrainingSection() {
  const timeline = [
  {
    year: '2018',
    title: 'Started Football Training',
    description:
    'Began organized football training at local youth club, developing fundamental skills.'
  },
  {
    year: '2020',
    title: 'Joined Youth Academy',
    description:
    'Selected for prestigious youth academy program, training with elite coaches.'
  },
  {
    year: '2021',
    title: 'First Competitive Match',
    description:
    'Made debut in competitive youth league, scoring in first appearance.'
  },
  {
    year: '2023',
    title: 'Top Scorer Award',
    description:
    'Finished as top scorer in youth league with 18 goals in 20 matches.'
  },
  {
    year: '2024',
    title: 'National Team Selection',
    description:
    'Called up to national youth team for international tournament.'
  }];

  return (
    <SectionWrapper className="bg-gray-950">
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
          
          TRAINING & <span className="text-neon-green">DEVELOPMENT</span>
        </motion.h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neon-green/30 hidden sm:block" />

          {/* Timeline Items */}
          <div className="space-y-8">
            {timeline.map((item, index) =>
            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                x: -30
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
              className="relative">
              
                <div className="flex items-start gap-6">
                  {/* Timeline Dot */}
                  <motion.div
                  initial={{
                    scale: 0
                  }}
                  whileInView={{
                    scale: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1 + 0.2
                  }}
                  className="hidden sm:flex w-16 h-16 rounded-full bg-neon-green flex-shrink-0 items-center justify-center font-bold text-gray-950 text-lg z-10">
                  
                    {item.year}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                  whileHover={{
                    x: 4
                  }}
                  className="flex-1 glass rounded-xl p-6">
                  
                    <div className="sm:hidden text-neon-green font-bold text-lg mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-oswald text-2xl text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>);

}