import React from 'react';
import { PACKAGES, MAINTENANCE_PLANS, BRAND } from '../data/content';

interface ServicesViewProps {
  onOpenInquiry: (serviceName?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenInquiry }) => {
  const scrollToPackage = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="flex flex-col w-full px-4 py-4 space-y-6 max-w-5xl mx-auto text-[#dde2f8]">
      {/* Header Banner / Overview Value Prop */}
      <div className="relative overflow-hidden rounded-2xl bg-[#242a3a] border border-white/[0.08] p-5 shadow-lg">
        <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-[#4d8eff]/10 blur-2xl pointer-events-none"></div>

        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#00a572]/20 text-[#4edea3] font-display text-[11px] font-bold">
            <span className="material-symbols-outlined text-[13px] mr-1">verified</span> Transparent Pricing
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#2f3445] text-[#c2c6d6] font-display text-[11px] font-semibold">
            Made for India
          </span>
        </div>

        <h1 className="font-display text-[26px] sm:text-[34px] font-extrabold text-[#dde2f8] tracking-tight mb-2">
          Tailored Web Packages for Local Growth
        </h1>
        <p className="font-body text-[13px] sm:text-[15px] text-[#c2c6d6] leading-relaxed max-w-2xl">
          Empower your neighborhood store, studio, or enterprise with high-velocity web experiences. Honest transparent pricing with zero concealed surprises.
        </p>

        {/* Quick Package Comparison Tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 mt-4 bg-[#080e1d] rounded-xl max-w-md">
          <button
            type="button"
            onClick={() => scrollToPackage('package-basic')}
            className="py-2 rounded-lg text-center font-display text-[12px] text-[#dde2f8] font-medium hover:bg-[#242a3a] transition-colors active:scale-95"
          >
            Basic ₹2K
          </button>
          <button
            type="button"
            onClick={() => scrollToPackage('package-standard')}
            className="py-2 rounded-lg text-center font-display text-[12px] bg-[#4d8eff] text-[#00285d] font-bold shadow-sm active:scale-95 transition-all"
          >
            Standard ₹3.5K
          </button>
          <button
            type="button"
            onClick={() => scrollToPackage('package-advanced')}
            className="py-2 rounded-lg text-center font-display text-[12px] text-[#dde2f8] font-medium hover:bg-[#242a3a] transition-colors active:scale-95"
          >
            Advanced ₹6.5K
          </button>
        </div>
      </div>

      {/* Package A: Basic Business Website */}
      <div
        className="relative rounded-2xl bg-[#191f2f] border border-white/[0.08] p-5 shadow-md flex flex-col space-y-4"
        id="package-basic"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#2f3445] text-[#adc6ff] font-display text-[11px] font-bold">
              Entry Package
            </span>
            <h2 className="font-display text-[20px] text-[#dde2f8] font-bold">
              Basic Business Website
            </h2>
            <p className="font-body text-[13px] text-[#c2c6d6]">
              Ideal for local retail shops, independent repair stores, and neighborhood service heroes.
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#242a3a] flex items-center justify-center flex-shrink-0 text-[#adc6ff]">
            <span className="material-symbols-outlined text-[26px]">storefront</span>
          </div>
        </div>

        {/* Visual Snapshot */}
        <div className="relative w-full h-40 rounded-xl overflow-hidden bg-[#080e1d]">
          <img
            className="w-full h-full object-cover"
            alt="A clean responsive mobile web preview of a local Indian grocery and sweet shop"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnKcYQv1F_55n56hC2TLVYprFp3B-xnbmUkR-lJH26EKwunFzuDLEsz3DKBDGisw6VgyBb1llO9labeXBXOvFsmUum6kxVPdesIxeUySjfwTxwUmPLpV-tZQCqox_ULnmLD9PCnU0dve2J9wUWbcW2PHGYo2FY2OGKcDFCoZYGKksMHw5kzPMRiyL-l47ZIR2c-UF4CrVtDv0vyzbkcVIBBtbvgBf3BMTRpEnalvT5JVv-jLodjoBxMg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191f2f] via-transparent to-transparent"></div>
          <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-[#2f3445]/90 backdrop-blur-sm text-[#dde2f8] font-display text-[11px] font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#4edea3]">devices</span>
            <span>1-Page High Speed</span>
          </div>
        </div>

        {/* Price Computation Box */}
        <div className="p-3 rounded-xl bg-[#080e1d] flex flex-col space-y-1 border border-white/[0.05]">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-[13px] text-[#c2c6d6]">Setup Breakdown</span>
            <span className="font-display text-[32px] font-extrabold text-[#adc6ff] tracking-tight">
              ₹2,000
            </span>
          </div>
          <div className="flex items-center justify-between text-[#c2c6d6] font-body text-[12px]">
            <span>₹1,500 Creation + ₹500 Publishing</span>
            <span className="text-[#4edea3] font-bold">Total Inclusive</span>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-2">
          <p className="font-display text-[11px] uppercase tracking-wider text-[#8c909f] font-bold">
            Included Deliverables
          </p>
          {[
            'High-impact single-page smooth scroll layout',
            'Business overview & credibility story',
            'Click-to-call direct contact dialer',
            'Product/Service grid (Up to 10 items)',
            'WhatsApp direct enquiry trigger on each item',
            'Mobile-responsive lightweight architecture',
            'Basic Search metadata & page titles',
            '2 rounds of minor content adjustments',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[#dde2f8] font-body text-[13px]">
              <div className="w-5 h-5 rounded-full bg-[#4d8eff]/15 flex items-center justify-center text-[#adc6ff] flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Package Action */}
        <button
          type="button"
          onClick={() => onOpenInquiry('Basic Business Website (₹2,000)')}
          className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#242a3a] hover:bg-[#2f3445] text-[#dde2f8] font-display text-[14px] font-bold shadow-sm transition-all active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[20px] text-[#adc6ff]">touch_app</span>
          <span>Select Basic Package</span>
        </button>
      </div>

      {/* Package B: Standard Business Website (Recommended) */}
      <div
        className="relative rounded-2xl bg-[#242a3a] border-2 border-[#4d8eff]/50 p-5 shadow-xl flex flex-col space-y-4"
        id="package-standard"
      >
        {/* Highlight Badge */}
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#4d8eff] text-[#00285d] font-display text-[11px] font-extrabold shadow-md">
            <span className="material-symbols-outlined text-[14px]">star</span> MOST POPULAR
          </span>
          <span className="font-display text-[11px] text-[#4edea3] font-bold tracking-wide uppercase">
            Multi-Section Ready
          </span>
        </div>

        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <h2 className="font-display text-[20px] text-[#dde2f8] font-bold">
              Standard Business Website
            </h2>
            <p className="font-body text-[13px] text-[#c2c6d6]">
              Optimized for salons, restaurants, multi-room medical clinics, and growing traders.
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#4d8eff] flex items-center justify-center flex-shrink-0 text-[#00285d] shadow-md">
            <span className="material-symbols-outlined text-[26px]">restaurant</span>
          </div>
        </div>

        {/* Visual Snapshot */}
        <div className="relative w-full h-44 rounded-xl overflow-hidden bg-[#080e1d]">
          <img
            className="w-full h-full object-cover"
            alt="A premium cafe and salon mobile digital storefront interface"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUGoiB9midL4qEQh0IjS4uDD72S15iReUdZ51vSmlcQQ4Lls8bX99Jx-Y_H6pRnzxxAo3RriG9j4Ls5Wg8lKcwBdiskWWIDotZQvJDKjGLnGEGmQd9CEHytwW_pKaoDHl3L26ty_Vwfh-VEka8ZthaXOyq8obgStwy5_CcrMg0_7QpM--frD2LCc_MxAZYGt4CgboKKArJ1T7SCHNT-qura5gxMIF4zsthTfUjxuFE5PcBVHGuGqaTg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#242a3a] via-transparent to-transparent"></div>
          <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-md bg-[#080e1d]/90 backdrop-blur-md text-[#dde2f8] font-display text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
            <span className="material-symbols-outlined text-[14px] text-[#4edea3]">category</span>
            <span>Up to 5 Pages / Tabs</span>
          </div>
        </div>

        {/* Price Computation Box */}
        <div className="p-3 rounded-xl bg-[#080e1d] flex flex-col space-y-1 border border-white/[0.05]">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-[13px] text-[#c2c6d6]">Standard Bundle</span>
            <span className="font-display text-[32px] font-extrabold text-[#d8e2ff] tracking-tight">
              ₹3,500
            </span>
          </div>
          <div className="flex items-center justify-between text-[#c2c6d6] font-body text-[12px]">
            <span>₹3,000 Creation + ₹500 Publishing</span>
            <span className="text-[#4edea3] font-bold">One-time Investment</span>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-2">
          <p className="font-display text-[11px] uppercase tracking-wider text-[#8c909f] font-bold">
            Included Deliverables
          </p>
          {[
            'Up to 5 Pages or equivalent categorized tab views',
            'Up to 30 product or service listings organized into categories',
            'Direct lead capture inquiry form & contact section',
            'WhatsApp direct order-intent button with item title',
            'Interactive Google Maps location integration',
            'OpenGraph cards for WhatsApp link previews & SEO metadata',
            'Full publishing support + 2 rounds of content polish',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[#dde2f8] font-body text-[13px]">
              <div className="w-5 h-5 rounded-full bg-[#4d8eff]/20 flex items-center justify-center text-[#adc6ff] flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Package Action */}
        <button
          type="button"
          onClick={() => onOpenInquiry('Standard Business Website (₹3,500)')}
          className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#005ac2] text-white font-display text-[15px] font-bold shadow-lg shadow-blue-500/25 transition-all active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[20px]">bolt</span>
          <span>Select Standard Package</span>
        </button>
      </div>

      {/* Package C: Advanced Business Website */}
      <div
        className="relative rounded-2xl bg-[#191f2f] border border-white/[0.08] p-5 shadow-md flex flex-col space-y-4"
        id="package-advanced"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#571bc1]/40 text-[#d0bcff] font-display text-[11px] font-bold">
              Maximum Scope
            </span>
            <h2 className="font-display text-[20px] text-[#dde2f8] font-bold">
              Advanced Business Website
            </h2>
            <p className="font-body text-[13px] text-[#c2c6d6]">
              Engineered for wholesalers, expanded regional catalogs, manufacturers, and multi-location firms.
            </p>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#242a3a] flex items-center justify-center flex-shrink-0 text-[#d0bcff]">
            <span className="material-symbols-outlined text-[26px]">inventory_2</span>
          </div>
        </div>

        {/* Visual Snapshot */}
        <div className="relative w-full h-40 rounded-xl overflow-hidden bg-[#080e1d]">
          <img
            className="w-full h-full object-cover"
            alt="Feature-rich dark glassmorphic website UI showcasing dynamic product catalog filter"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEMVh1UFRZtfb6ZS8fOlTA4I4Vz5Ebpnj3oL9NeoAt9BSMAGuo31eggwzVfLFhj3E8KnX9Wo8ROqAjAbNGrJOq1hyRqtHEtmxCQ6TgcKOwoho4esQGbiwrZXGSksGpjjVlRIn3AfdCkdpLU_EP6QityCrd666bj8u93ryRFlh8r6S_QMW6EMK0mQwGw0pIxcUSLy7sbQy0cEdmezyrG7gJY60fff0UknChQi53Tig8HjlrlXOUY9vL8A"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191f2f] via-transparent to-transparent"></div>
          <div className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-md bg-[#2f3445]/90 backdrop-blur-sm text-[#dde2f8] font-display text-[11px] font-semibold flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-[#4edea3]">search</span>
            <span>Instant Client-Side Filter</span>
          </div>
        </div>

        {/* Price Computation Box */}
        <div className="p-3 rounded-xl bg-[#080e1d] flex flex-col space-y-1 border border-white/[0.05]">
          <div className="flex items-baseline justify-between">
            <span className="font-display text-[13px] text-[#c2c6d6]">Full Advanced Build</span>
            <span className="font-display text-[32px] font-extrabold text-[#d0bcff] tracking-tight">
              ₹6,500
            </span>
          </div>
          <div className="flex items-center justify-between text-[#c2c6d6] font-body text-[12px]">
            <span>₹6,000 Creation + ₹500 Publishing</span>
            <span className="text-[#4edea3] font-bold">Total Inclusive</span>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-2">
          <p className="font-display text-[11px] uppercase tracking-wider text-[#8c909f] font-bold">
            Included Deliverables
          </p>
          {[
            'Up to 8 deep pages or comprehensive architectural sections',
            'Up to 60 product listings with interactive search filter',
            'Structured multi-field order/quote requisition workflow',
            'Smart WhatsApp routing with custom pre-filled message',
            'Enhanced dark glassmorphism & micro-interactions',
            'Technical SEO foundation with XML Sitemap indexing',
            'Publishing setup + 3 rounds of detailed revisions',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-[#dde2f8] font-body text-[13px]">
              <div className="w-5 h-5 rounded-full bg-[#571bc1]/20 flex items-center justify-center text-[#d0bcff] flex-shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[14px]">check</span>
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Package Action */}
        <button
          type="button"
          onClick={() => onOpenInquiry('Advanced Business Website (₹6,500)')}
          className="flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#242a3a] hover:bg-[#2f3445] text-[#dde2f8] font-display text-[14px] font-bold shadow-sm transition-all active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[20px] text-[#d0bcff]">rocket_launch</span>
          <span>Select Advanced Package</span>
        </button>
      </div>

      {/* Interactive Feature Check comparison table */}
      <div className="rounded-2xl bg-[#191f2f] border border-white/[0.08] p-5 shadow-md space-y-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#adc6ff] text-[22px]">compare_arrows</span>
          <h3 className="font-display text-[18px] text-[#dde2f8] font-bold">Quick Feature Check</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-body text-[13px]">
            <thead>
              <tr className="text-[#8c909f] border-b border-white/[0.08]">
                <th className="py-2.5 pr-2 font-display text-[12px] font-bold">Feature</th>
                <th className="py-2.5 px-2 text-center font-display text-[12px] font-bold">Basic</th>
                <th className="py-2.5 px-2 text-center font-display text-[12px] font-bold text-[#adc6ff]">Std</th>
                <th className="py-2.5 pl-2 text-center font-display text-[12px] font-bold">Adv</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04] text-[#dde2f8]">
              <tr className="bg-[#080e1d]/40">
                <td className="py-2.5 pr-2 font-medium">Pages / Sections</td>
                <td className="py-2.5 px-2 text-center text-[#c2c6d6]">1 Page</td>
                <td className="py-2.5 px-2 text-center font-bold text-[#adc6ff]">5 Pages</td>
                <td className="py-2.5 pl-2 text-center text-[#c2c6d6]">8 Pages</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-2 font-medium">Item Showcase</td>
                <td className="py-2.5 px-2 text-center text-[#c2c6d6]">Up to 10</td>
                <td className="py-2.5 px-2 text-center font-bold text-[#adc6ff]">Up to 30</td>
                <td className="py-2.5 pl-2 text-center text-[#c2c6d6]">Up to 60</td>
              </tr>
              <tr className="bg-[#080e1d]/40">
                <td className="py-2.5 pr-2 font-medium">Product Filter & Search</td>
                <td className="py-2.5 px-2 text-center text-[#8c909f]">-</td>
                <td className="py-2.5 px-2 text-center text-[#8c909f]">-</td>
                <td className="py-2.5 pl-2 text-center text-[#4edea3] font-bold">Yes</td>
              </tr>
              <tr>
                <td className="py-2.5 pr-2 font-medium">Google Maps Link</td>
                <td className="py-2.5 px-2 text-center text-[#8c909f]">-</td>
                <td className="py-2.5 px-2 text-center text-[#4edea3] font-bold">Yes</td>
                <td className="py-2.5 pl-2 text-center text-[#4edea3] font-bold">Yes</td>
              </tr>
              <tr className="bg-[#080e1d]/40">
                <td className="py-2.5 pr-2 font-medium">Revisions Included</td>
                <td className="py-2.5 px-2 text-center text-[#c2c6d6]">2 Rounds</td>
                <td className="py-2.5 px-2 text-center font-bold text-[#adc6ff]">2 Rounds</td>
                <td className="py-2.5 pl-2 text-center text-[#c2c6d6]">3 Rounds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Scope Clarity & Guardrails Box */}
      <div className="relative rounded-2xl bg-[#242a3a] border border-white/[0.08] p-5 shadow-lg space-y-3">
        <div className="flex items-center gap-2 text-[#adc6ff]">
          <div className="w-8 h-8 rounded-lg bg-[#4d8eff]/20 flex items-center justify-center flex-shrink-0">
            <span className="material-symbols-outlined text-[20px]">shield_lock</span>
          </div>
          <h3 className="font-display text-[18px] text-[#dde2f8] font-bold">Scope Clarity & Guardrails</h3>
        </div>

        <p className="font-body text-[13px] text-[#c2c6d6] leading-relaxed">
          To maintain extreme affordability and ultra-fast turnaround times for local businesses, our fixed-rate packages operate within well-defined structural boundaries:
        </p>

        <div className="p-3.5 rounded-xl bg-[#080e1d] space-y-2.5 text-[#c2c6d6] font-body text-[13px] border border-white/[0.05]">
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[#ffb4ab] text-[18px] flex-shrink-0 mt-0.5">block</span>
            <span>
              <strong className="text-white">Complex E-Commerce & Payment Gateways:</strong> Live checkout carts, Razorpay/Stripe auto-settlement, and dynamic customer accounts are <span className="text-white font-semibold">NOT included</span> unless quoted under a custom written enterprise contract.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[#4edea3] text-[18px] flex-shrink-0 mt-0.5">info</span>
            <span>
              <strong className="text-white">WhatsApp Clarification:</strong> The WhatsApp enquiry integration functions as a <span className="text-white font-semibold">direct communication routing link</span> between the buyer and your phone. It is not an automated billing engine.
            </span>
          </div>

          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-[#ffb4ab] text-[18px] flex-shrink-0 mt-0.5">block</span>
            <span>
              <strong className="text-white">Third-Party Infrastructure:</strong> Domain name purchasing fees, annual server hosting fees, and third-party SaaS subscriptions are procured directly by the client or billed transparently at cost.
            </span>
          </div>
        </div>
      </div>

      {/* Optional Maintenance Retainers */}
      <div className="rounded-2xl bg-[#191f2f] border border-white/[0.08] p-5 shadow-md space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#00a572]/20 text-[#4edea3] font-display text-[11px] font-bold">
              Optional Care Plans
            </span>
            <h3 className="font-display text-[18px] text-[#dde2f8] font-bold">
              Website Maintenance & Care
            </h3>
            <p className="font-body text-[13px] text-[#c2c6d6]">
              Keep your digital shop fresh without hiring in-house staff.
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#242a3a] flex items-center justify-center text-[#4edea3] flex-shrink-0">
            <span className="material-symbols-outlined text-[24px]">handyman</span>
          </div>
        </div>

        {/* Monthly Pricing Cards */}
        <div className="grid grid-cols-2 gap-3">
          {MAINTENANCE_PLANS.map((plan) => (
            <div
              key={plan.id}
              onClick={() => onOpenInquiry(`Maintenance: ${plan.title} (₹${plan.price}/mo)`)}
              className={`p-3.5 rounded-xl border flex flex-col justify-between cursor-pointer active:scale-95 transition-all ${
                plan.highlighted
                  ? 'bg-[#242a3a] border-[#4d8eff]/30 shadow-md'
                  : 'bg-[#080e1d] border-white/[0.06]'
              }`}
            >
              <span className={`font-display text-[12px] font-bold ${plan.highlighted ? 'text-[#adc6ff]' : 'text-[#8c909f]'}`}>
                {plan.title}
              </span>
              <div className="font-display text-[26px] font-extrabold text-white my-1">
                ₹{plan.price}
                <span className="font-body text-[13px] text-[#c2c6d6] font-normal">{plan.period}</span>
              </div>
              <span className="font-body text-[12px] text-[#c2c6d6] leading-tight">
                {plan.description}
              </span>
            </div>
          ))}
        </div>

        {/* Maintenance Scope Points */}
        <div className="space-y-2">
          {[
            'Updating product details, seasonal specials & price tags',
            'Changing festive business hours or emergency announcements',
            'Replacing promotional banners and photo gallery snapshots',
            'Routine browser health checks and minor layout bug fixes',
          ].map((scope, idx) => (
            <div key={idx} className="flex items-center gap-2 text-[#dde2f8] font-body text-[13px]">
              <span className="material-symbols-outlined text-[#4edea3] text-[18px]">
                {idx === 0 ? 'update' : idx === 1 ? 'schedule' : idx === 2 ? 'image' : 'bug_report'}
              </span>
              <span>{scope}</span>
            </div>
          ))}
        </div>

        {/* Transparent Guarantee Statement */}
        <div className="p-3 rounded-xl bg-[#242a3a] border border-white/[0.06] flex items-center gap-2.5">
          <span className="material-symbols-outlined text-[#adc6ff] text-[20px] flex-shrink-0">
            verified_user
          </span>
          <p className="font-body text-[12px] text-[#dde2f8] leading-tight">
            <strong className="text-white">Zero Lock-in:</strong> No automatic recurring card debits. We only invoice upon your explicit written authorization every month.
          </p>
        </div>
      </div>

      {/* Frequently Asked Accordion */}
      <div className="rounded-2xl bg-[#191f2f] border border-white/[0.08] p-5 shadow-md space-y-3" id="faq-section">
        <h3 className="font-display text-[18px] text-[#dde2f8] font-bold">Frequently Asked</h3>
        <div className="space-y-2">
          <details className="group rounded-xl bg-[#080e1d] border border-white/[0.05] p-3.5" open>
            <summary className="flex items-center justify-between font-display text-[14px] text-white font-semibold cursor-pointer list-none">
              <span>How fast is the website delivered?</span>
              <span className="material-symbols-outlined text-[#c2c6d6] transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-2 font-body text-[13px] text-[#c2c6d6] leading-relaxed">
              Once we receive your photos and business details over WhatsApp, the Basic package is deployed in 48 hours. Standard and Advanced take 3 to 5 business days.
            </p>
          </details>

          <details className="group rounded-xl bg-[#080e1d] border border-white/[0.05] p-3.5">
            <summary className="flex items-center justify-between font-display text-[14px] text-white font-semibold cursor-pointer list-none">
              <span>Do I own my website and content?</span>
              <span className="material-symbols-outlined text-[#c2c6d6] transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-2 font-body text-[13px] text-[#c2c6d6] leading-relaxed">
              100% yes. All static assets, texts, and source deployments belong to you. We provide the complete publishing transfer upon final settlement.
            </p>
          </details>

          <details className="group rounded-xl bg-[#080e1d] border border-white/[0.05] p-3.5">
            <summary className="flex items-center justify-between font-display text-[14px] text-white font-semibold cursor-pointer list-none">
              <span>Can I connect my own .com or .in domain?</span>
              <span className="material-symbols-outlined text-[#c2c6d6] transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-2 font-body text-[13px] text-[#c2c6d6] leading-relaxed">
              Absolutely! If you already have a domain, we map DNS records for free. If you need a new domain, we assist you in purchasing it directly via Google Domains / Hostinger in your name.
            </p>
          </details>
        </div>
      </div>

      {/* Final CTA Anchor Box */}
      <div className="rounded-2xl bg-gradient-to-br from-[#242a3a] to-[#151b2b] border border-white/[0.08] p-5 shadow-xl text-center space-y-3">
        <div className="w-12 h-12 mx-auto rounded-full bg-[#4d8eff]/20 flex items-center justify-center text-[#adc6ff]">
          <span className="material-symbols-outlined text-[28px]">chat_bubble</span>
        </div>
        <h3 className="font-display text-[18px] text-white font-bold">
          Unsure which package fits best?
        </h3>
        <p className="font-body text-[13px] text-[#c2c6d6] max-w-sm mx-auto">
          Send us a quick voice note or your shop card. We'll suggest the most economical route for your goals.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-2 max-w-sm mx-auto">
          <button
            type="button"
            onClick={() => onOpenInquiry('Custom Needs Consultation')}
            className="flex-1 h-12 rounded-xl bg-[#4d8eff] hover:bg-[#adc6ff] text-[#00285d] font-display text-[14px] font-bold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span>Submit Project Inquiry</span>
          </button>
          <a
            href={BRAND.whatsappUrl('Hi _shashcreates_, I want a suggestion on which website package fits my business.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 h-12 rounded-xl bg-[#00a572]/20 text-[#4edea3] border border-[#00a572]/40 font-display text-[14px] font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
