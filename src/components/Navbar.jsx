import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROCESS', href: '#process' },
    { name: 'CONTACT', href: '#contact' },
  ];

  // Handle scroll event to change navbar background appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll spy active navigation highlighting
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.slice(1));
    
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        // If the section is intersecting the sweet-spot of the viewport, mark it active
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Calculate dynamic margins based on screen height for high scroll accuracy
    const observerOptions = {
      root: null,
      rootMargin: '-35% 0px -55% 0px', // sweet spot centered in the viewport
      threshold: 0
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out border-b ${
          scrolled
            ? 'py-4 bg-primary-bg/85 backdrop-blur-lg border-glass'
            : 'py-6 bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-body tracking-[0.25em] font-semibold text-[13px] md:text-[14px] text-ivory hover:text-rose transition-colors duration-300 relative group"
          >
            POORNIMA
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rose transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-body text-[11px] tracking-[0.20em] transition-all duration-300 relative group py-2 ${
                    isActive ? 'text-rose font-semibold' : 'text-warm-beige hover:text-rose'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1px] bg-rose transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="font-body text-[11px] tracking-[0.2em] font-semibold text-rose hover:text-ivory transition-all duration-300 flex items-center gap-2 group py-1.5 px-4 border border-rose/30 hover:border-ivory/50 rounded-full bg-rose/5"
            >
              LET'S TALK
              <span className="inline-block transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 flex flex-col justify-between w-6 h-4 group cursor-pointer focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-full h-[1.5px] bg-ivory transition-transform duration-300 ease-out origin-left ${
                isOpen ? 'rotate-[40deg] translate-y-[-1px]' : ''
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-ivory transition-opacity duration-300 ease-out ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-full h-[1.5px] bg-ivory transition-transform duration-300 ease-out origin-left ${
                isOpen ? 'rotate-[-40deg] translate-y-[1px]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-primary-bg/95 backdrop-blur-2xl z-40 flex items-center justify-center md:hidden"
          >
            {/* Ambient Background Glow for mobile drawer */}
            <div className="absolute top-[20%] right-[10%] w-64 h-64 bg-wine/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] left-[10%] w-64 h-64 bg-burgundy/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex flex-col items-center gap-8 text-center px-6">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-body text-[16px] tracking-[0.25em] transition-colors duration-300 ${
                      isActive ? 'text-rose font-semibold' : 'text-warm-beige hover:text-rose'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                className="mt-6"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="font-body text-[12px] tracking-[0.2em] font-semibold text-rose hover:text-ivory transition-all duration-300 inline-flex items-center gap-2 py-2.5 px-6 border border-rose/30 hover:border-ivory/50 rounded-full bg-rose/5"
                >
                  LET'S TALK
                  <span>→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;