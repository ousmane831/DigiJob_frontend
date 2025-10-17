import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Briefcase, GraduationCap, Users, ShoppingBag, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo_digijob.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Offres", href: "/offres", icon: Briefcase },
    { name: "Formations", href: "/formations", icon: GraduationCap },
    { name: "Communauté", href: "/communaute", icon: Users },
    { name: "Marketplace", href: "/marketplace", icon: ShoppingBag },
    { name: "Ressources", href: "/ressources", icon: BookOpen },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         <Link to="/" className="flex items-center space-x-2">
        <img 
  src={logo} 
  alt="DigiJob Logo" 
  className="w-[160px] h-[160px] object-contain rounded-lg" 
/>
      </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost">Connexion</Button>
            </Link>
            <Link to="/auth">
              <Button>Inscription</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="flex items-center space-x-3 px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
              <Link to="/auth" className="w-full">
                <Button variant="ghost" className="w-full">Connexion</Button>
              </Link>
              <Link to="/auth" className="w-full">
                <Button className="w-full">Inscription</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
