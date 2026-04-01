import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2Icon } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
export function GoalsSection() {
  const goals = [
  'Join a top European academy',
  'Represent national team at international level',
  'Develop leadership skills on and off the pitch',
  'Inspire young athletes in my community'];

  return (
    <SectionWrapper className="bg-gray-900">
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
          
          GOALS & <span className="text-neon-green">AMBITIONS</span>
        </motion.h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {goals.map((goal, index) =>
          <motion.div
            key={index}
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
            className="flex items-start gap-4 glass rounded-xl p-6 glass-hover">
            
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
              }}>
              
                <CheckCircle2Icon
                size={28}
                className="text-neon-green flex-shrink-0" />
              
              </motion.div>
              <p className="text-gray-200 text-lg sm:text-xl font-medium leading-relaxed">
                {goal}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </SectionWrapper>);

}