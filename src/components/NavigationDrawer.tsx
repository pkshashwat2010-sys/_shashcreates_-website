import React from 'react';
import { TabType } from '../types';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenInquiry: (serviceName?: string) => void;
  onOpenLegal: (type: 'terms' | 'privacy') => void;
  onScrollToSection?: (sectionId: string) => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  currentTab,
  onSelectTab,
  onOpenInquiry,
  onOpenLegal,
  onScrollToSection,
}) => {
  const handleNavClick = (tab: TabType, sectionId?: string) => {
    onSelectTab(tab);
    onClose();
    if (sectionId && onScrollToSection) {
      setTimeout(() => onScrollToSection(sectionId), 150);
    }
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div
        className={`fixed inset-y-0 right-0 w-[84%] max-w-[320px] bg-[#242a3a]/98 backdrop-blur-2xl z-50 flex flex-col shadow-[-8px_0_32px_rgba(0,0,0,0.7)] pt-safe pb-safe transition-transform duration-300 ease-out border-l border-white/[0.08] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-white/[0.06]">
          <span className="font-display text-[18px] text-[#dde2f8] font-bold">Navigation</span>
          <button
            type="button"
            className="w-10 h-10 flex items-center justify-center rounded-full text-[#c2c6d6] hover:text-[#dde2f8] hover:bg-white/5 active:scale-95 transition-all"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Links list */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-[15px] font-semibold transition-colors text-left ${
              currentTab === 'home'
                ? 'bg-[#4d8eff]/15 text-[#adc6ff]'
                : 'text-[#c2c6d6] hover:text-white hover:bg-[#2f3445]'
            }`}
          >
            <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">home</span>
            <span>Home</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('services')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-[15px] font-semibold transition-colors text-left ${
              currentTab === 'services'
                ? 'bg-[#4d8eff]/15 text-[#adc6ff]'
                : 'text-[#c2c6d6] hover:text-white hover:bg-[#2f3445]'
            }`}
          >
            <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">design_services</span>
            <span>Services</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('ai-ads')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-[15px] font-semibold transition-colors text-left ${
              currentTab === 'ai-ads'
                ? 'bg-[#4d8eff]/15 text-[#4edea3]'
                : 'text-[#c2c6d6] hover:text-white hover:bg-[#2f3445]'
            }`}
          >
            <span className="material-symbols-outlined text-[#4edea3] text-[20px]">auto_awesome</span>
            <span>AI Ads</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('pricing')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-[15px] font-semibold transition-colors text-left ${
              currentTab === 'pricing'
                ? 'bg-[#4d8eff]/15 text-[#adc6ff]'
                : 'text-[#c2c6d6] hover:text-white hover:bg-[#2f3445]'
            }`}
          >
            <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">payments</span>
            <span>Pricing</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('work')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-[15px] font-semibold transition-colors text-left ${
              currentTab === 'work'
                ? 'bg-[#4d8eff]/15 text-[#adc6ff]'
                : 'text-[#c2c6d6] hover:text-white hover:bg-[#2f3445]'
            }`}
          >
            <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">auto_stories</span>
            <span>Portfolio</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('home', 'how-it-works')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-[15px] font-semibold text-[#c2c6d6] hover:text-white hover:bg-[#2f3445] transition-colors text-left"
          >
            <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">route</span>
            <span>How It Works</span>
          </button>

          <button
            type="button"
            onClick={() => handleNavClick('services', 'faq-section')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-[15px] font-semibold text-[#c2c6d6] hover:text-white hover:bg-[#2f3445] transition-colors text-left"
          >
            <span className="material-symbols-outlined text-[#adc6ff] text-[20px]">help_center</span>
            <span>FAQ</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquiry('Direct Contact Inquiry');
            }}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-display text-[15px] font-semibold text-[#c2c6d6] hover:text-white hover:bg-[#2f3445] transition-colors text-left"
          >
            <span className="material-symbols-outlined text-[#4edea3] text-[20px]">call</span>
            <span>Contact</span>
          </button>

          {/* Legal group */}
          <div className="pt-4 pb-1 px-3">
            <span className="font-display text-[11px] font-bold text-[#8c909f] uppercase tracking-wider">
              Legal & Policies
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenLegal('terms');
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl font-display text-[13px] text-[#8c909f] hover:text-white hover:bg-[#2f3445] transition-colors text-left"
          >
            <span className="material-symbols-outlined text-[#8c909f] text-[18px]">gavel</span>
            <span>Terms & Conditions</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenLegal('privacy');
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl font-display text-[13px] text-[#8c909f] hover:text-white hover:bg-[#2f3445] transition-colors text-left"
          >
            <span className="material-symbols-outlined text-[#8c909f] text-[18px]">shield</span>
            <span>Privacy Policy</span>
          </button>
        </div>

        {/* CTA Bottom Button */}
        <div className="p-4 border-t border-white/[0.06]">
          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenInquiry('Project Inquiry via Drawer');
            }}
            className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#005ac2] text-white font-display text-[15px] font-bold shadow-[0_4px_20px_-2px_rgba(37,99,235,0.4)] active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">request_quote</span>
            <span>Get Quote Now</span>
          </button>
        </div>
      </div>
    </>
  );
};
