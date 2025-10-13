import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OffresSection from "@/components/OffresSection";
import FormationsSection from "@/components/FormationsSection";
import CommunauteSection from "@/components/CommunauteSection";
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
