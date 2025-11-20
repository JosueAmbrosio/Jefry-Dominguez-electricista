import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Designer from "@/components/Designer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const CreditsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 energy-lines"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background/85 to-primary/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-electric">
              Créditos del Sitio
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Desarrollo web profesional con diseño moderno y atención al detalle
            </p>
            <div className="w-24 h-1 gradient-electric mx-auto rounded-full mt-6 shadow-glow"></div>
          </div>
        </div>
      </section>

      <Designer />

      {/* Additional Info Section */}
      <section className="py-16 circuit-pattern relative">
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-soft">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-card-foreground text-center">
                Características del Sitio
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-foreground">Tecnologías Utilizadas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• React con TypeScript</li>
                    <li>• Tailwind CSS para diseño</li>
                    <li>• Componentes UI modernos</li>
                    <li>• Animaciones suaves</li>
                    <li>• Diseño responsive completo</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-foreground">Características</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Navegación multi-página</li>
                    <li>• Menú hamburguesa responsive</li>
                    <li>• Optimización SEO</li>
                    <li>• Imágenes profesionales</li>
                    <li>• Formulario de contacto funcional</li>
                  </ul>
                </div>
              </div>

              <div className="text-center">
                <Link to="/">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Home className="mr-2 h-5 w-5" />
                    Volver al Inicio
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CreditsPage;
