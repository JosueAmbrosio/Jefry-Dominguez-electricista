import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import blueprintsImg from "@/assets/skill-blueprints.jpg";
import toolsImg from "@/assets/skill-tools.jpg";
import safetyImg from "@/assets/skill-safety.jpg";

const SkillsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Circuit Pattern */}
      <section className="py-20 circuit-pattern electric-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/8 via-background/85 to-primary/8"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-electric">
              Habilidades Técnicas
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Competencias profesionales desarrolladas a través de años de experiencia práctica
            </p>
            <div className="w-24 h-1 gradient-electric mx-auto rounded-full mt-6 shadow-yellow-glow"></div>
          </div>
        </div>
      </section>

      {/* Featured Skills with Images */}
      <section className="py-20 relative">
        <div className="absolute inset-0 energy-lines opacity-30"></div>
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="group bg-card rounded-xl overflow-hidden border border-border shadow-soft hover:shadow-medium transition-smooth">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={blueprintsImg}
                    alt="Interpretación de planos eléctricos"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    Interpretación de Planos
                  </h3>
                  <p className="text-muted-foreground">
                    Lectura y análisis de documentación técnica y esquemas eléctricos
                  </p>
                </div>
              </div>

              <div className="group bg-card rounded-xl overflow-hidden border border-border shadow-soft hover:shadow-medium transition-smooth">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={toolsImg}
                    alt="Herramientas profesionales"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    Manejo de Herramientas
                  </h3>
                  <p className="text-muted-foreground">
                    Dominio de equipos y herramientas especializadas para electricidad
                  </p>
                </div>
              </div>

              <div className="group bg-card rounded-xl overflow-hidden border border-border shadow-soft hover:shadow-medium transition-smooth">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={safetyImg}
                    alt="Trabajo seguro"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    Trabajo Seguro
                  </h3>
                  <p className="text-muted-foreground">
                    Cumplimiento estricto de normas y protocolos de seguridad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <Process />
      
      <Footer />
    </div>
  );
};

export default SkillsPage;
