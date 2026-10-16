import React from 'react';
import { BRAND } from '../data/content';
import { TabType } from '../types';

interface HeaderProps {
  currentTab: TabType;
  subTitle?: string;
  onOpenDrawer: () => void;
  onOpenInquiry: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  subTitle,
  onOpenDrawer,
  onOpenInquiry,
}) => {
  const getSubTitle = () => {
    if (subTitle) return subTitle;
    switch (currentTab) {
      case 'home':
        return 'Home Showcase';
      case 'services':
        return 'Services Overview';
      case 'ai-ads':
        return 'Ai Ads Engine';
      case 'pricing':
        return 'Pricing Matrix';
      case 'work':
        return 'Portfolio Archive';
      default:
        return 'Bharat Digital Engine';
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#0d1322]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
      <div className="h-16 px-4 max-w-5xl mx-auto flex items-center justify-between gap-3">
        {/* Brand Lockup */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            alt="_shashcreates_ Logo"
            className="h-8 w-auto object-contain flex-shrink-0 rounded-sm"
            src={BRAND.logoUrl}
          />
          <div className="flex flex-col truncate">
            <span className="font-display text-[15px] leading-tight text-[#dde2f8] font-bold tracking-tight truncate">
              {BRAND.name}
            </span>
            <span className="font-display text-[11px] leading-tight text-[#adc6ff] font-semibold flex items-center gap-1 truncate">
              {getSubTitle()}
            </span>
          </div>
        </div>

        {/* Action Cluster */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Quote Button */}
          <button
            type="button"
            onClick={() => onOpenInquiry('General Web & Ad Quote')}
            className="inline-flex items-center justify-center h-9 px-3.5 rounded-full bg-[#4d8eff] text-[#00285d] font-display text-[13px] font-bold transition-all hover:bg-[#adc6ff] active:scale-95 shadow-sm"
          >
            <span className="material-symbols-outlined text-[17px] mr-1">bolt</span>
            <span>Get Quote</span>
          </button>

          {/* Hamburger Drawer Toggle */}
          <button
            type="button"
            aria-label="Toggle Navigation Drawer"
            onClick={onOpenDrawer}
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#dde2f8] hover:bg-[#2f3445]/50 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          {/* Contact / Phone Direct Icon */}
          <a
            href={BRAND.whatsappUrl('Hi _shashcreates_, I want to connect regarding digital services for my shop.')}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with Founder on WhatsApp"
            className="w-8 h-8 rounded-full bg-[#adc6ff] flex items-center justify-center flex-shrink-0 text-[#002e6a] hover:bg-white active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </a>
        </div>
      </div>
    </header>
  );
};
