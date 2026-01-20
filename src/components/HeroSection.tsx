// HeroSection.tsx
import { ArrowRight, Sparkles, Target, Video,Megaphone  } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="inicio" className="hero35">
      {/* Background */}
      <div className="hero35-bg" aria-hidden />

      <div className="hero35-container">
        <div className="hero35-grid">
          {/* LEFT */}
          <div className="hero35-content">
            <span className="hero35-pill">
              <Sparkles size={14} />
              Agencia creativa & productora
            </span>

            <h1 className="hero35-title">
              Creamos marcas y campañas{" "}
              <span>que se sienten reales</span>
            </h1>

            <p className="hero35-text">
              Branding, publicidad y producción audiovisual con criterio.
              Diseñamos ideas claras, ejecutables y memorables para marcas que
              quieren crecer sin ruido.
            </p>

            <div className="hero35-tags">
              <span><Target size={14} /> Branding estratégico</span>
              <span><Video size={14} /> Producción audiovisual</span>
              <span><Megaphone size={14} /> Publicidad digital</span>
            </div>

            <div className="hero35-actions">
              <a href="#contacto" className="hero35-btn">
                Hablemos de tu proyecto <ArrowRight size={18} />
              </a>
              <a href="#experiencia" className="hero35-link">
                Nuestra Experiencia
              </a>
            </div>

            <div className="hero35-proof">
              <div>
                <strong>+100</strong>
                <span>proyectos realizados</span>
              </div>
              <div>
                <strong>14 años</strong>
                <span>de experiencia</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero35-visual">
            <div className="hero35-card">
              <p className="hero35-card-kicker">Nuestro enfoque</p>
              <h3>
                Estrategia primero, creatividad con sentido y ejecución clara.
              </h3>
              <p>
                No hacemos piezas por hacer. Cada decisión responde a un
                objetivo concreto: comunicar mejor y generar impacto real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
