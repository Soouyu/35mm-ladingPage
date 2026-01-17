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

  const loopLogos = [...uniqueLogos, ...uniqueLogos];

  return (
    <section
      className="relative py-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="absolute inset-0 -z-10 about35-bg" />

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/10 border border-black/10 text-black/80 backdrop-blur text-sm font-medium"
            data-aos="zoom-in"
            data-aos-delay="120"
            data-aos-duration="700"
          >
            Confianza real
          </p>

          <h3
            className="mt-5 text-2xl md:text-3xl font-extrabold text-[#0b1412]"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="900"
          >
            Empresas que confían en nosotros
          </h3>

          <p
            className="mt-3 text-[#0b1412]/70 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="280"
            data-aos-duration="900"
          >
            Marcas que nos han permitido crear, romper paradigmas y construir experiencias
            que se sienten.
          </p>
        </div>
      </div>

      <div
        className="trusted35-wrap mt-10"
        data-aos="fade-up"
        data-aos-delay="360"
        data-aos-duration="900"
      >
        <div className="trusted35-marquee trusted35-fade" aria-label="Logos de clientes">
          <div
            className="trusted35-track"
            data-aos="fade-up"
            data-aos-delay="420"
            data-aos-duration="900"
          >
            {loopLogos.map((logo, i) => (
              <div
                key={`${logo.src}-${i}`}
                className="trusted35-item"
                title={logo.alt}
              >
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
          className="mt-4 text-xs text-[#0b1412]/55 text-center px-6"
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
