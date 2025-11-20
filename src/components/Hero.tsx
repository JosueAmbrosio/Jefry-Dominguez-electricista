import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-electrician.jpg";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Electricista Profesional"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-background/85 to-primary/70"></div>
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary/30 backdrop-blur-sm border border-secondary/50 rounded-full px-4 py-2 mb-8 animate-fade-in shadow-yellow-glow">
            <Zap className="w-4 h-4 text-secondary animate-pulse" />
            <span className="text-sm font-semibold text-secondary">
              Más de 6 años de experiencia
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight drop-shadow-lg">
            Jefry Samuel Domínguez Guzmán
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gradient-electric mb-4 animate-fade-in-up font-semibold">
            Operario Electricista Profesional
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up leading-relaxed">
            Especializado en instalaciones eléctricas, mantenimiento, obras y
            soluciones técnicas con los más altos estándares de calidad y
            seguridad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link to="/contacto">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary-light shadow-yellow-glow transition-smooth text-lg px-8 py-6 group animate-glow"
              >
                Contactar
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border/50 text-foreground hover:bg-primary/10 hover:border-primary backdrop-blur-sm text-lg px-8 py-6 shadow-soft"
              >
                Ver Servicios
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 animate-fade-in-up">
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-medium hover:shadow-glow transition-smooth">
              <div className="text-4xl font-bold text-gradient-electric mb-2">6+</div>
              <div className="text-sm text-muted-foreground">
                Años de Experiencia
              </div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-medium hover:shadow-glow transition-smooth">
              <div className="text-4xl font-bold text-gradient-electric mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                Profesionalismo
              </div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-border shadow-medium hover:shadow-glow transition-smooth">
              <div className="text-4xl font-bold text-gradient-electric mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                Disponibilidad
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
