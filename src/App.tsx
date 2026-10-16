import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { NavigationDrawer } from './components/NavigationDrawer';
import { WhatsAppFloatingBar } from './components/WhatsAppFloatingBar';
import { InquiryModal } from './components/InquiryModal';
import { LivePreviewModal } from './components/LivePreviewModal';
import { LegalModal } from './views/LegalModal';
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { AiAdsView } from './views/AiAdsView';
import { PricingView } from './views/PricingView';
import { WorkView } from './views/WorkView';
import { TabType } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState('General Consultation');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewType, setPreviewType] = useState<'grocery' | 'bistro' | 'diwali-poster' | 'salon-reel'>('grocery');
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState<'terms' | 'privacy'>('terms');

  const handleOpenInquiry = (serviceName?: string) => {
    setInquiryService(serviceName || 'General Consultation');
    setIsInquiryOpen(true);
  };

  const handleOpenPreview = (type: 'grocery' | 'bistro' | 'diwali-poster' | 'salon-reel') => {
    setPreviewType(type);
    setIsPreviewOpen(true);
  };

  const handleOpenLegal = (type: 'terms' | 'privacy') => {
    setLegalType(type);
    setIsLegalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1322] text-[#dde2f8] flex flex-col font-body selection:bg-[#4d8eff]/30 selection:text-white">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        onOpenInquiry={handleOpenInquiry}
        onOpenLegal={handleOpenLegal}
        onScrollToSection={handleScrollToSection}
      />

      {/* Main Content Area (padding-top 64px for header, padding-bottom 140px for floating whatsapp + bottom nav) */}
      <main className="flex-1 flex flex-col pt-16 pb-36 w-full">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={setCurrentTab}
            onOpenInquiry={handleOpenInquiry}
            onOpenPreview={handleOpenPreview}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView onOpenInquiry={handleOpenInquiry} />
        )}

        {currentTab === 'ai-ads' && (
          <AiAdsView
            onOpenInquiry={handleOpenInquiry}
            onOpenPreview={handleOpenPreview}
          />
        )}

        {currentTab === 'pricing' && (
          <PricingView onOpenInquiry={handleOpenInquiry} />
        )}

        {currentTab === 'work' && (
          <WorkView
            onOpenPreview={handleOpenPreview}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
      </main>

      {/* Persistent Floating WhatsApp Quick Consultation Bar */}
      <WhatsAppFloatingBar onOpenInquiry={() => handleOpenInquiry('WhatsApp Quick Chat')} />

      {/* Bottom 5-Tab Navigation Bar */}
      <BottomNav currentTab={currentTab} onSelectTab={setCurrentTab} />

      {/* Interactive Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialService={inquiryService}
      />

      {/* Live Mobile Demonstration Mockup Modal */}
      <LivePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        demoType={previewType}
      />

      {/* Terms & Privacy Modal */}
      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
        type={legalType}
      />
    </div>
  );
}
