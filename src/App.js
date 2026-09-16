import React from 'react';
import { Calendar } from 'lucide-react';

const events = [
  {
    title: "Crimson Night",
    price: "NA",
    location: "NA",
    date: "NA",
    description: "Step into a Bold, Neon-lit Red Night of high-energy beats and unforgettable cosmic energy."
  },
  {
    title: "Dark Synth Night",
    price: "NA",
    location: "NA",
    date: "NA",
    description: "Step into the shadows for a futuristic dark night where the music is loud and the lights are low."
  },
  {
    title: "Teen Sport Meetup",
    price: "Free",
    location: "NA",
    date: "NA",
    description: "The Ultimate teen sports meetup-just turn up, team up, and play."
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans flex flex-col">
      {/* Header / Navbar with Separation Line */}
      <header className="w-full px-8 py-6 flex items-center justify-between border-b border-neutral-800/80">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-black tracking-wider text-white">
            SOCIAL<span className="text-red-600">18</span>
          </h1>
          <span className="bg-[#1f0a0c] border border-red-900/50 text-red-500 font-bold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase">
            PRODUCTIONS
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 pt-10 pb-20 max-w-7xl mx-auto w-full">
        {/* Title Section */}
        <div className="text-center max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Curated <span className="text-red-600">Crimson</span> Experiences
          </h2>
          <p className="text-neutral-400 text-sm md:text-base font-normal">
            Explore exclusive Energetic events, Tech and Sports Meetups hosted across the productions.
          </p>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-neutral-800/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-xl"
            >
              <div>
                {/* Card Header: Price & Calendar Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-[#240c0e] border border-red-900/40 text-red-500 font-semibold text-xs px-3 py-1 rounded-full">
                    {event.price}
                  </span>
                  <Calendar className="h-5 w-5 text-neutral-400 stroke-[1.5]" />
                </div>

                {/* Event Details */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {event.title}
                </h3>
                
                <p className="text-neutral-400 text-sm mb-6 font-normal line-clamp-3">
                  {event.description}
                </p>
              </div>

              {/* Card Bottom / Get Tickets */}
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-500 font-normal mb-4">
                  <span>{event.location}</span>
                  <button className="text-xs font-semibold text-red-500 hover:text-red-400 transition-colors flex items-center gap-1">
                    Get Tickets <span className="text-sm">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}