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
      description: "Uno de los íconos arquitectónicos de Santa Fe de Antioquia, construido en 1895.",
    },
    {
      image: Img2,
      title: "Calle Colonial",
      description: "Calles empedradas rodeadas de casas coloniales con balcones de madera.",
    },
    {
      image: Img3,
      title: "Catedral Basílica",
      description: "Imponente templo con arquitectura colonial en el corazón del municipio.",
    },
    {
      image: Img4,
      title: "Plaza Mayor",
      description: "Centro histórico donde se reúnen locales y turistas a disfrutar del ambiente.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-10 px-5 flex flex-col items-center">
      <h2 className="text-white text-4xl font-bold text-center mb-8 animate-fade-slide-down relative">Galería</h2>
      <div className="relative flex items-center justify-center w-full max-w-5xl h-[350px] mb-8">
        {/* Flecha Izquierda */}
        <button onClick={prevSlide} className="absolute left-0 z-10 text-white text-3xl bg-black/40 hover:bg-black/60 px-3 py-1 rounded-full transition">
          ❮
        </button>

        {/* Carrusel */}
        <div className="flex justify-center items-center w-full h-full overflow-hidden relative">
          {slides.map((slide, index) => {
            let isActive = index === current;
            let isPrev = index === (current - 1 + slides.length) % slides.length;
            let isNext = index === (current + 1) % slides.length;

            return (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-in-out rounded-xl shadow-lg ${isActive ? "scale-100 opacity-100 z-20" : "scale-90 opacity-40 z-10"}`}
                style={{
                  width: isActive ? "500px" : "350px",
                  height: isActive ? "300px" : "220px",
                  transform: isActive ? "translateX(0)" : isPrev ? "translateX(-250px)" : isNext ? "translateX(250px)" : "translateX(1000px)",
                }}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-xl" />
              </div>
            );
          })}
        </div>

        {/* Flecha Derecha */}
        <button onClick={nextSlide} className="absolute right-0 z-10 text-white text-3xl bg-black/40 hover:bg-black/60 px-3 py-1 rounded-full transition">
          ❯
        </button>
      </div>

      {/* Texto Descriptivo */}
      <div className="text-center max-w-xl">
        <h3 className="text-white text-2xl font-semibold">{slides[current].title}</h3>
        <p className="text-gray-300 mt-2">{slides[current].description}</p>
      </div>
    </section>
  );
}
