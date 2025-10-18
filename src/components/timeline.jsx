import { useState } from "react";
import {  motion } from "framer-motion";
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
       
        {/* Línea vertical decorativa */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-[#c9a227] via-[#b48a3e] to-[#5c3b09] opacity-80"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          {timelineData.map((item, index) => (
            <div key={index} className={`mb-20 flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Tarjeta de texto */}
              <motion.div onClick={() => setActive(index)} whileHover={{ scale: 1.03 }} className={`relative w-full md:w-1/2 bg-[#fff8ef]/90 backdrop-blur-sm border border-[#b48a3e]/50 rounded-2xl shadow-lg p-6 transition-all duration-500 ${active === index ? "ring-2 ring-[#c9a227]" : ""}`}>
                <h3 className="text-amber-700 text-xl font-semibold">
                  <i className="fa-solid fa-hourglass-half mr-2 text-amber-600"></i>
                  {item.period}
                </h3>
                <h4 className="text-2xl text-[#5c3b09] mt-2 font-[Playfair_Display]">{item.title}</h4>
                <ul className="mt-4 space-y-2 text-[#2c2a26] text-sm leading-relaxed">
                  {item.events.map((ev, i) => (
                    <li key={i}>
                      <span className="text-[#b48a3e] mr-1">•</span>
                      {ev}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Imagen asociada */}
              <motion.img
                src={item.image}
                alt={item.title}
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{
                  opacity: active === index ? 1 : 0.7,
                  scale: active === index ? 1 : 0.95,
                }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl shadow-xl border-[3px] border-[#b48a3e]/70 w-full md:w-1/2 h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
