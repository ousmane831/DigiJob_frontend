import Navbar from "@/components/Navbar";
import CommunauteSection from "@/components/CommunauteSection";
import Footer from "@/components/Footer";

const Communaute = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CommunauteSection />
      </main>
      <Footer />
    </div>
  );
};

export default Communaute;
