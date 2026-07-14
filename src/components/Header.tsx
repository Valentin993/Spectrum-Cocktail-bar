import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface HeaderProps {
  activeTab: 'mixology' | 'menu' | 'reservations';
  setActiveTab: (tab: 'mixology' | 'menu' | 'reservations') => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ivory/10 bg-dark/95 backdrop-blur-md px-6 py-4 md:px-12 transition-all duration-300">
      <div className="mx-auto max-w-7xl flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => setActiveTab('mixology')}
          className="font-serif text-2xl md:text-3xl font-extrabold tracking-widest text-primary focus:outline-none cursor-pointer hover:text-accent transition-colors duration-300"
          id="brand-logo"
        >
          SPECTRUM
        </button>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-12" id="desktop-nav">
          {[
            { id: 'mixology', label: 'MIXOLOGY' },
            { id: 'menu', label: 'MENU' },
            { id: 'reservations', label: 'RESERVATIONS' }
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className="relative py-2 text-xs font-semibold tracking-[0.2em] font-sans transition-colors duration-300 hover:text-accent focus:outline-none cursor-pointer text-ivory"
                id={`nav-item-${item.id}`}
              >
                {item.label}
                {isActive && (
                  <>
                    {/* Active Line */}
                    <motion.div
                      layoutId="activeTabLine"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                    {/* Amber Dot Indicator */}
                    <motion.div
                      layoutId="activeTabDot"
                      className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  </>
                )}
              </button>
            );
          })}
        </nav>

        {/* Book a Table Call to Action */}
        <button
          onClick={() => setActiveTab('reservations')}
          className="flex items-center gap-2 bg-primary text-[#2f2100] hover:bg-accent px-6 py-2.5 text-xs font-semibold tracking-wider transition-all duration-300 active:scale-95 focus:outline-none cursor-pointer font-sans"
          style={{ borderRadius: '0px' }}
          id="header-book-table"
        >
          <Calendar className="w-4 h-4" />
          <span>BOOK A TABLE</span>
        </button>
      </div>

      {/* Mobile navigation row */}
      <div className="flex md:hidden justify-center space-x-8 mt-4 border-t border-ivory/5 pt-3" id="mobile-nav">
        {[
          { id: 'mixology', label: 'MIXOLOGY' },
          { id: 'menu', label: 'MENU' },
          { id: 'reservations', label: 'RESERVATIONS' }
        ].map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as any)}
              className="relative py-1 text-[10px] font-semibold tracking-[0.15em] transition-colors duration-300 hover:text-accent focus:outline-none text-ivory"
              id={`mobile-nav-item-${item.id}`}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeTabMobileLine"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
}
