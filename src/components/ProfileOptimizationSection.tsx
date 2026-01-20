import { ArrowRight } from "lucide-react";
import guiaInstagram from "./assets/publicaciones.jpg";

const ProfileOptimizationSection = () => {
  return (
    <section id="diagnostico" className="igx">
      <div className="igx-container">
        <div className="igx-grid">
          {/* LEFT */}
          <div className="igx-content">
            <span className="igx-kicker">Diagnóstico de perfil</span>

            <h2 className="igx-title">
              Tu Instagram puede verse bonito,
              <br />
              <span>pero no estar funcionando</span>
            </h2>

            <p className="igx-lead">
              Analizamos tu perfil desde afuera, como lo ve un cliente real.
              Detectamos qué confunde, qué no comunica y qué te está haciendo
              perder conversaciones.
            </p>

            <div className="igx-points">
              <p>— ¿Se entiende qué haces en segundos?</p>
              <p>— ¿Tu perfil genera confianza real?</p>
              <p>— ¿Tu contenido invita a escribirte?</p>
            </div>

            <div className="igx-actions">
              <a href="#contacto" className="igx-btn">
                Quiero el diagnóstico <ArrowRight size={18} />
              </a>
              <a href="#servicios" className="igx-link">
                Ver servicios
              </a>
            </div>

            <p className="igx-note">
              No es una plantilla. Es criterio aplicado a tu marca.
            </p>
          </div>

          {/* RIGHT */}
          <div className="igx-visual">
            <img
              src={guiaInstagram}
              alt="Ejemplo de perfil de Instagram"
              loading="lazy"
              className="igx-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileOptimizationSection;
