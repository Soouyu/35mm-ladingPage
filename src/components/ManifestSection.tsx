import {
  Palette,
  Camera,
  Video,
  Megaphone,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import pubBrand from "@/components/assets/publicacion-brach.jpg";
import pubProducto from "@/components/assets/publicaciones-producto.jpg";
import pubGeneral from "@/components/assets/img90.jpg";

const areas = [
  { icon: <Palette className="w-5 h-5" />, t: "Branding", d: "Identidad + mensaje" },
  { icon: <Sparkles className="w-5 h-5" />, t: "Creativa", d: "Ideas + campañas" },
  { icon: <Video className="w-5 h-5" />, t: "Audiovisual", d: "Video que conecta" },
  { icon: <Megaphone className="w-5 h-5" />, t: "Digital", d: "Pauta + performance" },
];

const services = [
  { icon: <Palette className="w-7 h-7" />, title: "Branding & Estrategia", desc: "Propuesta clara, coherencia visual y mensaje que posiciona." },
  { icon: <Sparkles className="w-7 h-7" />, title: "Dirección creativa", desc: "Conceptos y campañas con personalidad, sin clichés." },
  { icon: <Camera className="w-7 h-7" />, title: "Fotografía", desc: "Visuales que elevan percepción y hacen que te elijan." },
  { icon: <Video className="w-7 h-7" />, title: "Producción audiovisual", desc: "Reels/Ads con ritmo: atención → confianza → conversión." },
  { icon: <Megaphone className="w-7 h-7" />, title: "Medios digitales", desc: "Mensajes y pauta orientados a objetivos medibles." },
];

const ManifestSection = () => {
  return (
    <section id="nosotros" className="mf35">
      {/* blobs flotantes */}
      <div className="mf35-blob mf35-blob-a" />
      <div className="mf35-blob mf35-blob-b" />
      <div className="mf35-blob mf35-blob-c" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto mf35-gridTop">
          {/* IZQUIERDA */}
          <div className="mf35-left" data-aos="fade-right" data-aos-duration="900">
            <p className="mf35-badge" data-aos="zoom-in" data-aos-delay="120" data-aos-duration="700">
              <Sparkles className="w-5 h-5" />
              Nuestra forma de crear
            </p>

            <h2 className="mf35-title" data-aos="fade-up" data-aos-delay="160">
              Pensamos con claridad.
              <br />
              <span className="mf35-accent">Creamos con intención.</span>
            </h2>

            <p className="mf35-text" data-aos="fade-up" data-aos-delay="220">
              No hacemos “contenido por contenido”. Construimos marca: concepto, coherencia y emoción.
              Diseñamos campañas y piezas que se ven pro, se sienten distintas y mueven resultados.
            </p>

            {/* ÁREAS */}
            <div className="mf35-panel" data-aos="fade-up" data-aos-delay="280">
              <div className="mf35-panelHead">
                <p className="mf35-panelTitle">Nuestras áreas principales</p>
                <p className="mf35-panelSub">Un equipo completo para que tu marca se vea y venda mejor.</p>
              </div>

              <div className="mf35-areas">
                {areas.map((i, k) => (
                  <div key={k} className="mf35-area" data-aos="fade-up" data-aos-delay={320 + k * 90}>
                    <div className="mf35-areaIcon">{i.icon}</div>
                    <div>
                      <p className="mf35-areaT">{i.t}</p>
                      <p className="mf35-areaD">{i.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FRASE */}
            <div className="mf35-quote" data-aos="fade-up" data-aos-delay="420">
              <p className="mf35-quoteT">Un logo no es una marca.</p>
              <p className="mf35-quoteD">
                La marca es la experiencia: lo que dices, lo que muestras y lo que entregas.
              </p>
            </div>

            {/* MÉTRICAS + CTA */}
            <div className="mf35-bottom" data-aos="fade-up" data-aos-delay="520">
              <div className="mf35-metrics">
                <div className="mf35-metric">
                  <p className="mf35-mNum">5+</p>
                  <p className="mf35-mTxt">Años creando</p>
                </div>
                <div className="mf35-metric">
                  <p className="mf35-mNum">100+</p>
                  <p className="mf35-mTxt">Proyectos</p>
                </div>
                <div className="mf35-metric">
                  <p className="mf35-mNum">∞</p>
                  <p className="mf35-mTxt">Ideas</p>
                </div>
              </div>

              <div className="mf35-ctaBox">
                <div className="mf35-ctaText">
                  <p className="mf35-ctaTitle">¿Quieres una marca coherente?</p>
                  <p className="mf35-ctaSub">Te mostramos un plan claro en una llamada rápida.</p>
                </div>

                <a href="#contacto" className="mf35-cta">
                  Hablemos <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* DERECHA */}
          <div className="mf35-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="120">
            <div className="mf35-gallery">
              <div className="mf35-imgCard" data-aos="zoom-in" data-aos-delay="160">
                <img src={pubBrand} alt="Branding" className="mf35-img" />
              </div>

              <div className="mf35-imgCard" data-aos="zoom-in" data-aos-delay="240">
                <img src={pubProducto} alt="Producto" className="mf35-img" />
              </div>

              <div className="mf35-imgWide" data-aos="zoom-in" data-aos-delay="320">
                <img src={pubGeneral} alt="Campañas" className="mf35-img" />
              </div>
            </div>
          </div>
        </div>

        {/* SERVICIOS */}
        <div className="mf35-services">
          {services.map((s, i) => (
            <div
              key={i}
              className="mf35-sCard"
              data-aos="fade-up"
              data-aos-delay={140 + i * 110}
              data-aos-duration="850"
            >
              <div className="mf35-sIcon">{s.icon}</div>
              <h3 className="mf35-sTitle">{s.title}</h3>
              <p className="mf35-sDesc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestSection;
