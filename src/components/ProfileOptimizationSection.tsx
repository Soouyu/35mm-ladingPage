import {
  CheckCircle2,
  Sparkles,
  Target,
  LayoutGrid,
  MessageSquareText,
  ArrowRight,
} from "lucide-react";
import guiaInstagram from "./assets/publicaciones.jpg";

const ProfileOptimizationSection = () => {
  const items = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Bio + CTA que aclaran tu valor",
      desc: "En 3 segundos: qué haces, para quién y qué resultado entregas.",
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      title: "Highlights como portafolio",
      desc: "Servicios, casos, FAQs y testimonios ordenados como un menú.",
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: "Sistema visual coherente",
      desc: "Paleta, tipografías y estilo: marca sólida = confianza inmediata.",
    },
    {
      icon: <MessageSquareText className="w-5 h-5" />,
      title: "Contenido con intención",
      desc: "Educas, inspiras y demuestras con pruebas reales (sin saturar).",
    },
  ];

  return (
    <section id="guia-instagram" className="ig35">
      {/* BLOBS */}
      <div className="ig35-blob ig35-blob-a" />
      <div className="ig35-blob ig35-blob-b" />
      <div className="ig35-blob ig35-blob-c" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <div className="ig35-head">
            <span className="ig35-pill">
              <CheckCircle2 className="w-4 h-4" />
              Auditoría rápida
            </span>

            <h2 className="ig35-title">
              Haz que tu Instagram se vea{" "}
              <span className="ig35-accent">profesional</span>
              <br />
              y te genere conversaciones reales
            </h2>

            <p className="ig35-sub">
              Ordenamos tu perfil y tu contenido para que la gente entienda tu valor rápido,
              confíe en tu marca y te escriba con intención.
            </p>
          </div>

          {/* GRID */}
          <div className="ig35-grid">
            {/* IMAGEN */}
            <div className="ig35-imageCol">
              <div className="ig35-floatWrap">
                <div className="ig35-shot">
                  <div className="ig35-shotGlow" />
                  <div className="ig35-shotCard">
                    <img
                      src={guiaInstagram}
                      alt="Checklist de presencia digital"
                      className="ig35-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* CONTENIDO */}
            <div className="ig35-contentCol">
              <div className="ig35-cards">
                {items.map((it, idx) => (
                  <div key={idx} className="ig35-card">
                    <div className="ig35-cardIcon">{it.icon}</div>
                    <div>
                      <p className="ig35-cardTitle">{it.title}</p>
                      <p className="ig35-cardDesc">{it.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="ig35-actions">
                <a href="#contacto" className="ig35-cta">
                  Quiero una auditoría rápida
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a href="#servicios" className="ig35-ghost">
                  Ver servicios
                </a>
              </div>

              <p className="ig35-tip">
                Tip: si tu bio no responde “qué haces + para quién + resultado”, estás perdiendo oportunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileOptimizationSection;
