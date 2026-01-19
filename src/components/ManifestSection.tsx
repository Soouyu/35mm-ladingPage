import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";

import pubBrand from "@/components/assets/publicacion-brach.jpg";
import pubProducto from "@/components/assets/publicaciones-producto.jpg";
import pubGeneral from "@/components/assets/img90.jpg";
import ideas from "@/components/assets/decor/complet-seccion.png";
import fonder from "@/components/assets/decor/fonder.png";

type Project = {
  key: string;
  title: string;
  short: string;
  description: string[];
  service: string;
  client: string;
  year: string;
  tags: string[];
  image: string;
  imageAlt: string;

  overlayKicker: string;
  overlayTitle: string;
  overlayDesc: string;

  focus: {
    problem: string;
    approach: string;
    result: string;
  };
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function useSwipe(onLeft: () => void, onRight: () => void) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    startX.current = t.clientX;
    startY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current == null || startY.current == null) return;

    const t = e.changedTouches[0];
    const dx = t.clientX - startX.current;
    const dy = t.clientY - startY.current;

    // evita swipe vertical
    if (Math.abs(dy) > Math.abs(dx)) {
      startX.current = null;
      startY.current = null;
      return;
    }

    if (dx < -40) onLeft();
    if (dx > 40) onRight();

    startX.current = null;
    startY.current = null;
  };

  return { onTouchStart, onTouchEnd };
}

