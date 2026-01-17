import { useEffect, useRef } from "react";
import {
  Share2,
  Target,
  Palette,
  BarChart3,
  Video,
  LayoutTemplate,
} from "lucide-react";

import wavePng from "@/components/assets/decor/wave1.png";

const services = [
  {
    icon: Palette,
    title: "Branding que se siente",
    description:
      "Construimos marcas con identidad real: no solo un logo, sino un sistema completo con personalidad, coherencia y propósito. Marcas que se reconocen, se recuerdan y se sienten.",
    bullets: ["Identidad visual", "Manual de marca", "Naming & storytelling"],
  },
  {
    icon: Video,
    title: "Producción Audiovisual",
    description:
      "Creamos contenido audiovisual que vende. Reels, spots y piezas con dirección creativa y edición estratégica para destacar en feeds saturados.",
    bullets: ["Reels & Ads", "Fotografía de producto", "Guiones & edición"],
  },
  {
    icon: Share2,
    title: "Contenido & Redes",
    description:
      "Planificamos y creamos contenido que conecta con tu audiencia. No es postear por postear: es estrategia, creatividad y consistencia.",
    bullets: ["Calendario de contenido", "Copy creativo", "Gestión & comunidad"],
  },
  {
    icon: Target,
    title: "Publicidad que Convierte",
    description:
      "Campañas diseñadas para resultados, no para likes. Construimos embudos sólidos en Meta, Google y TikTok optimizando cada paso.",
    bullets: ["Embudo & pixel", "Remarketing", "Optimización semanal"],
  },
  {
    icon: LayoutTemplate,
    title: "Diseño & Web",
    description:
      "Diseñamos piezas y sitios que se ven premium y convierten. Cada decisión visual tiene intención estratégica.",
    bullets: ["Landing pages", "Creativos para ads", "UX visual"],
  },
  {
    icon: BarChart3,
    title: "Medición & Growth",
    description:
      "Tomamos decisiones basadas en datos reales. Medimos, analizamos y escalamos lo que funciona sin adivinar.",
    bullets: ["Dashboards", "KPIs reales", "Mejora continua"],
  },
];

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const prefersReduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduce) return;

    const onScroll = () => {
      if (rafRef.current) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;

        const t = clamp01(1 - rect.top / vh);

        const y1 = t * 80;
        const y2 = t * 38;
        const rot = (t - 0.5) * 1.2;

        el.style.setProperty("--waveY", `${y1}px`);
        el.style.setProperty("--waveY2", `${y2}px`);
        el.style.setProperty("--waveR", `${rot}deg`);
        el.style.setProperty("--waveO", `${0.55 + t * 0.25}`);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="servicios" className="svc35-section" ref={sectionRef}>
      {/* PARALLAX WAVES */}
      <div
        className="svc35-parallax"
        aria-hidden="true"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-delay="80"
      >
        <img className="svc35-wave svc35-waveMain" src={wavePng} alt="" />
        <img className="svc35-wave svc35-waveGhost" src={wavePng} alt="" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 svc35-head">
          <span
            className="svc35-kicker"
            data-aos="zoom-in"
            data-aos-duration="700"
          >
            Servicios
          </span>

          <h2
            className="svc35-h2"
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="900"
          >
            Vamos a cambiar las{" "}
            <span className="gradient-text">reglas del juego</span>
          </h2>

          <p
            className="svc35-sub svc35-subGlass"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            Pintamos fuera de las líneas, escribimos al revés y rompemos paradigmas.
            Creamos marcas y productos audiovisuales digitales que trascienden y generan
            resultados reales.
          </p>
        </div>

        <div className="svc35-grid">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="svc35-card group"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={120 + index * 120}
            >
              <div className="svc35-iconWrap">
                <service.icon className="svc35-icon" />
              </div>

              <div className="svc35-textGlass">
                <h3 className="svc35-title">{service.title}</h3>
                <p className="svc35-desc">{service.description}</p>

                <ul className="svc35-list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="svc35-li">
                      <span className="svc35-dot" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="svc35-divider" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
