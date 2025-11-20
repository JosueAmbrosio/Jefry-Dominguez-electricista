import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import residentialImg from "@/assets/service-residential.jpg";
import industrialImg from "@/assets/service-industrial.jpg";
import maintenanceImg from "@/assets/service-maintenance.jpg";
import diagnosisImg from "@/assets/service-diagnosis.jpg";
import ledImg from "@/assets/service-led.jpg";
import panelsImg from "@/assets/service-panels.jpg";
import conduitImg from "@/assets/service-conduit.jpg";
import constructionImg from "@/assets/service-construction.jpg";

const services = [
  {
    title: "Instalaciones Eléctricas Residenciales",
    description: "Instalación completa de sistemas eléctricos en viviendas, incluyendo cableado, tomas, interruptores y tableros de distribución con certificación.",
    image: residentialImg,
  },
  {
    title: "Instalaciones Industriales",
    description: "Montaje de sistemas eléctricos trifásicos para maquinaria y equipos industriales, con diseño de circuitos de alta potencia y sistemas de control.",
    image: industrialImg,
  },
  {
    title: "Mantenimiento Preventivo y Correctivo",
    description: "Servicios de mantenimiento periódico y reparaciones de emergencia para garantizar el funcionamiento óptimo de sus instalaciones eléctricas.",
    image: maintenanceImg,
  },
  {
    title: "Diagnóstico y Reparación de Fallas",
    description: "Detección y solución de problemas eléctricos mediante equipos de medición profesionales, identificando fallas de forma precisa y eficiente.",
    image: diagnosisImg,
  },
  {
    title: "Iluminación LED",
    description: "Diseño e instalación de sistemas de iluminación LED para espacios residenciales y comerciales, con enfoque en eficiencia energética y ahorro.",
    image: ledImg,
  },
  {
    title: "Armado de Tableros Eléctricos",
    description: "Ensamblaje y configuración de tableros de distribución eléctrica con breakers, protecciones térmicas y sistemas de cableado organizado.",
    image: panelsImg,
  },
  {
    title: "Canalización y Tuberías",
    description: "Instalación de sistemas de canalización para protección de cableado, con montaje de tuberías PVC, EMT y bandejas portacables organizadas.",
    image: conduitImg,
  },
  {
    title: "Apoyo para Obras y Proyectos",
    description: "Soporte técnico en proyectos de construcción y remodelación, trabajando en coordinación con contratistas y equipos multidisciplinarios.",
    image: constructionImg,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Electric Glow */}
      <section className="py-20 electric-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-electric">
              Servicios Profesionales
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Soluciones eléctricas completas para proyectos residenciales, comerciales e industriales
            </p>
            <div className="w-24 h-1 gradient-electric mx-auto rounded-full mt-6 animate-energy-flow shadow-glow"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 circuit-pattern relative">
        <div className="absolute inset-0 bg-background/95"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden border border-border shadow-soft hover:shadow-strong transition-smooth animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-card-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
