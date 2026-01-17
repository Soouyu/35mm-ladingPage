import { useEffect, useRef, useState } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  /* Reveal on scroll */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section
      id="contacto"
      ref={sectionRef}
      className={`contact35 ${visible ? "contact35-in" : ""}`}
    >
      {/* blobs flotantes */}
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
      ¿Listo para <span>crecer?</span>
    </h2>
  </div>


            <p className="contact35-sub">
              Cuéntanos sobre tu proyecto. Te proponemos una estrategia clara,
              medible y enfocada en resultados reales.
            </p>

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
                  <p>Teléfono</p>
                  <span>+593 099 287 2056</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact35-card">
            <h3>Hablemos de tu proyecto</h3>
            <p>Te respondemos con una propuesta clara y siguientes pasos.</p>

            <form onSubmit={handleSubmit}>
              <input
                name="nombre"
                placeholder="Nombre completo"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
              />
              <textarea
                name="mensaje"
                placeholder="Cuéntanos sobre tu proyecto…"
                rows={4}
                value={formData.mensaje}
                onChange={handleChange}
                required
              />

              <button type="submit">
                Enviar mensaje
                <Send />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
