"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Clock, Users, Star, Play } from "lucide-react";
import formationsBg from "@/assets/formations-bg.jpg";
import { useToast } from "@/hooks/use-toast";

const formations = [
  {
    id: 1,
    titre: "Marketing Digital pour Débutants",
    description: "Apprenez les bases du marketing digital, des réseaux sociaux à la publicité en ligne.",
    niveau: "Débutant",
    duree: "4 semaines",
    modules: 12,
    participants: 450,
    rating: 4.8,
    categorie: "Marketing",
  },
  {
    id: 2,
    titre: "Créer sa Boutique en Ligne",
    description: "Guide complet pour lancer et gérer votre e-commerce avec succès.",
    niveau: "Intermédiaire",
    duree: "6 semaines",
    modules: 18,
    participants: 320,
    rating: 4.9,
    categorie: "E-commerce",
  },
  {
    id: 3,
    titre: "Développement Web HTML/CSS",
    description: "Maîtrisez les fondamentaux du développement web et créez vos premiers sites.",
    niveau: "Débutant",
    duree: "8 semaines",
    modules: 24,
    participants: 580,
    rating: 4.7,
    categorie: "Tech",
  },
  {
    id: 4,
    titre: "Gestion des Réseaux Sociaux",
    description: "Devenez expert en community management et développez votre présence en ligne.",
    niveau: "Tous niveaux",
    duree: "3 semaines",
    modules: 10,
    participants: 390,
    rating: 4.6,
    categorie: "Marketing",
  },
];

const FormationsSection = () => {
  const { toast } = useToast();

  const handleCommencer = (formation: typeof formations[0]) => {
    toast({
      title: "Formation démarrée ! 📚",
      description: `Bienvenue dans "${formation.titre}". Vous avez accès à ${formation.modules} modules de contenu.`,
    });
  };

  const getNiveauColor = (niveau: string) => {
    switch (niveau) {
      case "Débutant":
        return "bg-secondary/10 text-secondary";
      case "Intermédiaire":
        return "bg-primary/10 text-primary";
      case "Avancé":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="formations" className="py-20 relative overflow-hidden">
      {/* Arrière-plan */}
      <div className="absolute inset-0 z-0">
        <img
          src={formationsBg}
          alt="Formations DigiJob"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-5 h-5 text-secondary" />
            <span className="text-sm font-semibold text-secondary">Formations en ligne</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Développez vos Compétences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
            Accédez à des formations de qualité pour booster votre carrière professionnelle 🚀
          </p>
        </div>

        {/* Grille des formations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {formations.map((formation, i) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-card/80 backdrop-blur-sm border border-primary/10">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`${getNiveauColor(formation.niveau)} animate-pulse`}>
                      {formation.niveau}
                    </Badge>
                    <div className="flex items-center text-sm font-medium text-amber-500">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      {formation.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{formation.titre}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {formation.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1 text-primary" />
                      {formation.duree}
                    </div>
                    <div className="flex items-center">
                      <Play className="w-4 h-4 mr-1 text-secondary" />
                      {formation.modules} modules
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1 text-accent" />
                    {formation.participants} participants
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
                    variant="outline"
                    aria-label={`Commencer la formation ${formation.titre}`}
                    onClick={() => handleCommencer(formation)}
                  >
                    Commencer
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bannière CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl overflow-hidden"
        >
          {/* Halo lumineux */}
          <div className="absolute inset-0 bg-white/10 blur-3xl opacity-20"></div>

          <GraduationCap className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h3 className="text-3xl font-bold mb-4">
            Obtenez votre Certificat Professionnel
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Terminez une formation et recevez un certificat reconnu pour valoriser vos compétences.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary font-semibold hover:bg-white/90 transition"
          >
            Parcourir toutes les formations
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FormationsSection;
