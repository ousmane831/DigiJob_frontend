import { Link } from "react-router-dom";
import { Briefcase, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Plateforme": [
      { name: "Offres d'emploi", href: "#offres" },
      { name: "Formations", href: "#formations" },
      { name: "Communauté", href: "#communaute" },
      { name: "Marketplace", href: "#marketplace" }
    ],
    "Ressources": [
      { name: "Blog", href: "#" },
      { name: "Guide débutant", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Support", href: "#" }
    ],
    "Entreprise": [
      { name: "À propos", href: "#" },
      { name: "Recruteurs", href: "#" },
      { name: "Partenaires", href: "#" },
      { name: "Contact", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                DigiJob
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-sm">
              La plateforme qui connecte talents et opportunités en Afrique rurale. 
              Développez vos compétences, trouvez des missions et construisez votre avenir.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>contact@digijob.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+221 77 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Dakar, Sénégal</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DigiJob. Tous droits réservés.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-muted hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Confidentialité
              </a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">
                Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
