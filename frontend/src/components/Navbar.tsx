import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Stats',
    href: '#stats'
  },
  {
    name: 'Highlights',
    href: '#highlights'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  const handleNavClick = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string) =>
  {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <motion.a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="font-bebas text-2xl sm:text-3xl text-neon-green tracking-wider"
            whileHover={{
              scale: 1.05
            }}>
            
            MILKIAS TEKLE
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-neon-green transition-colors font-medium"
              whileHover={{
                y: -2
              }}>
              
                {link.name}
              </motion.a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-neon-green"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            
            {isMobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        exit={{
          opacity: 0,
          height: 0
        }}
        className="md:hidden bg-gray-950/98 backdrop-blur-md border-t border-gray-800">
        
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="block text-gray-300 hover:text-neon-green transition-colors font-medium py-2">
            
                {link.name}
              </a>
          )}
          </div>
        </motion.div>
      }
    </motion.nav>);

}