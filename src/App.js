import React, { useState } from 'react';
import { Calendar, MapPin, ArrowLeft, CheckCircle, Activity, Award, HeartPulse } from 'lucide-react';

const sportsList = [
  {
    id: 'cricket',
    title: "Cricket",
    tagline: "Strategy, Endurance & Team Spirit",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=1200",
    description: "Master the pitch, sharpen your focus, and excel in team coordination.",
    benefits: [
      "Improves hand-eye coordination and peripheral vision.",
      "Builds stamina and cardiovascular endurance through running between wickets.",
      "Enhances mental alertness, quick decision-making, and tactical thinking."
    ]
  },
  {
    id: 'boxing',
    title: "Boxing",
    tagline: "Power, Speed & Mental Resilience",
    image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80&w=1200",
    description: "Unleash ultimate conditioning, core strength, and quick reflexes.",
    benefits: [
      "Burns up to 800+ calories per hour with high-intensity interval training (HIIT).",
      "Strengthens core muscles, upper body agility, and upper-body power.",
      "Drastically reduces stress and boosts mental discipline and self-confidence."
    ]
  },
  {
    id: 'cycling',
    title: "Cycling",
    tagline: "Stamina, Leg Strength & Exploration",
    image: "https://images.unsplash.com/photo-1517649763962-0c623266010b?auto=format&fit=crop&q=80&w=1200",
    description: "Conquer scenic routes while conditioning your lower body and cardiovascular health.",
    benefits: [
      "Low-impact exercise that protects joint health while building leg muscles.",
      "Boosts lung capacity and overall heart health.",
      "Promotes joint mobility and strengthens hips, knees, and ankles."
    ]
  },
  {
    id: 'running',
    title: "Running",
    tagline: "Endurance, Speed & Pure Cardio",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1200",
    description: "Push your limits, track your personal bests, and clear your mind.",
    benefits: [
      "Significantly increases bone density and strengthens lower body tendons.",
      "Releases endorphins to reduce anxiety and elevate mood (Runner's High).",
      "Elevates baseline metabolic rate and burns subcutaneous fat efficiently."
    ]
  },
  {
    id: 'badminton',
    title: "Badminton",
    tagline: "Agility, Reflexes & Full-Body Workout",
    image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&q=80&w=1200",
    description: "Fast-paced rally sport designed to test flexibility and lightning reflexes.",
    benefits: [
      "Increases flexibility and explosive footwork speed across the court.",
      "Sharpens reflexes and motor reaction times.",
      "Provides a rigorous full-body workout engaging calves, quads, hamstrings, and arms."
    ]
  }
];

const events = [
  {
    id: 'crimson-night',
    title: "Crimson Night",
    price: "NA",
    location: "NA",
    date: "NA",
    description: "Step into a Bold, Neon-lit Red Night of high-energy beats and unforgettable cosmic energy.",
    fullDetails: "Experience an electrifying night designed to immerse you in high-octane music, immersive visuals, and a vibrant community atmosphere. Join us for a unique showcase featuring curated sounds, neon-lit installations, and dynamic performances throughout the night."
  },
  {
    id: 'dark-synth-night',
    title: "Dark Synth Night",
    price: "NA",
    location: "NA",
    date: "NA",
    description: "Step into the shadows for a futuristic dark night where the music is loud and the lights are low.",
    fullDetails: "Dive deep into the underground world of dark wave, synthwave, and industrial electronics. Featuring heavy basslines, analog synths, and low-light visual art, this event brings together fans of futuristic cyberpunk soundscapes."
  },
  {
    id: 'teen-sport-meetup',
    title: "Teen Sport Meetup",
    price: "Free",
    location: "NA",
    date: "NA",
    description: "The Ultimate teen sports meetup-just turn up, team up, and play.",
    fullDetails: "A community-focused sports gathering designed for teens of all skill levels. Whether you play basketball, soccer, or casual group games, come meet fellow players, team up, and participate in fun, friendly competitions."
  }
];

