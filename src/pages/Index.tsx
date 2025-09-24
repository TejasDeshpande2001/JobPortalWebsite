import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import JobListings from '@/components/JobListings';
import ImportantNotice from '@/components/ImportantNotice';
import ContactSection from '@/components/ContactSection';
import SocialMediaSection from '@/components/SocialMediaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <JobListings />
      <ImportantNotice />
      <ContactSection />
      <SocialMediaSection />
      <Footer />
    </div>
  );
};

export default Index;