import {
  Home,
  Factory,
  Wrench,
  Search,
  Lightbulb,
  GitBranch,
  Box,
  HardHat,
  Cable,
  ShieldCheck,
  Video,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Servicios actualizados según experiencia real del CV
const services = [
  {
    icon: Home,
    title: "Instalaciones Eléctricas Residenciales",
    description:
      "Instalación completa de sistemas eléctricos en viviendas, incluyendo cableado, tomas, interruptores, luminarias y tableros, garantizando seguridad y cumplimiento de normas.",
  },
  {
    icon: Factory,
    title: "Instalaciones en Proyectos de Obra",
    description:
      "Experiencia en instalaciones eléctricas para obras públicas y privadas en Piura: centros educativos, centros de capacitación y obras municipales (Bigote, Sechura, La Unión).",
  },
  {
    icon: Wrench,
    title: "Mantenimiento Eléctrico",
    description:
      "Mantenimiento preventivo y correctivo en sistemas eléctricos, asegurando operatividad continua y solución rápida de fallas.",
  },
  {
    icon: Search,
    title: "Diagnóstico y Reparación de Fallas",
    description:
      "Detección de fallas eléctricas mediante pruebas, mediciones y verificación de circuitos para restablecer el funcionamiento seguro.",
  },
  {
    icon: Lightbulb,
    title: "Instalación de Iluminación",
    description:
      "Montaje de sistemas de iluminación en interiores y exteriores, incluyendo luminarias LED y sistemas para obras educativas y comerciales.",
  },
  {
    icon: GitBranch,
    title: "Montaje de Canalizaciones",
    description:
      "Instalación profesional de tuberías, ductos, bandejas portacables y canalizaciones según planos eléctricos.",
  },
  {
    icon: Box,
    title: "Armado de Tableros Eléctricos",
    description:
      "Ensamblaje, organización y conexionado de tableros eléctricos de distribución para proyectos residenciales y de obra.",
  },
  {
    icon: ShieldCheck,
    title: "Pozos a Tierra y Sistemas de Seguridad",
    description:
      "Instalación y medición de pozos a tierra, garantizando una correcta protección eléctrica y cumplimiento de estándares.",
  },
  {
    icon: Video,
    title: "Instalación de CCTV",
    description:
      "Montaje de cámaras de videovigilancia, cableado estructurado y puesta en funcionamiento de sistemas de seguridad.",
  },
  {
    icon: HardHat,
    title: "Soporte Técnico en Obra",
    description:
      "Asistencia técnica en proyectos de construcción, siguiendo planos eléctricos y apoyando al equipo multidisciplinario.",
  },
  {
    icon: Cable,
    title: "Cableado y Distribución Eléctrica",
    description:
      "Tendido de cables, organización de circuitos y distribución eléctrica segura para proyectos de obra y viviendas.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 circuit-pattern relative">
      <div className="absolute inset-0 bg-muted/50"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Servicios Profesionales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Servicios eléctricos basados en experiencia real en obras públicas, residenciales e industriales
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-strong transition-all border-border hover:border-primary/50 bg-card hover:scale-105 hover:-rotate-1 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-all group-hover:scale-110 group-hover:rotate-12">
                    <service.icon className="w-7 h-7 text-primary-foreground transition-transform" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-gradient-electric transition-all">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
