import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Inicio" },
    { path: "/sobre-mi", label: "Sobre mí" },
    { path: "/servicios", label: "Servicios" },
    { path: "/proyectos", label: "Proyectos" },
    { path: "/habilidades", label: "Habilidades" },
    { path: "/objetivo", label: "Objetivo Profesional" },
    { path: "/contacto", label: "Contacto" },
    { path: "/creditos", label: "Créditos" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-medium">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 gradient-electric rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all">
                <Zap className="w-6 h-6 text-primary-foreground animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-foreground">Jefry Domínguez</div>
                <div className="text-xs text-gradient-electric">Electricista Profesional</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive(item.path)
                      ? "gradient-electric text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Hamburger Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border shadow-strong transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive(item.path)
                      ? "gradient-electric text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
