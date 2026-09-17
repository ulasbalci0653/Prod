import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BrandMarquee from '@/components/BrandMarquee';
import AboutProd from '@/components/AboutProd';
import RoasterySection from '@/components/RoasterySection';
import CoffeeMethods from '@/components/CoffeeMethods';
import CraftRoasteryFeature from '@/components/CraftRoasteryFeature';
import StoreExperience from '@/components/StoreExperience';
import FindYourCorner from '@/components/FindYourCorner';
import InstagramSection from '@/components/InstagramSection';
import LocationSection from '@/components/LocationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#221C19] selection:bg-[#A51F24] selection:text-white">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <AboutProd />
      <RoasterySection />
      <CoffeeMethods />
      <CraftRoasteryFeature />
      <StoreExperience />
      <FindYourCorner />
      <InstagramSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
