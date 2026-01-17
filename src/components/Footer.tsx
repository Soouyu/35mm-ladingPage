import logo from "./assets/35mm-Marca-only.png";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { SiBehance } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Branding que se siente",
    "Producción Audiovisual",
    "Contenido & Redes",
    "Publicidad que Convierte",
    "Diseño & Web",
    "Medición & Growth",
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/35mm.visual/",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/35mmAgenciaCreativa",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/35mm-creative-agency/?originalSubdomain=ec",
      label: "LinkedIn",
    },
    {
      icon: SiBehance,
      href: "https://www.behance.net/35mmEC",
      label: "Behance",
    },
  ];

  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-14 mb-16">
          {/* BRAND */}
          <div className="md:col-span-2 animate-fade-up">
            <div className="flex items-center gap-4 mb-5">
              <img
                src={logo}
                alt="35mm"
                className="h-12 w-auto object-contain"
              />

              <span className="text-xl font-extrabold tracking-tight">
                35mm{" "}
                <span className="font-medium text-white/70">
                  · Agencia y Productora
                </span>
              </span>
            </div>

            <p className="text-white/70 max-w-md leading-relaxed">
              Creamos marcas, contenido y campañas que se sienten reales.
              Estrategia, creatividad y producción con intención.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-7">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl border border-white/15
                             flex items-center justify-center
                             hover:bg-white hover:text-black
                             transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* SERVICES */}
          <div className="animate-fade-up delay-100">
            <h4 className="font-bold text-lg mb-5">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#servicios"
                    className="text-white/65 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="animate-fade-up delay-200">
            <h4 className="font-bold text-lg mb-5">Contacto</h4>
            <ul className="space-y-3 text-white/65">
              <li>ideas@35mm.com.ec</li>
              <li>+593 099 287 2056</li>
              <li>Quito, Ecuador</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-up delay-300">
          <p className="text-white/45 text-sm">
            © {currentYear} 35mm · Agencia y Productora. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-sm text-white/45">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
