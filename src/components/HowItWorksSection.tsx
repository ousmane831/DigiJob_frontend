import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Search, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Créez votre compte",
    description: "Inscrivez-vous gratuitement en quelques minutes et complétez votre profil professionnel"
  },
  {
    icon: Search,
    number: "02",
    title: "Explorez les opportunités",
    description: "Parcourez les offres d'emploi, formations et produits adaptés à vos besoins"
  },
  {
    icon: Rocket,
    number: "03",
    title: "Passez à l'action",
    description: "Postulez aux offres, inscrivez-vous aux formations ou lancez votre boutique"
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Réussissez ensemble",
    description: "Bénéficiez du soutien de la communauté et atteignez vos objectifs"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quatre étapes simples pour transformer votre avenir professionnel
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (hidden on mobile) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" />
          
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-none bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-20 h-20 mx-auto mb-4 mt-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
