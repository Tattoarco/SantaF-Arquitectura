import { useState } from "react";
import { hover, motion } from "framer-motion";
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
    events: ["1659: Se edifica un nuevo templo parroquial de tapias y tejas, que luego será demolido para dar paso a la Catedral actual.", "El estilo de estas construcciones era predominantemente colonial español: muros de adobe, tejas de barro y estructuras simples."],
    image: img2,
  },
  {
    period: "Siglo XVIII",
    title: "Arquitectura religiosa y urbana colonial",
    events: ["1726: Inicia la construcción del Templo de Santa Bárbara, bajo la dirección de los sacerdotes jesuitas. Tras su expulsión en 1767, el templo es terminado en 1795 por Juan Pablo Pérez de Rublas.", "1787: El gobernador Juan Antonio Mon y Velarde construye la Casa Consistorial, hoy Alcaldía Municipal."],
    image: img3,
  },
  {
    period: "1797–1837",
    title: "Consolidación de la identidad urbana",
    events: ["1797–1837: Se construye la Catedral Basílica de la Inmaculada Concepción, obra de Fray Domingo de Petrea, un arquitecto capuchino español.", "Mano de obra: indígenas, esclavos y artesanos mestizos."],
    image: img4,
  },
  {
    period: "Siglo XIX",
    title: "Nuevos templos y expansión vial",
    events: ["1863: Comienza la construcción del Templo de Nuestra Señora de Chiquinquirá, conocido como La Chinca.", "1895: Se inaugura el Puente de Occidente, diseñado por el ingeniero José María Villa, discípulo de Eiffel. Es una de las mayores obras de ingeniería del siglo XIX en Colombia."],
    image: img5,
  },
];

export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="  relative overflow-hidden">
        {/* Título animado */}
        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="relative text-white text-xl md:text-3xl font-bold text-center mb-10 tracking-wide z-10 pt-10">
          Línea de Tiempo
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Línea central con gradiente animado */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-amber-100 via-orange-400 to-blue-500 animate-gradient-y"></div>
          </div>

          {timelineData.map((item, index) => (
            <div key={index} className={`mb-16 flex items-center w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
              {/* Contenido */}
              <div className="w-1/2 p-6 cursor-pointer transition transform hover:scale-105" onClick={() => setActive(index)}>
                <div className={`bg-[#1e293b] rounded-xl shadow-lg p-5 transition duration-500 group ${active === index ? "ring-2 ring-yellow-400" : ""}`}>
                  <h3 className="text-xl text-yellow-400 font-semibold">{item.period}</h3>
                  <h4 className="text-2xl text-white mt-1">{item.title}</h4>
                  <ul className="mt-3 text-gray-300 space-y-2 text-sm">
                    {item.events.map((ev, i) => (
                      <li key={i}>
                        <span className="mr-1 text-yellow-400">•</span>
                        {ev}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Imagen */}
              <div className="w-1/2 p-6">
                <motion.img
                  src={item.image}
                  alt={item.title}
                  initial={{ opacity: 0.5, scale: 0.9 }}
                  animate={{
                    opacity: active === index ? 1 : 0.6,
                    scale: active === index ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.6 }}
                  className="rounded-lg shadow-lg object-cover h-60 w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
