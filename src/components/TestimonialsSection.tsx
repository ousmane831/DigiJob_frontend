import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aminata Diallo",
    role: "Développeuse Web",
    location: "Dakar, Sénégal",
    initials: "AD",
    rating: 5,
    content: "Grâce à DigiJob, j'ai trouvé ma première mission freelance et suivi une formation qui a transformé ma carrière. La communauté est incroyable !",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    name: "Ibrahim Koné",
    role: "Entrepreneur",
    location: "Bamako, Mali",
    initials: "IK",
    rating: 5,
    content: "J'ai lancé ma boutique en ligne sur la marketplace et mes ventes ont explosé. Le mentorat m'a vraiment aidé à structurer mon business.",
    gradient: "from-green-500 to-emerald-600"
  },
  {
    name: "Fatou Ndiaye",
    role: "Community Manager",
    location: "Abidjan, Côte d'Ivoire",
    initials: "FN",
    rating: 5,
    content: "Les formations sont d'excellente qualité et le certificat que j'ai obtenu m'a permis de décrocher un CDI dans une agence réputée.",
    gradient: "from-purple-500 to-purple-600"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Star className="w-5 h-5 text-primary fill-current" />
            <span className="text-sm font-semibold text-primary">Témoignages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ils ont réussi avec DigiJob
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment DigiJob a transformé la vie professionnelle de nos membres
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-none bg-card relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-primary" />
              </div>
              
              <CardContent className="p-6 relative z-10">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <Avatar className={`w-12 h-12 bg-gradient-to-br ${testimonial.gradient}`}>
                    <AvatarFallback className="text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
