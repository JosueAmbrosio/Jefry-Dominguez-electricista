import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Objective from "@/components/Objective";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ObjectivePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Electric Pulse */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-secondary/15"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-electric">
              Objetivo Profesional
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Disponible para nuevas oportunidades y proyectos desafiantes
            </p>
            <div className="w-24 h-1 gradient-electric mx-auto rounded-full mt-6 animate-glow"></div>
          </div>
        </div>
      </section>

      <Objective />

      {/* CTA Section */}
      <section className="py-20 circuit-pattern relative">
        <div className="absolute inset-0 bg-muted/50"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              ¿Listo para trabajar juntos?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Estoy disponible para discutir su próximo proyecto eléctrico
            </p>
            <Link to="/contacto">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow transition-smooth text-lg px-8 py-6 group"
              >
                Contactar Ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ObjectivePage;
