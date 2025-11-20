import { Search, Clipboard, Zap, TestTube, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Análisis del Requerimiento",
    description:
      "Evaluación inicial de las necesidades del cliente y análisis del proyecto eléctrico.",
    number: "01",
  },
  {
    icon: Clipboard,
    title: "Evaluación Técnica",
    description:
      "Inspección detallada del sitio, mediciones y planificación de la solución óptima.",
    number: "02",
  },
  {
    icon: Zap,
    title: "Ejecución Profesional",
    description:
      "Implementación del trabajo con herramientas adecuadas y siguiendo normas técnicas.",
    number: "03",
  },
  {
    icon: TestTube,
    title: "Pruebas y Validaciones",
    description:
      "Verificación exhaustiva del funcionamiento correcto y mediciones de seguridad.",
    number: "04",
  },
  {
    icon: CheckCircle2,
    title: "Entrega Final y Seguimiento",
    description:
      "Entrega certificada del proyecto y soporte post-instalación para garantía total.",
    number: "05",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Proceso de Trabajo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Metodología profesional que garantiza resultados excepcionales en cada proyecto
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6"></div>
          </div>

          {/* Process Steps */}
          <div className="space-y-8 animate-fade-in-up">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-card shadow-soft rounded-2xl p-8 border border-border hover:border-primary/50 transition-smooth hover:shadow-medium"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                  {/* Number Badge */}
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary/20 transition-smooth">
                    <step.icon className="w-8 h-8 text-secondary" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-1 h-8 bg-gradient-to-b from-primary/50 to-transparent"></div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
