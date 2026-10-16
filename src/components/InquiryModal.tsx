import React, { useState, useEffect } from 'react';
import { BRAND } from '../data/content';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onSuccess?: (data: InquiryFormData) => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialService = 'General Inquiry',
  onSuccess,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    service: initialService,
    businessName: '',
    phone: '',
    offerDetails: '',
    businessType: 'Retail / Store',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    setSubmitted(false);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.phone) return;

    // Save in local storage history
    try {
      const existing = JSON.parse(localStorage.getItem('shashcreates_inquiries') || '[]');
      const newEntry = {
        ...formData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('shashcreates_inquiries', JSON.stringify([newEntry, ...existing]));
    } catch {
      // ignore
    }

    if (onSuccess) {
      onSuccess(formData);
    }
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi _shashcreates_,\n\nI want to inquire about: *${formData.service}*\nBusiness Name: *${formData.businessName || 'Not specified'}*\nType: *${formData.businessType || 'Retail'}*\nContact: *${formData.phone || 'Provided in chat'}*\nDetails: ${formData.offerDetails || 'Please share starter details'}`;
    window.open(BRAND.whatsappUrl(text), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#080e1d]/85 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="bg-[#242a3a] border border-white/[0.1] w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl p-5 space-y-4 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#adc6ff] text-[24px]">
              {submitted ? 'check_circle' : 'brush'}
            </span>
            <h3 className="font-display text-[18px] text-[#dde2f8] font-bold">
              {submitted ? 'Inquiry Recorded!' : 'Request a Project / Ad'}
            </h3>
          </div>
          <button
            type="button"
            className="w-9 h-9 rounded-full bg-[#191f2f] flex items-center justify-center text-[#c2c6d6] hover:text-[#dde2f8] active:scale-90 transition-all"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {submitted ? (
          <div className="py-4 space-y-4 text-center">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#00a572]/20 flex items-center justify-center text-[#4edea3]">
              <span className="material-symbols-outlined text-[32px]">task_alt</span>
            </div>
            <div>
              <h4 className="font-display text-[16px] text-white font-bold">Thank You!</h4>
              <p className="font-body text-[13px] text-[#c2c6d6] mt-1 max-w-xs mx-auto">
                Your request for <strong className="text-[#adc6ff]">{formData.service}</strong> has been saved.
                Our specialist will respond on WhatsApp within 2 hours.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full h-11 rounded-xl bg-[#00a572] hover:bg-[#00a572]/90 text-white font-display text-[14px] font-bold flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Send via WhatsApp Now</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full h-10 rounded-xl bg-[#191f2f] text-[#c2c6d6] hover:text-white font-display text-[13px] font-medium"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form className="space-y-3.5" onSubmit={handleSubmit}>
            <div>
              <label className="block font-display text-[11px] text-[#dde2f8] font-bold uppercase tracking-wider mb-1">
                Selected Package / Service
              </label>
              <input
                type="text"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full h-11 px-3 rounded-xl bg-[#151b2b] border border-white/[0.08] text-[#adc6ff] font-display text-[13px] font-semibold focus:outline-none focus:border-[#4d8eff]"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block font-display text-[11px] text-[#dde2f8] font-bold uppercase tracking-wider mb-1">
                  Business Type
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full h-11 px-3 rounded-xl bg-[#151b2b] border border-white/[0.08] text-[#dde2f8] font-body text-[13px] focus:outline-none focus:border-[#4d8eff]"
                >
                  <option value="Kirana / Mart">Kirana / Mart</option>
                  <option value="Cafe / Restaurant">Cafe / Restaurant</option>
                  <option value="Salon / Spa">Salon / Spa</option>
                  <option value="Coaching / Tutor">Coaching / Tutor</option>
                  <option value="Clinic / Medical">Clinic / Medical</option>
                  <option value="Boutique / Apparel">Boutique / Apparel</option>
                  <option value="Wholesale / Trader">Wholesale / Trader</option>
                  <option value="Other Business">Other Business</option>
                </select>
              </div>

              <div>
                <label className="block font-display text-[11px] text-[#dde2f8] font-bold uppercase tracking-wider mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-11 px-3 rounded-xl bg-[#151b2b] border border-white/[0.08] text-[#dde2f8] placeholder:text-[#8c909f] font-body text-[13px] focus:outline-none focus:border-[#4d8eff]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block font-display text-[11px] text-[#dde2f8] font-bold uppercase tracking-wider mb-1">
                Shop / Brand Name & Location
              </label>
              <input
                type="text"
                placeholder="e.g. Ramesh General Store, Mumbai"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="w-full h-11 px-3 rounded-xl bg-[#151b2b] border border-white/[0.08] text-[#dde2f8] placeholder:text-[#8c909f] font-body text-[13px] focus:outline-none focus:border-[#4d8eff]"
                required
              />
            </div>

            <div>
              <label className="block font-display text-[11px] text-[#dde2f8] font-bold uppercase tracking-wider mb-1">
                Requirement Details or Offer
              </label>
              <textarea
                placeholder="e.g. Need 1-page website with WhatsApp catalog and 2 festive Diwali posters."
                value={formData.offerDetails}
                onChange={(e) => setFormData({ ...formData, offerDetails: e.target.value })}
                rows={2}
                className="w-full p-3 rounded-xl bg-[#151b2b] border border-white/[0.08] text-[#dde2f8] placeholder:text-[#8c909f] font-body text-[13px] focus:outline-none focus:border-[#4d8eff] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                className="flex-1 h-12 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#005ac2] text-white font-display text-[14px] font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">send</span>
                <span>Submit to Studio</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="h-12 px-4 rounded-xl bg-[#00a572]/20 hover:bg-[#00a572]/30 text-[#4edea3] border border-[#00a572]/40 font-display text-[14px] font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
