// HeroSection.tsx
import { ArrowRight, BarChart3, Target, Zap } from "lucide-react";

const HeroSection = () => {
  // Datos “reales” (puedes cambiar % aquí)
  const growthRows = [
    { label: "Crecimiento", value: "+10%", bar: "hero35-bar-10" },
    { label: "Nuevos clientes", value: "+20%", bar: "hero35-bar-20" },
    { label: "Retención", value: "+15%", bar: "hero35-bar-15" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 hero-in hero-delay-0">
        <div className="hero35-base absolute inset-0" />
        <div className="hero35-mesh absolute inset-0" />
        <div className="hero35-vignette absolute inset-0" />
      </div>

      {/* CONTENT */}
      <div className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-6 py-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* LEFT */}
              <div className="lg:col-span-7 text-center lg:text-left hero-in hero-delay-1">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] text-white">
                  Crecimiento{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      medible
                    </span>
                    <span className="hero35-underline absolute left-0 right-0 h-[4px] rounded-full opacity-70" />
                  </span>{" "}
                  para tu negocio.
                </h1>

                <p className="mt-4 text-base md:text-lg text-white/75 max-w-2xl mx-auto lg:mx-0">
                  Estrategia + Creatividad + Performance. Campañas que convierten
                  con métricas claras.
                </p>

                <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                  {[
                    { icon: <Target size={16} />, text: "Embudo completo" },
                    { icon: <BarChart3 size={16} />, text: "KPIs claros" },
                    { icon: <Zap size={16} />, text: "Iteración rápida" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/80"
                    >
                      {item.icon}
                      {item.text}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                 <a
                    href="#contacto"
                    className="hero35-cta hero35-btn-primary rounded-2xl px-7 py-4 font-semibold text-white shadow-lg border border-white/10 transition"
                  >
                    <span className="inline-flex items-center gap-2">
                      Agenda una llamada <ArrowRight className="w-5 h-5 hero35-arrow" />
                    </span>
                  </a>
                 <a
                    href="#servicios"
                    className="hero35-btn-ghost rounded-2xl px-7 py-4 font-semibold text-white/85 bg-white/5 border border-white/10 transition"
                  >
                    Ver servicios
                  </a>
                </div>
              </div>

              {/* RIGHT CARD (dashboard) */}
              <div className="lg:col-span-5 hero-in hero-delay-3">
                <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
                  <p className="text-white/70 text-sm">Datos reales de avance</p>
                  <p className="text-white font-semibold text-lg">
                    Monitoreamos tu crecimiento empresarial
                  </p>

                  <div className="mt-6 space-y-4">
                    {growthRows.map((row, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs text-white/70">
                          <span>{row.label}</span>
                          <span className="text-white/80 font-semibold">
                            {row.value}
                          </span>
                        </div>

                        {/* Track 100% */}
                        <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                          {/* Fill animado por % */}
                          <div
                            className={`hero35-barFill ${row.bar} h-full rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs text-white/60">Lo que obtienes</p>
                    <p className="text-sm text-white/85 font-semibold">
                      Reportes claros + optimización semanal + decisiones con datos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM MINI CARDS */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 hero-in hero-delay-2">
              {[
                {
                  icon: "🎯",
                  title: "Contenido que vende",
                  desc: "Creativos + copies con intención y test A/B.",
                },
                {
                  icon: "📊",
                  title: "Ads con control",
                  desc: "Presupuesto optimizado y escalado inteligente.",
                },
                {
                  icon: "✅",
                  title: "Reportes simples",
                  desc: "Qué pasó, por qué y qué sigue.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl text-center"
                >
                  <div
                    className="text-xl mb-1 hero35-float"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  >
                    {card.icon}
                  </div>

                  <p className="text-white font-semibold text-sm">{card.title}</p>
                  <p className="text-xs text-white/70 mt-1">{card.desc}</p>
                </div>
              ))}
            </div>

            <div className="h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
