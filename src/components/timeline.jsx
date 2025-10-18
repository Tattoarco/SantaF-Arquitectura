import { useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/TimelineImg/fundacion.jpg";
import img2 from "../assets/TimelineImg/IglesiaJesusNazareno_1.png";
import img3 from "../assets/TimelineImg/IglesiaJesusNazareno_2.webp";
import img4 from "../assets/TimelineImg/IglesiaJesusNazareno_2.webp";
import img5 from "../assets/TimelineImg/IglesiaJesusNazareno_2.webp";

const timelineData = [
  {
    period: "1541–1656",
    title: "Fundación y primeros asentamientos",
    events: [
      "1541: Jorge Robledo funda el poblado de Antioquia, pero por razones estratégicas y de salubridad, en 1545 la villa se traslada y en 1547 se crea la primera parroquia, construida con materiales simples como paja, en el mismo sitio donde hoy se encuentra la Catedral Basílica.",
      "1555: La Villa de Santafé de Antioquia se convierte en capital de la provincia, consolidándose como centro administrativo y religioso.",
      "1656: Un rayo destruye el primer templo parroquial.",
    ],
    image: img1,
  },
  {
    period: "1659–1700",
    title: "Segunda parroquia y crecimiento religioso",
    events: [
      "1659: Se edifica un nuevo templo parroquial de tapias y tejas, que luego será demolido para dar paso a la Catedral actual.",
      "El estilo de estas construcciones era predominantemente colonial español: muros de adobe, tejas de barro y estructuras simples.",
    ],
    image: img2,
  },
  {
    period: "Siglo XVIII",
    title: "Arquitectura religiosa y urbana colonial",
    events: [
      "1726: Inicia la construcción del Templo de Santa Bárbara, bajo la dirección de los sacerdotes jesuitas. Tras su expulsión en 1767, el templo es terminado en 1795 por Juan Pablo Pérez de Rublas.",
      "1787: El gobernador Juan Antonio Mon y Velarde construye la Casa Consistorial, hoy Alcaldía Municipal.",
    ],
    image: img3,
  },
  {
    period: "1797–1837",
    title: "Consolidación de la identidad urbana",
    events: [
      "1797–1837: Se construye la Catedral Basílica de la Inmaculada Concepción, obra de Fray Domingo de Petrea, un arquitecto capuchino español.",
      "Mano de obra: indígenas, esclavos y artesanos mestizos.",
    ],
    image: img4,
  },
  {
    period: "Siglo XIX",
    title: "Nuevos templos y expansión vial",
    events: [
      "1863: Comienza la construcción del Templo de Nuestra Señora de Chiquinquirá, conocido como La Chinca.",
      "1895: Se inaugura el Puente de Occidente, diseñado por el ingeniero José María Villa, discípulo de Eiffel. Es una de las mayores obras de ingeniería del siglo XIX en Colombia.",
    ],
    image: img5,
  },
];

export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="relative overflow-hidden py-20 px-6 md:px-10"
      style={{
      }}
    >
      {/* Línea central decorativa */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] h-full bg-[#7b5e3b] opacity-40"></div>

      <div className="relative z-10 max-w-6xl mx-auto font-serif">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-20 flex flex-col md:flex-row items-center gap-10 ${
              index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            }`}
          >
            {/* Tarjeta de texto */}
            <motion.div
              onClick={() => setActive(index)}
              whileHover={{ scale: 1.02 }}
              className={`relative w-full md:w-1/2 bg-[#fcf9f2]/95 border border-[#bfa67a]/70 shadow-md rounded-xl p-6 transition-all duration-500 ${
                active === index
                  ? "ring-1 ring-[#9d7c48]"
                  : "hover:ring-1 hover:ring-[#bfa67a]"
              }`}
            >
              <h3 className="text-[#6a4b1a] text-lg font-semibold italic border-b border-[#bfa67a]/50 pb-1">
                🕰 {item.period}
              </h3>
              <h4 className="text-2xl text-[#3a2b1c] mt-3 font-bold tracking-wide font-[Playfair_Display]">
                {item.title}
              </h4>
              <ul className="mt-4 space-y-2 text-[#2f2b26] text-sm leading-relaxed">
                {item.events.map((ev, i) => (
                  <li key={i}>
                    <span className="text-[#9d7c48] mr-1">•</span>
                    {ev}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Imagen asociada */}
            <motion.img
              src={item.image}
              alt={item.title}
              initial={{ opacity: 0.6, scale: 0.95 }}
              animate={{
                opacity: active === index ? 1 : 0.75,
                scale: active === index ? 1 : 0.97,
              }}
              transition={{ duration: 0.6 }}
              className="rounded-xl shadow-lg border border-[#9d7c48]/60 w-full md:w-1/2 h-64 object-cover sepia"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