export default function App() {
  const [activeView, setActiveView] = useState({ type: 'home', data: null });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isRegistered, setIsRegistered] = useState(false);

  const resetToHome = () => {
    setActiveView({ type: 'home', data: null });
    setIsRegistered(false);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col">
      {/* Header / Navbar */}
      <header className="w-full px-8 py-6 flex items-center justify-between border-b border-neutral-800/80 sticky top-0 bg-[#0a0a0a]/90 backdrop-blur-md z-50">
        <div className="flex items-center gap-3 cursor-pointer" onClick={resetToHome}>
          <h1 className="text-2xl font-black tracking-wider text-white">
            SOCIAL<span className="text-red-600">18</span>
          </h1>
          <span className="bg-[#1f0a0c] border border-red-900/50 text-red-500 font-bold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase">
            PRODUCTIONS
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center px-6 pt-10 pb-20 max-w-7xl mx-auto w-full">
        
        {/* HOME VIEW */}
        {activeView.type === 'home' && (
          <>
            <div className="text-center max-w-3xl mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Curated <span className="text-red-600">Crimson</span> Experiences
              </h2>
              <p className="text-neutral-400 text-sm md:text-base font-normal">
                Explore exclusive Energetic events, Tech and Sports Meetups hosted across the productions.
              </p>
            </div>

            {/* SPORTS CARDS SECTION */}
            <div className="w-full mb-16">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-neutral-800/80 pb-3">
                <Activity className="h-5 w-5 text-red-500" /> Featured Sports Disciplines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {sportsList.map((sport) => (
                  <div
                    key={sport.id}
                    onClick={() => setActiveView({ type: 'sport', data: sport })}
                    className="group relative h-72 rounded-2xl overflow-hidden border border-neutral-800/80 cursor-pointer hover:border-red-600/60 transition-all duration-300 shadow-xl flex flex-col justify-end p-5"
                  >
                    <img 
                      src={sport.image} 
                      alt={sport.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    
                    <div className="relative z-10">
                      <h4 className="text-xl font-black text-white group-hover:text-red-500 transition-colors">
                        {sport.title}
                      </h4>
                      <p className="text-xs text-neutral-300 line-clamp-2 mt-1 font-normal">
                        {sport.tagline}
                      </p>
                      <span className="inline-block text-[11px] font-semibold text-red-400 mt-3 group-hover:translate-x-1 transition-transform">
                        Explore Benefits &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EVENTS SECTION */}
            <div className="w-full">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 border-b border-neutral-800/80 pb-3">
                <Calendar className="h-5 w-5 text-red-500" /> Upcoming Events
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="bg-[#240c0e] border border-red-900/40 text-red-500 font-semibold text-xs px-3 py-1 rounded-full">
                          {event.price}
                        </span>
                        <Calendar className="h-5 w-5 text-neutral-400 stroke-[1.5]" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                        {event.title}
                      </h3>
                      
                      <p className="text-neutral-400 text-sm mb-6 font-normal line-clamp-3">
                        {event.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-xs text-neutral-500 font-normal mb-4">
                        <span>{event.location}</span>
                        <button 
                          onClick={() => { setActiveView({ type: 'event', data: event }); setIsRegistered(false); }}
                          className="text-xs font-semibold text-red-500 hover:text-red-400 transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          Get Tickets <span className="text-sm">&rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* EVENT DETAIL PAGE */}
        {activeView.type === 'event' && (
          <div className="w-full max-w-3xl">
            <button 
              onClick={resetToHome}
              className="flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Overview
            </button>

            <div className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-8 mb-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#240c0e] border border-red-900/40 text-red-500 font-semibold text-xs px-3 py-1 rounded-full">
                  {activeView.data.price}
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-neutral-400" /> {activeView.data.location}
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-neutral-400" /> {activeView.data.date}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                {activeView.data.title}
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed mb-6">
                {activeView.data.description}
              </p>

              <div className="border-t border-neutral-800/80 pt-6">
                <h3 className="text-lg font-bold text-white mb-2">About This Event</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {activeView.data.fullDetails}
                </p>
              </div>
            </div>

            {/* REGISTRATION FORM SECTION */}
            <div className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Register Myself</h3>
              <p className="text-neutral-400 text-xs mb-6">Fill in your details below to secure your spot for {activeView.data.title}.</p>

              {isRegistered ? (
                <div className="bg-[#1f0a0c] border border-red-900/50 rounded-xl p-6 text-center flex flex-col items-center">
                  <CheckCircle className="h-12 w-12 text-red-500 mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">Registration Successful!</h4>
                  <p className="text-neutral-400 text-xs">
                    We have reserved your spot for <span className="text-red-400 font-semibold">{activeView.data.title}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-neutral-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-neutral-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-400 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1a1a1a] border border-neutral-800 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-600 transition-colors"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-6 rounded-xl transition-colors mt-2"
                  >
                    Confirm & Register
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* SPORT DETAIL PAGE */}
        {activeView.type === 'sport' && (
          <div className="w-full max-w-4xl">
            <button 
              onClick={resetToHome}
              className="flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Sports
            </button>

            {/* Hero Image Banner */}
            <div className="relative h-96 rounded-3xl overflow-hidden border border-neutral-800 mb-8 shadow-2xl flex flex-col justify-end p-8 md:p-12">
              <img 
                src={activeView.data.image} 
                alt={activeView.data.title} 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
              
              <div className="relative z-10">
                <span className="bg-red-600 text-white font-bold text-xs px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                  Sports Discipline
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                  {activeView.data.title}
                </h2>
                <p className="text-neutral-300 text-lg md:text-xl font-medium mt-2">
                  {activeView.data.tagline}
                </p>
              </div>
            </div>

            {/* Health & Body Benefits Card */}
            <div className="bg-[#121212] border border-neutral-800 rounded-3xl p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <HeartPulse className="h-7 w-7 text-red-500" /> Essential Body & Health Benefits
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed mb-8">
                {activeView.data.description}
              </p>

              <div className="space-y-4">
                {activeView.data.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4 bg-[#1a1a1a] border border-neutral-800/80 p-5 rounded-2xl">
                    <Award className="h-6 w-6 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-neutral-200 text-sm md:text-base leading-snug">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}