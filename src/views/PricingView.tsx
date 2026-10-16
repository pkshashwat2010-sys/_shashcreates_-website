import React, { useState } from 'react';
import { BRAND, PACKAGES } from '../data/content';

interface PricingViewProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onOpenInquiry }) => {
  const [selectedBasePackage, setSelectedBasePackage] = useState<string>('package-standard');
  const [extraPosters, setExtraPosters] = useState<number>(0);
  const [includeVideoReel, setIncludeVideoReel] = useState<boolean>(false);
  const [maintenancePlan, setMaintenancePlan] = useState<'none' | 'essential' | 'pro'>('none');

  const basePkg = PACKAGES.find((p) => p.id === selectedBasePackage) || PACKAGES[1];
  const posterCost = extraPosters * 300;
  const reelCost = includeVideoReel ? 750 : 0;
  const maintenanceCost = maintenancePlan === 'essential' ? 500 : maintenancePlan === 'pro' ? 1000 : 0;
  const grandTotal = basePkg.price + posterCost + reelCost + maintenanceCost;

  const handleWhatsAppBooking = () => {
    const summary = `Hi _shashcreates_,\n\nI configured a tailored digital package:\n• Base: *${basePkg.name}* (₹${basePkg.price})\n• Extra AI Posters: *${extraPosters}* (+₹${posterCost})\n• Promo Video Reel: *${includeVideoReel ? 'Yes' : 'No'}* (+₹${reelCost})\n• Monthly Care: *${maintenancePlan === 'none' ? 'None' : maintenancePlan === 'essential' ? 'Essential ₹500/mo' : 'Pro ₹1,000/mo'}*\n\n*Total Estimate: ₹${grandTotal.toLocaleString('en-IN')}*\nPlease share next steps!`;
    window.open(BRAND.whatsappUrl(summary), '_blank');
  };

