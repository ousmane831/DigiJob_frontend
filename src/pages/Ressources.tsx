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
      </main>
      <Footer />
    </div>
  );
};

export default Ressources;