import { useEffect, useMemo, useRef, useState } from "react";
import { Sparkles, ArrowRight, Users, Palette, Clapperboard } from "lucide-react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  note: string;
};

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

function useCountUp(targets: number[], start: boolean, durationMs = 1100) {
  const [counts, setCounts] = useState<number[]>(() => targets.map(() => 0));

  useEffect(() => {
    if (!start) return;

    const startTs = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = clamp01((now - startTs) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic

      setCounts(targets.map((v) => Math.round(v * eased)));

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, durationMs, targets]);

  return counts;
}

export default function ResultsClosingSection() {
  const stats: Stat[] = useMemo(
    () => [
      { label: "Proyectos", value: 60, suffix: "+", note: "branding + audiovisual + digital" },
      { label: "Piezas", value: 450, suffix: "+", note: "reels, posts, foto producto, ads" },
      { label: "Sistemas de marca", value: 18, suffix: "+", note: "identidad + lineamientos + piezas" },
    ],
    []
  );

  // ✅ ESTE es el target del observer: SOLO el bloque donde están los números
  const statsBlockRef = useRef<HTMLDivElement | null>(null);

  const [start, setStart] = useState(false);
  const startedRef = useRef(false);

  const targets = useMemo(() => stats.map((s) => s.value), [stats]);
  const counts = useCountUp(targets, start, 1150);

  useEffect(() => {
    const el = statsBlockRef.current;
    if (!el) return;

    const prefersReduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    // ✅ Si reduce motion: no animamos, pero igual SOLO cuando se ve
    const startOnce = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      setStart(true);
    };

    const isVisibleNow = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;

      // ✅ condición: que al menos un pedazo del bloque esté visible
      // (sirve si llegas por anchor o si la pantalla es pequeña)
      return rect.top < vh * 0.85 && rect.bottom > vh * 0.15;
    };

    // 1) Observer principal (lo mejor)
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) startOnce();
      },
      {
        threshold: 0.08,            // ✅ fácil de disparar en móvil
        rootMargin: "0px 0px -10% 0px", // ✅ obliga a que realmente entre al viewport (no antes)
      }
    );

    io.observe(el);

    // 2) Fallback (por si iOS/anchor/layout no dispara al momento)
    const fallbackCheck = () => {
      if (startedRef.current) return;
      if (isVisibleNow()) startOnce();
    };

    // ✅ chequeo inmediato (sirve cuando aterrizas en el anchor)
    // y después de layout (fonts/images)
    requestAnimationFrame(fallbackCheck);
    window.addEventListener("scroll", fallbackCheck, { passive: true });
    window.addEventListener("resize", fallbackCheck);

    // Si reduce motion, igual respetamos "solo cuando se ve"
    if (prefersReduce) {
      // solo forzamos si ya se ve
      requestAnimationFrame(fallbackCheck);
    }

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", fallbackCheck);
      window.removeEventListener("resize", fallbackCheck);
    };
  }, []);

  return (
    <section className="rcx3" id="resultados">
      {/* BG */}
      <div className="rcx3-bg" aria-hidden="true">
        <div className="rcx3-blob rcx3-blob-a" />
        <div className="rcx3-blob rcx3-blob-b" />
        <div className="rcx3-vignette" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* HEAD */}
        <header className="rcx3-head">
          <span className="rcx3-pill">
            <Sparkles className="rcx3-icoSm" />
            Cierre — Cómo trabajamos
          </span>

          <h2 className="rcx3-h2">
            Creatividad con{" "}
            <span className="rcx3-accent">criterio y ejecución</span>
          </h2>

          <p className="rcx3-sub">
            Branding, publicidad y video. Idea clara → pieza real → impacto visible.
          </p>
        </header>

        {/* GRID */}
        <div className="rcx3-grid">
          {/* LEFT */}
          <div className="rcx3-card">
            <span className="rcx3-eyebrow">Proceso</span>
            <h3 className="rcx3-h3">Directo y sin vueltas</h3>
            <p className="rcx3-p">
              Alineamos objetivo, creamos una línea y producimos con consistencia.
            </p>

            <div className="rcx3-steps">
              <div className="rcx3-step">
                <div className="rcx3-stepIco">
                  <Users className="rcx3-ico" />
                </div>
                <div>
                  <div className="rcx3-stepT">Brief</div>
                  <div className="rcx3-stepD">Qué buscas lograr y para quién.</div>
                </div>
              </div>

              <div className="rcx3-step">
                <div className="rcx3-stepIco">
                  <Palette className="rcx3-ico" />
                </div>
                <div>
                  <div className="rcx3-stepT">Concepto</div>
                  <div className="rcx3-stepD">Idea, guion y estética clara.</div>
                </div>
              </div>

              <div className="rcx3-step">
                <div className="rcx3-stepIco">
                  <Clapperboard className="rcx3-ico" />
                </div>
                <div>
                  <div className="rcx3-stepT">Producción</div>
                  <div className="rcx3-stepD">Piezas listas para publicar.</div>
                </div>
              </div>
            </div>

            <div className="rcx3-ctaRow">
              <a href="#contacto" className="rcx3-ctaPrimary">
                Hablemos <ArrowRight className="rcx3-icoSm" />
              </a>
              <a href="#proyectos" className="rcx3-ctaSecondary">
                Ver trabajos
              </a>
            </div>

            <div className="rcx3-micro">
              * Si no se entiende en 3 segundos, lo simplificamos.
            </div>
          </div>

          {/* RIGHT — aquí está el ref: SOLO cuando esto se ve arrancan */}
          <div className="rcx3-card" ref={statsBlockRef}>
            <span className="rcx3-eyebrow">Prueba social</span>
            <h3 className="rcx3-h3">Trabajo en volumen real</h3>
            <p className="rcx3-p">
              Los números cuentan cuando hay consistencia.
            </p>

            <div className="rcx3-stats">
              {stats.map((s, i) => (
                <div className="rcx3-stat" key={s.label}>
                  <div className="rcx3-val">
                    {counts[i]}
                    {s.suffix || ""}
                  </div>
                  <div className="rcx3-lab">{s.label}</div>
                  <div className="rcx3-note">{s.note}</div>
                </div>
              ))}
            </div>

            <div className="rcx3-mini">
              <div className="rcx3-miniItem"><span className="rcx3-dot" /> Identidad + sistema visual</div>
              <div className="rcx3-miniItem"><span className="rcx3-dot" /> Audiovisual para redes</div>
              <div className="rcx3-miniItem"><span className="rcx3-dot" /> Contenido y campañas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
