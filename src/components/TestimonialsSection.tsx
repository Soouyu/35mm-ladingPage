import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  ArrowRight,
  PlayCircle,
  Clapperboard,
  Palette,
  Users,
} from "lucide-react";

const stats = [
  { label: "Proyectos entregados", value: 60, suffix: "+", note: "branding + audiovisual + digital" },
  { label: "Piezas producidas", value: 450, suffix: "+", note: "reels, posts, foto producto, ads" },
  { label: "Marcas con sistema", value: 18, suffix: "+", note: "identidad + lineamientos + piezas" },
];

const ResultsClosingSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) =>
          val < stats[i].value
            ? Math.min(val + Math.ceil(stats[i].value / 80), stats[i].value)
            : stats[i].value
        )
      );
    }, 40);

    return () => clearInterval(interval);
  }, [started]);

  return (
    <section ref={sectionRef} className="rcx2" id="resultados">
      {/* BG */}
      <div className="rcx2-bg" aria-hidden="true">
        <div className="rcx2-blob rcx2-blob-a" />
        <div className="rcx2-blob rcx2-blob-b" />
        <div className="rcx2-blob rcx2-blob-c" />
        <div className="rcx2-vignette" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* HEAD */}
        <header className="rcx2-head">
          <span className="rcx2-pill">
            <Sparkles className="rcx2-icoSm" />
            35mm.visual — Agencia y Productora
          </span>

          <h2 className="rcx2-h2">
            Vamos a cambiar las reglas del juego con{" "}
            <span className="rcx2-accent">ideas que se ven y se sienten</span>
          </h2>

          <p className="rcx2-sub">
            Pintamos fuera de las líneas, escribimos al revés y rompemos paradigmas.
            Creamos marcas y productos audiovisuales digitales que trascienden:{" "}
            <b>publicidad</b>, <b>branding</b> y <b>video</b>.
          </p>
        </header>

        {/* GRID */}
        <div className="rcx2-grid">
          {/* LEFT: cómo trabajan (más real para ellos) */}
          <div className="rcx2-card rcx2-cardLeft">
            <div className="rcx2-cardTitle">
              <span className="rcx2-eyebrow">Cómo trabajamos</span>
              <h3 className="rcx2-h3">El dream team en modo creativo</h3>
              <p className="rcx2-p">
                Las ideas fluyen mejor cuando pasan por varios cerebros. Por eso nuestro proceso mezcla
                estrategia, dirección creativa y producción para que cada pieza tenga intención.
              </p>
            </div>

            <div className="rcx2-flow">
              <div className="rcx2-step">
                <div className="rcx2-stepIco">
                  <Users className="rcx2-ico" />
                </div>
                <div className="rcx2-stepTxt">
                  <div className="rcx2-stepT">Brief + diagnóstico</div>
                  <div className="rcx2-stepD">
                    Entendemos tu marca, tu audiencia y lo que tiene que pasar (percepción / acción).
                  </div>
                </div>
              </div>

              <div className="rcx2-step">
                <div className="rcx2-stepIco">
                  <Palette className="rcx2-ico" />
                </div>
                <div className="rcx2-stepTxt">
                  <div className="rcx2-stepT">Sprint creativo</div>
                  <div className="rcx2-stepD">
                    Conceptos, guiones, estética y dirección de arte. Se define una línea clara.
                  </div>
                </div>
              </div>

              <div className="rcx2-step">
                <div className="rcx2-stepIco">
                  <Clapperboard className="rcx2-ico" />
                </div>
                <div className="rcx2-stepTxt">
                  <div className="rcx2-stepT">Producción + edición</div>
                  <div className="rcx2-stepD">
                    Foto, video, piezas y adaptaciones. Calidad visual + ritmo para destacar.
                  </div>
                </div>
              </div>

              <div className="rcx2-step">
                <div className="rcx2-stepIco">
                  <PlayCircle className="rcx2-ico" />
                </div>
                <div className="rcx2-stepTxt">
                  <div className="rcx2-stepT">Lanzamiento + mejoras</div>
                  <div className="rcx2-stepD">
                    Ajustamos por desempeño y feedback. Lo bueno se escala, lo flojo se cambia.
                  </div>
                </div>
              </div>
            </div>

            {/* CTA (NUEVO DISEÑO) */}
            <div className="rcx2-ctaRow">
              <a href="#contacto" className="rcx2-ctaPrimary">
                Hablemos de tu marca <ArrowRight className="rcx2-icoSm" />
              </a>

              <a href="#proyectos" className="rcx2-ctaSecondary">
                Ver trabajos
              </a>
            </div>

            <div className="rcx2-micro">
              * No vendemos plantillas. Construimos una línea creativa con intención y ejecución.
            </div>
          </div>

          {/* RIGHT: métricas (pero más “portafolio / producción”, no performance) */}
          <div className="rcx2-card rcx2-cardRight">
            <div className="rcx2-statsHead">
              <span className="rcx2-eyebrow">Prueba social</span>
              <h3 className="rcx2-h3">Resultados que se sostienen en piezas reales</h3>
              <p className="rcx2-p">
                Lo nuestro se ve en el feed, en la identidad y en la producción. Aquí un vistazo general:
              </p>
            </div>

            <div className="rcx2-stats">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rcx2-stat rcx2-float"
                  style={{ ["--fd" as any]: `${i * 220}ms` }}
                >
                  <div className="rcx2-val">
                    {counts[i]}
                    {stat.suffix}
                  </div>
                  <div className="rcx2-lab">{stat.label}</div>
                  <div className="rcx2-note">{stat.note}</div>
                </div>
              ))}
            </div>

            <div className="rcx2-miniList">
              <div className="rcx2-miniItem">
                <span className="rcx2-dot" />
                Branding, Identidad y Sistemas Visuales
              </div>
              <div className="rcx2-miniItem">
                <span className="rcx2-dot" />
                Audiovisual: reels, spots, fotografía
              </div>
              <div className="rcx2-miniItem">
                <span className="rcx2-dot" />
                Manejo de medios digitales / contenido
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsClosingSection;
