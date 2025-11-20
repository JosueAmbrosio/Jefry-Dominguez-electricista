import { Building2, Factory, Lightbulb, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Proyectos reales basados en el CV de Jefry Domínguez
const projects = [
  {
    icon: Building2,
    title: "Centro de Comercialización - Bigote (Piura)",
    category: "Instalación Completa",
    description:
      "Instalación eléctrica integral para la obra 'Creación del Servicio de Comercialización de Productos en Bigote'. Incluye cableado, tableros y puesta en marcha de sistemas eléctricos.",
    problem:
      "El nuevo centro requería una instalación eléctrica completa, segura y certificada para cumplir las normativas y garantizar la operatividad del proyecto.",
    solution:
      "Ejecución completa de instalaciones eléctricas, instalación de tableros, canalizaciones y pruebas finales siguiendo normas técnicas vigentes.",
    result:
      "Entrega de un sistema eléctrico totalmente operativo, seguro y aprobado en inspecciones, permitiendo el inicio de actividades sin retrasos.",
  },
  {
    icon: Factory,
    title: "IE 14989 - La Unión (Piura)",
    category: "Instalación y Mantenimiento",
    description:
      "Instalación, mantenimiento y reparación de sistemas eléctricos en la institución educativa bajo el proyecto de reconstrucción IRI.",
    problem:
      "La institución requería una rehabilitación eléctrica completa debido a sistemas deteriorados que ponían en riesgo la operatividad escolar.",
    solution:
      "Renovación de cableado, instalación de nuevas canalizaciones, tableros y corrección de fallas para cumplir estándares de seguridad.",
    result:
      "Sistema eléctrico seguro, funcional y listo para operar, contribuyendo a la mejora de la infraestructura educativa.",
  },
  {
    icon: Lightbulb,
    title: "Casa del Maestro - Sechura",
    category: "Mejoramiento Eléctrico",
    description:
      "Instalaciones, cableado y reparaciones eléctricas en la obra de mejoramiento de los servicios de capacitación pedagógica.",
    problem:
      "La infraestructura presentaba fallas eléctricas y requería una modernización completa para garantizar seguridad y funcionamiento continuo.",
    solution:
      "Instalación de nuevas líneas eléctricas, corrección de fallas, montaje de luminarias y verificación de sistemas críticos.",
    result:
      "Instalación eléctrica optimizada, segura y totalmente operativa, cumpliendo plazos exigidos por la obra.",
  },
  {
    icon: ShieldCheck,
    title: "Sistemas Especiales: CCTV, Pozos a Tierra y Contra Incendios",
    category: "Especialidades",
    description:
      "Ejecución de instalaciones de CCTV, sistemas de puesta a tierra y soporte en sistemas eléctricos contra incendios en diversas obras en Piura.",
    problem:
      "Diversas instalaciones requerían sistemas complementarios para seguridad física y eléctrica.",
    solution:
      "Implementación de CCTV, instalación y medición de pozos a tierra, y soporte en sistemas eléctricos anti-incendio.",
    result:
      "Instalaciones certificadas, funcionales y alineadas con los estándares de seguridad exigidos.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 energy-lines relative">
      <div className="absolute inset-0 bg-background/90"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-fade-in-up">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-strong transition-smooth border-border hover:border-primary/50 bg-card overflow-hidden"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                      <project.icon className="w-7 h-7 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-secondary/20 text-secondary-foreground border-secondary/30"
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold text-sm text-foreground mb-1">Problema:</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <h4 className="font-semibold text-sm text-primary mb-1">Solución:</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20">
                      <h4 className="font-semibold text-sm text-secondary-foreground mb-1">Resultado:</h4>
                      <p className="text-sm text-muted-foreground">{project.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;