import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Video, Phone, Users, UserCheck, Briefcase, Sparkles, ShoppingBag, Palette } from "lucide-react";

const mentors = [
  {
    id: 1,
    nom: "Dr. Astou DIAKHATE",
    specialite: "Entrepreneuriat Digital",
    experience: "12 ans",
    domaines: ["E-commerce", "Marketing Digital"],
    disponible: true
  },
  {
    id: 2,
    nom: "Ousmane DIOUF",
    specialite: "Développement Web",
    experience: "8 ans",
    domaines: ["Tech", "Innovation"],
    disponible: true
  },
  {
    id: 3,
    nom: "Aissatou DIOP",
    specialite: "Artisanat & Design",
    experience: "10 ans",
    domaines: ["Artisanat", "Beauté"],
    disponible: false
  }
];

const secteurs = [
  { 
    nom: "Artisanat", 
    icon: Palette, 
    membres: 450, 
    description: "Création, design traditionnel et moderne" 
  },
  { 
    nom: "Beauté & Cosmétique", 
    icon: Sparkles, 
    membres: 380, 
    description: "Soins, produits naturels, esthétique" 
  },
  { 
    nom: "Agroalimentaire", 
    icon: ShoppingBag, 
    membres: 520, 
    description: "Production, transformation, distribution" 
  },
  { 
    nom: "Tech & Digital", 
    icon: Briefcase, 
    membres: 620, 
    description: "Développement, design, marketing digital" 
  }
];

const CommunauteSection = () => {
  return (
    <section id="communaute" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
            <UserCheck className="w-5 h-5 text-accent" />
            <span className="text-sm font-semibold text-accent">Mentorat & Networking</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Espace Mentorat & Networking
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connectez-vous avec des mentors professionnels et rejoignez des groupes sectoriels
          </p>
        </div>

        {/* Section Mentors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Nos Mentors Professionnels</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <Avatar className="w-16 h-16 bg-gradient-to-br from-primary to-secondary">
                      <AvatarFallback className="text-white font-semibold text-lg">
                        {mentor.nom.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    {mentor.disponible && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                        Disponible
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{mentor.nom}</CardTitle>
                  <p className="text-sm text-muted-foreground">{mentor.specialite}</p>
                  <p className="text-xs text-muted-foreground mt-1">{mentor.experience} d'expérience</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {mentor.domaines.map((domaine) => (
                      <Badge key={domaine} variant="outline">{domaine}</Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1" disabled={!mentor.disponible}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat
                    </Button>
                    <Button size="sm" variant="outline" disabled={!mentor.disponible}>
                      <Video className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" disabled={!mentor.disponible}>
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section Communication */}
        <div className="mb-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-card/50 border-primary/10">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Modes de Communication</CardTitle>
              <p className="text-muted-foreground">Échangez avec vos mentors selon vos préférences</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-lg bg-muted/50">
                  <MessageCircle className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Chat Texte</h4>
                  <p className="text-sm text-muted-foreground">Messagerie instantanée en temps réel</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/50">
                  <Phone className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Appel Audio</h4>
                  <p className="text-sm text-muted-foreground">Conversations vocales de qualité</p>
                </div>
                <div className="text-center p-6 rounded-lg bg-muted/50">
                  <Video className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <h4 className="font-semibold mb-2">Visioconférence</h4>
                  <p className="text-sm text-muted-foreground">Rencontres face à face virtuelles</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Section Groupes Communautaires */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Groupes Communautaires par Secteur</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secteurs.map((secteur) => (
              <Card key={secteur.nom} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <secteur.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold text-lg mb-2">{secteur.nom}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{secteur.description}</p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                    <Users className="w-4 h-4" />
                    <span>{secteur.membres} membres</span>
                  </div>
                  <Button size="sm" className="w-full">
                    Rejoindre le groupe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunauteSection;
