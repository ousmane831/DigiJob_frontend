import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OffresSection from "@/components/OffresSection";
import FormationsSection from "@/components/FormationsSection";
import CommunauteSection from "@/components/CommunauteSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <OffresSection />
        <FormationsSection />
        <CommunauteSection />
        <MarketplaceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
