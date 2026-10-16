import React from 'react';
import { BRAND } from '../data/content';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#080e1d]/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#242a3a] border border-white/[0.1] w-full max-w-lg rounded-3xl p-6 space-y-4 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#adc6ff] text-[22px]">
              {type === 'terms' ? 'gavel' : 'shield'}
            </span>
            <h3 className="font-display text-[18px] text-white font-bold">
              {type === 'terms' ? 'Terms & Operational Conditions' : 'Client Privacy Policy'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#191f2f] text-white flex items-center justify-center hover:bg-[#2f3445]"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        <div className="space-y-3 font-body text-[13px] text-[#c2c6d6] leading-relaxed">
          {type === 'terms' ? (
            <>
              <p>
                Welcome to <strong>{BRAND.name}</strong> ({BRAND.title}). By booking web creation or creative AI ad services, you agree to these operational standards:
              </p>
              <h4 className="font-display text-[14px] text-white font-bold pt-1">1. Fixed Scope & Transparent Pricing</h4>
              <p>
                All deliverables are priced in Indian Rupees (INR ₹) as displayed. Web packages include static pages, mobile optimization, call buttons, and WhatsApp routing. Complex server gateways (e.g. Razorpay auto-billing, custom multi-vendor accounts) require custom enterprise agreements.
              </p>
              <h4 className="font-display text-[14px] text-white font-bold pt-1">2. Delivery Timeline & Revisions</h4>
              <p>
                Turnaround is counted from the date business copy, photos, and prices are supplied via WhatsApp. Minor revisions (2 rounds for Basic/Standard, 3 for Advanced) are provided within 7 days of initial link delivery.
              </p>
              <h4 className="font-display text-[14px] text-white font-bold pt-1">3. Content Ownership</h4>
              <p>
                Clients retain 100% full ownership of their text, store photos, and brand trademarks. Upon settlement, all production code and assets are handed over.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>{BRAND.name}</strong> values your commercial privacy:
              </p>
              <h4 className="font-display text-[14px] text-white font-bold pt-1">1. Data Collected</h4>
              <p>
                We only collect your store name, locality, WhatsApp contact number, and menu/catalog items necessary to generate your website and marketing creatives.
              </p>
              <h4 className="font-display text-[14px] text-white font-bold pt-1">2. No Spam & No Data Reselling</h4>
              <p>
                Your phone numbers and customer details are NEVER shared, sold, or marketed to third-party telemarketers. All interactions are handled directly between your shop and our studio.
              </p>
              <h4 className="font-display text-[14px] text-white font-bold pt-1">3. Contact Direct</h4>
              <p>
                For any data correction or removal, message us directly at {BRAND.phone}.
              </p>
            </>
          )}
        </div>

        <div className="pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full h-11 rounded-xl bg-[#4d8eff] hover:bg-[#adc6ff] text-[#00285d] font-display text-[14px] font-bold"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
