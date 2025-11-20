import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import contactBg from "@/assets/contact-background.jpg";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Electric Effects */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={contactBg}
            alt="Contacto"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-background/90 to-primary/85"></div>
          <div className="absolute inset-0 circuit-pattern opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-electric">
              Contacto
            </h1>
            <p className="text-xl text-foreground leading-relaxed max-w-2xl mx-auto">
              Estoy disponible para atender sus consultas y proyectos. Contácteme para más información sobre servicios profesionales.
            </p>
            <div className="w-24 h-1 gradient-electric mx-auto rounded-full mt-6 animate-electric-pulse"></div>
          </div>
        </div>
      </section>

      <Contact />
      
      <Footer />
    </div>
  );
};

export default ContactPage;
