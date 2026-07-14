import React, { useState } from 'react';
import { Wine, GlassWater, Layers, Sparkles, Plus, X, ArrowRight, HelpCircle } from 'lucide-react';
import { COCKTAILS_DATA } from '../data';
import { CocktailItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

import heroAlchemistImg from '../assets/images/hero_cocktail_alchemist_1784052063921.jpg';
import midnightBloomImg from '../assets/images/temperance_midnight_bloom_1784052273708.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 18 
    } 
  }
};

interface MixologyMenuProps {
  onBookTable: () => void;
}

export default function MixologyMenu({ onBookTable }: MixologyMenuProps) {
  const [selectedCocktail, setSelectedCocktail] = useState<CocktailItem | null>(null);

  const originalCocktails = COCKTAILS_DATA.filter((c) => c.category === 'original');
  const classicCocktails = COCKTAILS_DATA.filter((c) => c.category === 'classic');
  const temperanceCocktails = COCKTAILS_DATA.filter((c) => c.category === 'temperance');

  // Map icons to house originals
  const getOriginalIcon = (id: string) => {
    switch (id) {
      case 'obsidian-rose':
        return <Wine className="w-5 h-5 text-primary" />;
      case 'gilded-negroni':
        return <GlassWater className="w-5 h-5 text-primary" />;
      case 'the-monolith':
        return <Layers className="w-5 h-5 text-primary" />;
      default:
        return <Sparkles className="w-5 h-5 text-primary" />;
    }
  };

  // Botanical story content for interactive modal
  const getBotanicalStory = (item: CocktailItem) => {
    switch (item.id) {
      case 'obsidian-rose':
        return {
          concept: 'Liquid Density & Thermal Isolation',
          extraction: 'Black rose petals undergo an ultra-cold ultrasonic extraction to preserve heat-sensitive volatile oils, yielding deep crimson pigments and intense aroma without bitterness.',
          method: 'Stirred over hand-carved high-density ice designed to melt at 0.05ml per minute to prevent over-dilution.',
          ritual: 'The glassware is misted with organic Damask rose essence under a cold glass cloche before service.'
        };
      case 'gilded-negroni':
        return {
          concept: 'Refractive Suspensions & Botanicals',
          extraction: 'Saffron pistils are macerated in premium dry gin at 45°C for 72 hours, releasing crocin for a brilliant solar glow and complex bitter-honey undertones.',
          method: 'Crafted using a white vermouth blend fortified with wild wormwood. Suspension of 24k food-grade gold flakes occurs under precise static density tuning.',
          ritual: 'Expressed with oil from Meyer lemon zest and served in a chilled custom heavy-crystal tumbler.'
        };
      case 'the-monolith':
        return {
          concept: 'Vaporized Aromatics & Peated Reduction',
          extraction: 'An organic fig reduction is prepared with winter spices and reduced under mild vacuum pressure (0.2 bar) to prevent sugar caramelization, preserving pure fruit clarity.',
          method: 'A heavily peated single malt Scotch is layered over the fig reduction and walnut essence.',
          ritual: 'Decanted tableside using Palo Santo smoke generated via high-velocity thermal combustion, trapped under a crystal decanter.'
        };
      case 'amethyst-elixir':
        return {
          concept: 'Acid-Reactive Pigment Transitions',
          extraction: 'Delicate butterfly pea flower blossoms are cold-infused in premium dry gin for 48 hours to extract natural anthocyanins, resulting in a deep indigo/violet profile.',
          method: 'Blended with fresh elderflower cordial and chilled white cranberry nectar to maintain density gradients.',
          ritual: 'Served with a high-density lime tincture pipette. When introduced by the guest, the pH shift instantly transitions the color from indigo to vibrant magenta.'
        };
      default:
        return {
          concept: 'Flavor Clarification & Balance',
          extraction: 'Crafted with premium cold-pressed extracts, organic syrups, and clean botanical essences.',
          method: 'Hand-blended and temperature-controlled to preserve delicate floral and citrus compounds.',
          ritual: 'Garnished with custom dried elements and misted with aromatic tinctures.'
        };
    }
  };

  return (
    <div className="relative w-full" id="mixology-menu-section">
      {/* Hero Banner Section */}
      <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center bg-[#0c0f0d] overflow-hidden px-6 md:px-12 py-20" id="mixology-hero">
        {/* Background Image with elegant gradient overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroAlchemistImg}
            alt="The Alchemist's Study Cocktail"
            className="w-full h-full object-cover opacity-45"
            referrerPolicy="no-referrer"
            id="hero-bg-img"
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl w-full flex flex-col items-start text-left">
          <p className="text-primary text-xs font-semibold tracking-[0.25em] mb-4 uppercase font-sans animate-fade-in" id="hero-subtitle">
            VOLUME III: LIQUID ARCHITECTURE
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ivory tracking-tight mb-6 max-w-3xl leading-tight" id="hero-headline">
            The Alchemist's Study
          </h1>
          
          {/* Gold Divider Line */}
          <div className="w-24 h-[1.5px] bg-primary mb-8" />
          
          <p className="text-ivory/75 font-sans font-light text-base md:text-lg max-w-xl leading-relaxed mb-10" id="hero-description">
            A curation of precise measurements and sensory exploration. Each vessel tells a story of extraction, infusion, and the relentless pursuit of the perfect serve.
          </p>

          <button
            onClick={onBookTable}
            className="group flex items-center gap-3 bg-transparent hover:bg-primary/5 text-primary border border-primary px-8 py-3.5 text-xs font-semibold tracking-widest transition-all duration-300 hover:text-ivory cursor-pointer font-sans"
            style={{ borderRadius: '0px' }}
            id="hero-cta-btn"
          >
            <span>SECURE EXPERIENCE</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* House Originals Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-24" id="house-originals-section">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 border-b border-ivory/15 pb-4">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-wider text-primary" id="section-originals-title">
            HOUSE ORIGINALS
          </h2>
          <span className="text-ivory/50 text-xs font-semibold tracking-[0.2em] font-sans" id="section-originals-badge">
            SIGNATURE EXTRACTIONS
          </span>
        </div>

        {/* Grid of 3 Cocktail Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8" 
          id="originals-grid"
        >
          {originalCocktails.map((cocktail) => (
            <motion.div
              variants={itemVariants}
              key={cocktail.id}
              className="relative group bg-dark border border-ivory/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between p-8 min-h-[500px]"
              style={{ borderRadius: '0px' }}
              id={`original-card-${cocktail.id}`}
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-8">
                  {getOriginalIcon(cocktail.id)}
                  <span className="font-sans text-xs font-semibold tracking-widest text-primary">
                    €{cocktail.price}
                  </span>
                </div>

                {/* Cocktail Title */}
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-ivory mb-6 hover:text-primary transition-colors duration-200">
                  {cocktail.name}
                </h3>

                {/* Ingredients List with align-right bullet points */}
                <div className="space-y-4 mb-8">
                  {cocktail.ingredients.map((ingredient, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-2.5 border-b border-ivory/5 text-xs tracking-wider uppercase font-sans font-medium"
                    >
                      <span className="text-ivory/80">{ingredient}</span>
                      <span className="text-primary font-bold text-xs">▪</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description Block */}
              <div className="mt-auto">
                <div className="border-l-2 border-primary/50 pl-4 py-1 mb-6">
                  <p className="text-ivory/60 font-sans italic text-xs leading-relaxed">
                    {cocktail.description}
                  </p>
                </div>

                {/* Interactive Botanical exploration trigger */}
                <button
                  onClick={() => setSelectedCocktail(cocktail)}
                  className="w-full text-center text-xs font-semibold tracking-widest text-primary group-hover:text-accent border-t border-ivory/10 pt-4 flex items-center justify-center gap-2 hover:opacity-80 cursor-pointer font-sans"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-primary" />
                  <span>ALCHEMICAL STORY</span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeless Classics Section */}
      <section className="bg-gradient-to-b from-[#0c0f0d] to-dark py-24 px-6 md:px-12" id="timeless-classics-section">
        <div className="mx-auto max-w-7xl">
          {/* High-Contrast Beautiful Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="font-serif text-4xl md:text-6xl text-primary font-bold tracking-widest italic" id="classics-headline">
              TIMELESS CLASSICS
            </h2>
            <div className="w-12 h-[1px] bg-primary/40 my-4" />
            <p className="text-ivory/50 text-xs font-semibold tracking-[0.3em] font-sans" id="classics-subtitle">
              THE HISTORICAL CANON
            </p>
          </div>

          {/* 2x2 Grid of Classics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-5xl mx-auto" id="classics-grid">
            {classicCocktails.map((cocktail) => (
              <div
                key={cocktail.id}
                className="group border-b border-ivory/10 pb-8 hover:border-primary/20 transition-colors duration-300"
                id={`classic-item-${cocktail.id}`}
              >
                {/* Header Row */}
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-ivory group-hover:text-primary transition-colors duration-200">
                    {cocktail.name}
                  </h3>
                  <span className="font-sans text-sm font-semibold text-primary">
                    €{cocktail.price}
                  </span>
                </div>

                {/* Spaced ingredients upper casing */}
                <div className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-primary/80 uppercase mb-3 font-sans">
                  {cocktail.ingredients.join(', ')}
                </div>

                {/* Subtitle description */}
                <p className="text-ivory/60 text-xs md:text-sm font-light leading-relaxed font-sans">
                  {cocktail.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temperance Section (Non-alcoholics) */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-24" id="temperance-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Image Block */}
          <div className="lg:col-span-5 relative group" id="temperance-img-block">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={midnightBloomImg}
                alt="Midnight Bloom - Premium Temperance Tonic"
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                id="temperance-img"
              />
              {/* Glass subtle lighting glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
            {/* Elegant tiny caption in Swiss mono */}
            <p className="text-[10px] text-ivory/40 tracking-[0.15em] font-sans mt-3 text-right">
              ATELIER FLUID DYNAMICS — EXP. 04
            </p>
          </div>

          {/* Menu Details Block */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left" id="temperance-content-block">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-primary mb-2" id="temperance-title">
              Temperance
            </h2>
            <p className="text-ivory/50 text-xs font-semibold tracking-[0.2em] font-sans mb-6" id="temperance-subtitle">
              COMPLEXITY WITHOUT PROOF
            </p>
            
            <div className="w-16 h-[1.5px] bg-primary mb-12" />

            {/* List of Temperance Beverages */}
            <div className="space-y-12 mb-12" id="temperance-items-list">
              {temperanceCocktails.map((cocktail) => (
                <div key={cocktail.id} className="group" id={`temperance-item-${cocktail.id}`}>
                  {/* Title and price */}
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-serif text-xl md:text-2xl text-ivory group-hover:text-primary transition-colors duration-200">
                      {cocktail.name}
                    </h3>
                    <span className="font-sans text-xs font-semibold text-primary">
                      €{cocktail.price}
                    </span>
                  </div>

                  {/* Upper-cased ingredients */}
                  <div className="text-[10px] md:text-xs font-semibold tracking-widest text-primary/70 uppercase mb-2 font-sans">
                    {cocktail.ingredients.join(', ')}
                  </div>

                  {/* Narrative description */}
                  <p className="text-ivory/60 text-xs md:text-sm font-light leading-relaxed font-sans">
                    {cocktail.description}
                  </p>
                </div>
              ))}
            </div>


          </div>
        </div>
      </section>

      {/* Alchemical Story Dialog / Modal */}
      <AnimatePresence>
        {selectedCocktail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md"
            id="alchemical-modal"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-dark/95 border border-primary/30 max-w-xl w-full p-8 md:p-10 relative flex flex-col gap-6"
              style={{ borderRadius: '0px' }}
              id="alchemical-modal-content"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCocktail(null)}
                className="absolute top-4 right-4 text-ivory/60 hover:text-primary transition-colors cursor-pointer"
                id="close-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div>
                <p className="text-primary text-[10px] font-semibold tracking-[0.25em] mb-1 uppercase font-sans">
                  ALCHEMICAL STORY & EXTRACTION PROCESS
                </p>
                <h4 className="font-serif text-3xl font-bold text-ivory">
                  {selectedCocktail.name}
                </h4>
                <p className="text-primary/80 font-sans text-xs tracking-widest mt-1">
                  CATEGORY: {selectedCocktail.category.toUpperCase()} • INGREDIENTS DENSITY
                </p>
              </div>

              <div className="h-[1px] bg-ivory/10 w-full" />

              {/* Story Elements */}
              <div className="space-y-6 text-left">
                <div>
                  <h5 className="text-[10px] font-semibold tracking-[0.15em] text-primary font-sans uppercase mb-1">
                    CORE CONCEPT
                  </h5>
                  <p className="text-ivory text-sm font-medium font-serif italic">
                    "{getBotanicalStory(selectedCocktail).concept}"
                  </p>
                </div>

                <div>
                  <h5 className="text-[10px] font-semibold tracking-[0.15em] text-primary/70 font-sans uppercase mb-1">
                    EXTRACTION PROCESS
                  </h5>
                  <p className="text-ivory/80 text-xs md:text-sm font-sans font-light leading-relaxed">
                    {getBotanicalStory(selectedCocktail).extraction}
                  </p>
                </div>

                <div>
                  <h5 className="text-[10px] font-semibold tracking-[0.15em] text-primary/70 font-sans uppercase mb-1">
                    THERMAL PREPARATION METHOD
                  </h5>
                  <p className="text-ivory/80 text-xs md:text-sm font-sans font-light leading-relaxed">
                    {getBotanicalStory(selectedCocktail).method}
                  </p>
                </div>

                <div>
                  <h5 className="text-[10px] font-semibold tracking-[0.15em] text-primary/70 font-sans uppercase mb-1">
                    PRESENTATION RITUAL
                  </h5>
                  <p className="text-ivory/80 text-xs md:text-sm font-sans font-light leading-relaxed">
                    {getBotanicalStory(selectedCocktail).ritual}
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-ivory/10 w-full mt-2" />

              {/* Quick Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setSelectedCocktail(null);
                    onBookTable();
                  }}
                  className="flex-1 bg-primary text-[#2f2100] hover:bg-accent py-3 text-center text-xs font-semibold tracking-wider transition-colors duration-200 cursor-pointer"
                  style={{ borderRadius: '0px' }}
                >
                  RESERVE EXPERIENCE FOR THIS COCKTAIL
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
