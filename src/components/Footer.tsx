import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Headphones, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/95 border-t border-border py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4 group">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 gradient-electric rounded-lg flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-primary-foreground animate-pulse" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">Jefry Domínguez</div>
                  <div className="text-sm text-gradient-electric">Electricista Profesional</div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Más de 6 años brindando soluciones eléctricas de calidad con
                profesionalismo y seguridad garantizada.
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                <Zap className="w-4 h-4 animate-pulse" />
                <span>Disponible 24/7</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                <div className="w-1 h-6 gradient-electric rounded-full"></div>
                Enlaces Rápidos
              </h3>
              <ul className="space-y-3">
                <li className="transform transition-transform hover:translate-x-2">
                  <a
                    href="servicios"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:w-3 transition-all"></span>
                    Servicios
                  </a>
                </li>
                <li className="transform transition-transform hover:translate-x-2">
                  <a
                    href="proyectos"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:w-3 transition-all"></span>
                    Proyectos
                  </a>
                </li>
                <li className="transform transition-transform hover:translate-x-2">
                  <a
                    href="contacto"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full group-hover:w-3 transition-all"></span>
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                <div className="w-1 h-6 gradient-electric rounded-full"></div>
                Contacto
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground text-sm group hover:text-primary transition-colors">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <a href="tel:+51965300249" className="hover:underline">
                    965 300 249
                  </a>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground text-sm group hover:text-primary transition-colors">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all">
                    <Mail className="w-4 h-4 text-secondary" />
                  </div>
                  <a
                    href="mailto:jsdg73366897@gmail.com"
                    className="hover:underline break-all"
                  >
                    jsdg73366897@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2 text-muted-foreground text-sm group">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mt-0.5 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span>Todo el Perú</span>
                </li>
              </ul>
            </div>

            {/* Social & Availability */}
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground flex items-center gap-2">
                <div className="w-1 h-6 gradient-electric rounded-full"></div>
                Sígueme
              </h3>
              <div className="flex gap-3 mb-6">
                <a
                  href="https://web.facebook.com/jefrysamuel.dominguez"
                  target="_blank"
                  className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-soft hover:shadow-glow hover:scale-110 hover:-rotate-6 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://wa.me/51965300249"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-soft hover:shadow-glow hover:scale-110 hover:-rotate-6 group"
                  aria-label="Headphones"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                {/* <a
                  href="#"
                  className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-all shadow-soft hover:shadow-yellow-glow hover:scale-110 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all shadow-soft hover:shadow-glow hover:scale-110 hover:rotate-6 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a> */}
              </div>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-all group">
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="font-semibold text-primary">✓</span> Disponible para proyectos eléctricos, obras y colaboraciones profesionales.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Jefry Samuel Domínguez Guzmán.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
