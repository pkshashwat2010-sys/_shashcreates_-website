import React from 'react';
import { TabType } from '../types';

interface BottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs: { id: TabType; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'services', label: 'Services', icon: 'dashboard' },
    { id: 'ai-ads', label: 'AI Ads', icon: 'auto_awesome' },
    { id: 'pricing', label: 'Pricing', icon: 'currency_rupee' },
    { id: 'work', label: 'Work', icon: 'folder_special' },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#0d1322]/90 backdrop-blur-xl border-t border-white/[0.08] shadow-[0_-2px_12px_rgba(0,0,0,0.45)]">
      <div className="flex justify-around items-center h-16 px-2 max-w-md mx-auto">
        {tabs.map((tab) => {
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => {
                onSelectTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center gap-0.5 w-16 h-12 transition-all rounded-lg active:scale-95 ${
                isActive
                  ? 'text-[#adc6ff] font-bold'
                  : 'text-[#c2c6d6] hover:text-[#dde2f8]'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[22px] transition-transform ${
                  isActive ? 'scale-110 text-[#adc6ff]' : ''
                }`}
              >
                {tab.icon}
              </span>
              <span className="font-display text-[11px] leading-tight tracking-tight">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
