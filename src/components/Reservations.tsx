import React, { useState, useRef } from 'react';
import { Building, GraduationCap, ArrowRight, Check, X, Sparkles, BookOpen } from 'lucide-react';
import { Reservation, Inquiry } from '../types';

interface ReservationsProps {
  reservations: Reservation[];
  addReservation: (res: Omit<Reservation, 'id' | 'createdAt' | 'status'>) => void;
  deleteReservation: (id: string) => void;
  inquiries: Inquiry[];
  addInquiry: (inq: Omit<Inquiry, 'id' | 'createdAt' | 'status'>) => void;
}

export default function Reservations({
  reservations,
  addReservation,
  deleteReservation,
  inquiries,
  addInquiry
}: ReservationsProps) {
  // Booking Form State
  const [arrivalDate, setArrivalDate] = useState('');
  const [partySize, setPartySize] = useState('2 Guests');
  const [timePref, setTimePref] = useState('19:00');
  const [occasion, setOccasion] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Inquiry Form State
  const [inqName, setInqName] = useState('');
  const [inqEmail, setInqEmail] = useState('');
  const [inqType, setInqType] = useState('Corporate Buyout');
  const [inqSuccess, setInqSuccess] = useState(false);

  // Atelier Workshop Modal State
  const [showWorkshopModal, setShowWorkshopModal] = useState(false);

  // Refs for focusing
  const inquiryNameRef = useRef<HTMLInputElement>(null);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!arrivalDate) return;

    const sizeNumber = parseInt(partySize.split(' ')[0], 10) || 2;
    addReservation({
      date: arrivalDate,
      partySize: sizeNumber,
      time: timePref,
      occasion: occasion || undefined
    });

    setBookingSuccess(true);
    // Clear form
    setArrivalDate('');
    setOccasion('');
    setTimeout(() => {
      setBookingSuccess(false);
    }, 5000);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inqName || !inqEmail) return;

    addInquiry({
      fullName: inqName,
      email: inqEmail,
      eventType: inqType
    });

    setInqSuccess(true);
    setInqName('');
    setInqEmail('');
    setTimeout(() => {
      setInqSuccess(false);
    }, 5000);
  };

  // Helper to handle quick inquiry triggers
  const triggerBuyoutInquiry = () => {
    setInqType('Corporate Buyout');
    if (inquiryNameRef.current) {
      inquiryNameRef.current.focus();
      inquiryNameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative w-full" id="reservations-section">
      {/* Top Secure a Table Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-16" id="reservations-booking-hero">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Booking Form */}
          <div className="lg:col-span-5 bg-dark border border-ivory/10 p-8 md:p-10 flex flex-col justify-between" id="booking-form-container">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-2" id="booking-title">
                Secure a Table
              </h2>
              <p className="text-ivory/50 text-xs tracking-wider uppercase font-sans mb-8" id="booking-subtitle">
                Select your preferred evening and ensemble.
              </p>

              {bookingSuccess ? (
                <div className="border border-primary/50 bg-primary/5 p-6 mb-8 text-left animate-fade-in" id="booking-success-message">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Check className="w-4 h-4" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-ivory">Reservation Logged</h4>
                  </div>
                  <p className="text-ivory/70 text-xs leading-relaxed font-sans">
                    Your table preference has been entered. You can view your dynamic reservation registry at the bottom of this page.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleBookingSubmit} className="space-y-6" id="booking-form">
                {/* Arrival Date */}
                <div className="flex flex-col gap-1 text-left">
                  <label className="text-[10px] font-semibold tracking-widest text-primary/80 uppercase font-sans">
                    Arrival Date
                  </label>
                  <input
                    type="date"
                    required
                    value={arrivalDate}
                    onChange={(e) => setArrivalDate(e.target.value)}
                    className="w-full bg-transparent border-b border-ivory/30 focus:border-primary py-2 text-sm text-ivory outline-none transition-colors duration-200"
                    style={{ borderRadius: '0px' }}
                  />
                </div>

                {/* Party Size & Time Preference */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-[10px] font-semibold tracking-widest text-primary/80 uppercase font-sans">
                      Party Size
                    </label>
                    <select
                      value={partySize}
                      onChange={(e) => setPartySize(e.target.value)}
                      className="w-full bg-[#161917] border-b border-ivory/30 focus:border-primary py-2 text-sm text-ivory outline-none transition-colors duration-200"
                      style={{ borderRadius: '0px' }}
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6 Guests</option>
                      <option>7+ Guests (Private Area)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1 text-left">
                    <label className="text-[10px] font-semibold tracking-widest text-primary/80 uppercase font-sans">
                      Time Preference
                    </label>
                    <select
                      value={timePref}
                      onChange={(e) => setTimePref(e.target.value)}
                      className="w-full bg-[#161917] border-b border-ivory/30 focus:border-primary py-2 text-sm text-ivory outline-none transition-colors duration-200"
                      style={{ borderRadius: '0px' }}
                    >
                      <option>18:00</option>
                      <option>18:30</option>
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                      <option>21:30</option>
                      <option>22:00</option>
                    </select>
                  </div>
                </div>

                {/* Occasion */}
                <div className="flex flex-col gap-1 text-left">
                  <label className="text-[10px] font-semibold tracking-widest text-primary/80 uppercase font-sans">
                    Occasion (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Anniversary, Celebration"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-transparent border-b border-ivory/30 focus:border-primary py-2 text-sm text-ivory/90 placeholder-ivory/30 outline-none transition-colors duration-200"
                    style={{ borderRadius: '0px' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-accent text-[#2f2100] hover:text-[#1a1c1a] py-4 text-xs font-semibold tracking-widest transition-all duration-300 font-sans cursor-pointer mt-4"
                  style={{ borderRadius: '0px' }}
                  id="confirm-booking-btn"
                >
                  CONFIRM SELECTION
                </button>
              </form>
            </div>
          </div>

          {/* Right Visual Collage */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6" id="booking-collage-container">
            {/* Main Ambient Lounge Photo */}
            <div className="relative overflow-hidden aspect-[16/10] w-full border border-ivory/10">
              <img
                src="/src/assets/images/sanctuary_of_senses_1784052820353.jpg"
                alt="A Sanctuary of Senses menu"
                className="w-full h-full object-cover hover:scale-105 duration-700 transition-all"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
              
              {/* Overlaid Badges */}
              <div className="absolute bottom-6 left-6 text-left">
                <span className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 text-[9px] tracking-[0.15em] font-mono uppercase mb-2 inline-block">
                  Lounge Ambience
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-ivory">
                  A Sanctuary of Senses
                </h3>
              </div>
            </div>

            {/* Twin Thumbnails Below */}
            <div className="grid grid-cols-2 gap-6 h-full">
              <div className="relative overflow-hidden border border-ivory/10 aspect-[4/3] md:aspect-[16/9]">
                <img
                  src="/src/assets/images/crystal_tumbler_natural_1784053062149.jpg"
                  alt="Crystal Cocktail Tumbler"
                  className="w-full h-full object-cover hover:scale-105 duration-500 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative overflow-hidden border border-ivory/10 aspect-[4/3] md:aspect-[16/9]">
                <img
                  src="/src/assets/images/bar_seating_natural_1784053077925.jpg"
                  alt="Moody empty bar seating"
                  className="w-full h-full object-cover hover:scale-105 duration-500 transition-all"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Commissions & Masterclasses section */}
      <section className="bg-gradient-to-b from-dark to-[#0c0f0d] py-24 px-6 md:px-12 border-t border-b border-ivory/10" id="commissions-section">
        <div className="mx-auto max-w-7xl">
          {/* Section Split Heading */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start text-left">
            <div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-wide leading-tight uppercase" id="commissions-title">
                PRIVATE COMMISSIONS &<br />MASTERCLASSES
              </h2>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-ivory/70 text-xs md:text-sm font-light font-sans leading-relaxed">
                Whether orchestrating a corporate buyout or participating in a curated mixology workshop, SPECTRUM provides the canvas for unforgettable narratives. Our private events team crafts bespoke experiences tailored to the most discerning requirements.
              </p>

              {/* Bullet row specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-ivory/15 pt-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 border border-primary/20 text-primary">
                    <Building className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif text-base font-semibold text-ivory">Corporate Buyouts</h4>
                    <p className="text-[11px] text-ivory/50 font-sans tracking-wide">Capacity up to 120 guests</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 border border-primary/20 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif text-base font-semibold text-ivory">Mixology Workshops</h4>
                    <p className="text-[11px] text-ivory/50 font-sans tracking-wide">Guided by our lead curators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three Boxes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="commissions-triple-grid">
            {/* Box 1: Buyout */}
            <div className="lg:col-span-4 bg-[#111412] border border-ivory/10 p-8 flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
              <div>
                <h3 className="font-serif text-2xl font-medium text-ivory mb-4">
                  The Grand Buyout
                </h3>
                <p className="text-ivory/60 text-xs md:text-sm font-sans font-light leading-relaxed mb-12">
                  Complete venue exclusivity, tailored menu curation, and bespoke atmospheric lighting design.
                </p>
              </div>
              <button
                onClick={triggerBuyoutInquiry}
                className="self-start text-xs font-semibold tracking-widest text-primary hover:text-accent flex items-center gap-2 cursor-pointer font-sans"
              >
                <span>INQUIRE NOW</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Box 2: Atelier Workshops */}
            <div className="lg:col-span-4 bg-[#111412] border border-ivory/10 p-8 flex flex-col justify-between text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-300 pointer-events-none" />
              <div>
                <h3 className="font-serif text-2xl font-medium text-ivory mb-4">
                  Atelier Workshops
                </h3>
                <p className="text-ivory/60 text-xs md:text-sm font-sans font-light leading-relaxed mb-12">
                  A technical deep-dive into spirit composition, balance, and the physics of the perfect pour.
                </p>
              </div>
              <button
                onClick={() => setShowWorkshopModal(true)}
                className="self-start text-xs font-semibold tracking-widest text-primary hover:text-accent flex items-center gap-2 cursor-pointer font-sans"
              >
                <span>VIEW MODULES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Box 3: Concierge Inquiry Form */}
            <div className="lg:col-span-4 bg-dark border border-primary/30 p-8 text-left flex flex-col justify-between" id="inquiry-form-container">
              <div>
                <h4 className="font-sans text-[11px] font-semibold tracking-[0.25em] text-primary uppercase mb-6">
                  Concierge Inquiry
                </h4>

                {inqSuccess ? (
                  <div className="border border-primary/50 bg-primary/5 p-4 mb-6 text-left animate-fade-in" id="inq-success-msg">
                    <p className="text-primary font-bold text-xs mb-1 font-sans">Request Received</p>
                    <p className="text-ivory/70 text-[11px] font-sans">Our private commissions director will email you within 24 hours.</p>
                  </div>
                ) : null}

                <form onSubmit={handleInquirySubmit} className="space-y-5">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1">
                    <input
                      type="text"
                      ref={inquiryNameRef}
                      placeholder="Full Name"
                      required
                      value={inqName}
                      onChange={(e) => setInqName(e.target.value)}
                      className="w-full bg-transparent border-b border-ivory/35 focus:border-primary py-2 text-xs text-ivory placeholder-ivory/40 outline-none transition-colors duration-200"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={inqEmail}
                      onChange={(e) => setInqEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-ivory/35 focus:border-primary py-2 text-xs text-ivory placeholder-ivory/40 outline-none transition-colors duration-200"
                      style={{ borderRadius: '0px' }}
                    />
                  </div>

                  {/* Event Type */}
                  <div className="flex flex-col gap-1">
                    <select
                      value={inqType}
                      onChange={(e) => setInqType(e.target.value)}
                      className="w-full bg-[#111412] border-b border-ivory/35 focus:border-primary py-2 text-xs text-ivory outline-none transition-colors duration-200"
                      style={{ borderRadius: '0px' }}
                    >
                      <option>Corporate Buyout</option>
                      <option>Mixology Masterclass</option>
                      <option>Private Celebration</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-transparent hover:bg-primary border border-primary/50 hover:border-primary text-primary hover:text-[#2f2100] py-3 text-[10px] font-semibold tracking-widest transition-all duration-300 font-sans cursor-pointer mt-4"
                    style={{ borderRadius: '0px' }}
                    id="submit-inquiry-btn"
                  >
                    SEND INQUIRY
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Reservation Registries (Real-Data view) */}
      {reservations.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 md:px-12 py-12 text-left" id="reservation-list-section">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <h3 className="text-primary text-xs font-semibold tracking-[0.25em] font-sans uppercase">
              YOUR DYNAMIC RESERVATION REGISTRY ({reservations.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reservations.map((res) => (
              <div
                key={res.id}
                className="bg-[#181a18] border border-primary/30 p-6 flex flex-col justify-between relative"
                style={{ borderRadius: '0px' }}
              >
                {/* Delete button */}
                <button
                  onClick={() => deleteReservation(res.id)}
                  className="absolute top-4 right-4 text-ivory/40 hover:text-red-400 transition-colors cursor-pointer"
                  title="Cancel Reservation"
                >
                  <X className="w-4 h-4" />
                </button>

                <div>
                  <div className="text-xs font-mono text-primary/70 mb-2">
                    RESERVATION ID: {res.id}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-ivory mb-4">
                    {res.partySize} Guests • {res.time}
                  </h4>
                  <div className="space-y-1.5 text-xs text-ivory/70 font-sans">
                    <p>Date: <span className="text-ivory font-semibold">{res.date}</span></p>
                    {res.occasion && (
                      <p>Occasion: <span className="text-accent italic font-serif">"{res.occasion}"</span></p>
                    )}
                  </div>
                </div>

                <div className="border-t border-ivory/10 pt-4 mt-4 flex items-center justify-between">
                  <span className="bg-green-950/40 text-green-400 border border-green-900/50 px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase">
                    {res.status.toUpperCase()}
                  </span>
                  <span className="text-[9px] text-ivory/40 font-mono">
                    CREATED {new Date(res.createdAt).toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Atelier Workshop Modal Detail */}
      {showWorkshopModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/90 backdrop-blur-md animate-fade-in" id="workshop-modal">
          <div
            className="bg-dark/95 border border-primary/30 max-w-xl w-full p-8 md:p-10 relative flex flex-col gap-6"
            style={{ borderRadius: '0px' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowWorkshopModal(false)}
              className="absolute top-4 right-4 text-ivory/60 hover:text-primary transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div>
              <p className="text-primary text-[10px] font-semibold tracking-[0.25em] mb-1 uppercase font-sans">
                SPECTRUM ACADEMY
              </p>
              <h4 className="font-serif text-3xl font-bold text-ivory">
                Atelier Workshop Modules
              </h4>
              <p className="text-primary/80 font-sans text-xs tracking-widest mt-1">
                A 3-HOUR TECHNICAL DEEP-DIVE IN LIQUID FLUIDICS
              </p>
            </div>

            <div className="h-[1px] bg-ivory/10 w-full" />

            {/* Modules details */}
            <div className="space-y-6 text-left max-h-[350px] overflow-y-auto pr-2">
              <div className="border-l-2 border-primary pl-4">
                <h5 className="text-xs font-semibold tracking-widest text-primary font-sans uppercase mb-1">
                  MODULE I: CRYSTALLINE SOLID STATE (45 MINS)
                </h5>
                <p className="text-ivory/70 text-xs md:text-sm font-sans leading-relaxed">
                  The physics of ice. Understanding directional freezing, block tempering, and dynamic cutting angles to control cocktail thermal decay curves.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <h5 className="text-xs font-semibold tracking-widest text-primary font-sans uppercase mb-1">
                  MODULE II: LIPID SEPARATION & AGING (60 MINS)
                </h5>
                <p className="text-ivory/70 text-xs md:text-sm font-sans leading-relaxed">
                  Clarification science. Techniques in fat-washing using cold temperature butter aggregation, organic gelatin filtering, and centrifugal speed.
                </p>
              </div>

              <div className="border-l-2 border-primary pl-4">
                <h5 className="text-xs font-semibold tracking-widest text-primary font-sans uppercase mb-1">
                  MODULE III: HERBAL EXTRACTION & VACUUMS (75 MINS)
                </h5>
                <p className="text-ivory/70 text-xs md:text-sm font-sans leading-relaxed">
                  Solvent-based tincture engineering. High-velocity extraction of botanical oils under custom vacuums to preserve delicate linalool and pinene compounds.
                </p>
              </div>
            </div>

            <div className="h-[1px] bg-ivory/10 w-full mt-2" />

            {/* Action */}
            <button
              onClick={() => {
                setShowWorkshopModal(false);
                setInqType('Mixology Masterclass');
                if (inquiryNameRef.current) {
                  inquiryNameRef.current.focus();
                  inquiryNameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              }}
              className="w-full bg-primary text-[#2f2100] hover:bg-accent py-3.5 text-xs font-semibold tracking-widest transition-colors duration-200 cursor-pointer"
              style={{ borderRadius: '0px' }}
            >
              INQUIRE ABOUT MASTERCLASSES
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
