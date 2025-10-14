import Navbar from "@/components/Navbar";
import OffresSection from "@/components/OffresSection";
import Footer from "@/components/Footer";

const Offres = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <OffresSection />
      </main>
      <Footer />
    </div>
  );
};

export default Offres;
