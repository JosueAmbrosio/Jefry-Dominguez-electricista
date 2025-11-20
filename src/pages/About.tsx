import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import aboutImage from "@/assets/about-electrician.jpg";
import { Shield, Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Circuit Pattern */}
      <section className="py-20 circuit-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-electric">
                Sobre Mí
              </h1>
              <div className="w-24 h-1 gradient-electric mx-auto rounded-full shadow-glow"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="animate-fade-in">
                <div className="relative rounded-2xl overflow-hidden shadow-strong">
                  <img
                    src={aboutImage}
                    alt="Jefry Domínguez - Electricista Profesional"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-3xl font-bold text-foreground">
                  Jefry Samuel Domínguez Guzmán
                </h2>
                <p className="text-xl text-primary font-semibold">
                  Operario Electricista Profesional
                </p>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Soy <span className="font-semibold text-foreground">Operario Electricista</span> con
                    más de <span className="font-semibold text-primary">6 años de experiencia</span> en
                    el sector eléctrico.
                  </p>
                  <p>
                    Mi experiencia abarca desde{" "}
                    <span className="font-semibold text-foreground">instalaciones residenciales</span>{" "}
                    hasta{" "}
                    <span className="font-semibold text-foreground">proyectos industriales complejos</span>,
                    pasando por obras de construcción, mantenimientos preventivos y correctivos.
                  </p>
                  <p>
                    Me destaco por mi capacidad de trabajar tanto de forma{" "}
                    <span className="font-semibold text-foreground">independiente</span> como en{" "}
                    <span className="font-semibold text-foreground">equipos de obra</span>, adaptándome
                    a las necesidades de empresas, contratistas y clientes particulares.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 energy-lines relative">
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Valores Profesionales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-card rounded-xl p-8 border border-border shadow-soft hover:shadow-medium transition-smooth text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-card-foreground">Seguridad</h3>
                <p className="text-muted-foreground">
                  Trabajo siguiendo las normas de seguridad más estrictas para garantizar instalaciones confiables.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border shadow-soft hover:shadow-medium transition-smooth text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-card-foreground">Calidad</h3>
                <p className="text-muted-foreground">
                  Cada proyecto es ejecutado con precisión, orden y los más altos estándares de calidad.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border shadow-soft hover:shadow-medium transition-smooth text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-card-foreground">Puntualidad</h3>
                <p className="text-muted-foreground">
                  Cumplimiento de plazos y compromisos, respetando los tiempos acordados con el cliente.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border shadow-soft hover:shadow-medium transition-smooth text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-card-foreground">Comunicación</h3>
                <p className="text-muted-foreground">
                  Trabajo en equipo efectivo y comunicación clara con clientes, contratistas y colegas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
