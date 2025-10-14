import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Headphones, Trophy, Video, Star, Clock, Users } from "lucide-react";

const Ressources = () => {
  const articles = [
    {
      id: 1,
      titre: "Comment démarrer votre startup tech en Afrique",
      type: "Article",
      duree: "8 min",
      categorie: "Entrepreneuriat",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format",
      description: "Guide complet pour lancer votre entreprise technologique sur le continent africain."
    },
    {
      id: 2,
      titre: "Les bases du marketing digital en 2024",
      type: "Tutoriel",
      duree: "15 min",
      categorie: "Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format",
      description: "Apprenez les fondamentaux du marketing digital et les meilleures pratiques actuelles."
    },
    {
      id: 3,
      titre: "Podcast: Entrepreneurs africains à succès",
      type: "Podcast",
      duree: "45 min",
      categorie: "Inspiration",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=500&auto=format",
      description: "Découvrez les parcours inspirants d'entrepreneurs qui ont réussi en Afrique."
    },
    {
      id: 4,
      titre: "Développer une application mobile sans coder",
      type: "Tutoriel",
      duree: "20 min",
      categorie: "Tech",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format",
      description: "Tutoriel pas à pas pour créer votre première application mobile no-code."
    }
  ];

  const evenements = [
    {
      id: 1,
      titre: "Webinaire: Financement pour startups",
      date: "15 Mars 2024",
      heure: "14:00 GMT",
      type: "Webinaire",
      participants: 250,
      gratuit: true
    },
    {
      id: 2,
      titre: "Formation: SEO et visibilité en ligne",
      date: "22 Mars 2024",
      heure: "10:00 GMT",
      type: "Formation",
      participants: 50,
      gratuit: false
    },
    {
      id: 3,
      titre: "Concours: Meilleure idée startup 2024",
      date: "30 Mars 2024",
      heure: "09:00 GMT",
      type: "Concours",
      participants: 500,
      gratuit: true
    },
    {
      id: 4,
      titre: "Workshop: Design Thinking",
      date: "5 Avril 2024",
      heure: "15:00 GMT",
      type: "Formation",
      participants: 80,
      gratuit: false
    }
  ];

  const successStories = [
    {
      id: 1,
      nom: "Aminata Diallo",
      titre: "Fondatrice de TechAfrique",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format",
      histoire: "De développeuse junior à CEO d'une startup valorisée à 2M€",
      secteur: "Technologie",
      impact: "200+ emplois créés"
    },
    {
      id: 2,
      nom: "Kwame Mensah",
      titre: "Entrepreneur Social",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format",
      histoire: "A révolutionné l'agriculture avec une plateforme de connexion fermiers-acheteurs",
      secteur: "AgriTech",
      impact: "5000+ agriculteurs aidés"
    },
    {
      id: 3,
      nom: "Fatima Hassan",
      titre: "Designer UX/UI",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format",
      histoire: "Passée de freelance à dirigeante d'une agence digitale primée",
      secteur: "Design",
      impact: "100+ projets réalisés"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Article":
        return <BookOpen className="w-4 h-4" />;
      case "Tutoriel":
        return <Video className="w-4 h-4" />;
      case "Podcast":
        return <Headphones className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "Webinaire":
        return <Video className="w-5 h-5" />;
      case "Formation":
        return <BookOpen className="w-5 h-5" />;
      case "Concours":
        return <Trophy className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ressources & Actualités
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos articles, tutoriels, événements et histoires inspirantes pour booster votre parcours digital
            </p>
          </div>
        </section>

        {/* Articles, Tutoriels & Podcasts */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Articles & Tutoriels</h2>
                <p className="text-muted-foreground">Enrichissez vos connaissances avec notre contenu exclusif</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.titre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/90 text-foreground">
                        {getTypeIcon(article.type)}
                        <span className="ml-1">{article.type}</span>
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.categorie}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.duree}
                      </span>
                    </div>
                    <CardTitle className="text-xl">{article.titre}</CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Lire la suite</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg">Voir toutes les ressources</Button>
            </div>
          </div>
        </section>

        {/* Calendrier des événements */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-3xl font-bold mb-2">Calendrier des événements</h2>
                <p className="text-muted-foreground">Formations, webinaires et concours à venir</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {evenements.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          {getEventIcon(event.type)}
                        </div>
                        <div>
                          <CardTitle className="text-lg mb-1">{event.titre}</CardTitle>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline">{event.type}</Badge>
                            {event.gratuit && <Badge className="bg-secondary">Gratuit</Badge>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date} à {event.heure}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{event.participants} participants attendus</span>
                      </div>
                    </div>
                    <Button className="w-full">S'inscrire</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-8 h-8 text-secondary" />
              <div>
                <h2 className="text-3xl font-bold mb-2">Success Stories</h2>
                <p className="text-muted-foreground">Laissez-vous inspirer par ces parcours extraordinaires</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.nom}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-foreground mb-1">{story.nom}</h3>
                      <p className="text-sm text-muted-foreground">{story.titre}</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <Badge className="mb-3">{story.secteur}</Badge>
                    <p className="text-sm mb-4">{story.histoire}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-secondary">
                      <Trophy className="w-4 h-4" />
                      <span>{story.impact}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-4">Lire l'histoire complète</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Vous avez une histoire à partager ?</CardTitle>
                  <CardDescription>
                    Inspirez la communauté en partageant votre parcours et vos réussites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    Partager mon histoire
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ressources;