import Hero from "@/components/Hero";
import Profile from "@/components/Profile";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Objective from "@/components/Objective";
import Designer from "@/components/Designer";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Profile />
      <Services />
      <Skills />
      <Process />
      <Projects />
      <Testimonials />
      <Objective />
      <Designer />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
