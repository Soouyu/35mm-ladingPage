// HeroSection.tsx
import {
  ArrowRight,
  BarChart3,
  Target,
  Zap,
  Megaphone,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const HeroSection = () => {
  // ✅ “Dashboard” más coherente con Branding/Publicidad/Video (sin promesas raras)
  const growthRows = [
    { label: "Reconocimiento", value: "↑", bar: "hero35-bar-15" },
    { label: "Engagement", value: "↑", bar: "hero35-bar-20" },
    { label: "Consistencia", value: "↑", bar: "hero35-bar-10" },
  ];

  // ✅ Badges alineados con lo que hacen realmente
  const badges = [
    { Icon: Target, text: "Branding estratégico" },
    { Icon: BarChart3, text: "Publicidad creativa" },
    { Icon: Zap, text: "Producción audiovisual" },
  ];

  // ✅ Mini cards con tono más “agencia creativa”
  const miniCards = [
    {
      Icon: Megaphone,
      title: "Contenido con intención",
      desc: "Copy + dirección de arte para conectar y destacar.",
    },
    {
      Icon: TrendingUp,
      title: "Campañas digitales",
      desc: "Ideas, pauta y ejecución para mover la aguja.",
    },
    {
      Icon: CheckCircle2,
      title: "Claridad y orden",
      desc: "Entregables, cronogramas y reportes entendibles.",
    },
  ];

  return (
    <section className="hero35-section" id="inicio">
      {/* BACKGROUND */}
      <div className="hero35-bg" aria-hidden="true">
        <div className="hero35-base" />
        <div className="hero35-aurora" />
        <div className="hero35-gridlines" />
        <div className="hero35-vignette" />
      </div>

      {/* CONTENT */}
      <div className="hero35-shell">
        <div className="hero35-container">
          <div className="hero35-grid">
            {/* LEFT */}
            <div className="hero35-left hero-in hero-delay-1">
              <div className="hero35-topline">
                <span className="hero35-pill">
                  Agencia creativa • Branding • Publicidad • Video
                </span>
                <span className="hero35-chip">35mm.visual • Quito</span>
              </div>

              <h1 className="hero35-title">
                Creamos marcas y{" "}
                <span className="hero35-titleEm">
                  campañas
                  <span className="hero35-underline" />
                </span>{" "}
                que trascienden.
              </h1>

              <p className="hero35-subtitle">
                Somos una agencia creativa especializada en branding, publicidad y video.
                Construimos identidades, campañas y productos audiovisuales con estrategia,
                creatividad y propósito.
              </p>

              <div className="hero35-badges">
                {badges.map(({ Icon, text }, i) => (
                  <div key={i} className="hero35-badge">
                    <span className="hero35-badgeIcon">
                      <Icon className="hero35-icon" />
                    </span>
                    <span className="hero35-badgeText">{text}</span>
                  </div>
                ))}
              </div>

              <div className="hero35-ctas">
                <a href="#contacto" className="hero35-btn hero35-btnPrimary">
                  <span className="hero35-btnRow">
                    Conversemos sobre tu proyecto{" "}
                    <ArrowRight className="hero35-arrow" />
                  </span>
                </a>

                {/* ✅ mejor UX: llevar a portafolio en vez de “servicios” */}
                <a href="#portfolio" className="hero35-btn hero35-btnGhost">
                  Ver trabajos
                </a>
              </div>

              {/* ✅ Pruebas más “defendibles” que ROI */}
              <div className="hero35-proof">
                <div className="hero35-proofItem">
                  <span className="hero35-proofNum">100+</span>
                  <span className="hero35-proofLbl">Proyectos realizados</span>
                </div>
                <div className="hero35-proofDivider" />
                <div className="hero35-proofItem">
                  <span className="hero35-proofNum">Branding</span>
                  <span className="hero35-proofLbl">Publicidad & Video</span>
                </div>
                <div className="hero35-proofDivider" />
                <div className="hero35-proofItem">
                  <span className="hero35-proofNum">Quito</span>
                  <span className="hero35-proofLbl">Ecuador</span>
                </div>
              </div>
            </div>

            {/* RIGHT (dashboard) */}
            <div className="hero35-right hero-in hero-delay-3">
              <div className="hero35-card">
                <div className="hero35-cardHead">
                  <p className="hero35-cardKicker">Nuestro enfoque</p>
                  <p className="hero35-cardTitle">
                    Estrategia + creatividad + ejecución
                  </p>
                </div>

                <div className="hero35-metrics">
                  {growthRows.map((row, i) => (
                    <div key={i} className="hero35-metric">
                      <div className="hero35-metricTop">
                        <span className="hero35-metricLbl">{row.label}</span>
                        <span className="hero35-metricVal">{row.value}</span>
                      </div>
                      <div className="hero35-track">
                        <div className={`hero35-barFill ${row.bar}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="hero35-note">
                  <p className="hero35-noteSmall">Lo que obtienes</p>
                  <p className="hero35-noteStrong">
                    Identidad clara + campañas creativas + piezas audiovisuales que comunican
                  </p>
                </div>

                <div className="hero35-cardEdge" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* BOTTOM MINI CARDS */}
          <div className="hero35-mini hero-in hero-delay-2">
            {miniCards.map(({ Icon, title, desc }, i) => (
              <div key={i} className="hero35-miniCard">
                <div className="hero35-miniIconWrap">
                  <Icon className="hero35-miniIcon" />
                </div>
                <p className="hero35-miniTitle">{title}</p>
                <p className="hero35-miniDesc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="hero35-spacer" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
