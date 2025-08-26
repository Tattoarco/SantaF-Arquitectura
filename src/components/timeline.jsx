import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/TimelineImg/fundacion.jpg"

const timelineData = [
  {
    period: "1541–1656",
    title: "Fundación y primeros asentamientos",
    events: [
      "1541: Jorge Robledo funda el poblado de Antioquia, pero por razones estratégicas y de salubridad, en 1545 la villa se traslada y en 1547 se crea la primera parroquia, construida con materiales simples como paja, en el mismo sitio donde hoy se encuentra la Catedral Basílica.",
      "1555: La Villa de Santafé de Antioquia se convierte en capital de la provincia, consolidándose como centro administrativo y religioso",
      "1656: Un rayo destruye el primer templo parroquial.",
    ],
    image: img1
  },
  {
    period: "1659–1700",
    title: "Segunda parroquia y crecimiento religioso",
    events: ["1659: Se edifica un nuevo templo parroquial de tapias y tejas, que luego será demolido para dar paso a la Catedral actual", "El estilo de estas construcciones era predominantemente colonial español: muros de adobe, tejas de barro, estructuras simples"],
    image: "/assets/TimelineImg/fundacion.jpg",
  },
  {
    period: "Siglo XVIII",
    title: "Arquitectura religiosa y urbana colonial",
    events: ["1726: Inicia la construcción del Templo de Santa Bárbara, bajo la dirección de los sacerdotes jesuitas. Tras su expulsión en 1767, el templo es terminado en 1795 por Juan Pablo Pérez de Rublas.", "1787: CEl gobernador Juan Antonio Mon y Velarde construye la Casa Consistorial, hoy Alcaldía Municipal."],
    image: "/assets/timeline/santa-barbara.jpg",
  },
  {
    period: "1797–1837",
    title: "Consolidación de la identidad urbana",
    events: ["1797–1837: Se construye la Catedral Basílica de la Inmaculada Concepción, obra de Fray Domingo de Petrea, un arquitecto capuchino español.", "Mano de obra: indígenas, esclavos y artesanos mestizos."],
    image: "/assets/timeline/catedral.jpg",
  },
  {
    period: "Siglo XIX",
    title: "Nuevos templos y expansión vial",
    events: ["1863: Comienza la construcción del Templo de Nuestra Señora de Chiquinquirá, conocido como La Chinca", "1895: Se inaugura el Puente de Occidente, diseñado por el ingeniero José María Villa, discípulo de Eiffel.Es una de las mayores obras de ingeniería del siglo XIX en Colombia"],
    image: "/assets/timeline/puente.jpg",
  },
];

export default function Timeline() {
  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen bg-[#0f172a]  py-12 px-6">
      <h2 className="text-white text-4xl font-bold text-center mb-10 animate-fade-slide-down">Línea de Tiempo Histórica</h2>

      <div className="relative max-w-5xl mx-auto">
        {/* Línea central */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 SHA   h-full"></div>

        {timelineData.map((item, index) => (
          <div key={index} className={`mb-12 flex items-center w-full ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            {/* Contenido */}
            <div className="w-1/2 p-6 cursor-pointer transition transform hover:scale-105" onClick={() => setActive(index)}>
              <div className={`bg-[#1e293b] rounded-lg shadow-lg p-5 transition duration-500 group ${active === index ? "ring-2 ring-yellow-400" : ""}`}>
                <h3 className="text-xl text-yellow-400 font-semibold">{item.period}</h3>
                <h4 className="text-2xl text-white mt-1">{item.title}</h4>
                <ul className="mt-3 text-gray-300 space-y-1 text-sm line-clamp-3 group-active:line-clamp-none transition-all duration-300">
                  {item.events.map((ev, i) => (
                    <li key={i}>
                      <span className="mr-1 text-yellow-00">•</span>
                      {ev}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Imagen */}
            <div className="w-1/2 p-6">
              <img src={item.image} alt={item.title} className={`rounded-lg shadow-lg object-cover h-60 w-full transition duration-700 ${active === index ? "opacity-100 scale-100" : "opacity-60 scale-95"}`} />
            </div>
          </div>
        ))}
      </div>

      <Link to="/History" className="text-white text-2xl hover:text-[#0f172a] hover:scale-105 transition">
        <div className="flex justify-center items-center rounded-xl bg-indigo-500 shadow-lg shadow-indigo-500/50 active:scale-90 hover:scale-[101%]">Ver más...</div>
      </Link>
    </section>
  );
}
