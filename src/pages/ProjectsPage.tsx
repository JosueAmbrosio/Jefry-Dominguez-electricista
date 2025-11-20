import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Energy Lines */}
      <section className="py-20 energy-lines relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background/90 to-primary/5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-electric">
              Proyectos Realizados
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Casos de éxito que demuestran experiencia técnica, calidad y resultados profesionales
            </p>
            <div className="w-24 h-1 gradient-electric mx-auto rounded-full mt-6 animate-electric-pulse"></div>
          </div>
        </div>
      </section>

      <Projects />
      <Testimonials />
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
