import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, TrendingUp, Users, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  const features = [
    {
      icon: Briefcase,
      title: "Opportunités d'emploi",
      description: "Accédez à des centaines d'offres d'emploi, missions freelance et micro-tâches adaptées à votre profil."
    },
    {
      icon: GraduationCap,
      title: "Formations en ligne",
      description: "Développez vos compétences avec des cours en ligne, tutoriels vidéo et obtenez des certifications."
    },
    {
      icon: TrendingUp,
      title: "Suivi de progression",
      description: "Suivez vos candidatures, vos gains et votre évolution professionnelle en temps réel."
    },
    {
      icon: Users,
      title: "Communauté active",
      description: "Échangez avec d'autres professionnels, partagez des conseils et des opportunités."
    },
    {
      icon: MapPin,
      title: "Opportunités locales",
      description: "Trouvez des offres dans votre région et participez au développement de votre communauté."
    },
    {
      icon: Award,
      title: "Développement personnel",
      description: "Construisez votre CV, préparez vos entretiens avec l'aide de notre assistant IA."
    }
  ];

  
  return (
    <div className="min-h-screen">
     
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Construisez votre avenir professionnel
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                DigiJob forme, accompagne et connecte les jeunes et les femmes à l’économie numérique, 
                missions freelance et formations professionnelles. Développez vos compétences 
                et atteignez vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button size="lg" className="w-full sm:w-auto">
                    Commencer gratuitement
                  </Button>
                </Link>
                <Link to="/offres">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Voir les offres
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Jeunes professionnels africains utilisant la technologie" 
                className="rounded-2xl shadow-[var(--shadow-strong)] w-full"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
