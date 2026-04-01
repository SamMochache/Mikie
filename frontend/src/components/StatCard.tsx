import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GlassCard } from './GlassCard';
interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
}
export function StatCard({
  value,
  label,
  suffix = '',
  duration = 2
}: StatCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true
  });
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min(
          (currentTime - startTime) / (duration * 1000),
          1
        );
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, value, duration]);
  return (
    <GlassCard ref={ref}>
      <div className="text-center">
        <motion.div
          initial={{
            scale: 0.5,
            opacity: 0
          }}
          whileInView={{
            scale: 1,
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="text-4xl sm:text-5xl font-bold text-neon-green mb-2">
          
          {count}
          {suffix}
        </motion.div>
        <div className="text-gray-400 text-sm sm:text-base font-medium">
          {label}
        </div>
      </div>
    </GlassCard>);

}