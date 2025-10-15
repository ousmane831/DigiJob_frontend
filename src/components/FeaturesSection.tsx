import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Users, ShoppingBag, TrendingUp, Target } from "lucide-react";

const features = [
  {
    icon: Briefcase,
    title: "Offres d'emploi",
    description: "Accédez à des centaines d'opportunités professionnelles adaptées à votre profil",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: GraduationCap,
    title: "Formations certifiantes",
    description: "Développez vos compétences avec des formations professionnelles de qualité",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: Users,
    title: "Mentorat & Networking",
    description: "Connectez-vous avec des mentors et une communauté de professionnels",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: ShoppingBag,
    title: "Marketplace",
    description: "Achetez et vendez vos produits sur notre marketplace communautaire",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: TrendingUp,
    title: "Croissance assurée",
    description: "Suivez votre progression et atteignez vos objectifs professionnels",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Target,
    title: "Accompagnement personnalisé",
    description: "Bénéficiez d'un suivi adapté à vos besoins et ambitions",
    color: "from-indigo-500 to-indigo-600"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une plateforme complète pour développer votre carrière et réussir professionnellement
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-card/50 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
