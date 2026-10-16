import React, { useState } from 'react';
import { BRAND, ESTIMATE_OPTIONS, PACKAGES, PORTFOLIO_ITEMS, SERVICES } from '../data/content';
import { TabType } from '../types';

interface HomeViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenInquiry: (serviceName?: string) => void;
  onOpenPreview: (demoType: 'grocery' | 'bistro' | 'diwali-poster' | 'salon-reel') => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectTab,
  onOpenInquiry,
  onOpenPreview,
}) => {
  const [selectedBiz, setSelectedBiz] = useState<'kirana' | 'food' | 'salon' | 'coaching'>('kirana');
  const estimate = ESTIMATE_OPTIONS[selectedBiz];

  const scrollToServices = () => {
    const el = document.getElementById('services-catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing-preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col w-full text-[#dde2f8]">
      {/* Ambient Radiant Backdrop FX */}
      <div className="relative w-full overflow-hidden px-4 pt-6 pb-10">
        <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-[#4d8eff]/15 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 -right-24 w-80 h-80 rounded-full bg-[#571bc1]/20 blur-3xl pointer-events-none"></div>

        {/* Trust Indicator Pill */}
        <div className="relative z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#242a3a]/80 border border-white/[0.08] backdrop-blur-md shadow-sm w-fit mx-auto mb-4">
          <span className="inline-block w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
          <span className="font-display text-[11px] font-bold text-[#4edea3] tracking-wide uppercase">
            Transparent • Mobile First • Made for Bharat
          </span>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center flex flex-col items-center max-w-xl mx-auto">
          <h1 className="font-display text-[32px] sm:text-[42px] leading-[40px] sm:leading-[50px] font-extrabold text-[#dde2f8] tracking-tight mb-3">
            Websites &{' '}
            <span className="animate-ai-ads-glow font-extrabold px-0.5">
              AI Ads
            </span>{' '}
            That Help Your Business Grow
          </h1>
          <p className="font-body text-[14px] sm:text-[16px] text-[#c2c6d6] max-w-sm sm:max-w-md mb-6 leading-relaxed">
            Affordable websites, creative advertisements, and digital solutions for local businesses. Get started with a simple, transparent pricing structure.
          </p>

          {/* Action Cluster */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xs sm:max-w-md mb-6">
            <button
              type="button"
              onClick={scrollToPricing}
              className="w-full sm:w-auto px-6 h-12 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#4d8eff] to-[#005ac2] text-white font-display text-[15px] font-bold shadow-lg shadow-blue-500/25 active:scale-95 transition-transform"
            >
              <span className="material-symbols-outlined text-[20px]">bolt</span>
              <span>Get a Free Quote</span>
            </button>
            <button
              type="button"
              onClick={scrollToServices}
              className="w-full sm:w-auto px-6 h-12 flex items-center justify-center gap-2 rounded-2xl bg-[#2f3445]/60 hover:bg-[#2f3445] text-[#dde2f8] font-display text-[15px] font-bold border border-white/[0.08] backdrop-blur-md shadow-sm active:scale-95 transition-all"
            >
              <span>Explore Our Services</span>
              <span className="material-symbols-outlined text-[18px] text-[#adc6ff]">arrow_downward</span>
            </button>
          </div>

          {/* Trust Badges Row */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-sm py-2 px-3 rounded-2xl bg-[#151b2b]/70 border border-white/[0.06] backdrop-blur-sm shadow-sm">
            <div className="flex flex-col items-center text-center p-1">
              <span className="material-symbols-outlined text-[#adc6ff] text-[22px] mb-1">payments</span>
              <span className="font-display text-[11px] font-bold text-[#c2c6d6]">From ₹2,000</span>
            </div>
            <div className="flex flex-col items-center text-center p-1">
              <span className="material-symbols-outlined text-[#4edea3] text-[22px] mb-1">smartphone</span>
              <span className="font-display text-[11px] font-bold text-[#c2c6d6]">100% Mobile Ready</span>
            </div>
            <div className="flex flex-col items-center text-center p-1">
              <span className="material-symbols-outlined text-[#d0bcff] text-[22px] mb-1">storefront</span>
              <span className="font-display text-[11px] font-bold text-[#c2c6d6]">Local Bharat Focus</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Showcase: Demonstration Work */}
      <section className="flex flex-col w-full py-6 bg-[#080e1d]/70 border-y border-white/[0.05]">
        <div className="px-4 max-w-5xl mx-auto w-full flex items-end justify-between mb-4">
          <div>
            <div className="flex items-center gap-1.5 text-[#adc6ff] mb-1">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span className="font-display text-[11px] font-bold uppercase tracking-wider">Realistic Portfolio</span>
            </div>
            <h2 className="font-display text-[20px] text-[#dde2f8] font-bold">Demonstration Concepts</h2>
          </div>
          <span className="font-body text-[12px] text-[#8c909f] flex items-center gap-1">
            <span>Swipe</span>
            <span className="material-symbols-outlined text-[14px]">east</span>
          </span>
        </div>

        {/* Horizontal Showcase Scroller */}
        <div className="flex gap-4 overflow-x-auto px-4 max-w-5xl mx-auto w-full pb-2 snap-x snap-mandatory scroll-smooth no-scrollbar">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenPreview(item.demoType)}
              className="snap-start shrink-0 w-[275px] rounded-2xl bg-[#242a3a] border border-white/[0.08] overflow-hidden shadow-lg flex flex-col cursor-pointer group hover:border-[#4d8eff]/40 transition-all"
            >
              <div className="relative h-44 w-full bg-[#191f2f] overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={item.image}
                  alt={item.imageAlt}
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#080e1d]/85 backdrop-blur-md border border-white/[0.1]">
                  <span className={`font-display text-[11px] font-bold ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-[#2f3445]/90 text-[#dde2f8] backdrop-blur-md flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px] text-[#4edea3]">
                    {item.category === 'qr-menu' ? 'restaurant_menu' : item.category === 'reel' ? 'movie' : 'shopping_bag'}
                  </span>
                  <span className="font-display text-[11px] font-semibold">{item.categoryLabel}</span>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-display text-[15px] font-bold text-[#dde2f8] mb-1 group-hover:text-[#adc6ff] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-[12px] text-[#c2c6d6] line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-[#adc6ff]">
                  <span className="font-display text-[12px] font-bold">
                    {item.category === 'reel' ? 'Play Sample Reel' : 'Live Mobile Preview'}
                  </span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                    {item.category === 'reel' ? 'play_circle' : 'arrow_forward'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Digital Services Catalog */}
      <section className="px-4 py-8 max-w-5xl mx-auto w-full flex flex-col" id="services-catalog">
        <div className="text-left mb-6">
          <span className="font-display text-[11px] text-[#4edea3] uppercase tracking-wider font-bold">
            Designed for Small Bharat Businesses
          </span>
          <h2 className="font-display text-[26px] sm:text-[32px] font-bold text-[#dde2f8] mt-1">
            Digital Services for You
          </h2>
          <p className="font-body text-[13px] text-[#c2c6d6] mt-1">
            Direct, modular packages without tech jargon. Pick only what your shop needs.
          </p>
        </div>

        {/* 8 Interactive Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onOpenInquiry(srv.title)}
              className="p-4 rounded-2xl bg-[#151b2b] hover:bg-[#191f2f] border border-white/[0.06] hover:border-[#4d8eff]/30 transition-all shadow-sm flex items-start gap-3.5 cursor-pointer group active:scale-[0.99]"
            >
              <div className="w-11 h-11 rounded-xl bg-[#4d8eff]/20 text-[#adc6ff] group-hover:bg-[#4d8eff] group-hover:text-[#002e6a] flex items-center justify-center shrink-0 transition-colors">
                <span className="material-symbols-outlined text-[24px]">{srv.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-display text-[15px] font-bold text-[#dde2f8] truncate group-hover:text-[#adc6ff] transition-colors">
                    {srv.title}
                  </h3>
                  <span className={`font-display text-[11px] font-bold shrink-0 ${srv.badgeColor}`}>
                    {srv.priceTag}
                  </span>
                </div>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-1 leading-snug">
                  {srv.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Why Choose Us */}
      <section className="px-4 py-8 bg-[#080e1d]/80 border-y border-white/[0.05] flex flex-col w-full">
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-6">
            <span className="font-display text-[11px] text-[#adc6ff] uppercase tracking-wider font-bold">
              Honest Promises
            </span>
            <h2 className="font-display text-[26px] sm:text-[32px] text-[#dde2f8] font-bold mt-1">
              Why Small Businesses Trust Us
            </h2>
            <p className="font-body text-[13px] text-[#c2c6d6] mt-1">
              No exaggerated claims or fake guarantees. Just dependable craftsmanship for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Point 1 */}
            <div className="p-4 rounded-2xl bg-[#151b2b] border border-white/[0.06] flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4d8eff]/20 text-[#adc6ff] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
              <div>
                <h4 className="font-display text-[14px] font-bold text-[#dde2f8]">Affordable Starting Prices</h4>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-0.5">
                  Full website creation begins at just ₹2,000 total with zero surprise fees afterwards.
                </p>
              </div>
            </div>

            {/* Point 2 */}
            <div className="p-4 rounded-2xl bg-[#151b2b] border border-white/[0.06] flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">phone_iphone</span>
              </div>
              <div>
                <h4 className="font-display text-[14px] font-bold text-[#dde2f8]">Mobile Shopper Ready</h4>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-0.5">
                  90%+ of your buyers browse via smartphones. Our designs load under 2 seconds on 4G networks.
                </p>
              </div>
            </div>

            {/* Point 3 */}
            <div className="p-4 rounded-2xl bg-[#151b2b] border border-white/[0.06] flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4d8eff]/20 text-[#adc6ff] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </div>
              <div>
                <h4 className="font-display text-[14px] font-bold text-[#dde2f8]">Direct WhatsApp Updates</h4>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-0.5">
                  No complicated support tickets. Discuss edits directly over simple WhatsApp voice notes and phone calls.
                </p>
              </div>
            </div>

            {/* Point 4 */}
            <div className="p-4 rounded-2xl bg-[#151b2b] border border-white/[0.06] flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
              </div>
              <div>
                <h4 className="font-display text-[14px] font-bold text-[#dde2f8]">Zero Hidden Charges</h4>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-0.5">
                  Every quote clearly outlines hosting fees, domain renewal costs, and turnaround expectations beforehand.
                </p>
              </div>
            </div>

            {/* Point 5 */}
            <div className="p-4 rounded-2xl bg-[#151b2b] border border-white/[0.06] flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#571bc1]/30 text-[#d0bcff] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">palette</span>
              </div>
              <div>
                <h4 className="font-display text-[14px] font-bold text-[#dde2f8]">Neighborhood Brand Identity</h4>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-0.5">
                  We personalize each color scheme and banner to reflect your store's authentic local reputation.
                </p>
              </div>
            </div>

            {/* Point 6 */}
            <div className="p-4 rounded-2xl bg-[#151b2b] border border-white/[0.06] flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#4d8eff]/20 text-[#adc6ff] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]">visibility</span>
              </div>
              <div>
                <h4 className="font-display text-[14px] font-bold text-[#dde2f8]">Step-by-Step Preview</h4>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-0.5">
                  Review a private working link on your mobile phone before we officially launch your site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
      <section className="px-4 py-8 max-w-5xl mx-auto w-full flex flex-col" id="pricing-preview">
        <div className="text-center mb-6">
          <span className="font-display text-[11px] text-[#4edea3] uppercase tracking-wider font-bold">
            Transparent INR Packages
          </span>
          <h2 className="font-display text-[26px] sm:text-[32px] text-[#dde2f8] font-bold mt-1">
            Simple Website Packages
          </h2>
          <p className="font-body text-[13px] text-[#c2c6d6] max-w-xs mx-auto mt-1">
            Choose the scale that fits your current operational stage.
          </p>
        </div>

        {/* Pricing Cards Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {PACKAGES.map((pkg) => {
            const isPopular = pkg.id === 'package-standard';
            return (
              <div
                key={pkg.id}
                className={`p-5 rounded-2xl shadow-md flex flex-col justify-between relative overflow-hidden transition-all ${
                  isPopular
                    ? 'bg-[#242a3a] border-2 border-[#4d8eff]/40 shadow-xl'
                    : 'bg-[#151b2b] border border-white/[0.08]'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#4d8eff]/20 rounded-full blur-2xl pointer-events-none"></div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-display text-[18px] text-[#dde2f8] font-bold">{pkg.name}</h3>
                      <p className="font-body text-[12px] text-[#c2c6d6]">{pkg.targetAudience}</p>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-display text-[11px] font-bold ${
                        isPopular
                          ? 'bg-[#4d8eff] text-[#00285d]'
                          : 'bg-[#2f3445] text-[#c2c6d6]'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  <div className="my-3 flex items-baseline gap-1.5">
                    <span
                      className={`font-display text-[34px] font-extrabold tracking-tight ${
                        isPopular ? 'text-[#adc6ff]' : 'text-white'
                      }`}
                    >
                      ₹{pkg.price.toLocaleString('en-IN')}
                    </span>
                    <span className="font-body text-[12px] text-[#8c909f]">one-time total</span>
                  </div>

                  <div className="flex flex-col gap-2 mb-6">
                    {pkg.features.slice(0, 5).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[17px] text-[#4edea3] shrink-0 mt-0.5">
                          {isPopular ? 'check_circle' : 'check'}
                        </span>
                        <span className="font-body text-[13px] text-[#dde2f8] leading-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href={BRAND.whatsappUrl(`Hi _shashcreates_, I want to book the ${pkg.name} Package for ₹${pkg.price}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full h-11 rounded-xl font-display text-[14px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-all ${
                      isPopular
                        ? 'bg-gradient-to-r from-[#4d8eff] to-[#005ac2] text-white shadow-md shadow-blue-500/20'
                        : 'bg-[#2f3445] hover:bg-[#33394a] text-white'
                    }`}
                  >
                    <span>Choose {pkg.name.split(' ')[0]}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectTab('services')}
                    className="text-center font-display text-[11px] text-[#adc6ff] hover:underline"
                  >
                    View detailed specs & deliverables →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section: Simple 3-Step Process */}
      <section className="px-4 py-8 bg-[#080e1d]/70 border-y border-white/[0.05] flex flex-col w-full" id="how-it-works">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-left mb-6">
            <span className="font-display text-[11px] text-[#adc6ff] uppercase tracking-wider font-bold">
              Effortless Onboarding
            </span>
            <h2 className="font-display text-[26px] sm:text-[32px] text-[#dde2f8] font-bold mt-1">
              How It Works in 3 Steps
            </h2>
            <p className="font-body text-[13px] text-[#c2c6d6] mt-1">
              No technical skills needed on your part. We do the heavy lifting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-[#191f2f] border border-white/[0.06] flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#4d8eff] text-[#00285d] font-display text-[18px] font-extrabold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h3 className="font-display text-[15px] font-bold text-[#dde2f8]">Tell Us About Your Business</h3>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-1 leading-snug">
                  Share your store photos, menu or product rates, address, and contact number with us on WhatsApp.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-[#191f2f] border border-white/[0.06] flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#571bc1] text-white font-display text-[18px] font-extrabold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h3 className="font-display text-[15px] font-bold text-[#dde2f8]">Approve Your Design Preview</h3>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-1 leading-snug">
                  Within 48-72 hours, we send you a live link to review on your phone. Tell us any changes you want.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-[#191f2f] border border-white/[0.06] flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00a572] text-[#003824] font-display text-[18px] font-extrabold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="font-display text-[15px] font-bold text-[#dde2f8]">Publish & Share With Customers</h3>
                <p className="font-body text-[13px] text-[#c2c6d6] mt-1 leading-snug">
                  Your website goes live on the internet! Put your new link on WhatsApp status, Instagram bio, and Google Maps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Inquiry Form Hook / Instant Estimate Selector */}
      <section className="px-4 py-8 max-w-xl mx-auto w-full flex flex-col" id="quote-calculator">
        <div className="p-5 rounded-2xl bg-[#242a3a] border border-white/[0.1] shadow-xl relative overflow-hidden flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-[#adc6ff] text-[22px]">calculate</span>
            <h3 className="font-display text-[18px] text-[#dde2f8] font-bold">Instant Estimate Selector</h3>
          </div>
          <p className="font-body text-[13px] text-[#c2c6d6] mb-4">
            Select your business type to generate a tailored starter package:
          </p>

          {/* Category Filter Pills */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <button
              type="button"
              onClick={() => setSelectedBiz('kirana')}
              className={`py-2.5 px-3 rounded-xl font-display text-[13px] font-semibold text-center transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                selectedBiz === 'kirana'
                  ? 'bg-[#4d8eff] text-white shadow-md'
                  : 'bg-[#2f3445] text-[#dde2f8] hover:bg-[#33394a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">local_grocery_store</span>
              <span>Kirana / Mart</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedBiz('food')}
              className={`py-2.5 px-3 rounded-xl font-display text-[13px] font-semibold text-center transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                selectedBiz === 'food'
                  ? 'bg-[#4d8eff] text-white shadow-md'
                  : 'bg-[#2f3445] text-[#dde2f8] hover:bg-[#33394a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">restaurant</span>
              <span>Cafe / Dhaba</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedBiz('salon')}
              className={`py-2.5 px-3 rounded-xl font-display text-[13px] font-semibold text-center transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                selectedBiz === 'salon'
                  ? 'bg-[#4d8eff] text-white shadow-md'
                  : 'bg-[#2f3445] text-[#dde2f8] hover:bg-[#33394a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">spa</span>
              <span>Salon / Spa</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedBiz('coaching')}
              className={`py-2.5 px-3 rounded-xl font-display text-[13px] font-semibold text-center transition-all flex items-center justify-center gap-1.5 active:scale-95 ${
                selectedBiz === 'coaching'
                  ? 'bg-[#4d8eff] text-white shadow-md'
                  : 'bg-[#2f3445] text-[#dde2f8] hover:bg-[#33394a]'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">school</span>
              <span>Coaching / Tutors</span>
            </button>
          </div>

          {/* Dynamic Estimate Result Box */}
          <div className="p-3.5 rounded-xl bg-[#151b2b] border border-white/[0.06] mb-4 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-1">
              <span className="font-display text-[14px] text-white font-bold">{estimate.title}</span>
              <span className="font-display text-[16px] text-[#4edea3] font-extrabold">{estimate.price}</span>
            </div>
            <p className="font-body text-[12px] text-[#c2c6d6]">{estimate.desc}</p>
          </div>

          <a
            href={BRAND.whatsappUrl(estimate.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#005ac2] text-white font-display text-[14px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span>Confirm On WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="px-4 pt-4 pb-12 max-w-xl mx-auto w-full text-center">
        <div className="p-6 rounded-2xl bg-gradient-to-b from-[#242a3a] to-[#080e1d] border border-white/[0.08] shadow-2xl flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-[#00a572]/20 text-[#4edea3] flex items-center justify-center mb-3">
            <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
          </div>
          <h2 className="font-display text-[24px] sm:text-[28px] font-extrabold text-[#dde2f8] max-w-xs">
            Ready to Take Your Business Online?
          </h2>
          <p className="font-body text-[13px] text-[#c2c6d6] max-w-xs mt-2 mb-6">
            Join hundreds of neighborhood stores building credibility and direct customer orders across India.
          </p>

          {/* Primary Action */}
          <button
            type="button"
            onClick={() => onOpenInquiry('Ready to Start Project')}
            className="w-full max-w-xs h-12 flex items-center justify-center gap-2 rounded-2xl bg-[#4d8eff] hover:bg-[#adc6ff] text-[#00285d] font-display text-[15px] font-bold shadow-lg shadow-blue-500/20 active:scale-95 transition-transform mb-4"
          >
            <span>Start Your Project</span>
            <span className="material-symbols-outlined text-[20px]">send</span>
          </button>

          {/* WhatsApp Help Banner Callout */}
          <a
            href={BRAND.whatsappUrl('Hi _shashcreates_, I have a question regarding online store setup.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs p-3 rounded-xl bg-[#191f2f] hover:bg-[#242a3a] border border-white/[0.06] flex items-center justify-center gap-2 transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] text-[#4edea3]">support_agent</span>
            <span className="font-display text-[12px] text-[#c2c6d6]">WhatsApp Support:</span>
            <span className="font-display text-[12px] text-[#4edea3] font-bold">{BRAND.phone}</span>
          </a>
        </div>
      </section>
    </div>
  );
};
