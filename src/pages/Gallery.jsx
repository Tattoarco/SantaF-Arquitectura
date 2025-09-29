import { useState} from "react";
import { motion} from "framer-motion";
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
  const slidesCount = Math.ceil(images.length / 2); // 2 imágenes por slide

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slidesCount);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slidesCount) % slidesCount);

  return (
    <section className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 tracking-wider text-center">
        Galería
      </h2>

      {/* Carrusel */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${current * 50}%` }} // 
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ width: `${slidesCount * 100}%` }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-1/4 flex-shrink-0 flex flex-col items-center px-3" 
            >
              <div className="w-full h-100 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 animate-gradient-x ">
                  <div className="w-full h-full rounded-xl overflow-hidden flex flex-col">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-3/4 object-cover"
                    />
                    <div className="p-3 h-1/4 flex flex-col justify-center bg-black/60">
                      <h3 className="text-lg font-semibold">{img.title}</h3>
                      <p className="text-gray-300 text-sm">{img.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Botones */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/90 hover:bg-black/70 text-white rounded-full p-2 z-10"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/90 hover:bg-black/70 text-white rounded-full p-2 z-10"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}

