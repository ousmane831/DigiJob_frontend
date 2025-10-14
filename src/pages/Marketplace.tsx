import Navbar from "@/components/Navbar";
import MarketplaceSection from "@/components/MarketplaceSection";
import Footer from "@/components/Footer";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <MarketplaceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
