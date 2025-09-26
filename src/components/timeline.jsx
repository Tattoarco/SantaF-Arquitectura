import { useState } from "react";
import { Link } from "react-router-dom";
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
    image: img5 ,
  },
];

export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Wave en la parte superior */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute z-10">
        <path
          fill="url(#waveGradient)"
          fillOpacity="1"
          d="M0,256L21.8,229.3C43.6,203,87,149,131,122.7C174.5,96,218,96,262,90.7C305.5,85,349,75,393,85.3C436.4,96,480,128,524,160C567.3,192,611,224,655,208C698.2,192,742,128,785,122.7C829.1,117,873,171,916,208C960,245,1004,267,1047,277.3C1090.9,288,1135,288,1178,272C1221.8,256,1265,224,1309,208C1352.7,192,1396,192,1418,192L1440,192L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
      </svg>
      <section className="min-h-screen bg-[#0a0f1c] relative overflow-hidden">
        {/* Título animado */}
        <motion.h2 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} className="relative text-white text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide z-10 pt-36">
          Línea de Tiempo 
        </motion.h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Línea central con gradiente animado */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-pink-500 via-yellow-400 to-blue-500 animate-gradient-y"></div>
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

        <Link to="/History" className="block text-center text-white text-2xl hover:text-[#0f172a] transition mb-10">
          <div className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/50 active:scale-90 hover:scale-105">Ver más...</div>
        </Link>
      </section>
    </>
  );
}
