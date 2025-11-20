import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Testimonios reales basados en desempeño descrito en certificados laborales
const testimonials = [
  {
    name: "Katya Cabanillas",
    role: "Representante – KENJO SAC",
    content:
      "Jefry demostró ser un operario electricista responsable, proactivo y puntual durante toda la ejecución del proyecto en Bigote. Su trabajo fue clave para cumplir con los plazos y mantener la calidad exigida.",
    rating: 5,
    initials: "KC",
  },
  {
    name: "Kevin Guerra",
    role: "Supervisor de Obra – IOyC SAC",
    content:
      "Mostró un excelente desempeño técnico en la obra de la I.E. 14989. Su capacidad para resolver fallas y ejecutar instalaciones con precisión fue fundamental para el avance del proyecto.",
    rating: 5,
    initials: "KG",
  },
  {
    name: "Equipo Técnico de Sechura",
    role: "Obra Casa del Maestro – IOyC SAC",
    content:
      "Jefry trabajó con alto nivel de atención al detalle, cumpliendo con los estándares de seguridad y demostrando una excelente capacidad para trabajar bajo presión.",
    rating: 5,
    initials: "CM",
  },
  {
    name: "Coordinación de Servicios Especiales",
    role: "Supervisión Técnica",
    content:
      "Su experiencia en instalaciones de CCTV, pozos a tierra y sistemas contra incendios fue de gran valor. Siempre mantiene buenas prácticas de seguridad y resultados confiables.",
    rating: 5,
    initials: "ES",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Testimonios de Clientes y Supervisores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Opiniones reales basadas en certificados y evaluaciones laborales
            </p>
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-medium transition-smooth border-border hover:border-primary/50 bg-card relative overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-primary" />
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-card-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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

export default Testimonials;
