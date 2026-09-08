import { useState, useCallback } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Gallery from '@/components/Gallery';
import FeaturedStory from '@/components/FeaturedStory';
import Philosophy from '@/components/Philosophy';
import Packages from '@/components/Packages';
import Availability from '@/components/Availability';
import BookingFlow from '@/components/BookingFlow';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [preselectedPackage, setPreselectedPackage] = useState<string | null>(null);
  const [preselectedDate, setPreselectedDate] = useState<string | null>(null);
  const [preselectedEventType, setPreselectedEventType] = useState<string | null>(null);

  const openBooking = useCallback(() => {
    setPreselectedPackage(null);
    setPreselectedDate(null);
    setPreselectedEventType(null);
    setBookingOpen(true);
  }, []);

  const handleSelectPackage = useCallback((pkgId: string) => {
    setPreselectedPackage(pkgId);
    setPreselectedDate(null);
    setPreselectedEventType(null);
    setBookingOpen(true);
  }, []);

  const handleAvailabilityContinue = useCallback((date: string, eventType: string) => {
    setPreselectedPackage(null);
    setPreselectedDate(date);
    setPreselectedEventType(eventType);
    setBookingOpen(true);
  }, []);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <CustomCursor />
      <div className="grain-overlay" />

      <Navigation onBook={openBooking} />

      <main>
        <Hero onBook={openBooking} />
        <Introduction />
        <Gallery />
        <FeaturedStory />
        <Philosophy />
        <Packages onSelectPackage={handleSelectPackage} />
        <Availability onContinue={handleAvailabilityContinue} />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA onBook={openBooking} />
      </main>

      <Footer onBook={openBooking} />

      <BookingFlow
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedPackage={preselectedPackage}
        preselectedDate={preselectedDate}
        preselectedEventType={preselectedEventType}
      />
    </>
  );
}

export default App;
