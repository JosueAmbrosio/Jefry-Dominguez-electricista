import {
  FileText,
  Shield,
  HardHat,
  CheckCircle,
  Wrench,
  BookOpen,
  Users,
  Clock,
} from "lucide-react";

const skills = [
  {
    icon: FileText,
    title: "Interpretación de Planos Eléctricos",
    description: "Lectura y análisis detallado de planos técnicos y esquemas eléctricos",
  },
  {
    icon: Shield,
    title: "Trabajo Seguro",
    description: "Cumplimiento estricto de normas de seguridad y prevención de riesgos",
  },
  {
    icon: HardHat,
    title: "Experiencia en Obras",
    description: "Participación activa en proyectos de construcción y remodelación",
  },
  {
    icon: CheckCircle,
    title: "Instalaciones Certificadas",
    description: "Trabajos ordenados que cumplen con normativas y certificaciones",
  },
  {
    icon: Wrench,
    title: "Herramientas Técnicas",
    description: "Manejo experto de equipos y herramientas especializadas",
  },
  {
    icon: BookOpen,
    title: "Normativas Eléctricas",
    description: "Conocimiento profundo de códigos y regulaciones del sector",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Colaboración efectiva y comunicación clara con equipos de trabajo",
  },
  {
    icon: Clock,
    title: "Puntualidad y Responsabilidad",
    description: "Compromiso con plazos y alta responsabilidad profesional",
  },
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Competencias y Habilidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Capacidades técnicas y profesionales que garantizan trabajos de excelencia
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-card shadow-soft rounded-xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-glow hover:scale-105 hover:-rotate-2 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 gradient-electric rounded-full flex items-center justify-center group-hover:scale-125 transition-transform shadow-medium group-hover:shadow-glow group-hover:rotate-12">
                    <skill.icon className="w-8 h-8 text-primary-foreground group-hover:animate-pulse" />
                  </div>
                  <h3 className="font-bold text-card-foreground group-hover:text-gradient-electric transition-colors">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
