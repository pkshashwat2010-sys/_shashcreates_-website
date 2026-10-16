import React from 'react';
import { BRAND } from '../data/content';

interface WhatsAppFloatingBarProps {
  customMessage?: string;
  onOpenInquiry?: () => void;
}

export const WhatsAppFloatingBar: React.FC<WhatsAppFloatingBarProps> = ({
  customMessage = 'Hi _shashcreates_, I would like to discuss a digital solution for my business.',
  onOpenInquiry,
}) => {
  return (
    <div className="fixed bottom-16 inset-x-0 z-40 px-4 pb-1.5 pointer-events-none">
      <div className="pointer-events-auto max-w-md mx-auto">
        <div className="flex items-center justify-between w-full h-12 px-3.5 rounded-2xl bg-[#00a572]/95 text-[#003824] backdrop-blur-xl shadow-[0_8px_24px_-4px_rgba(0,165,114,0.45)] border border-emerald-300/30 transition-transform active:scale-95 hover:bg-[#00a572]">
          <a
            href={BRAND.whatsappUrl(customMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 flex-1 min-w-0"
          >
            <div className="w-8 h-8 rounded-full bg-[#003824]/20 flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-[20px] text-[#003824]">chat</span>
            </div>
            <div className="flex flex-col text-left truncate">
              <span className="font-display text-[13px] font-extrabold leading-tight truncate text-[#002619]">
                Quick WhatsApp Chat
              </span>
              <span className="font-body text-[11px] text-[#003824]/90 leading-tight truncate">
                Instant quote & 15-min consultation
              </span>
            </div>
          </a>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            {onOpenInquiry && (
              <button
                type="button"
                onClick={onOpenInquiry}
                title="Open Form Inquiry"
                className="w-7 h-7 rounded-full bg-[#003824]/15 hover:bg-[#003824]/25 flex items-center justify-center text-[#003824] active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined text-[16px]">edit_square</span>
              </button>
            )}
            <a
              href={BRAND.whatsappUrl(customMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center text-[#003824]"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
