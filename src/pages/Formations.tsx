import Navbar from "@/components/Navbar";
import FormationsSection from "@/components/FormationsSection";
import Footer from "@/components/Footer";

const Formations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <FormationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Formations;
