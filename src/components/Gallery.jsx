import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/ImgGallery/img1.jpg";
import img2 from "../assets/ImgGallery/img2.jpg";
import img3 from "../assets/ImgGallery/img3.jpg";
import img4 from "../assets/ImgGallery/img4.jpg";

const images = [
  {
    src: img1,
    title: "Iglesia Principal",
    desc: "Un símbolo de la arquitectura colonial de Santa Fé de Antioquia.",
  },
  {
    src: img2,
    title: "Puente de Occidente",
    desc: "Un icónico puente colgante que conecta historia e ingeniería.",
  },
  {
    src: img3,
    title: "Calles Coloniales",
    desc: "Caminos empedrados que cuentan historias de siglos pasados.",
  },
  {
    src: img4,
    title: "Balcones Típicos",
    desc: "Detalles arquitectónicos que embellecen cada rincón de la ciudad.",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const slidesCount = Math.ceil(images.length / 3);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slidesCount);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slidesCount) % slidesCount);

  return (
    <section className="relative py-12 bg-[#f5f1e6] bg-[url('/texture-paper.webp')] bg-cover bg-center border-t border-b border-[#c4a76d]/40">
      {/* Título con estilo de periódico */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-[#3a2c1b] tracking-widest uppercase">
          Galería Histórica
        </h2>
        <p className="text-sm italic text-[#5a4a36] mt-2">
          Una mirada visual a la esencia arquitectónica y cultural de la ciudad
        </p>
      </div>

      {/* Carrusel */}
      <div className="relative w-full overflow-hidden max-w-6xl mx-auto">
        <motion.div
          className="flex"
          animate={{ x: `-${current * 50}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ width: `${slidesCount * 100}%` }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-1/4 flex-shrink-0 flex flex-col items-center px-3"
            >
              <div className="w-full h-100 rounded-xl relative overflow-hidden border-4 border-[#d8c49b] shadow-[0_0_25px_rgba(90,70,30,0.7)] bg-[#f8f6f1]">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-3/4 object-cover grayscale-[40%] contrast-90"
                />
                <div className="p-3 h-1/4 flex flex-col justify-center bg-[#2a1f0e]/70 text-[#f8f5e6]">
                  <h3 className="text-lg font-semibold font-[Playfair_Display]">
                    {img.title}
                  </h3>
                  <p className="text-xs italic text-[#e9d7a7]">
                    {img.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Botones */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#3a2c1b]/90 hover:bg-[#3a2c1b]/70 text-[#f5e8c8] rounded-full p-2 shadow-lg transition"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#3a2c1b]/90 hover:bg-[#3a2c1b]/70 text-[#f5e8c8] rounded-full p-2 shadow-lg transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
