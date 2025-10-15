import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary p-12 md:p-16 text-white shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full translate-y-40 -translate-x-40 blur-3xl" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-medium">Rejoignez-nous dès maintenant</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Prêt à transformer votre
                <span className="block">avenir professionnel ?</span>
              </h2>

              <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                Rejoignez des milliers de professionnels qui ont déjà choisi DigiJob pour développer leur carrière
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg text-lg px-10 py-7">
                    Commencer gratuitement
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/offres">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm text-lg px-10 py-7"
                  >
                    Explorer les opportunités
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">100%</div>
                  <div className="text-sm text-white/80">Gratuit</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">24/7</div>
                  <div className="text-sm text-white/80">Support</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">2000+</div>
                  <div className="text-sm text-white/80">Membres</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
