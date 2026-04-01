import React from 'react';
import { motion } from 'framer-motion';
interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}
export function GlassCard({
  children,
  className = '',
  hover = true
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-xl p-6 ${hover ? 'glass-hover' : ''} ${className}`}
      whileHover={
      hover ?
      {
        y: -4
      } :
      {}
      }>
      
      {children}
    </motion.div>);

}