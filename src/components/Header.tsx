// Header.tsx
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "./assets/35mm-Marca-only.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#diagnostico", label: "Diagnostico" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#servicios", label: "Servicios" },
    { href: "#como?", label: "Cómo trabajamos?" },
  ];

  // ✅ lock scroll (safe para TS/SSR)
  useEffect(() => {
    if (typeof document === "undefined") return;
    const body = document.body;
    if (!body) return;

    const prevOverflow = body.style.overflow;
    body.style.overflow = isMenuOpen ? "hidden" : prevOverflow;

    return () => {
      body.style.overflow = prevOverflow;
    };
  }, [isMenuOpen]);

  // ✅ si el usuario agranda a desktop, cerramos el menú
  useEffect(() => {
    if (typeof window === "undefined") return;

    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={`hdr35 ${isMenuOpen ? "is-open" : ""}`}>
      <div className="hdr35-bg" aria-hidden="true">
        <div className="hdr35-bgBase" />
        <div className="hdr35-bgMesh" />
      </div>

      <div className="hdr35-container">
        <div className="hdr35-row">
          <a
            href="#"
            className="hdr35-brand"
            aria-label="Ir al inicio"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="hdr35-brandInner">
              <img src={logo} alt="Logo 35mm" className="hdr35-logo" />
              <div className="hdr35-word">
                <div className="hdr35-wordTop">35mm</div>
                <div className="hdr35-wordSub">Agencia y Productora Creativa</div>
              </div>
            </div>
          </a>

          <nav className="hdr35-nav" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hdr35-link">
                {link.label}
              </a>
            ))}
            <a href="#contacto" className="hdr35-ctaBtn">
              Hablemos
            </a>
          </nav>

          <button
            className="hdr35-menuBtn"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={`hdr35-mobile ${isMenuOpen ? "is-open" : ""}`}>
        <button
          className="hdr35-mOverlay"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Cerrar menú"
        />

        <div className="hdr35-mPanel" role="dialog" aria-modal="true" aria-label="Menú">
          <div className="hdr35-mTop">
            <div className="hdr35-brandInner">
              <img src={logo} alt="Logo 35mm" className="hdr35-logo hdr35-logoM" />
              <div className="hdr35-word hdr35-wordM">
                <div className="hdr35-wordTop">35mm</div>
                <div className="hdr35-wordSub">Agencia y Productora Creativa</div>
              </div>
            </div>

            <button className="hdr35-closeBtn" onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú">
              <X size={26} />
            </button>
          </div>

          <nav className="hdr35-mNav" aria-label="Navegación móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hdr35-mLink"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contacto"
              className="hdr35-ctaBtn hdr35-ctaBtnM"
              onClick={() => setIsMenuOpen(false)}
            >
              Hablemos
            </a>
          </nav>

          <p className="hdr35-mNote">Respuesta rápida • Estrategia clara • Piezas con intención</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
