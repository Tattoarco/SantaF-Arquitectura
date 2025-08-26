import { useState } from "react";
import Img1 from "../assets/ImgGallery/img1.jpg";
import Img2 from "../assets/ImgGallery/img2.jpg";
import Img3 from "../assets/ImgGallery/img3.jpg";
import Img4 from "../assets/ImgGallery/img4.jpg";

export default function Gallery() {
  const slides = [
    {
      image: Img1,
      title: "Puente de Occidente",
      description:
        "Uno de los íconos arquitectónicos de Santa Fe de Antioquia, construido en 1895.",
    },
    {
      image: Img2,
      title: "Calle Colonial",
      description:
        "Calles empedradas rodeadas de casas coloniales con balcones de madera.",
    },
    {
      image: Img3,
      title: "Catedral Basílica",
      description:
        "Imponente templo con arquitectura colonial en el corazón del municipio.",
    },
    {
      image: Img4,
      title: "Plaza Mayor",
      description:
        "Centro histórico donde se reúnen locales y turistas a disfrutar del ambiente.",
    },
  ];

  // 👇 Renombrado a 'active' para evitar confusiones con 'current'
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Índices vecino izquierdo y derecho
  const leftIndex = (active - 1 + slides.length) % slides.length;
  const rightIndex = (active + 1) % slides.length;

  return (
    <section className="h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-10 px-5 flex flex-col items-center justify-center">
      {/* Título con animación suave */}
      <h2 className="text-white text-4xl font-bold text-center mb-8 animate-slideDownFade  relative">
        Galería
      </h2>

      {/* Carrusel */}
      <div className="relative flex items-center justify-center w-full max-w-5xl h-[350px] mb-8">
        {/* Flecha Izquierda */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 text-white text-3xl bg-black/40 hover:bg-black/60 px-3 py-1 rounded-full transition"
          aria-label="Anterior"
        >
          ❮
        </button>

        <div className="relative flex justify-center items-center w-full h-full overflow-hidden">
          {slides.map((slide, i) => {
            const isActive = i === active;
            const isLeft = i === leftIndex;
            const isRight = i === rightIndex;

            // Estado visual por posición
            const base =
              "absolute rounded-xl shadow-lg transition-all duration-700 ease-in-out";
            const visual = isActive
              ? "opacity-100 scale-100 z-20"
              : "opacity-40 scale-90 z-10";

            // Posiciones: centro / izquierda / derecha / fuera de escena
            let translateX = "1000px";
            if (isActive) translateX = "0px";
            else if (isLeft) translateX = "-250px";
            else if (isRight) translateX = "250px";

            const w = isActive ? 500 : 350;
            const h = isActive ? 300 : 220;

            return (
              <div
                key={i}
                className={`${base} ${visual}`}
                style={{
                  width: `${w}px`,
                  height: `${h}px`,
                  transform: `translateX(${translateX})`,
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            );
          })}
        </div>

        {/* Flecha Derecha */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 text-white text-3xl bg-black/40 hover:bg-black/60 px-3 py-1 rounded-full transition"
          aria-label="Siguiente"
        >
          ❯
        </button>
      </div>

      {/* Texto Descriptivo (separado del carrusel para que no se superponga) */}
      <div className="text-center max-w-xl">
        <h3 className="text-white text-2xl font-semibold">
          {slides[active].title}
        </h3>
        <p className="text-gray-300 mt-2">{slides[active].description}</p>
      </div>
    </section>
  );
}
