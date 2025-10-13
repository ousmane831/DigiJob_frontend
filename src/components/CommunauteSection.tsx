import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Heart, Share2, Users, TrendingUp } from "lucide-react";

const temoignages = [
  {
    id: 1,
    nom: "Amadou Diallo",
    role: "Développeur Web",
    ville: "Dakar",
    message: "Grâce à DigiJob, j'ai décroché ma première mission freelance ! Les formations m'ont donné les compétences nécessaires.",
    likes: 45,
    comments: 12
  },
  {
    id: 2,
    nom: "Fatou Sène",
    role: "Community Manager",
    ville: "Abidjan",
    message: "La communauté est vraiment solidaire. J'ai trouvé des mentors qui m'ont accompagnée dans mon projet e-commerce.",
    likes: 67,
    comments: 18
  },
  {
    id: 3,
    nom: "Ibrahim Koné",
    role: "Graphiste",
    ville: "Bamako",
    message: "Excellente plateforme ! J'ai multiplié mes revenus en trouvant des clients réguliers sur la marketplace.",
    likes: 52,
    comments: 9
  }
];

const stats = [
  { label: "Membres actifs", value: "2000+", icon: Users },
  { label: "Missions réalisées", value: "1500+", icon: TrendingUp },
  { label: "Taux de satisfaction", value: "95%", icon: Heart }
];

const CommunauteSection = () => {
  return (
    <section id="communaute" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <Users className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">Communauté</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partagez vos expériences, trouvez des opportunités et grandissez ensemble
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center p-6 bg-gradient-to-br from-card to-card/50 border-primary/10 hover:shadow-lg transition-shadow">
              <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
              <div className="text-3xl font-bold mb-1 text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Témoignages */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Témoignages de la communauté</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {temoignages.map((temoignage) => (
              <Card key={temoignage.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* User Info */}
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-secondary">
                      <AvatarFallback className="text-white font-semibold">
                        {temoignage.nom.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{temoignage.nom}</div>
                      <div className="text-sm text-muted-foreground">
                        {temoignage.role} • {temoignage.ville}
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <p className="text-sm text-muted-foreground mb-4">
                    "{temoignage.message}"
                  </p>

                  {/* Actions */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <Heart className="w-4 h-4" />
                      <span>{temoignage.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span>{temoignage.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" variant="outline" className="group">
              <Users className="w-5 h-5 mr-2 group-hover:text-primary transition-colors" />
              Rejoindre la communauté
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunauteSection;
