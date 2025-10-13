import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Briefcase, GraduationCap, Users, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Offres", href: "#offres", icon: Briefcase },
    { name: "Formations", href: "#formations", icon: GraduationCap },
    { name: "Communauté", href: "#communaute", icon: Users },
    { name: "Marketplace", href: "#marketplace", icon: ShoppingBag },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DigiJob
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Connexion</Button>
            <Button>Inscription</Button>
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
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-2 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full">Connexion</Button>
              <Button className="w-full">Inscription</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
