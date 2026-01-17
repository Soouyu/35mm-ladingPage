import { TrendingUp, MessageCircle, Sparkles, Camera } from "lucide-react";
import boss from "@/components/assets/decor/jonathan.jpg";

const reasons = [
  {
    icon: Sparkles,
    title: "Ideas frescas con dirección",
    description:
      "Creatividad con criterio: proponemos, filtramos y ejecutamos con intención para que tu marca no solo se vea bien, sino que conecte.",
  },
  {
    icon: TrendingUp,
    title: "Enfoque en impacto real",
    description:
      "Cada pieza, cada campaña y cada decisión apunta a resultados medibles: percepción, posicionamiento y crecimiento.",
  },
  {
    icon: MessageCircle,
    title: "Proceso claro y humano",
    description:
      "Comunicación directa y ordenada. Te mantenemos al tanto sin complicarte con jerga: claridad + ritmo + entregables.",
  },
];

const WhyUsSection = () => {
  return (
    <section
      id="nosotros"
      className="why35-section"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="container mx-auto px-6">
        <div className="why35-grid">
          {/* LEFT */}
          <div className="why35-left" data-aos="fade-right" data-aos-duration="900">
            <span
              className="why35-kicker"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-delay="80"
            >
              Nosotros
            </span>

            <h2
              className="why35-h2"
              data-aos="fade-up"
              data-aos-delay="140"
              data-aos-duration="900"
            >
              35mm.visual: creatividad{" "}
              <span className="why35-accentText">que se siente</span>
            </h2>

            <p
              className="why35-sub"
              data-aos="fade-up"
              data-aos-delay="220"
              data-aos-duration="900"
            >
              Pintamos fuera de las líneas, escribimos al revés y rompemos paradigmas.
              Somos una agencia publicitaria y productora audiovisual que convierte ideas
              en experiencias memorables.
            </p>

            <div className="why35-list">
              {reasons.map((reason, idx) => (
                <div
                  key={reason.title}
                  className="why35-item"
                  data-aos="fade-up"
                  data-aos-delay={260 + idx * 120}
                  data-aos-duration="900"
                >
                  <div className="why35-ico">
                    <reason.icon className="why35-icoSvg" />
                  </div>
                  <div>
                    <h3 className="why35-itemTitle">{reason.title}</h3>
                    <p className="why35-itemDesc">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="why35-right" data-aos="fade-left" data-aos-duration="900" data-aos-delay="120">
            <div className="why35-heroCard" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="180">
              <span className="why35-blob why35-blobA" />
              <span className="why35-blob why35-blobB" />

              <div className="why35-badge" data-aos="zoom-in" data-aos-delay="240" data-aos-duration="700">
                <Camera className="why35-badgeIco" />
                Agencia & Productora
              </div>

              <h3 className="why35-ceoName" data-aos="fade-up" data-aos-delay="300">
                MSc. Jonathan Basurto López
              </h3>
              <p className="why35-ceoRole" data-aos="fade-up" data-aos-delay="360">
                Director General
              </p>

              {/* FOTO + TEXTO */}
              <div className="why35-profileRow">
                <div className="why35-photoCard" data-aos="zoom-in" data-aos-delay="420" data-aos-duration="800">
                  <img
                    src={boss}
                    alt="MSc. Jonathan Basurto López"
                    className="why35-photoImg"
                  />
                </div>

                <p className="why35-ceoBio" data-aos="fade-up" data-aos-delay="480" data-aos-duration="900">
                  Jonathan, Gerente General y Director Creativo de 35mm, ha liderado la agencia
                  desde sus inicios hace 14 años. Con una visión enfocada en la innovación y la
                  creatividad, ha construido un equipo sólido que transforma ideas en
                  experiencias memorables para cada cliente.
                </p>
              </div>

              <blockquote className="why35-quote" data-aos="fade-up" data-aos-delay="560" data-aos-duration="900">
                <p>
                  “El talento y capacidad de trabajo de Jonathan son algo fuera de lo común.
                  Serio, profesional y un excelente ser humano… Enfocado siempre en objetivos
                  y exquisito en las formas.”
                </p>
                <footer>
                  <span className="why35-quoteName">Silvia Sivera Bello</span>
                  <span className="why35-quoteMeta">
                    Subdirectora Programas Emergentes / Directora académica (UOC) · Barcelona, España
                  </span>
                </footer>
              </blockquote>

              <div className="why35-stats" data-aos="fade-up" data-aos-delay="640" data-aos-duration="900">
                <div className="why35-stat">
                  <p className="why35-statTop">14 años</p>
                  <p className="why35-statBot">liderando la agencia</p>
                </div>
                <div className="why35-stat">
                  <p className="why35-statTop">Creativo</p>
                  <p className="why35-statBot">innovación + ejecución</p>
                </div>
                <div className="why35-stat">
                  <p className="why35-statTop">Equipo</p>
                  <p className="why35-statBot">sólido y multidisciplinar</p>
                </div>
              </div>
            </div>

            <div className="why35-sideGlow" data-aos="fade-up" data-aos-delay="260" data-aos-duration="900" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
