import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandMarquee from '@/components/BrandMarquee';
import AboutProd from '@/components/AboutProd';
import RoasterySection from '@/components/RoasterySection';
import CoffeeMethods from '@/components/CoffeeMethods';
import NitroSection from '@/components/NitroSection';
import StoreExperience from '@/components/StoreExperience';
import FindYourCorner from '@/components/FindYourCorner';
import InstagramSection from '@/components/InstagramSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090909] text-[#F8F7F3] selection:bg-[#A51F24] selection:text-white">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <AboutProd />
      <RoasterySection />
      <CoffeeMethods />
      <NitroSection />
      <StoreExperience />
      <FindYourCorner />
      <InstagramSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
