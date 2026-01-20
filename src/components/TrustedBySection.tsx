// TrustedBySection.tsx
import logo1 from "@/components/assets/1.png";
import logo2 from "@/components/assets/2.png";
import logo3 from "@/components/assets/3.png";
import logo4 from "@/components/assets/4.png";
import logo5 from "@/components/assets/5.png";
import logo6 from "@/components/assets/6.png";
import logo7 from "@/components/assets/7.png";
import logo8 from "@/components/assets/8.png";
import logo9 from "@/components/assets/9.png";
import logo10 from "@/components/assets/10.png";

const TrustedBySection = () => {
  const logos = [
    { src: logo1, alt: "Cliente 1" },
    { src: logo2, alt: "Cliente 2" },
    { src: logo3, alt: "Cliente 3" },
    { src: logo4, alt: "Cliente 4" },
    { src: logo5, alt: "Cliente 5" },
    { src: logo6, alt: "Cliente 6" },
    { src: logo7, alt: "Cliente 7" },
    { src: logo8, alt: "Cliente 8" },
    { src: logo9, alt: "Cliente 9" },
    { src: logo10, alt: "Cliente 10" },
  ];

  const uniqueLogos = logos.filter(
    (item, index, arr) => arr.findIndex((x) => x.src === item.src) === index
  );

  // ✅ NO TOCAR: loop para animación infinita
  const loopLogos = [...uniqueLogos, ...uniqueLogos];

  return (
   <section
  id="experiencia"
  className="trusted35-sec"
  data-aos="fade-up"
  data-aos-duration="900"
>
      {/* ✅ Fondo premium (NO afecta el carrusel) */}
      <div className="trusted35-bgPro" aria-hidden="true" />

      <div className="container mx-auto px-6">
        <div className="trusted35-headPro">
          <p
            className="trusted35-pillPro"
            data-aos="zoom-in"
            data-aos-delay="120"
            data-aos-duration="700"
          >
            Confianza real
          </p>

          <h3
            className="trusted35-titlePro"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            Marcas que apuestan por ideas valientes
          </h3>

          <p
            className="trusted35-subPro"
            data-aos="fade-up"
            data-aos-delay="280"
            data-aos-duration="900"
          >
            Cada logo aquí representa un reto que convertimos en resultados: identidad,
            campañas y contenido que se siente profesional desde el primer contacto.
          </p>
        </div>
      </div>

      {/* ✅ NO TOCAR: carrusel */}
      <div className="trusted35-wrap mt-10" data-aos="fade-up" data-aos-delay="360" data-aos-duration="900">
        <div className="trusted35-marquee trusted35-fade" aria-label="Logos de clientes">
          <div className="trusted35-track" data-aos="fade-up" data-aos-delay="420" data-aos-duration="900">
            {loopLogos.map((logo, i) => (
              <div key={`${logo.src}-${i}`} className="trusted35-item" title={logo.alt}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="trusted35-logo"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        <p
          className="trusted35-notePro"
          data-aos="fade-up"
          data-aos-delay="520"
          data-aos-duration="900"
        >
          * Logos mostrados con fines de portafolio / referencia.
        </p>
      </div>
    </section>
  );
};

export default TrustedBySection;
