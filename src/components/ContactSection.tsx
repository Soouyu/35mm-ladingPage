import { useEffect, useRef, useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.22, rootMargin: "120px 0px" } // ✅ mejor en móvil
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Listo! Recibimos tu mensaje. Te respondemos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className={`contact35 ${visible ? "contact35-in" : ""}`}
    >
      {/* blobs */}
      <div className="contact35-float contact35-float-a" />
      <div className="contact35-float contact35-float-b" />
      <div className="contact35-float contact35-float-c" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="contact35-grid">
          {/* LEFT */}
          <div className="contact35-left">
            <div className="contact35-headBox">
              <span className="contact35-kicker">Contacto</span>
              <h2 className="contact35-title">
                Hablemos de tu <span>marca</span>
              </h2>
              <p className="contact35-sub">
                Cuéntanos qué necesitas. Te respondemos con una idea clara y los
                siguientes pasos.
              </p>
            </div>

            <div className="contact35-info">
              <div className="contact35-infoItem">
                <div className="contact35-iconBox">
                  <MapPin />
                </div>
                <div>
                  <p>Ubicación</p>
                  <span>Quito, Ecuador</span>
                </div>
              </div>

              <div className="contact35-infoItem">
                <div className="contact35-iconBox">
                  <Mail />
                </div>
                <div>
                  <p>Email</p>
                  <span>ideas@35mm.com.ec</span>
                </div>
              </div>

              <div className="contact35-infoItem">
                <div className="contact35-iconBox">
                  <Phone />
                </div>
                <div>
                  <p>WhatsApp</p>
                  <span>+593 099 287 2056</span>
                </div>
              </div>
            </div>

            <p className="contact35-micro">
              Tip: si puedes, incluye <b>objetivo</b>, <b>fecha</b> y <b>presupuesto</b>.
            </p>
          </div>

          {/* RIGHT */}
          <div className="contact35-card">
            <h3>Envíanos tu mensaje</h3>
            <p>Te respondemos con propuesta y siguiente paso.</p>

            <form onSubmit={handleSubmit}>
              <div className="contact35-row2">
                <label className="contact35-field">
                  <span>Nombre</span>
                  <input
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="contact35-field">
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />
                </label>
              </div>

              <label className="contact35-field">
                <span>Teléfono (opcional)</span>
                <input
                  name="telefono"
                  placeholder="Tu numero"
                  value={formData.telefono}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </label>

              <label className="contact35-field">
                <span>Mensaje</span>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos qué necesitas (branding, video, publicidad, etc.)"
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                />
              </label>

              <button type="submit">
                Enviar mensaje <Send />
              </button>

              <p className="contact35-privacy">
                Al enviar, aceptas que te contactemos para responder tu solicitud.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
