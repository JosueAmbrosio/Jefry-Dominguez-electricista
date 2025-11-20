import { Shield, Award, Users, TrendingUp } from "lucide-react";

const Profile = () => {
  return (
    <section className="py-20 circuit-pattern relative">
      <div className="absolute inset-0 bg-background/90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-electric">
              Perfil Profesional
            </h2>
            <div className="w-24 h-1 gradient-electric mx-auto rounded-full shadow-glow"></div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-slide-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy <span className="font-semibold text-foreground">Operario Electricista</span> con
                más de <span className="font-semibold text-primary">6 años de experiencia</span> en
                instalaciones, canalizaciones, mantenimiento, detección de fallas y soporte técnico
                en proyectos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                He trabajado en diversos entornos, desde{" "}
                <span className="font-semibold text-foreground">
                  obras y remodelaciones
                </span>{" "}
                hasta{" "}
                <span className="font-semibold text-foreground">
                  instalaciones residenciales e industriales
                </span>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Me caracterizo por el{" "}
                <span className="font-semibold text-primary">profesionalismo</span>, la{" "}
                <span className="font-semibold text-primary">precisión</span>, el seguimiento de{" "}
                <span className="font-semibold text-foreground">normas técnicas</span> y el
                compromiso con la <span className="font-semibold text-foreground">seguridad</span>.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              <div className="bg-card/90 shadow-medium rounded-xl p-6 border border-border transition-all hover:shadow-glow hover:scale-105 hover:-rotate-1 backdrop-blur-sm group cursor-pointer">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 text-primary-foreground group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  Seguridad Garantizada
                </h3>
                <p className="text-sm text-muted-foreground">
                  Trabajo bajo las normas de seguridad más estrictas
                </p>
              </div>

              <div className="bg-card/90 shadow-medium rounded-xl p-6 border border-border transition-all hover:shadow-yellow-glow hover:scale-105 hover:rotate-1 backdrop-blur-sm group cursor-pointer">
                <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center mb-4 shadow-yellow-glow group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-secondary-foreground group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-card-foreground mb-2 group-hover:text-secondary transition-colors">
                  Calidad Premium
                </h3>
                <p className="text-sm text-muted-foreground">
                  Instalaciones certificadas y de alta calidad
                </p>
              </div>

              <div className="bg-card/90 shadow-medium rounded-xl p-6 border border-border transition-all hover:shadow-glow hover:scale-105 hover:rotate-1 backdrop-blur-sm group cursor-pointer">
                <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 shadow-glow group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-primary-foreground group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  Trabajo en Equipo
                </h3>
                <p className="text-sm text-muted-foreground">
                  Colaboración efectiva en proyectos complejos
                </p>
              </div>

              <div className="bg-card/90 shadow-medium rounded-xl p-6 border border-border transition-all hover:shadow-glow hover:scale-105 hover:-rotate-1 backdrop-blur-sm group cursor-pointer">
                <div className="w-12 h-12 gradient-electric rounded-lg flex items-center justify-center mb-4 animate-glow group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-primary-foreground group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-card-foreground mb-2 group-hover:text-gradient-electric transition-colors">
                  Mejora Continua
                </h3>
                <p className="text-sm text-muted-foreground">
                  Actualización constante en nuevas tecnologías
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
