import React from 'react';
import { motion } from 'framer-motion';
import { ZapIcon, TargetIcon, EyeIcon, BrainIcon } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
import { GlassCard } from '../components/GlassCard';
export function PlayingStyleSection() {
  const styles = [
  {
    icon: ZapIcon,
    title: 'Speed',
    description:
    'Explosive acceleration and pace to beat defenders in one-on-one situations.'
  },
  {
    icon: TargetIcon,
    title: 'Dribbling',
    description:
    'Close ball control and technical ability to navigate tight spaces.'
  },
  {
    icon: EyeIcon,
    title: 'Vision',
    description:
    'Exceptional field awareness and ability to spot key passing opportunities.'
  },
  {
    icon: BrainIcon,
    title: 'Tactical Awareness',
    description:
    'Strong understanding of positioning and game flow to make smart decisions.'
  }];

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
          
          PLAYING <span className="text-neon-green">STYLE</span>
        </motion.h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {styles.map((style, index) =>
        <motion.div
          key={style.title}
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
            duration: 0.5,
            delay: index * 0.1
          }}>
          
            <GlassCard>
              <div className="text-center space-y-4">
                <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5
                }}
                className="w-16 h-16 mx-auto rounded-full bg-neon-green/10 flex items-center justify-center">
                
                  <style.icon size={32} className="text-neon-green" />
                </motion.div>
                <h3 className="font-oswald text-2xl text-white">
                  {style.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {style.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </SectionWrapper>);

}