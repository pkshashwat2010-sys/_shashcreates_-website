import React from 'react';
import { AI_ADS_GALLERY, BRAND } from '../data/content';

interface AiAdsViewProps {
  onOpenInquiry: (serviceName?: string) => void;
  onOpenPreview: (demoType: 'grocery' | 'bistro' | 'diwali-poster' | 'salon-reel') => void;
}

export const AiAdsView: React.FC<AiAdsViewProps> = ({
  onOpenInquiry,
  onOpenPreview,
}) => {
  const scrollToSamples = () => {
    const el = document.getElementById('samples-gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full space-y-6 px-4 py-4 max-w-5xl mx-auto text-[#dde2f8]">
      {/* Hero Section */}
      <section className="relative pt-2">
        <div className="flex flex-col space-y-3 relative z-10">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#571bc1]/30 border border-[#571bc1]/40 text-[#d0bcff] w-fit shadow-sm">
            <span className="material-symbols-outlined text-[16px]">bolt</span>
            <span className="font-display text-[11px] font-bold tracking-wide uppercase">
              Engineered for Bharat Commerce
            </span>
          </div>

          <h1 className="font-display text-[26px] sm:text-[36px] font-extrabold text-[#dde2f8] tracking-tight leading-tight">
            High-Impact <span className="animate-ai-ads-glow font-extrabold px-0.5">AI Advertisements</span> & Social Media Creatives for Local Shops
          </h1>

          <p className="font-body text-[14px] sm:text-[15px] text-[#c2c6d6] leading-relaxed max-w-2xl">
            Attract local customers on WhatsApp, Instagram, and Facebook with custom AI-assisted posters, promotional reels, and festival greetings.
          </p>

          <div className="pt-2 flex flex-wrap gap-2.5 items-center">
            <button
              type="button"
              onClick={() => onOpenInquiry('AI Advertisement General Inquiry')}
              className="h-12 px-5 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#005ac2] text-white font-display text-[14px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">add_photo_alternate</span>
              <span>Request an Advertisement</span>
            </button>

            <button
              type="button"
              onClick={scrollToSamples}
              className="h-12 px-4 rounded-xl bg-[#242a3a] hover:bg-[#2f3445] text-[#dde2f8] font-display text-[13px] font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-all border border-white/[0.08]"
            >
              <span className="material-symbols-outlined text-[18px] text-[#adc6ff]">photo_library</span>
              <span>View Demos</span>
            </button>
          </div>
        </div>
      </section>

      {/* Value Pill Counters */}
      <section className="grid grid-cols-2 gap-3">
        <div className="bg-[#151b2b] border border-white/[0.06] p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <span className="material-symbols-outlined text-[#4edea3] text-[24px]">verified</span>
          <div className="mt-2">
            <span className="font-display text-[20px] font-bold text-white">24–48h</span>
            <p className="font-body text-[12px] text-[#c2c6d6]">Turnaround for Local Campaigns</p>
          </div>
        </div>

        <div className="bg-[#151b2b] border border-white/[0.06] p-4 rounded-2xl flex flex-col justify-between shadow-sm">
          <span className="material-symbols-outlined text-[#adc6ff] text-[24px]">translate</span>
          <div className="mt-2">
            <span className="font-display text-[20px] font-bold text-white">Bilingual</span>
            <p className="font-body text-[12px] text-[#c2c6d6]">Hindi & Regional Copy Options</p>
          </div>
        </div>
      </section>

      {/* Interactive Offerings & Pricing Matrix */}
      <section className="flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-[20px] font-bold text-white">Services & Matrix</h2>
            <p className="font-body text-[12px] text-[#c2c6d6]">Starting prices tuned for small & medium merchants</p>
          </div>
          <span className="material-symbols-outlined text-[#d0bcff] text-[24px]">auto_awesome</span>
        </div>

        {/* Pricing / Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Service 1: Highlighted Poster */}
          <div className="bg-[#191f2f] border border-white/[0.08] p-5 rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between space-y-4">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-[#4d8eff]/10 rounded-full blur-xl pointer-events-none"></div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#4d8eff]/15 text-[#adc6ff] font-display text-[11px] font-bold uppercase">
                  Popular Tier
                </span>
                <div className="flex items-baseline">
                  <span className="font-body text-[12px] text-[#8c909f] mr-1">Starts</span>
                  <span className="font-display text-[28px] text-white font-extrabold leading-none">₹300</span>
                  <span className="font-body text-[12px] text-[#8c909f] ml-1">/ poster</span>
                </div>
              </div>

              <h3 className="font-display text-[16px] text-white font-bold pt-1">
                AI Promotional Posters
              </h3>
              <p className="font-body text-[13px] text-[#c2c6d6] leading-relaxed">
                Includes custom high-resolution typography, product highlights, and festival discounts, formatted perfectly for print sheets and WhatsApp Status.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#dde2f8]">
                <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check_circle</span>
                <span className="font-body text-[12px]">Ultra-HD WhatsApp & Print formats (1080x1920)</span>
              </div>
              <div className="flex items-center gap-2 text-[#dde2f8]">
                <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check_circle</span>
                <span className="font-body text-[12px]">Custom branded colors & shop phone numbers</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenInquiry('AI Promotional Posters (₹300)')}
              className="w-full h-11 rounded-xl bg-[#242a3a] hover:bg-[#2f3445] text-[#adc6ff] font-display text-[13px] font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <span>Book Poster Design</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* Service 2: Short AI Reels/Videos */}
          <div className="bg-[#191f2f] border border-white/[0.08] p-5 rounded-2xl shadow-md relative overflow-hidden flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-[#571bc1]/30 text-[#d0bcff] font-display text-[11px] font-bold uppercase">
                  High Engagement
                </span>
                <div className="flex items-baseline">
                  <span className="font-display text-[22px] text-white font-extrabold leading-none">
                    ₹500 – ₹1,000
                  </span>
                  <span className="font-body text-[12px] text-[#8c909f] ml-1">/ video</span>
                </div>
              </div>

              <h3 className="font-display text-[16px] text-white font-bold pt-1">
                Short AI-Assisted Promotional Videos
              </h3>
              <p className="font-body text-[13px] text-[#c2c6d6] leading-relaxed">
                15-30s reel format equipped with dynamic visual transitions, motion graphic text callouts, royalty-free audio, and synthetic voiceover previews.
              </p>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-[#dde2f8]">
                <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check_circle</span>
                <span className="font-body text-[12px]">Optimized for Instagram Reels & Shorts</span>
              </div>
              <div className="flex items-center gap-2 text-[#dde2f8]">
                <span className="material-symbols-outlined text-[16px] text-[#4edea3]">check_circle</span>
                <span className="font-body text-[12px]">Dynamic subtitles & Hindi/English audio</span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => onOpenInquiry('Short AI Promotional Videos (₹500 - ₹1,000)')}
              className="w-full h-11 rounded-xl bg-[#242a3a] hover:bg-[#2f3445] text-[#d0bcff] font-display text-[13px] font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
            >
              <span>Book Reel Production</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Service 3 & 4 Mini Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-[#151b2b] border border-white/[0.06] p-4 rounded-2xl flex flex-col justify-between space-y-2 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[#adc6ff] mb-1">
                <span className="material-symbols-outlined text-[20px]">view_carousel</span>
                <span className="font-display text-[12px] font-bold">Feed & Story Ads</span>
              </div>
              <h4 className="font-display text-[15px] text-white font-bold">Social Media Ad Creatives</h4>
              <p className="font-body text-[12px] text-[#c2c6d6] mt-1 leading-snug">
                1:1 square feeds, 9:16 vertical stories, and banner dimensions crafted for Meta Ads manager conversion targets.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenInquiry('Social Media Ad Creatives')}
              className="text-left font-display text-[12px] text-[#adc6ff] font-bold flex items-center gap-1 pt-2 hover:underline"
            >
              <span>Enquire formats</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>

          <div className="bg-[#151b2b] border border-white/[0.06] p-4 rounded-2xl flex flex-col justify-between space-y-2 shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-[#4edea3] mb-1">
                <span className="material-symbols-outlined text-[20px]">auto_fix_high</span>
                <span className="font-display text-[12px] font-bold">Studio Quality Staging</span>
              </div>
              <h4 className="font-display text-[15px] text-white font-bold">Product Promotion Images</h4>
              <p className="font-body text-[12px] text-[#c2c6d6] mt-1 leading-snug">
                Background isolation, multi-point digital lighting enhancements, and context staging for jewelry, apparel, and hardware.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenInquiry('Product Promotion Images')}
              className="text-left font-display text-[12px] text-[#4edea3] font-bold flex items-center gap-1 pt-2 hover:underline"
            >
              <span>Enquire staging</span>
              <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Additional Matrix Row Items */}
        <div className="bg-[#191f2f] border border-white/[0.08] rounded-2xl p-4 space-y-3">
          <h4 className="font-display text-[15px] text-white font-bold">Niche & Seasonal Offerings</h4>

          <div className="flex flex-col space-y-2">
            {/* Festival */}
            <div
              onClick={() => onOpenInquiry('Festival & Seasonal Designs (₹350)')}
              className="p-3 rounded-xl bg-[#242a3a]/70 hover:bg-[#242a3a] border border-white/[0.05] flex items-start gap-3 cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[#d0bcff] text-[20px] mt-0.5">celebration</span>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-display text-[13px] text-white font-bold">Festival & Seasonal Designs</span>
                  <span className="font-display text-[12px] text-[#4edea3] font-bold">From ₹350</span>
                </div>
                <p className="font-body text-[12px] text-[#c2c6d6]">
                  Diwali, Eid, Holi, Independence Day, and seasonal bazaar announcements.
                </p>
              </div>
            </div>

            {/* Restaurant */}
            <div
              onClick={() => onOpenInquiry('Restaurant Promotional Creatives (₹400)')}
              className="p-3 rounded-xl bg-[#242a3a]/70 hover:bg-[#242a3a] border border-white/[0.05] flex items-start gap-3 cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[#adc6ff] text-[20px] mt-0.5">restaurant_menu</span>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-display text-[13px] text-white font-bold">Restaurant Promotional Creatives</span>
                  <span className="font-display text-[12px] text-[#4edea3] font-bold">From ₹400</span>
                </div>
                <p className="font-body text-[12px] text-[#c2c6d6]">
                  Menu specials, combo deal cards, and weekend chef discount posts.
                </p>
              </div>
            </div>

            {/* Wedding */}
            <div
              onClick={() => onOpenInquiry('Wedding & Event Creatives (₹500)')}
              className="p-3 rounded-xl bg-[#242a3a]/70 hover:bg-[#242a3a] border border-white/[0.05] flex items-start gap-3 cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[#4edea3] text-[20px] mt-0.5">event</span>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-display text-[13px] text-white font-bold">Wedding & Event Creatives</span>
                  <span className="font-display text-[12px] text-[#4edea3] font-bold">From ₹500</span>
                </div>
                <p className="font-body text-[12px] text-[#c2c6d6]">
                  Digital invites, hall inaugurations, event catering menus, and announcements.
                </p>
              </div>
            </div>

            {/* Copywriting */}
            <div
              onClick={() => onOpenInquiry('Ad Copywriting & Content Packs')}
              className="p-3 rounded-xl bg-[#242a3a]/70 hover:bg-[#242a3a] border border-white/[0.05] flex items-start gap-3 cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined text-[#8c909f] text-[20px] mt-0.5">edit_note</span>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-display text-[13px] text-white font-bold">Ad Copywriting & Content Packs</span>
                  <span className="font-display text-[12px] text-[#8c909f] font-semibold">Custom</span>
                </div>
                <p className="font-body text-[12px] text-[#c2c6d6]">
                  Bilingual conversational captions (Hindi + English) paired with weekly scheduled content packs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Creative Gallery Preview */}
      <section className="flex flex-col space-y-4" id="samples-gallery">
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-[20px] font-bold text-white">Sample Creative Gallery</h2>
            <span className="font-display text-[11px] text-[#adc6ff] font-bold px-2 py-0.5 rounded-full bg-[#4d8eff]/15">
              Active Demos
            </span>
          </div>
          <p className="font-body text-[12px] text-[#c2c6d6]">
            Live previews of real-world Indian SME campaign collaterals
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {AI_ADS_GALLERY.map((item) => (
            <div
              key={item.id}
              className="bg-[#191f2f] border border-white/[0.08] rounded-2xl overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative w-full h-56 bg-[#242a3a] overflow-hidden group">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 bg-[#080e1d]/85 backdrop-blur-md px-2.5 py-0.5 rounded-lg text-white font-display text-[11px] font-semibold flex items-center gap-1 border border-white/[0.1]">
                  <span className="material-symbols-outlined text-[14px] text-[#d0bcff]">
                    {item.tagIcon}
                  </span>
                  <span>{item.tag}</span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                <div>
                  <h4 className="font-display text-[14px] text-white font-bold leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-body text-[12px] text-[#c2c6d6] mt-0.5">{item.resolution}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onOpenPreview('diwali-poster')}
                    className="flex-1 h-9 rounded-lg bg-[#242a3a] hover:bg-[#2f3445] text-white font-display text-[12px] font-bold flex items-center justify-center gap-1 active:scale-95 transition-all"
                  >
                    <span className="material-symbols-outlined text-[15px] text-[#adc6ff]">visibility</span>
                    <span>Preview</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenInquiry(`Template: ${item.templateName}`)}
                    className="flex-1 h-9 rounded-lg bg-[#4d8eff] hover:bg-[#adc6ff] text-[#00285d] font-display text-[12px] font-extrabold flex items-center justify-center gap-1 active:scale-95 transition-all"
                  >
                    <span>Use Template</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Realistic Advertising Disclaimer Box */}
      <section className="bg-[#080e1d] border border-white/[0.08] p-5 rounded-2xl shadow-sm relative overflow-hidden">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#191f2f] flex items-center justify-center flex-shrink-0 mt-0.5 text-[#8c909f]">
            <span className="material-symbols-outlined text-[24px]">verified_user</span>
          </div>
          <div className="space-y-1.5">
            <h4 className="font-display text-[14px] text-white font-bold">
              Realistic Advertising Policy & Disclaimer
            </h4>
            <p className="font-body text-[13px] text-[#c2c6d6] leading-relaxed">
              We provide high-quality creative designs and clear marketing copy. We do not make false promises of viral reach, guaranteed sales, or guaranteed business results. Real campaign success depends on product quality, local demand, and ad distribution.
            </p>
            <div className="pt-1 flex items-center gap-1 text-[#8c909f] font-display text-[11px] font-semibold">
              <span className="material-symbols-outlined text-[14px]">info</span>
              <span>Transparent Indian Business Commitment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Callout */}
      <section className="bg-gradient-to-br from-[#242a3a] to-[#151b2b] border border-white/[0.08] p-6 rounded-2xl text-center space-y-3 relative overflow-hidden">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#4d8eff]/20 flex items-center justify-center text-[#adc6ff]">
          <span className="material-symbols-outlined text-[28px]">rocket_launch</span>
        </div>
        <h3 className="font-display text-[20px] text-white font-bold">
          Ready to Elevate Your Shop’s Reach?
        </h3>
        <p className="font-body text-[13px] text-[#c2c6d6] max-w-sm mx-auto">
          Tell us your shop type, current offer, or upcoming holiday discount. We'll return ready-to-post creatives designed to sell.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2 max-w-sm mx-auto">
          <button
            type="button"
            onClick={() => onOpenInquiry('Custom AI Ad Campaign')}
            className="flex-1 h-12 px-6 rounded-xl bg-[#4d8eff] hover:bg-[#adc6ff] text-[#00285d] font-display text-[14px] font-bold shadow-md active:scale-95 transition-transform"
          >
            Create Your Ad Now
          </button>
          <a
            href={BRAND.whatsappUrl('Hi _shashcreates_, I want an AI advertisement banner for my shop.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 h-12 rounded-xl bg-[#00a572]/20 text-[#4edea3] border border-[#00a572]/40 font-display text-[14px] font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};
