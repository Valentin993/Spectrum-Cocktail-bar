import React, { useState } from 'react';
import { ArrowRight, Search, Sparkles, Filter } from 'lucide-react';
import { COCKTAILS_DATA } from '../data';
import { CocktailItem } from '../types';
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 110, 
      damping: 18 
    } 
  }
};

interface CulinaryMenuProps {
  onBookTable: () => void;
}

export default function CulinaryMenu({ onBookTable }: CulinaryMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'original' | 'classic' | 'temperance'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter cocktails based on active selection and query
  const filteredCocktails = COCKTAILS_DATA.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesQuery = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const categories = [
    { id: 'all', label: 'ALL SELECTIONS' },
    { id: 'original', label: 'HOUSE ORIGINALS' },
    { id: 'classic', label: 'TIMELESS CLASSICS' },
    { id: 'temperance', label: 'TEMPERANCE (0% ABV)' }
  ] as const;

  return (
    <div className="relative w-full font-sans" id="cocktail-menu-section">
      {/* Decorative Title Banner */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-20 text-left" id="cocktail-menu-intro">
        <p className="text-primary text-xs font-semibold tracking-[0.25em] mb-4 uppercase font-sans">
          VOLUME III: COMPLETE FLUID ARCHITECTURE
        </p>
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-ivory tracking-tight mb-6">
          The Liquid Archives
        </h1>
        <div className="w-20 h-[1.5px] bg-primary mb-8" />
        <p className="text-ivory/70 font-sans font-light text-base md:text-lg max-w-2xl leading-relaxed">
          Explore our complete curated selection of scientific extractions, botanical infusions, and temperature-controlled standards designed for an exclusive sensory experience.
        </p>
      </section>

      {/* Filter and Search Bar Row */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 mb-12" id="menu-filter-section">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center border-b border-ivory/10 pb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4" id="category-tabs">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 text-[10px] md:text-xs font-semibold tracking-widest transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-primary text-[#2f2100]'
                      : 'bg-transparent border border-ivory/15 text-ivory/80 hover:border-primary hover:text-primary'
                  }`}
                  style={{ borderRadius: '0px' }}
                  id={`filter-${cat.id}`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Interactive Search Box */}
          <div className="relative w-full lg:max-w-xs" id="search-container">
            <input
              type="text"
              placeholder="Search by ingredient, name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#161816] border border-ivory/20 focus:border-primary py-2.5 pl-10 pr-4 text-xs text-ivory placeholder-ivory/40 outline-none transition-colors duration-200"
              style={{ borderRadius: '0px' }}
              id="cocktail-search-input"
            />
            <Search className="w-4 h-4 text-ivory/40 absolute left-3.5 top-3" />
          </div>
        </div>
      </section>

      {/* Gourmet Cocktails Grid */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 pb-24" id="cocktail-items-grid">
        {filteredCocktails.length > 0 ? (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            id="cocktails-archive-grid"
          >
            {filteredCocktails.map((item) => (
              <motion.div
                variants={itemVariants}
                key={item.id}
                className="group flex flex-col justify-between border border-ivory/10 hover:border-primary/40 bg-dark p-8 transition-all duration-300 min-h-[360px]"
                style={{ borderRadius: '0px' }}
                id={`archive-card-${item.id}`}
              >
                <div>
                  {/* Category badge & Price row */}
                  <div className="flex justify-between items-baseline mb-6">
                    <span className="bg-primary/10 border border-primary/20 text-primary px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase">
                      {item.category}
                    </span>
                    <span className="font-sans text-sm font-semibold text-primary">
                      €{item.price}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-ivory group-hover:text-primary transition-colors duration-200 mb-3">
                    {item.name}
                  </h3>

                  {/* Ingredients tags */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-6 text-[10px] font-medium tracking-wider text-primary/80 uppercase font-sans">
                    {item.ingredients.map((ing, i) => (
                      <span key={i} className="after:content-['•'] after:ml-2 last:after:content-none last:after:ml-0">
                        {ing}
                      </span>
                    ))}
                  </div>

                  {/* Narrative description */}
                  <p className="text-ivory/60 text-xs md:text-sm font-light leading-relaxed font-sans mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Card footer details */}
                <div className="flex justify-between items-center text-[10px] tracking-widest uppercase font-sans border-t border-ivory/5 pt-4 text-primary/60 font-medium group-hover:text-primary transition-colors duration-200">
                  <span>ATELIER SERVE</span>
                  <Sparkles className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-20 border border-ivory/10 max-w-md mx-auto" id="no-results-box">
            <p className="text-ivory/50 text-xs tracking-widest font-sans mb-4">NO COCKTAILS FOUND MATCHING YOUR SPECIFICATIONS</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="text-xs text-primary underline hover:text-accent font-semibold tracking-wider font-sans cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dynamic CTA Banner inside tab */}
        <div className="mt-20 border border-primary/30 p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-left" id="cocktail-cta">
          <div>
            <h4 className="font-serif text-2xl font-semibold text-ivory mb-2">
              Bespoke Spirits Consultation
            </h4>
            <p className="text-ivory/60 text-xs md:text-sm font-sans max-w-xl">
              Connect with our master mixologists to customize a custom tasting flight matched exactly to your personal aromatic preferences.
            </p>
          </div>
          <button
            onClick={onBookTable}
            className="w-full md:w-auto bg-primary hover:bg-accent text-[#2f2100] px-8 py-3.5 text-xs font-semibold tracking-widest transition-all duration-300 font-sans cursor-pointer"
            style={{ borderRadius: '0px' }}
            id="cocktail-consult-btn"
          >
            SECURE CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
}
