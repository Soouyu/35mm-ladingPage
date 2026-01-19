// HeroSection.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Target,
  Zap,
  Megaphone,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

type GrowthRow = {
  label: string;
  target: number;        // ✅ número objetivo (10, 15, 20...)
  barClass: string;      // ✅ clase que define --barTarget
};

function useCountUpOnView(
  targets: number[],
  start: boolean,
  durationMs = 1100
) {
  const [values, setValues] = useState<number[]>(() => targets.map(() => 0));

  useEffect(() => {
    if (!start) return;

    const startTs = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTs) / durationMs);
      // easing suave tipo “cubic”
      const eased = 1 - Math.pow(1 - t, 3);

      setValues(targets.map((n) => Math.round(n * eased)));

      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [start, durationMs, targets]);

  return values;
}

const HeroSection = () => {
  // ✅ ahora target numérico (igual a la barra)
  const growthRows: GrowthRow[] = useMemo(
    () => [
      { label: "Reconocimiento", target: 15, barClass: "hero35-bar-15" },
      { label: "Engagement", target: 20, barClass: "hero35-bar-20" },
      { label: "Consistencia", target: 10, barClass: "hero35-bar-10" },
    ],
    []
  );

  const badges = [
    { Icon: Target, text: "Branding estratégico" },
    { Icon: BarChart3, text: "Publicidad creativa" },
    { Icon: Zap, text: "Producción audiovisual" },
  ];

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

  // ✅ detecta cuando el dashboard está visible para disparar animación
  const metricsRef = useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = metricsRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          io.disconnect(); // ✅ solo una vez
        }
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const targets = useMemo(() => growthRows.map((r) => r.target), [growthRows]);
  const values = useCountUpOnView(targets, play, 1100);

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

                <a href="#portfolio" className="hero35-btn hero35-btnGhost">
                  Ver trabajos
                </a>
              </div>

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
              <div className={`hero35-card ${play ? "is-play" : ""}`}>
                <div className="hero35-cardHead">
                  <p className="hero35-cardKicker">Nuestro enfoque</p>
                  <p className="hero35-cardTitle">
                    Estrategia + creatividad + ejecución
                  </p>
                </div>

                {/* ✅ ref aquí para disparar animación al entrar en viewport */}
                <div className="hero35-metrics" ref={metricsRef}>
                  {growthRows.map((row, i) => (
                    <div key={i} className="hero35-metric">
                      <div className="hero35-metricTop">
                        <span className="hero35-metricLbl">{row.label}</span>

                        {/* ✅ número sincronizado con la barra */}
                        <span className="hero35-metricVal">
                          {values[i]}%
                        </span>
                      </div>

                      <div className="hero35-track">
                        {/* ✅ la barra solo anima cuando play=true */}
                        <div
                          className={`hero35-barFill ${row.barClass} ${
                            play ? "is-animate" : ""
                          }`}
                        />
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
