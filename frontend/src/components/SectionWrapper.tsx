import React from 'react';
import { motion } from 'framer-motion';
interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
}
export function SectionWrapper({
  children,
  id,
  className = ''
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{
        opacity: 0,
        y: 40
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-100px'
      }}
      transition={{
        duration: 0.6,
        ease: 'easeOut'
      }}
      className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.section>);

}