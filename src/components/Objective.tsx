import { Target, Briefcase, Users2, Sparkles } from "lucide-react";

const Objective = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-gradient-to-br from-primary via-primary-dark to-primary rounded-3xl shadow-strong p-8 md:p-12 text-primary-foreground animate-fade-in relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-glow">
                <Target className="w-10 h-10 text-secondary-foreground" />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Objetivo Profesional
              </h2>

              {/* Main Text */}
              <p className="text-lg md:text-xl leading-relaxed mb-8 text-primary-foreground/90">
                Estoy disponible para participar en{" "}
                <span className="font-semibold text-secondary">
                  proyectos eléctricos
                </span>
                ,{" "}
                <span className="font-semibold text-secondary">obras</span>,{" "}
                <span className="font-semibold text-secondary">
                  instalaciones
                </span>
                ,{" "}
                <span className="font-semibold text-secondary">
                  mantenimientos
                </span>{" "}
                y oportunidades técnicas con empresas, contratistas o clientes
                particulares.
              </p>

              <p className="text-lg md:text-xl leading-relaxed mb-10 text-primary-foreground/90">
                Me adapto tanto a{" "}
                <span className="font-semibold text-secondary">
                  trabajos individuales
                </span>{" "}
                como a{" "}
                <span className="font-semibold text-secondary">
                  equipos de obra
                </span>{" "}
                y proyectos organizados.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                  <Briefcase className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-bold mb-2">Proyectos Independientes</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Trabajos directos con clientes y particulares
                  </p>
                </div>

                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                  <Users2 className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-bold mb-2">Equipos de Obra</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Colaboración en proyectos con contratistas
                  </p>
                </div>

                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                  <Sparkles className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-bold mb-2">Oportunidades Empresariales</h3>
                  <p className="text-sm text-primary-foreground/80">
                    Asociaciones con empresas y organizaciones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
