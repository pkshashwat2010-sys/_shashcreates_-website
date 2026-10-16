import React, { useState } from 'react';
import { BRAND } from '../data/content';

interface LivePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoType: 'grocery' | 'bistro' | 'diwali-poster' | 'salon-reel';
}

export const LivePreviewModal: React.FC<LivePreviewModalProps> = ({
  isOpen,
  onClose,
  demoType,
}) => {
  // State for Grocery Store Demo
  const [groceryCart, setGroceryCart] = useState<{ [key: string]: number }>({
    'Basmati Rice (5kg)': 1,
    'Chakki Fresh Atta (10kg)': 1,
  });

  // State for Poster Customizer
  const [customShopName, setCustomShopName] = useState('Gupta Sweets & Dry Fruits');
  const [customDiscount, setCustomDiscount] = useState('25% OFF');

  // State for Reel Player simulation
  const [isPlayingReel, setIsPlayingReel] = useState(true);

  if (!isOpen) return null;

  const groceryItems = [
    { name: 'Basmati Rice (5kg)', price: 340, category: 'Staples' },
    { name: 'Chakki Fresh Atta (10kg)', price: 420, category: 'Staples' },
    { name: 'Desi Cow Ghee (1L)', price: 650, category: 'Dairy' },
    { name: 'Kashmiri Saffron (1g)', price: 280, category: 'Spices' },
    { name: 'Premium Almonds (500g)', price: 450, category: 'Dry Fruits' },
  ];

  const groceryTotal = Object.entries(groceryCart).reduce((sum, [name, qty]) => {
    const item = groceryItems.find((i) => i.name === name);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const handleUpdateQty = (name: string, delta: number) => {
    setGroceryCart((prev) => {
      const current = prev[name] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      }
      return { ...prev, [name]: next };
    });
  };

  const handleGroceryOrder = () => {
    const itemsList = Object.entries(groceryCart)
      .map(([name, qty]) => `• ${name} x ${qty}`)
      .join('\n');
    const msg = `Hi Ramesh Kirana Mart, I want to place an order from your website:\n\n${itemsList}\n\n*Total Bill: ₹${groceryTotal}*\nPlease confirm availability & delivery address!`;
    window.open(BRAND.whatsappUrl(msg), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#080e1d]/90 backdrop-blur-lg flex items-center justify-center p-3 sm:p-4">
      <div className="bg-[#151b2b] border border-white/[0.12] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Device Frame Header */}
        <div className="bg-[#080e1d] px-4 py-3 flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-pulse"></span>
            <span className="font-display text-[12px] font-bold text-[#adc6ff] uppercase tracking-wider">
              {demoType === 'grocery' && 'Live Demo • Kirana Store'}
              {demoType === 'bistro' && 'Live Demo • QR Table Menu'}
              {demoType === 'diwali-poster' && 'Live Demo • AI Poster Engine'}
              {demoType === 'salon-reel' && 'Live Demo • Vertical Ad Reel'}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#191f2f] hover:bg-[#242a3a] text-white flex items-center justify-center active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content body inside phone viewport simulation */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* DEMO 1: GROCERY STORE */}
          {demoType === 'grocery' && (
            <div className="space-y-4">
              <div className="rounded-2xl bg-[#191f2f] p-3.5 border border-white/[0.08]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-display text-[16px] text-white font-bold">Ramesh Kirana Mart</h4>
                    <p className="font-body text-[12px] text-[#4edea3]">● Open Now • Free Delivery within 2km</p>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-[#00a572]/20 text-[#4edea3] font-display text-[10px] font-bold">
                    Fast Web App
                  </span>
                </div>
                <p className="font-body text-[12px] text-[#c2c6d6]">
                  Tap + on items below to experience how your customers order directly on WhatsApp!
                </p>
              </div>

              {/* Items List */}
              <div className="space-y-2">
                {groceryItems.map((item) => {
                  const qty = groceryCart[item.name] || 0;
                  return (
                    <div
                      key={item.name}
                      className="p-3 rounded-xl bg-[#191f2f] border border-white/[0.06] flex items-center justify-between"
                    >
                      <div>
                        <h5 className="font-display text-[13px] text-white font-semibold">{item.name}</h5>
                        <span className="font-display text-[13px] text-[#4edea3] font-bold">₹{item.price}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#242a3a] px-2 py-1 rounded-lg">
                        <button
                          type="button"
                          onClick={() => handleUpdateQty(item.name, -1)}
                          className="w-6 h-6 flex items-center justify-center text-[#adc6ff] font-bold hover:bg-white/10 rounded"
                        >
                          -
                        </button>
                        <span className="font-display text-[13px] text-white w-4 text-center font-bold">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleUpdateQty(item.name, 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#4edea3] font-bold hover:bg-white/10 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Cart Drawer Bar */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#191f2f] to-[#242a3a] border border-[#00a572]/30 flex items-center justify-between">
                <div>
                  <span className="font-body text-[11px] text-[#c2c6d6]">Estimated Total:</span>
                  <div className="font-display text-[20px] font-bold text-white">₹{groceryTotal}</div>
                </div>
                <button
                  type="button"
                  onClick={handleGroceryOrder}
                  className="px-4 py-2.5 rounded-xl bg-[#00a572] hover:bg-[#00a572]/90 text-white font-display text-[13px] font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
                >
                  <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
                  <span>Dispatch WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {/* DEMO 2: RESTAURANT QR MENU */}
          {demoType === 'bistro' && (
            <div className="space-y-3.5">
              <div className="relative h-32 rounded-2xl overflow-hidden bg-[#191f2f]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk--Wf4VcdqgX6q6aiE-LSUHvaipogeXjdxzafInUU6UutxQ-RQ3Sz_Bjiw21HYU6nTB1wpuI3WrG3qgI0lWb8cHYKkuCX3YLimMkGClI3NpdCfl5-_aaUuf58uZw-ww6zufjzigoN10DKbgGF0kfMGcNesbvm6xdTB8OI5v0RSrbPpo1hgtA15TlHW2db8PzqjiZZCKEThTD1hUOxv29KRAfoaBxyUjG6uZm4TmJEnWEFcYZYcQf0zg"
                  alt="Spice Route Bistro"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151b2b] via-transparent to-transparent"></div>
                <div className="absolute bottom-2 left-3">
                  <h4 className="font-display text-[16px] text-white font-extrabold">The Spice Route Bistro</h4>
                  <p className="font-body text-[11px] text-[#adc6ff]">Table #04 • Dine-in & Takeaway QR Menu</p>
                </div>
              </div>

              {/* Menu categories */}
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar text-[12px] font-display font-semibold">
                <span className="px-3 py-1 rounded-full bg-[#4d8eff] text-white">Chef Specials</span>
                <span className="px-3 py-1 rounded-full bg-[#242a3a] text-[#c2c6d6]">Tandoori Kebabs</span>
                <span className="px-3 py-1 rounded-full bg-[#242a3a] text-[#c2c6d6]">Biryani Pots</span>
              </div>

              {/* Sample Dishes */}
              <div className="space-y-2.5">
                <div className="p-3 rounded-xl bg-[#191f2f] border border-white/[0.06] flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <h5 className="font-display text-[14px] text-white font-bold">Paneer Tikka Angara</h5>
                    </div>
                    <p className="font-body text-[11px] text-[#c2c6d6]">Charcoal-grilled cottage cheese with mint chutney</p>
                    <span className="font-display text-[13px] text-[#4edea3] font-bold">₹280</span>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-[#4d8eff]/20 text-[#adc6ff] font-display text-[11px] font-bold">
                    Bestseller
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-[#191f2f] border border-white/[0.06] flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-400"></span>
                      <h5 className="font-display text-[14px] text-white font-bold">Dum Gosht Biryani (Pot)</h5>
                    </div>
                    <p className="font-body text-[11px] text-[#c2c6d6]">Slow-cooked saffron basmati rice with tender spices</p>
                    <span className="font-display text-[13px] text-[#4edea3] font-bold">₹360</span>
                  </div>
                  <span className="px-2 py-1 rounded-lg bg-[#4edea3]/20 text-[#4edea3] font-display text-[11px] font-bold">
                    Must Try
                  </span>
                </div>
              </div>

              {/* Google Map Directions & Review Button */}
              <div className="pt-1 flex gap-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-10 rounded-xl bg-[#242a3a] hover:bg-[#2f3445] text-[#adc6ff] font-display text-[12px] font-semibold flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  <span>Google Maps Pin</span>
                </a>
                <a
                  href={BRAND.whatsappUrl('Hi Spice Route Bistro, I am seated at Table 4 and want to place an order.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-10 rounded-xl bg-[#00a572] text-white font-display text-[12px] font-bold flex items-center justify-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  <span>Call Waiter / Order</span>
                </a>
              </div>
            </div>
          )}

          {/* DEMO 3: DIWALI AI POSTER GENERATOR */}
          {demoType === 'diwali-poster' && (
            <div className="space-y-3.5">
              <div className="p-3 rounded-xl bg-[#191f2f] border border-white/[0.06] space-y-2">
                <span className="font-display text-[11px] font-bold text-[#adc6ff] uppercase tracking-wider">
                  Interactive Live Customizer
                </span>
                <p className="font-body text-[12px] text-[#c2c6d6]">
                  Type your business name & discount to see how the AI ad template updates instantly:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={customShopName}
                    onChange={(e) => setCustomShopName(e.target.value)}
                    placeholder="Your Shop Name"
                    className="p-2 rounded-lg bg-[#151b2b] border border-white/[0.1] text-white font-body text-[12px]"
                  />
                  <input
                    type="text"
                    value={customDiscount}
                    onChange={(e) => setCustomDiscount(e.target.value)}
                    placeholder="e.g. 25% OFF"
                    className="p-2 rounded-lg bg-[#151b2b] border border-white/[0.1] text-[#4edea3] font-display text-[12px] font-bold"
                  />
                </div>
              </div>

              {/* Mockup Preview Card */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-lg">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnMk2pPHgKLFeMsF7XfoFV0KAs0fHjNpTFuftg31nV0_kyAzAVOFOHZyMrv0iS77jWl-PPnrp5s6vy-7ujoCZaOyYeJUWq-xIm3ZpzINqKMo_MZfihoNW894koOfQbpH9emaUn7ooKqnanW_ibYb7D_0_rCBC7R4Vm2xZFXtuUvRbrCIfAxvfe5S6H63ag4v6r5o8pfcdGvoD0EcpQuNo1iiF0Qp7XikmmmrUU_fXV6MLuNf4v3XllOw"
                  alt="Diwali Poster"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <span className="font-display text-[18px] font-black text-amber-300 drop-shadow">
                    {customDiscount} FESTIVE DHAMAKA
                  </span>
                  <h4 className="font-display text-[16px] font-bold text-white drop-shadow">
                    {customShopName}
                  </h4>
                  <p className="font-body text-[11px] text-amber-100/90 mt-0.5">
                    WhatsApp Orders • Free Gift Pack with Orders over ₹1,000
                  </p>
                </div>
              </div>

              <a
                href={BRAND.whatsappUrl(`Hi _shashcreates_, I want to order this festive poster design for "${customShopName}" with offer "${customDiscount}".`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 rounded-xl bg-gradient-to-r from-[#4d8eff] to-[#005ac2] text-white font-display text-[13px] font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">photo_library</span>
                <span>Get This Poster in HD (₹300)</span>
              </a>
            </div>
          )}

          {/* DEMO 4: SALON GLOW REEL */}
          {demoType === 'salon-reel' && (
            <div className="space-y-3.5">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[9/14] border border-white/[0.1] shadow-2xl flex flex-col justify-between p-4">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq20qy8ddG7L_Vhpp_S1X90QoCHUdDVvRKCsaJn_GuUPYg9sMVXNuRzP9AbSp3iJUsGeMbAeHonmT0-cAMspX0tp4OA3VX6-_hauhoeHyhoLGCjh_Szlo0c29L3BiRxjs3bRB7nTYJMIQ6We5UlzY37Q41PvnfRCNnjAyd5lHkodzGJDo81Ij3exzaC1_b04_zxV0eJDti0uR9Z5jxBDarEdzwgVjaWQZlM_iC3RRV7MpLk60y-Z0e7w"
                  alt="Salon Glow Reel"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90"></div>

                {/* Top overlay controls */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#4edea3] font-display text-[11px] font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    INSTAGRAM REEL MOCKUP
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsPlayingReel(!isPlayingReel)}
                    className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {isPlayingReel ? 'pause' : 'play_arrow'}
                    </span>
                  </button>
                </div>

                {/* Bottom reel metadata */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-[12px]">
                      SG
                    </div>
                    <div>
                      <h4 className="font-display text-[13px] text-white font-bold leading-tight">
                        @salonglow_studio
                      </h4>
                      <p className="font-body text-[11px] text-[#adc6ff]">Original Audio • 9.8k views</p>
                    </div>
                  </div>
                  <p className="font-body text-[12px] text-white/95">
                    Bridal Glow Hydra-Facial Package ✨ Flat 40% Off this weekend. Book slot via link in bio!
                  </p>

                  {/* Reel progress bar */}
                  <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-[#4edea3] transition-all duration-1000 ${
                        isPlayingReel ? 'w-3/4' : 'w-1/4'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>

              <a
                href={BRAND.whatsappUrl('Hi _shashcreates_, I want a promotional vertical video reel for my salon / business (₹500 - ₹1,000).')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-11 rounded-xl bg-[#571bc1] hover:bg-[#571bc1]/90 text-white font-display text-[13px] font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">movie</span>
                <span>Produce My Video Reel</span>
              </a>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-[#080e1d] p-3 text-center border-t border-white/[0.08]">
          <span className="font-body text-[11px] text-[#8c909f]">
            Crafted for Bharat SMEs by _shashcreates_ • Direct WhatsApp Integration
          </span>
        </div>
      </div>
    </div>
  );
};
