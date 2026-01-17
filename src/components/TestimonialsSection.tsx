import { useEffect, useRef, useState } from "react";
import { CalendarDays, FileText, TrendingUp } from "lucide-react";

const stats = [
  { label: "Seguidores orgánicos", value: 1500, suffix: "+" },
  { label: "Leads generados", value: 320, suffix: "+" },
  { label: "Alcance mensual", value: 280, suffix: "%" },
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
    <section ref={sectionRef} className="resultsClose-section" id="resultados">
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* TITULO */}
        <h2 className="resultsClose-h2">
          Resultados reales,{" "}
          <span className="resultsClose-accent">no promesas</span>
        </h2>

        <p className="resultsClose-sub">
          Estrategia, creatividad y optimización con KPIs claros. Medimos lo que
          impacta ventas, leads y crecimiento.
        </p>

        {/* STATS */}
        <div className="resultsClose-grid">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="resultsClose-stat resultsClose-float"
              style={{ ["--fd" as any]: `${i * 220}ms` }}
            >
              <div className="resultsClose-value">
                {counts[i]}
                {stat.suffix}
              </div>
              <div className="resultsClose-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* PILLS */}
        <div className="resultsClose-pills">
          <div className="resultsClose-pill">
            <CalendarDays className="resultsClose-pillIcon" />
            <div className="resultsClose-pillText">
              <div className="resultsClose-pillTitle">Reporte semanal</div>
              <div className="resultsClose-pillDesc">
                KPIs, avances y próximos pasos.
              </div>
            </div>
          </div>

          <div className="resultsClose-pill">
            <TrendingUp className="resultsClose-pillIcon" />
            <div className="resultsClose-pillText">
              <div className="resultsClose-pillTitle">Optimización continua</div>
              <div className="resultsClose-pillDesc">
                Iteraciones y mejoras por rendimiento.
              </div>
            </div>
          </div>

          <div className="resultsClose-pill">
            <FileText className="resultsClose-pillIcon" />
            <div className="resultsClose-pillText">
              <div className="resultsClose-pillTitle">Plan 7 días</div>
              <div className="resultsClose-pillDesc">
                Acciones claras para empezar fuerte.
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="resultsClose-ctaWrap">
          <a href="#servicios" className="resultsClose-cta">
            Agenda una llamada y te mostramos un plan de 7 días
          </a>
          <a href="#servicios" className="resultsClose-ctaGhost">
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsClosingSection;
