// Header.tsx
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "./assets/35mm-Marca-only.png";
import letra from "./assets/35mm-letra.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="hdr35 hdr35-entrance fixed top-0 left-0 right-0 z-50">
      {/* Fondo full (sin línea ni borde) */}
      <div className="hdr35-bg absolute inset-0 -z-10">
        <div className="hdr35-bgBase absolute inset-0" />
        <div className="hdr35-bgMesh absolute inset-0" />
      </div>

      {/* Contenido centrado */}
      <div className="container mx-auto px-6">
        <div className="hdr35-row flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="hdr35-brand flex items-center hover:opacity-90 transition-opacity"
            aria-label="Ir al inicio"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="hdr35-brandInner flex items-center gap-3">
              <img
                src={logo}
                alt="Logo 35mm"
                className="hdr35-logo w-auto"
              />
              <img
                src={letra}
                alt="35mm Marketing Digital"
                className="hdr35-wordmark w-auto"
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}

            <a href="#contacto" className="hdr35-cta rounded-xl px-6 py-3 font-semibold text-white shadow-md transition-all hover:opacity-90">
              Hablemos
            </a>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu full screen */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="hdr35-mOverlay absolute inset-0" />
        <div className="hdr35-mMesh absolute inset-0" />

        <div className="relative h-full w-full">
          <div className="container mx-auto px-6 pt-6">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="flex items-center hover:opacity-90 transition-opacity"
                aria-label="Ir al inicio"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center gap-3">
                  <img src={logo} alt="Logo 35mm" className="hdr35-logoM w-auto" />
                  <img src={letra} alt="35mm Marketing Digital" className="hdr35-wordmarkM w-auto" />
                </div>
              </a>

              <button
                className="p-2 text-white"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={26} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-5 py-4 text-white/90 text-lg font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contacto"
                className="hdr35-cta mt-2 rounded-2xl px-5 py-4 text-center text-white text-lg font-semibold shadow-md transition-all hover:opacity-90"
                onClick={() => setIsMenuOpen(false)}
              >
                Hablemos
              </a>
            </nav>

            <p className="mt-8 text-white/55 text-sm">
              Respuesta rápida • Estrategia clara • Resultados medibles
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
