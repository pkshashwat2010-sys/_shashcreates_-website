import React, { useState } from 'react';
import { PORTFOLIO_ITEMS } from '../data/content';

interface WorkViewProps {
  onOpenPreview: (demoType: 'grocery' | 'bistro' | 'diwali-poster' | 'salon-reel') => void;
  onOpenInquiry: (serviceName?: string) => void;
}

export const WorkView: React.FC<WorkViewProps> = ({
  onOpenPreview,
  onOpenInquiry,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'website' | 'qr-menu' | 'ai-ad' | 'reel'>('all');

  const filteredItems = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="flex flex-col w-full space-y-6 px-4 py-4 max-w-5xl mx-auto text-[#dde2f8]">
      {/* Header */}
      <div className="p-5 rounded-2xl bg-[#242a3a] border border-white/[0.08] shadow-lg">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#4d8eff]/20 text-[#adc6ff] font-display text-[11px] font-bold uppercase mb-2">
          Real-World Local Showcases
        </span>
        <h1 className="font-display text-[26px] sm:text-[34px] font-extrabold text-white">
          Portfolio & Demonstration Concepts
        </h1>
        <p className="font-body text-[13px] text-[#c2c6d6] mt-1 max-w-xl">
          Explore interactive prototypes crafted specifically for Indian retail shops, cafes, clinics, and festive promotions.
        </p>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 mt-4 no-scrollbar">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'website', label: 'Websites' },
            { id: 'qr-menu', label: 'QR Menus' },
            { id: 'ai-ad', label: 'AI Posters' },
            { id: 'reel', label: 'Video Reels' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-3.5 py-1.5 rounded-xl font-display text-[12px] font-semibold whitespace-nowrap transition-all active:scale-95 ${
                activeFilter === tab.id
                  ? 'bg-[#4d8eff] text-white shadow-md'
                  : 'bg-[#191f2f] text-[#c2c6d6] hover:bg-[#2f3445]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-[#191f2f] border border-white/[0.08] overflow-hidden shadow-md flex flex-col justify-between group hover:border-[#4d8eff]/40 transition-all"
          >
            <div className="relative h-48 w-full bg-[#080e1d] overflow-hidden cursor-pointer" onClick={() => onOpenPreview(item.demoType)}>
              <img
                src={item.image}
                alt={item.imageAlt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#080e1d]/85 backdrop-blur-md border border-white/[0.1]">
                <span className={`font-display text-[11px] font-bold ${item.badgeColor}`}>
                  {item.badge}
                </span>
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-lg bg-[#242a3a]/90 text-white backdrop-blur-md flex items-center gap-1 font-display text-[11px] font-semibold">
                <span className="material-symbols-outlined text-[14px] text-[#4edea3]">
                  {item.category === 'qr-menu' ? 'restaurant_menu' : item.category === 'reel' ? 'movie' : 'shopping_bag'}
                </span>
                <span>{item.categoryLabel}</span>
              </div>
            </div>

            <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
              <div>
                <h3 className="font-display text-[16px] font-bold text-white group-hover:text-[#adc6ff] transition-colors">
                  {item.title}
                </h3>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-1 leading-snug">
                  {item.description}
                </p>
                {item.specs && (
                  <span className="inline-block mt-2 font-display text-[11px] text-[#8c909f]">
                    {item.specs}
                  </span>
                )}
              </div>

              <div className="pt-2 border-t border-white/[0.06] flex gap-2">
                <button
                  type="button"
                  onClick={() => onOpenPreview(item.demoType)}
                  className="flex-1 h-10 rounded-xl bg-[#242a3a] hover:bg-[#2f3445] text-white font-display text-[12px] font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[16px] text-[#adc6ff]">
                    {item.category === 'reel' ? 'play_circle' : 'touch_app'}
                  </span>
                  <span>{item.category === 'reel' ? 'Play Sample Reel' : 'Launch Live Demo'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => onOpenInquiry(`Inquire like: ${item.title}`)}
                  className="h-10 px-3.5 rounded-xl bg-[#4d8eff] hover:bg-[#adc6ff] text-[#00285d] font-display text-[12px] font-extrabold flex items-center justify-center active:scale-95 transition-all"
                >
                  Book Similar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