function Lightbox({
  open,
  project,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  project: Project | null;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    // ✅ scroll lock real
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    const prevTouch = root.style.touchAction;

    root.style.overflow = "hidden";
    root.style.touchAction = "none";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      root.style.overflow = prevOverflow;
      root.style.touchAction = prevTouch;
    };
  }, [open, onClose, onPrev, onNext]);

  if (!open || !project) return null;

  return (
    <div className="pjx-lb" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="pjx-lbBackdrop" />
      <div className="pjx-lbPanel" onClick={(e) => e.stopPropagation()}>
        <button className="pjx-lbClose" onClick={onClose} aria-label="Cerrar">
          <X className="pjx-ico" />
        </button>

        <div className="pjx-lbTop">
          <div className="pjx-lbTitle">
            <span className="pjx-lbK">{project.overlayKicker}</span>
            <h4 className="pjx-lbH">{project.title}</h4>
            <p className="pjx-lbP">{project.overlayDesc}</p>
          </div>

          <div className="pjx-lbMeta">
            <span className="pjx-chip">Servicio: {project.service}</span>
            <span className="pjx-chip">Cliente: {project.client}</span>
            <span className="pjx-chip">Año: {project.year}</span>
            <span className="pjx-chip">
              {index + 1}/{total}
            </span>
          </div>
        </div>

        <div className="pjx-lbMedia">
          <button className="pjx-lbNav pjx-lbNavL" onClick={onPrev} aria-label="Anterior">
            <ChevronLeft className="pjx-ico" />
          </button>

          <img className="pjx-lbImg" src={project.image} alt={project.imageAlt} />

          <button className="pjx-lbNav pjx-lbNavR" onClick={onNext} aria-label="Siguiente">
            <ChevronRight className="pjx-ico" />
          </button>
        </div>

        <div className="pjx-lbFooter">
          <a className="pjx-lbCta" href="#contacto">
            Quiero un enfoque así <ArrowRight className="pjx-icoSm" />
          </a>
          <span className="pjx-lbHint">← → cambia · Esc cierra</span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsShowcaseSection() {
  const projects: Project[] = useMemo(
    () => [
      {
        key: "banch",
        title: "Banch Grill",
        short: "Branding para una Dark Kitchen con identidad fuerte y lista para escalar.",
        description: [
          "Creamos una marca con personalidad y un sistema visual consistente, fácil de replicar en piezas digitales y físicas.",
          "El objetivo: que el concepto se entienda al instante y se recuerde sin esfuerzo.",
        ],
        service: "Branding",
        client: "Pablo Jara",
        year: "2022",
        tags: ["Identidad + sistema", "Claridad + recordación", "Digital + piezas"],
        image: pubBrand,
        imageAlt: "Proyecto Banch Grill",
        overlayKicker: "PROYECTO",
        overlayTitle: "Banch Grill",
        overlayDesc: "Identidad lista para crecer. Marca clara, memorable y replicable.",
        focus: {
          problem:
            "La marca necesitaba verse sólida y reconocible desde el primer vistazo, sin perder consistencia en redes y piezas físicas.",
          approach:
            "Diseñamos un sistema visual completo (logo, tipografía, reglas y composiciones) listo para replicar en menús, posts y empaque.",
          result:
            "Mayor recordación y coherencia: la marca se entiende rápido, se reconoce fácil y se mantiene consistente en todo.",
        },
      },
      {
        key: "redical",
        title: "Redical",
        short: "Marca de salud y bienestar con cromática viva y coherente.",
        description: [
          "Atención integral en psicología y nutrición. Construimos una identidad con un look positivo y confiable.",
          "Resultado: una marca profesional, cercana y lista para comunicar en redes sin perder consistencia.",
        ],
        service: "Branding",
        client: "Redical",
        year: "2023",
        tags: ["Salud & bienestar", "Sistema visual", "Redes + piezas"],
        image: pubProducto,
        imageAlt: "Proyecto Redical",
        overlayKicker: "PROYECTO",
        overlayTitle: "Redical",
        overlayDesc: "Cromática alineada a bienestar. Confianza desde el primer vistazo.",
        focus: {
          problem:
            "El servicio era bueno, pero la marca no transmitía confianza ni coherencia visual en los puntos de contacto digitales.",
          approach:
            "Creamos una identidad positiva y profesional: paleta, tipografías y sistema de piezas para redes con reglas claras.",
          result:
            "Comunicación más confiable y consistente: la marca se percibe más profesional y lista para crecer en digital.",
        },
      },
      {
        key: "pueblita",
        title: "Restaurant Pueblita",
        short: "Comunicación digital con creatividad constante y coherencia visual.",
        description: [
          "Uno de nuestros clientes más fieles. Pueblita nos confía toda su comunicación digital.",
          "Creamos piezas con identidad y consistencia para que la marca se sienta viva en cada publicación.",
        ],
        service: "Digital",
        client: "Restaurant Pueblita",
        year: "2023",
        tags: ["Contenido + diseño", "Consistencia", "Comunicación digital"],
        image: pubGeneral,
        imageAlt: "Proyecto Restaurant Pueblita",
        overlayKicker: "PROYECTO",
        overlayTitle: "Restaurant Pueblita",
        overlayDesc: "Creatividad + consistencia. Una marca activa, reconocible y cercana.",
        focus: {
          problem:
            "La marca necesitaba mantener presencia sin caer en publicaciones genéricas o inconsistentes que se sientan “una más”.",
          approach:
            "Definimos un lenguaje visual y una línea de contenido: piezas, ritmo, variaciones y reglas para mantener coherencia.",
          result:
            "Una marca más viva y reconocible: publicaciones con identidad, consistencia y una comunicación más cercana.",
        },
      },
      {
        key: "nata",
        title: "El Café de la Ñata",
        short: "Rebranding con esencia dulce y una identidad más clara.",
        description: [
          "Una marca que transmite dulzura. Nos encargaron el rebranding para que su identidad se sienta tan deliciosa como sus productos.",
          "Ajustamos forma, tono y coherencia para que el logo y sus piezas cuenten la misma historia.",
        ],
        service: "Rebranding",
        client: "El Café de la Ñata",
        year: "2023",
        tags: ["Rebranding", "Identidad", "Coherencia"],
        image: ideas,
        imageAlt: "Proyecto El Café de la Ñata",
        overlayKicker: "PROYECTO",
        overlayTitle: "El Café de la Ñata",
        overlayDesc: "Rebranding que conserva la esencia y mejora claridad + estilo.",
        focus: {
          problem:
            "La esencia era buena, pero la identidad no se veía clara ni consistente: el logo y las piezas no contaban la misma historia.",
          approach:
            "Reordenamos forma, tono y coherencia: refinamos la identidad para que sea más legible, replicable y coherente en digital.",
          result:
            "Una marca más limpia y consistente: conserva la esencia, pero comunica mejor y se sostiene en sus piezas.",
        },
      },
      {
        key: "mihoracero",
        title: "Mi Hora Cero",
        short: "Campaña audiovisual con enfoque social y narrativa sensible.",
        description: [
          "Historias de diferentes personas, pero con situaciones muy similares.",
          "En “Mi Hora Cero” narramos las circunstancias de 5 personajes para concientizar sobre un tema delicado pero importante.",
        ],
        service: "Campaña",
        client: "Proyecto Social",
        year: "2024",
        tags: ["Audiovisual", "Narrativa", "Concientización"],
        image: fonder,
        imageAlt: "Proyecto Mi Hora Cero",
        overlayKicker: "PROYECTO",
        overlayTitle: "Mi Hora Cero",
        overlayDesc: "Narrativa con propósito. Historias que invitan a mirar más profundo.",
        focus: {
          problem:
            "El tema era delicado: había que generar conciencia sin caer en lo obvio, manteniendo respeto y claridad narrativa.",
          approach:
            "Construimos una narrativa sensible: guion, ritmo y tono visual para que el mensaje se entienda y se sienta real.",
          result:
            "Una campaña que conecta: historias humanas, mensaje claro y una ejecución que invita a reflexionar.",
        },
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [lbOpen, setLbOpen] = useState(false);
  const active = projects[activeIndex];

  const goPrev = () => setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
  const goNext = () => setActiveIndex((i) => (i + 1) % projects.length);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lbOpen) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "Enter") setLbOpen(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lbOpen]);

  const swipe = useSwipe(goNext, goPrev);

  return (
    <section id="proyectos" className="pjx">
      <div className="pjx-bg" aria-hidden="true">
        <div className="pjx-blob pjx-blob-a" />
        <div className="pjx-blob pjx-blob-b" />
        <div className="pjx-blob pjx-blob-c" />
        <div className="pjx-gridGlow" />
        <div className="pjx-vignette" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <header className="pjx-head">
          <span className="pjx-pill">
            <Sparkles className="pjx-icoSm" />
            Proyectos
          </span>

          <h2 className="pjx-h2">
            Proyectos en los que <span className="pjx-accent">hemos triunfado</span>
          </h2>

          <p className="pjx-sub">
            Cambia de proyecto con los thumbnails, con ← → o con los botones sobre la imagen.
          </p>
        </header>

        <div className="pjx-shell">
          {/* ✅ móvil: imagen primero */}
          <main className="pjx-right">
            <div className="pjx-mediaCard">
              <div className="pjx-media" role="group" aria-label="Vista del proyecto" {...swipe}>
                <img className="pjx-img" src={active.image} alt={active.imageAlt} loading="lazy" />
                <div className="pjx-overlay" />

                <div className="pjx-overlayContent">
                  <span className="pjx-kicker">{active.overlayKicker}</span>
                  <h4 className="pjx-ovTitle">{active.overlayTitle}</h4>
                  <p className="pjx-ovDesc">{active.overlayDesc}</p>

                  <div className="pjx-ovBadges">
                    <span className="pjx-chip">Servicio: {active.service}</span>
                    <span className="pjx-chip">Cliente: {active.client}</span>
                    <span className="pjx-chip">Año: {active.year}</span>
                  </div>
                </div>

                <div className="pjx-controls" aria-label="Controles">
                  <button type="button" className="pjx-btn" onClick={goPrev} aria-label="Proyecto anterior">
                    <ChevronLeft className="pjx-ico" />
                  </button>

                  <div className="pjx-progress" aria-label="Progreso">
                    <span className="pjx-count">
                      {clamp(activeIndex + 1, 1, projects.length)} / {projects.length}
                    </span>
                    <div className="pjx-dots" aria-hidden="true">
                      {projects.map((p, i) => (
                        <span key={p.key} className={`pjx-dot ${i === activeIndex ? "is-on" : ""}`} />
                      ))}
                    </div>
                  </div>

                  <button type="button" className="pjx-btn pjx-btnWide" onClick={() => setLbOpen(true)} aria-label="Expandir imagen">
                    <Expand className="pjx-ico" />
                    <span className="pjx-btnTxt">Expandir</span>
                  </button>

                  <button type="button" className="pjx-btn" onClick={goNext} aria-label="Proyecto siguiente">
                    <ChevronRight className="pjx-ico" />
                  </button>
                </div>
              </div>

              <div className="pjx-thumbs" role="tablist" aria-label="Seleccionar proyecto">
                {projects.map((p, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      className={`pjx-thumb ${isActive ? "is-active" : ""}`}
                      onClick={() => setActiveIndex(idx)}
                      role="tab"
                      aria-selected={isActive}
                      title={p.title}
                    >
                      <img className="pjx-thumbImg" src={p.image} alt={p.imageAlt} loading="lazy" />
                      <span className="pjx-thumbLabel">
                        <span className="pjx-thumbT">{p.title}</span>
                        <span className="pjx-thumbS">{p.service}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <p className="pjx-footNote">
              Si te gustó un proyecto, lo adaptamos a tu marca (sin copiar: con tu identidad).
            </p>
          </main>

          <aside className="pjx-left">
            <div className="pjx-card">
              <div className="pjx-cardTop">
                <div>
                  <h3 className="pjx-title">{active.title}</h3>
                  <p className="pjx-short">{active.short}</p>
                </div>

                <div className="pjx-miniStats" aria-label="Resumen del proyecto">
                  <div className="pjx-stat">
                    <span className="pjx-statL">Servicio</span>
                    <span className="pjx-statV">{active.service}</span>
                  </div>
                  <div className="pjx-stat">
                    <span className="pjx-statL">Cliente</span>
                    <span className="pjx-statV">{active.client}</span>
                  </div>
                  <div className="pjx-stat">
                    <span className="pjx-statL">Año</span>
                    <span className="pjx-statV">{active.year}</span>
                  </div>
                </div>
              </div>

              <div className="pjx-paras">
                {active.description.map((t, i) => (
                  <p className="pjx-p" key={i}>
                    {t}
                  </p>
                ))}
              </div>

              <div className="pjx-tags" aria-label="Tags del proyecto">
                {active.tags.map((t) => (
                  <span key={`${active.key}-${t}`} className="pjx-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="pjx-case">
                <p className="pjx-caseT">El enfoque detrás del proyecto</p>

                <div className="pjx-caseGrid">
                  <div className="pjx-caseItem">
                    <span className="pjx-caseL">Problema</span>
                    <p className="pjx-caseV">{active.focus.problem}</p>
                  </div>
                  <div className="pjx-caseItem">
                    <span className="pjx-caseL">Enfoque</span>
                    <p className="pjx-caseV">{active.focus.approach}</p>
                  </div>
                  <div className="pjx-caseItem">
                    <span className="pjx-caseL">Resultado</span>
                    <p className="pjx-caseV">{active.focus.result}</p>
                  </div>
                </div>
              </div>

              <div className="pjx-actions">
                <a href="#contacto" className="pjx-cta">
                  Quiero un enfoque así <ArrowRight className="pjx-icoSm" />
                </a>
                <a href="#servicios" className="pjx-ghost">
                  Ver servicios
                </a>
              </div>

              <div className="pjx-tip">
                Tip: abre vista completa con el botón <b>Expandir</b> o presiona <b>Enter</b>.
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Lightbox
        open={lbOpen}
        project={active}
        index={activeIndex}
        total={projects.length}
        onClose={() => setLbOpen(false)}
        onPrev={goPrev}
        onNext={goNext}
      />
    </section>
  );
}
