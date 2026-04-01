import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, MapPinIcon, FootprintsIcon, UsersIcon } from 'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
import { GlassCard } from '../components/GlassCard';
export function AboutSection() {
  const infoCards = [
  {
    icon: UserIcon,
    label: 'Age',
    value: '13'
  },
  {
    icon: MapPinIcon,
    label: 'Position',
    value: 'Center Mid'
  },
  {
    icon: FootprintsIcon,
    label: 'Preferred Foot',
    value: 'Right'
  },
  {
    icon: UsersIcon,
    label: 'Academy',
    value: 'GSA'
  }];

  return (
    <SectionWrapper id="about" className="bg-gray-950">
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
          
          ABOUT <span className="text-neon-green">ME</span>
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Bio */}
        <motion.div
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
            duration: 0.6
          }}>
          
          <GlassCard hover={false}>
            <div className="flex items-center justify-center mb-6">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-neon-green/20 to-neon-green/5 border-4 border-neon-green/30 flex items-center justify-center">
                <UserIcon size={64} className="text-neon-green" />
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Milkias Tekle is a dynamic young footballer with exceptional
              technical skills and tactical awareness. Known for his speed,
              vision, and ability to create scoring opportunities, he has
              quickly risen through the youth academy ranks. With a passion for
              the beautiful game and dedication to continuous improvement,
              Milkias is committed to reaching the highest levels of
              professional football.
            </p>
          </GlassCard>
        </motion.div>

        {/* Info Cards */}
        <motion.div
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
            duration: 0.6
          }}
          className="grid grid-cols-2 gap-4">
          
          {infoCards.map((card, index) =>
          <motion.div
            key={card.label}
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
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}>
            
              <GlassCard>
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neon-green/10 flex items-center justify-center">
                    <card.icon size={24} className="text-neon-green" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {card.value}
                    </div>
                    <div className="text-gray-400 text-sm">{card.label}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>);

}