import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Briefcase, MapPin, Clock, DollarSign, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const offres = [
  {
    id: 1,
    titre: "Assistant Commercial",
    entreprise: "TechAfrica Solutions",
    type: "CDI",
    localisation: "Dakar, Sénégal",
    remuneration: "150 000 - 200 000 FCFA",
    duree: "Temps plein",
    description: "Recherche assistant commercial dynamique pour développer notre clientèle locale.",
    categorie: "Commerce",
    date: "Il y a 2 jours"
  },
  {
    id: 2,
    titre: "Développeur Web Junior",
    entreprise: "Digital Hub",
    type: "Freelance",
    localisation: "À distance",
    remuneration: "50 000 FCFA/projet",
    duree: "2-3 semaines",
    description: "Création de site vitrine pour PME locale. Maîtrise de WordPress requis.",
    categorie: "Tech",
    date: "Il y a 1 jour"
  },
  {
    id: 3,
    titre: "Community Manager",
    entreprise: "Agro Business",
    type: "CDD",
    localisation: "Abidjan, Côte d'Ivoire",
    remuneration: "180 000 FCFA",
    duree: "6 mois",
    description: "Gestion des réseaux sociaux et création de contenu pour entreprise agricole.",
    categorie: "Marketing",
    date: "Il y a 3 jours"
  },
  {
    id: 4,
    titre: "Traducteur Français-Anglais",
    entreprise: "TransLang Services",
    type: "Freelance",
    localisation: "À distance",
    remuneration: "30 000 FCFA/document",
    duree: "Mission ponctuelle",
    description: "Traduction de documents juridiques et commerciaux.",
    categorie: "Services",
    date: "Il y a 5 jours"
  },
  {
    id: 5,
    titre: "Formateur en Marketing Digital",
    entreprise: "Skills Academy",
    type: "Freelance",
    localisation: "Bamako, Mali",
    remuneration: "100 000 FCFA/session",
    duree: "3 jours",
    description: "Animation de formation sur les réseaux sociaux et le marketing digital.",
    categorie: "Formation",
    date: "Il y a 1 semaine"
  },
  {
    id: 6,
    titre: "Graphiste Designer",
    entreprise: "Creative Studio",
    type: "CDD",
    localisation: "Lomé, Togo",
    remuneration: "120 000 - 150 000 FCFA",
    duree: "4 mois",
    description: "Création d'identités visuelles et supports de communication pour clients variés.",
    categorie: "Design",
    date: "Il y a 4 jours"
  }
];

const OffresSection = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategorie, setSelectedCategorie] = useState("all");

  const handlePostuler = (offre: typeof offres[0]) => {
    toast({
      title: "Candidature envoyée ! 🎉",
      description: `Votre candidature pour "${offre.titre}" chez ${offre.entreprise} a été transmise avec succès.`,
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "CDI": return "bg-primary/10 text-primary";
      case "CDD": return "bg-secondary/10 text-secondary";
      case "Freelance": return "bg-accent/10 text-accent";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="offres" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Offres & Missions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez des opportunités d'emploi et missions freelance adaptées à vos compétences
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-card rounded-xl shadow-md p-6 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Rechercher une offre, entreprise..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous types</SelectItem>
                  <SelectItem value="CDI">CDI</SelectItem>
                  <SelectItem value="CDD">CDD</SelectItem>
                  <SelectItem value="Freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>

              {/* Category Filter */}
              <Select value={selectedCategorie} onValueChange={setSelectedCategorie}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes</SelectItem>
                  <SelectItem value="Tech">Tech</SelectItem>
                  <SelectItem value="Commerce">Commerce</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Formation">Formation</SelectItem>
                  <SelectItem value="Services">Services</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Offres Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offres.map((offre) => (
            <Card key={offre.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getTypeColor(offre.type)}>{offre.type}</Badge>
                  <span className="text-xs text-muted-foreground">{offre.date}</span>
                </div>
                <CardTitle className="text-xl">{offre.titre}</CardTitle>
                <CardDescription className="text-base font-medium text-foreground/70">
                  {offre.entreprise}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {offre.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {offre.localisation}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-secondary" />
                    {offre.duree}
                  </div>
                  <div className="flex items-center font-semibold text-primary">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {offre.remuneration}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button className="w-full" onClick={() => handlePostuler(offre)}>
                  <Briefcase className="w-4 h-4 mr-2" />
                  Postuler
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Voir plus d'offres
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OffresSection;
