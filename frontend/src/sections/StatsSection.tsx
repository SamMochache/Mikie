import React from 'react';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import { SectionWrapper } from '../components/SectionWrapper';
import { StatCard } from '../components/StatCard';
export function StatsSection() {
  const stats = [
  {
    value: 70,
    label: 'Matches Played'
  },
  {
    value: 47,
    label: 'Goals'
  },
  {
    value: 90,
    label: 'Assists'
  },
  {
    value: 80,
    label: 'Pass Accuracy',
    suffix: '%'
  }];

  const performanceData = [
  {
    month: 'Aug',
    goals: 1,
    assists: 1
  },
  {
    month: 'Sep',
    goals: 2,
    assists: 1
  },
  {
    month: 'Oct',
    goals: 3,
    assists: 2
  },
  {
    month: 'Nov',
    goals: 2,
    assists: 2
  },
  {
    month: 'Dec',
    goals: 4,
    assists: 2
  }];

  return (
    <SectionWrapper id="stats" className="bg-gray-950">
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
          
          SEASON <span className="text-neon-green">STATS</span>
        </motion.h2>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {stats.map((stat, index) =>
        <motion.div
          key={stat.label}
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
          
            <StatCard
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix} />
          
          </motion.div>
        )}
      </div>

      {/* Performance Chart */}
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
        className="glass rounded-xl p-6">
        
        <h3 className="font-oswald text-2xl text-white mb-6 text-center sm:text-left">
          Recent Performance
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={performanceData}>
            <defs>
              <linearGradient id="colorGoals" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#39FF14" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#39FF14" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1f2937',
                border: '1px solid #39FF14',
                borderRadius: '8px',
                color: '#f9fafb'
              }} />
            
            <Area
              type="monotone"
              dataKey="goals"
              stroke="#39FF14"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorGoals)" />
            
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>
    </SectionWrapper>);

}