import React, { useState } from 'react';
import { Calendar, MapPin, ArrowLeft, CheckCircle } from 'lucide-react';

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
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col">
      {/* Header / Navbar with Separation Line */}
      <header className="w-full px-8 py-6 flex items-center justify-between border-b border-neutral-800/80">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => { setSelectedEvent(null); setIsRegistered(false); }}
        >
          <h1 className="text-2xl font-black tracking-wider text-white">
            SOCIAL<span className="text-red-600">18</span>
          </h1>
          <span className="bg-[#1f0a0c] border border-red-900/50 text-red-500 font-bold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase">
            PRODUCTIONS
          </span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center px-6 pt-10 pb-20 max-w-7xl mx-auto w-full">
        {!selectedEvent ? (
          /* HOME PAGE: EVENTS LIST */
          <>
            <div className="text-center max-w-3xl mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                Curated <span className="text-red-600">Crimson</span> Experiences
              </h2>
              <p className="text-neutral-400 text-sm md:text-base font-normal">
                Explore exclusive Energetic events, Tech and Sports Meetups hosted across the productions.
              </p>
            </div>

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
                        onClick={() => { setSelectedEvent(event); setIsRegistered(false); }}
                        className="text-xs font-semibold text-red-500 hover:text-red-400 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        Get Tickets <span className="text-sm">&rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* EVENT DETAIL & REGISTRATION PAGE */
          <div className="w-full max-w-3xl">
            {/* Back Button */}
            <button 
              onClick={() => { setSelectedEvent(null); setIsRegistered(false); }}
              className="flex items-center gap-2 text-neutral-400 hover:text-white mb-8 transition-colors text-sm font-semibold"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Events
            </button>

            {/* Event Header Banner */}
            <div className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-8 mb-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#240c0e] border border-red-900/40 text-red-500 font-semibold text-xs px-3 py-1 rounded-full">
                  {selectedEvent.price}
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-neutral-400" /> {selectedEvent.location}
                </span>
                <span className="text-xs text-neutral-500 flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5 text-neutral-400" /> {selectedEvent.date}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                {selectedEvent.title}
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed mb-6">
                {selectedEvent.description}
              </p>

              <div className="border-t border-neutral-800/80 pt-6">
                <h3 className="text-lg font-bold text-white mb-2">About This Event</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {selectedEvent.fullDetails}
                </p>
              </div>
            </div>

            {/* Registration Form / Confirmation Section */}
            <div className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Register Myself</h3>
              <p className="text-neutral-400 text-xs mb-6">Fill in your details below to secure your spot for {selectedEvent.title}.</p>

              {isRegistered ? (
                <div className="bg-[#1f0a0c] border border-red-900/50 rounded-xl p-6 text-center flex flex-col items-center">
                  <CheckCircle className="h-12 w-12 text-red-500 mb-3" />
                  <h4 className="text-lg font-bold text-white mb-1">Registration Successful!</h4>
                  <p className="text-neutral-400 text-xs">
                    We have reserved your spot for <span className="text-red-400 font-semibold">{selectedEvent.title}</span>. Check your inbox for confirmation details.
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
      </main>
    </div>
  );
}