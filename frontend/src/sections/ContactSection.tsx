import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SendIcon,
  MailIcon,
  PhoneIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon } from
'lucide-react';
import { SectionWrapper } from '../components/SectionWrapper';
import { GlassCard } from '../components/GlassCard';
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const socialLinks = [
  {
    icon: InstagramIcon,
    label: 'Instagram',
    href: '#'
  },
  {
    icon: TwitterIcon,
    label: 'Twitter',
    href: '#'
  },
  {
    icon: YoutubeIcon,
    label: 'YouTube',
    href: '#'
  }];

  return (
    <SectionWrapper id="contact" className="bg-gray-950">
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
          
          GET IN <span className="text-neon-green">TOUCH</span>
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Form */}
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 mb-2 font-medium">
                  
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="Your name" />
                
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 mb-2 font-medium">
                  
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors"
                  placeholder="your.email@example.com" />
                
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 mb-2 font-medium">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green transition-colors resize-none"
                  placeholder="Your message..." />
                
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02
                }}
                whileTap={{
                  scale: 0.98
                }}
                className="w-full bg-neon-green text-gray-950 px-6 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 hover:bg-neon-green/90 transition-colors">
                
                <SendIcon size={20} />
                Send Message
              </motion.button>
            </form>
          </GlassCard>
        </motion.div>

        {/* Contact Info */}
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
          className="space-y-6">
          
          <GlassCard>
            <h3 className="font-oswald text-2xl text-white mb-6">
              Guardian Contact
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <MailIcon size={20} className="text-neon-green" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">guardian@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neon-green/10 flex items-center justify-center">
                  <PhoneIcon size={20} className="text-neon-green" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="font-oswald text-2xl text-white mb-6">
              Follow My Journey
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) =>
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="w-12 h-12 rounded-full bg-neon-green/10 flex items-center justify-center text-neon-green hover:bg-neon-green/20 transition-colors"
                aria-label={social.label}>
                
                  <social.icon size={24} />
                </motion.a>
              )}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </SectionWrapper>);

}