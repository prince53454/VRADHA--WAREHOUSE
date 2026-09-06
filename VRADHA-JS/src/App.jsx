import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SpecSheetModal } from './components/SpecSheetModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { HomeScreen } from './screens/HomeScreen';
import { AboutScreen } from './screens/AboutScreen';
import { FacilityScreen } from './screens/FacilityScreen';
import { CalculatorScreen } from './screens/CalculatorScreen';
import { SolutionsScreen } from './screens/SolutionsScreen';
import { UseCasesScreen } from './screens/UseCasesScreen';
import { ClientsScreen } from './screens/ClientsScreen';
import { FaqScreen } from './screens/FaqScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingArea, setBookingArea] = useState(15000);
  const [bookingSector, setBookingSector] = useState('fmcg');
  const [isSpecSheetOpen, setIsSpecSheetOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);

  // Sync with window hash if present & support aliases
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase().trim();
      if (!rawHash) return;

      const aliasMap = {
        'home': 'home',
        'page-1': 'home',
        '1': 'home',

        'about': 'about',
        'page-2': 'about',
        '2': 'about',

        'warehouse-facility': 'warehouse-facility',
        'facility': 'warehouse-facility',
        'page-3': 'warehouse-facility',
        '3': 'warehouse-facility',

        'space-calculator-and-booking': 'space-calculator-and-booking',
        'book-warehouse-space': 'space-calculator-and-booking',
        'calculator': 'space-calculator-and-booking',
        'booking': 'space-calculator-and-booking',
        'page-4': 'space-calculator-and-booking',
        '4': 'space-calculator-and-booking',

        'warehouse-solutions': 'warehouse-solutions',
        'solutions': 'warehouse-solutions',
        'page-5': 'warehouse-solutions',
        '5': 'warehouse-solutions',

        'use-cases': 'use-cases',
        'usecases': 'use-cases',
        'page-6': 'use-cases',
        '6': 'use-cases',

        'clients': 'clients',
        'testimonials': 'clients',
        'page-7': 'clients',
        '7': 'clients',

        'faq': 'faq',
        'faqs': 'faq',
        'page-8': 'faq',
        '8': 'faq',

        'contact': 'contact',
        'page-9': 'contact',
        '9': 'contact',
      };

      if (aliasMap[rawHash]) {
        setCurrentScreen(aliasMap[rawHash]);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (screen) => {
    setCurrentScreen(screen);
    window.location.hash = screen;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingWithDetails = (area, sector) => {
    setBookingArea(area);
    setBookingSector(sector);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30]">
      {/* Global Three-Tier Industrial Header with Always-Visible 9-Page Tabs */}
      <Header
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        onOpenBooking={() => {
          setBookingArea(15000);
          setBookingSector('fmcg');
          setIsBookingOpen(true);
        }}
        onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-[138px] flex-1 flex flex-col">
        {/* Dynamic Screen View */}
        <div className="flex-1 w-full">
          {currentScreen === 'home' && (
            <HomeScreen
              onNavigate={navigateTo}
              onOpenBookingWithDetails={handleOpenBookingWithDetails}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
          )}

          {currentScreen === 'about' && (
            <AboutScreen
              onNavigate={navigateTo}
              onOpenBooking={() => setIsBookingOpen(true)}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
          )}

          {currentScreen === 'warehouse-facility' && (
            <FacilityScreen
              onNavigate={navigateTo}
              onOpenBookingWithDetails={handleOpenBookingWithDetails}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
          )}

          {currentScreen === 'space-calculator-and-booking' && (
            <CalculatorScreen
              onNavigate={navigateTo}
              onOpenBookingWithDetails={handleOpenBookingWithDetails}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
          )}

          {currentScreen === 'warehouse-solutions' && (
            <SolutionsScreen
              onNavigate={navigateTo}
              onOpenBooking={() => setIsBookingOpen(true)}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
          )}

          {currentScreen === 'use-cases' && (
            <UseCasesScreen
              onNavigate={navigateTo}
              onOpenBooking={() => setIsBookingOpen(true)}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
          )}

          {currentScreen === 'clients' && (
            <ClientsScreen
              onNavigate={navigateTo}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          )}

          {currentScreen === 'faq' && (
            <FaqScreen
              onNavigate={navigateTo}
              onOpenBooking={() => setIsBookingOpen(true)}
            />
          )}

          {currentScreen === 'contact' && (
            <ContactScreen
              onNavigate={navigateTo}
              onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
            />
          )}
        </div>
      </main>

      {/* Global Multi-Column Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenSpecSheet={() => setIsSpecSheetOpen(true)}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialArea={bookingArea}
        initialSector={bookingSector}
      />

      <SpecSheetModal
        isOpen={isSpecSheetOpen}
        onClose={() => setIsSpecSheetOpen(false)}
      />

      <ClientPortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
}
