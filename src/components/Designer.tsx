import { Palette, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Designer = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card shadow-strong rounded-3xl p-8 md:p-12 border border-border animate-fade-in relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Icon Group */}
              <div className="flex gap-3 mb-6 justify-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-card-foreground">
                ¿Quién creó esta página?
              </h2>

              {/* Description */}
              <div className="space-y-4 text-center mb-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Esta página fue creada con{" "}
                  <span className="font-semibold text-foreground">dedicación</span>,{" "}
                  <span className="font-semibold text-foreground">diseño moderno</span> y{" "}
                  <span className="font-semibold text-foreground">
                    atención al detalle
                  </span>{" "}
                  para destacar la experiencia profesional de Jefry.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Si te interesa una{" "}
                  <span className="font-semibold text-primary">
                    página web con esta calidad
                  </span>
                  , puedes consultar quién la desarrolló.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="font-bold text-primary mb-1">Diseño Profesional</div>
                  <div className="text-sm text-muted-foreground">
                    Estética moderna y elegante
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="font-bold text-primary mb-1">100% Responsive</div>
                  <div className="text-sm text-muted-foreground">
                    Perfecto en todos los dispositivos
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-center">
                  <div className="font-bold text-primary mb-1">Optimizado SEO</div>
                  <div className="text-sm text-muted-foreground">
                    Mayor visibilidad online
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <Link to="/contacto">
                  <Button
                    size="lg"
                    className="bg-gradient-accent text-primary-foreground hover:opacity-90 shadow-medium transition-smooth px-8 py-6 text-lg"
                  >
                    Consultar sobre Desarrollo Web
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Designer;
