import React from 'react';
import { InstagramIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function Footer() {
  const socialLinks = [
  {
    icon: InstagramIcon,
    href: '#',
    label: 'Instagram'
  },
  {
    icon: TwitterIcon,
    href: '#',
    label: 'Twitter'
  },
  {
    icon: YoutubeIcon,
    href: '#',
    label: 'YouTube'
  }];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-bebas text-2xl text-neon-green tracking-wider">
            MILKIAS TEKLE
          </h3>

          <div className="flex space-x-6">
            {socialLinks.map((social) =>
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="text-gray-400 hover:text-neon-green transition-colors"
              whileHover={{
                scale: 1.2,
                y: -2
              }}
              whileTap={{
                scale: 0.95
              }}>
              
                <social.icon size={24} />
              </motion.a>
            )}
          </div>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Milkias Tekle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}