  return (
    <div className="flex flex-col w-full space-y-6 px-4 py-4 max-w-5xl mx-auto text-[#dde2f8]">
      {/* Header */}
      <div className="p-5 rounded-2xl bg-[#242a3a] border border-white/[0.08] shadow-lg">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#00a572]/20 text-[#4edea3] font-display text-[11px] font-bold uppercase mb-2">
          Transparent Indian Rupee (₹) Calculator
        </span>
        <h1 className="font-display text-[26px] sm:text-[34px] font-extrabold text-white">
          Interactive Pricing Matrix
        </h1>
        <p className="font-body text-[13px] text-[#c2c6d6] mt-1 max-w-xl">
          Customize your exact website scope and creative marketing add-ons with immediate live calculations.
        </p>
      </div>

      {/* Step 1: Base Package Selection */}
      <div className="space-y-3">
        <h2 className="font-display text-[16px] font-bold text-white flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#4d8eff] text-[#00285d] text-[12px] flex items-center justify-center font-extrabold">
            1
          </span>
          <span>Choose Core Website Package</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {PACKAGES.map((pkg) => {
            const isSelected = pkg.id === selectedBasePackage;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedBasePackage(pkg.id)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#242a3a] border-[#4d8eff] shadow-lg shadow-blue-500/10'
                    : 'bg-[#151b2b] border-white/[0.06] hover:bg-[#191f2f]'
                }`}
              >
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-display text-[16px] font-bold text-white">{pkg.name}</h3>
                    {pkg.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-[#2f3445] text-[#adc6ff] font-display text-[10px] font-bold">
                        {pkg.badge}
                      </span>
                    )}
                  </div>
                  <div className="font-display text-[24px] font-extrabold text-[#adc6ff] my-1">
                    ₹{pkg.price.toLocaleString('en-IN')}
                  </div>
                  <p className="font-body text-[12px] text-[#c2c6d6]">{pkg.targetAudience}</p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-display font-semibold">
                  <span
                    className={`material-symbols-outlined text-[16px] ${
                      isSelected ? 'text-[#4edea3]' : 'text-[#8c909f]'
                    }`}
                  >
                    {isSelected ? 'radio_button_checked' : 'radio_button_unchecked'}
                  </span>
                  <span className={isSelected ? 'text-white' : 'text-[#8c909f]'}>
                    {isSelected ? 'Selected' : 'Select'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step 2: Marketing & Ad Add-ons */}
      <div className="space-y-3">
        <h2 className="font-display text-[16px] font-bold text-white flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#571bc1] text-white text-[12px] flex items-center justify-center font-extrabold">
            2
          </span>
          <span>Add AI Advertising Creatives</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Extra AI Posters Counter */}
          <div className="p-4 rounded-2xl bg-[#191f2f] border border-white/[0.06] flex items-center justify-between">
            <div>
              <h4 className="font-display text-[14px] text-white font-bold">AI Promo Posters (₹300/ea)</h4>
              <p className="font-body text-[12px] text-[#c2c6d6]">WhatsApp status & store print flyers</p>
            </div>

            <div className="flex items-center gap-2 bg-[#242a3a] p-1.5 rounded-xl border border-white/[0.08]">
              <button
                type="button"
                onClick={() => setExtraPosters(Math.max(0, extraPosters - 1))}
                className="w-7 h-7 rounded-lg bg-[#191f2f] hover:bg-white/10 text-white font-bold flex items-center justify-center"
              >
                -
              </button>
              <span className="font-display text-[14px] font-bold text-white w-6 text-center">
                {extraPosters}
              </span>
              <button
                type="button"
                onClick={() => setExtraPosters(extraPosters + 1)}
                className="w-7 h-7 rounded-lg bg-[#4d8eff] hover:bg-[#adc6ff] text-[#00285d] font-bold flex items-center justify-center"
              >
                +
              </button>
            </div>
          </div>

          {/* Promotional Reel Toggle */}
          <div
            onClick={() => setIncludeVideoReel(!includeVideoReel)}
            className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
              includeVideoReel
                ? 'bg-[#242a3a] border-[#4edea3]'
                : 'bg-[#191f2f] border-white/[0.06]'
            }`}
          >
            <div>
              <h4 className="font-display text-[14px] text-white font-bold">15s Vertical Video Reel (+₹750)</h4>
              <p className="font-body text-[12px] text-[#c2c6d6]">Engaging motion hook for Instagram</p>
            </div>
            <div
              className={`w-6 h-6 rounded-md flex items-center justify-center ${
                includeVideoReel ? 'bg-[#4edea3] text-[#003824]' : 'bg-[#2f3445] text-transparent'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">check</span>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Optional Maintenance Retainer */}
      <div className="space-y-3">
        <h2 className="font-display text-[16px] font-bold text-white flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-[#00a572] text-[#003824] text-[12px] flex items-center justify-center font-extrabold">
            3
          </span>
          <span>Optional Monthly Maintenance</span>
        </h2>

        <div className="grid grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => setMaintenancePlan('none')}
            className={`p-3 rounded-xl border text-center transition-all ${
              maintenancePlan === 'none'
                ? 'bg-[#4d8eff] text-[#00285d] font-bold border-[#4d8eff]'
                : 'bg-[#151b2b] text-[#c2c6d6] border-white/[0.06]'
            }`}
          >
            <span className="font-display text-[12px] block">No Care Plan</span>
            <span className="font-body text-[10px] block opacity-80">Pay per edit</span>
          </button>

          <button
            type="button"
            onClick={() => setMaintenancePlan('essential')}
            className={`p-3 rounded-xl border text-center transition-all ${
              maintenancePlan === 'essential'
                ? 'bg-[#4d8eff] text-[#00285d] font-bold border-[#4d8eff]'
                : 'bg-[#151b2b] text-[#c2c6d6] border-white/[0.06]'
            }`}
          >
            <span className="font-display text-[12px] block">Essential</span>
            <span className="font-display text-[11px] block font-extrabold">+₹500/mo</span>
          </button>

          <button
            type="button"
            onClick={() => setMaintenancePlan('pro')}
            className={`p-3 rounded-xl border text-center transition-all ${
              maintenancePlan === 'pro'
                ? 'bg-[#4d8eff] text-[#00285d] font-bold border-[#4d8eff]'
                : 'bg-[#151b2b] text-[#c2c6d6] border-white/[0.06]'
            }`}
          >
            <span className="font-display text-[12px] block">Pro Care</span>
            <span className="font-display text-[11px] block font-extrabold">+₹1,000/mo</span>
          </button>
        </div>
      </div>

      {/* Live Estimate Breakdown Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-[#242a3a] to-[#151b2b] border border-[#4d8eff]/30 shadow-xl space-y-4">
        <div className="flex justify-between items-baseline border-b border-white/[0.08] pb-3">
          <div>
            <span className="font-display text-[11px] font-bold text-[#adc6ff] uppercase tracking-wider">
              Total Customized Investment
            </span>
            <div className="font-display text-[36px] font-black text-white tracking-tight">
              ₹{grandTotal.toLocaleString('en-IN')}
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-md bg-[#00a572]/20 text-[#4edea3] font-display text-[11px] font-bold">
            Zero Hidden Fees
          </span>
        </div>

        {/* Breakdown Items */}
        <div className="space-y-1.5 text-[13px] font-body text-[#c2c6d6]">
          <div className="flex justify-between">
            <span>Core Build: {basePkg.name}</span>
            <span className="text-white font-semibold">₹{basePkg.price}</span>
          </div>
          {extraPosters > 0 && (
            <div className="flex justify-between">
              <span>{extraPosters}x Custom AI Posters</span>
              <span className="text-white font-semibold">+₹{posterCost}</span>
            </div>
          )}
          {includeVideoReel && (
            <div className="flex justify-between">
              <span>1x Social Promo Video Reel</span>
              <span className="text-white font-semibold">+₹750</span>
            </div>
          )}
          {maintenancePlan !== 'none' && (
            <div className="flex justify-between">
              <span>Monthly Care ({maintenancePlan})</span>
              <span className="text-white font-semibold">+₹{maintenanceCost}/mo</span>
            </div>
          )}
          <div className="flex justify-between text-[#4edea3] text-[12px] pt-1 border-t border-white/[0.04]">
            <span>Fast Hosting Deployment & SSL</span>
            <span className="font-bold">Included Free</span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={handleWhatsAppBooking}
            className="flex-1 h-12 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#005ac2] text-white font-display text-[14px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Book Configuration on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => onOpenInquiry(`Custom Config: ₹${grandTotal}`)}
            className="h-12 px-5 rounded-xl bg-[#2f3445] hover:bg-[#33394a] text-[#dde2f8] font-display text-[13px] font-semibold active:scale-95 transition-all"
          >
            Inquire via Studio Desk
          </button>
        </div>
      </div>
    </div>
  );
};
