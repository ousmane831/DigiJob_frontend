import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingBag, ShoppingCart, Star, MapPin, Search, Store, TrendingUp, Heart } from "lucide-react";
import productArtisanat from "@/assets/product-artisanat.jpg";
import productAgro from "@/assets/product-agro.jpg";
import productTech from "@/assets/product-tech.jpg";
import productBeaute from "@/assets/product-beaute.jpg";

const produits = [
  {
    id: 1,
    nom: "Sac Artisanal Traditionnel",
    description: "Magnifique sac tissé à la main avec motifs traditionnels africains",
    prix: "15 000 FCFA",
    prixNum: 15000,
    image: productArtisanat,
    vendeur: "Aïcha Boutique",
    vendeurInitials: "AB",
    localisation: "Dakar",
    categorie: "Artisanat",
    rating: 4.9,
    ventes: 156,
    stock: "En stock"
  },
  {
    id: 2,
    nom: "Produits Bio du Terroir",
    description: "Panier de légumes frais et biologiques cultivés localement",
    prix: "8 000 FCFA",
    prixNum: 8000,
    image: productAgro,
    vendeur: "Ferme Bio Savane",
    vendeurInitials: "FB",
    localisation: "Thiès",
    categorie: "Agriculture",
    rating: 4.7,
    ventes: 243,
    stock: "En stock"
  },
  {
    id: 3,
    nom: "Accessoires Tech Premium",
    description: "Pack d'accessoires pour smartphone - écouteurs et câbles de qualité",
    prix: "12 000 FCFA",
    prixNum: 12000,
    image: productTech,
    vendeur: "TechZone Shop",
    vendeurInitials: "TZ",
    localisation: "Abidjan",
    categorie: "Technologie",
    rating: 4.8,
    ventes: 189,
    stock: "En stock"
  },
  {
    id: 4,
    nom: "Cosmétiques Naturels",
    description: "Gamme de produits de beauté au beurre de karité 100% naturel",
    prix: "18 000 FCFA",
    prixNum: 18000,
    image: productBeaute,
    vendeur: "BeautéNaturelle",
    vendeurInitials: "BN",
    localisation: "Bamako",
    categorie: "Beauté",
    rating: 5.0,
    ventes: 312,
    stock: "En stock"
  },
  {
    id: 5,
    nom: "Bijoux en Perles Artisanales",
    description: "Colliers et bracelets faits main avec perles traditionnelles",
    prix: "10 000 FCFA",
    prixNum: 10000,
    image: productArtisanat,
    vendeur: "Aïcha Boutique",
    vendeurInitials: "AB",
    localisation: "Dakar",
    categorie: "Artisanat",
    rating: 4.8,
    ventes: 98,
    stock: "Stock limité"
  },
  {
    id: 6,
    nom: "Miel Pur du Village",
    description: "Miel artisanal récolté en zone rurale, 100% pur et naturel",
    prix: "6 500 FCFA",
    prixNum: 6500,
    image: productAgro,
    vendeur: "Ferme Bio Savane",
    vendeurInitials: "FB",
    localisation: "Thiès",
    categorie: "Agriculture",
    rating: 4.9,
    ventes: 167,
    stock: "En stock"
  }
];

const categories = ["Tout", "Artisanat", "Agriculture", "Technologie", "Beauté", "Mode", "Services"];

const MarketplaceSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategorie, setSelectedCategorie] = useState("Tout");

  const produitsFiltered = produits.filter(p => {
    const matchSearch = p.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategorie = selectedCategorie === "Tout" || p.categorie === selectedCategorie;
    return matchSearch && matchCategorie;
  });

  return (
    <section id="marketplace" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <ShoppingBag className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Marketplace</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Marketplace Communautaire
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez et achetez des produits locaux directement auprès d'entrepreneurs de votre région
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          <Card className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <Store className="w-8 h-8 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-bold text-primary">150+</div>
            <div className="text-xs text-muted-foreground">Boutiques</div>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <ShoppingBag className="w-8 h-8 mx-auto mb-2 text-secondary" />
            <div className="text-2xl font-bold text-secondary">500+</div>
            <div className="text-xs text-muted-foreground">Produits</div>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-accent" />
            <div className="text-2xl font-bold text-accent">2000+</div>
            <div className="text-xs text-muted-foreground">Ventes</div>
          </Card>
          <Card className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/20">
            <Star className="w-8 h-8 mx-auto mb-2 text-amber-500" />
            <div className="text-2xl font-bold text-amber-500">4.8</div>
            <div className="text-xs text-muted-foreground">Satisfaction</div>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-card rounded-xl shadow-md p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Rechercher un produit ou une boutique..."
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Tabs */}
            <Tabs value={selectedCategorie} onValueChange={setSelectedCategorie}>
              <TabsList className="w-full justify-start overflow-x-auto flex-wrap h-auto gap-2">
                {categories.map((cat) => (
                  <TabsTrigger key={cat} value={cat} className="data-[state=active]:bg-primary data-[state=active]:text-white">
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {produitsFiltered.map((produit) => (
            <Card key={produit.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img 
                  src={produit.image} 
                  alt={produit.nom}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                  <Heart className="w-5 h-5 text-muted-foreground hover:text-red-500 transition-colors" />
                </button>
                <Badge className="absolute top-3 left-3 bg-secondary text-white">
                  {produit.stock}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                {/* Vendor Info */}
                <div className="flex items-center space-x-2 mb-3">
                  <Avatar className="w-8 h-8 bg-gradient-to-br from-primary to-secondary">
                    <AvatarFallback className="text-xs text-white font-semibold">
                      {produit.vendeurInitials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{produit.vendeur}</div>
                    <div className="text-xs text-muted-foreground flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {produit.localisation}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <h3 className="font-bold text-lg leading-tight mb-2">{produit.nom}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {produit.description}
                </p>
              </CardHeader>

              <CardContent className="pb-3">
                {/* Rating and Sales */}
                <div className="flex items-center justify-between text-sm mb-3">
                  <div className="flex items-center text-amber-500 font-medium">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {produit.rating}
                  </div>
                  <div className="text-muted-foreground">
                    {produit.ventes} ventes
                  </div>
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-primary">
                  {produit.prix}
                </div>
              </CardContent>

              <CardFooter className="pt-0 flex gap-2">
                <Button className="flex-1 group-hover:bg-primary group-hover:text-white transition-colors">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Acheter
                </Button>
                <Button variant="outline" size="icon">
                  <Store className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-secondary to-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />
            
            <CardContent className="p-8 md:p-12 text-center relative z-10">
              <ShoppingBag className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h3 className="text-3xl font-bold mb-4">
                Créez Votre Boutique en Ligne
              </h3>
              <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
                Rejoignez notre marketplace et vendez vos produits à des milliers de clients. 
                Configuration simple, paiements sécurisés et support dédié.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Ouvrir ma boutique
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                  En savoir plus
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
