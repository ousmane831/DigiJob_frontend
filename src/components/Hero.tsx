import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="DigiJob - Opportunités professionnelles en Afrique"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-top-4 duration-700">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Nouvelle plateforme pour l'Afrique rurale</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-top-8 duration-700 delay-150">
            Votre avenir professionnel
            <span className="block bg-gradient-to-r from-secondary-glow to-white bg-clip-text text-transparent">
              commence ici
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-top-12 duration-700 delay-300">
            Trouvez des emplois, développez vos compétences et rejoignez une communauté de professionnels en Afrique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-in fade-in slide-in-from-top-16 duration-700 delay-500">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-8 py-6">
              Commencer gratuitement
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6"
            >
              <Search className="mr-2 w-5 h-5" />
              Explorer les offres
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base text-white/80">Offres d'emploi</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base text-white/80">Formations</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">2000+</div>
              <div className="text-sm md:text-base text-white/80">Membres actifs</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
