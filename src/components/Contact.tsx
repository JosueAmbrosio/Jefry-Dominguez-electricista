import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos",
        variant: "destructive",
      });
      return;
    }

    // WhatsApp message
    const whatsappMessage = `Hola Jefry, me gustaría contactarte.\n\nNombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone || "No proporcionado"}\n\nMensaje: ${formData.message}`;
    const whatsappUrl = `https://wa.me/51965300249?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank");

    toast({
      title: "¡Mensaje enviado!",
      description: "Se abrirá WhatsApp para completar el contacto",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-in">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  Información de Contacto
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Estoy disponible para consultas, cotizaciones y proyectos eléctricos.
                  No dudes en contactarme para discutir tus necesidades.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-soft">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      WhatsApp / Teléfono
                    </h4>
                    <a
                      href="https://wa.me/51965300249"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      +51 965 300 249
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-soft">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Correo Electrónico
                    </h4>
                    <a
                      href="mailto:jsdg73366897@gmail.com"
                      className="text-primary hover:underline break-all"
                    >
                      jsdg73366897@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border shadow-soft">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground mb-1">
                      Zona de Trabajo
                    </h4>
                    <p className="text-muted-foreground">
                      Todo el Perú
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card shadow-medium rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                  Enviar Mensaje
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+51 965 300 249"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe tu proyecto o consulta..."
                      required
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary-light transition-smooth group"
                  >
                    Enviar Mensaje
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
