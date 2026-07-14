/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MixologyMenu from './components/MixologyMenu';
import CulinaryMenu from './components/CulinaryMenu';
import Reservations from './components/Reservations';
import { Reservation, Inquiry } from './types';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'mixology' | 'menu' | 'reservations'>('mixology');
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show/hide "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Load initial data from localStorage if available
  useEffect(() => {
    const savedReservations = localStorage.getItem('spectrum_reservations');
    if (savedReservations) {
      setReservations(JSON.parse(savedReservations));
    } else {
      // Seed initial high-fidelity reservation to look spectacular
      const initialRes: Reservation[] = [
        {
          id: 'RES-8294',
          date: '2026-07-18',
          partySize: 2,
          time: '20:00',
          occasion: 'Anniversary',
          status: 'confirmed',
          createdAt: new Date().toISOString()
        }
      ];
      setReservations(initialRes);
      localStorage.setItem('spectrum_reservations', JSON.stringify(initialRes));
    }

    const savedInquiries = localStorage.getItem('spectrum_inquiries');
    if (savedInquiries) {
      setInquiries(JSON.parse(savedInquiries));
    }
  }, []);

  // Sync reservations to localStorage
  const addReservation = (newRes: Omit<Reservation, 'id' | 'createdAt' | 'status'>) => {
    const created: Reservation = {
      ...newRes,
      id: `RES-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };
    const updated = [created, ...reservations];
    setReservations(updated);
    localStorage.setItem('spectrum_reservations', JSON.stringify(updated));
  };

  const deleteReservation = (id: string) => {
    const updated = reservations.filter((r) => r.id !== id);
    setReservations(updated);
    localStorage.setItem('spectrum_reservations', JSON.stringify(updated));
  };

  const addInquiry = (newInq: Omit<Inquiry, 'id' | 'createdAt' | 'status'>) => {
    const created: Inquiry = {
      ...newInq,
      id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      status: 'received',
      createdAt: new Date().toISOString()
    };
    const updated = [created, ...inquiries];
    setInquiries(updated);
    localStorage.setItem('spectrum_inquiries', JSON.stringify(updated));
  };

  // Scroll to top on tab changes
  const handleTabChange = (tab: 'mixology' | 'menu' | 'reservations') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark text-ivory flex flex-col font-sans selection:bg-primary selection:text-dark">
      {/* Premium Header */}
      <Header activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Main View Router */}
      <main className="flex-grow overflow-x-hidden relative">
        <AnimatePresence mode="wait">
          {activeTab === 'mixology' && (
            <motion.div
              key="mixology"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <MixologyMenu onBookTable={() => handleTabChange('reservations')} />
            </motion.div>
          )}
          {activeTab === 'menu' && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <CulinaryMenu onBookTable={() => handleTabChange('reservations')} />
            </motion.div>
          )}
          {activeTab === 'reservations' && (
            <motion.div
              key="reservations"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <Reservations
                reservations={reservations}
                addReservation={addReservation}
                deleteReservation={deleteReservation}
                inquiries={inquiries}
                addInquiry={addInquiry}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Elegant Bottom Call to Action Section (Matches Screen 2 Footer Banner) */}
      <section className="bg-gradient-to-t from-[#0c0f0d] to-dark py-24 px-6 md:px-12 border-t border-ivory/10 text-center flex flex-col items-center">
        <p className="text-primary text-xs font-semibold tracking-[0.25em] mb-4 uppercase font-sans">
          IMMERSE YOURSELF
        </p>
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-ivory tracking-tight mb-10 max-w-2xl leading-tight">
          The Art of the Evening.
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md justify-center">
          <button
            onClick={() => handleTabChange('reservations')}
            className="bg-primary hover:bg-accent text-[#2f2100] px-8 py-4 text-xs font-semibold tracking-widest transition-all duration-300 active:scale-95 cursor-pointer font-sans"
            style={{ borderRadius: '0px' }}
          >
            INSTANT BOOKING
          </button>
          <button
            onClick={() => handleTabChange('menu')}
            className="border border-ivory/30 hover:border-primary text-ivory px-8 py-4 text-xs font-semibold tracking-widest transition-all duration-300 active:scale-95 cursor-pointer font-sans"
            style={{ borderRadius: '0px' }}
          >
            EXPLORE THE MENU
          </button>
        </div>
      </section>

      {/* Premium Footer */}
      <Footer setActiveTab={handleTabChange} />

      {/* Elegant Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 bg-dark hover:bg-primary text-primary hover:text-dark border border-primary/50 hover:border-primary p-3 transition-all duration-300 shadow-xl cursor-pointer group animate-fade-in"
          style={{ borderRadius: '0px' }}
          aria-label="Back to top"
          id="scroll-to-top-btn"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </button>
      )}
    </div>
  );
}

