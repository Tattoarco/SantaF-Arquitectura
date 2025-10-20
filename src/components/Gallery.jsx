import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../assets/ImgGallery/img1.jpg";
import img2 from "../assets/ImgGallery/img2.jpg";
import img3 from "../assets/ImgGallery/img3.jpg";
import img4 from "../assets/ImgGallery/img4.png";
import img5 from "../assets/ImgGallery/img5.JPG";
import img6 from "../assets/ImgGallery/img6.JPG";
import img7 from "../assets/ImgGallery/img7.JPG";
import img8 from "../assets/ImgGallery/img8.JPG";

const images = [
  {
    src: img1,
    title: "Calle empedrada con casas coloniales",
    desc: "Estas calles eran el corazón de la vida social y comercial. En la época colonial, el empedrado no era sólo estético, sino una necesidad para resistir el paso de caballos, mulas y carretas. Las casas adosadas unas a otras con corredores interiores protegían del calor y favorecen la vida comunitaria.",
  },
  {
    src: img2,
    title: " Torre de iglesia vista detrás de una esquina",
    desc: " Las iglesias eran el centro de la vida social, política y espiritual. El campanario además de marcar las horas también se utilizaba para llamar a la hora de la misa, y en ocasiones advertir de emergencias.El sonido de las campanas es lo que le da ritmo a la vida diaria, recordando a la población la omnipresencia de lo religioso en lo cotidiano.",
  },
  {
    src: img3,
    title: "Calle con balcones de madera",
    desc: "La calle empedrada está adornada con balcones de madera tallada y aleros amplios. Se ven fachadas blancas y simetría en las ventanas.Los balcones eran un símbolo de estatus social y también una solución climática: permitían ventilar las casas y observar la vida urbana sin tener que exponerse al sol. ",
  },
  {
    src: img4,
    title: "Catedral de Santa Fe de Antioquia",
    desc: "Se trata de la Catedral Basílica Metropolitana de la Inmaculada Concepción, un templo de gran imponencia con fachada blanca, torre lateral y detalles barrocos en sus molduras.Construida en el siglo XVIII, esta iglesia fue el epicentro de la vida espiritual y símbolo del poder eclesiástico. Al estar en la plaza principal, era el lugar donde ocurrieron actos religiosos, políticos y festivos.",
  },
  {
    src: img5,
    title: "Cocina de barro y utensilios tradicionales",
    desc: "Este espacio conserva la memoria de la alimentación colonial. El fogón de leña con sus ollas de barro cocido representa la cotidianidad de las familias: allí se cocinaba maíz, fríjol, carnes y dulces tradicionales. Las mujeres, junto con las cocineras y esclavizadas, compartían su saber en estos espacios, transmitiendo recetas que hoy hacen parte de la identidad gastronómica antioqueña. La cocina era lugar de calor, conversación y trabajo colectivo, donde se mezclaba el saber indígena, español y africano. ",
  },
  {
    src: img6,
    title: "Escuela con fachada de ladrillo y estatua religiosa",
    desc: "Este edificio refleja la transición al período republicano. El uso del ladrillo en la fachada muestra la evolución constructiva del siglo XIX y XX. La presencia de la estatua religiosa y la reja metálica recalca la unión entre educación y moral católica, una constante en la vida social antioqueña. Estos espacios eran también centros comunitarios donde se moldeaban valores, disciplina y fe. ",
  },
  {
    src: img7,
    title: "Ventana colonial enrejada hacia la calle",
    desc: "La ventana que sobresale hacia la calle, protegida por una reja de hierro forjado, es uno de los elementos más característicos de la arquitectura colonial en Santa Fe de Antioquia. Estas ventanas no eran únicamente un recurso arquitectónico, sino un punto de contacto entre la intimidad del hogar y la vida pública. ",
  },
  {
    src: img8,
    title: "Fachada colonial con portón de madera",
    desc: "La fachada blanca, con su portón de madera maciza y el techo de tejas de barro, refleja la sobriedad y elegancia de las viviendas coloniales en Santa Fe de Antioquia. Estas casas, levantadas con muros encalados, eran símbolo de estabilidad y jerarquía social. El portón no era solo un acceso, sino un elemento que representaba prestigio familiar, pues las maderas y herrajes trabajados eran signo de estatus. En su época, estas viviendas guardaban la intimidad del hogar, a la vez que proyectaban hacia la calle la imagen de respeto y autoridad.  ",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const visibleCards = 2; // número de imágenes visibles por vista
  const totalSlides = Math.ceil(images.length / visibleCards);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative py-12 bg-[#f5f1e6] bg-cover bg-center border-t border-b border-[#c4a76d]/40">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold text-[#3a2c1b] tracking-widest uppercase">
          Galería Histórica
        </h2>
        <p className="text-sm italic text-[#5a4a36] mt-2">
          Rich Picture: Una mirada visual a la esencia arquitectónica y cultural de la ciudad
        </p>
      </div>

      {/* Carrusel */}
      <div className="w-[85%] overflow-hidden  mx-auto ">
        <motion.div
          className="flex transition-transform duration-700 ease-out"
          animate={{ x: `-${current * (100 / totalSlides)}%` }}
          style={{ width: `${(images.length / visibleCards) * 100}%` }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 px-3"
              style={{ width: `${25 / visibleCards}%` }}
            >
              <div className="w-full rounded-xl overflow-hidden border-4 border-[#d8c49b] shadow-[0_0_10px_rgba(90,70,30,0.7)] bg-[#f8f6f1]">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover grayscale-[40%] contrast-90"
                />
                <div className="p-3 bg-[#2a1f0e]/70 text-[#f8f5e6]">
                  <h3 className="text-lg font-semibold font-[Playfair_Display]">
                    {img.title}
                  </h3>
                  <p className="text-xs italic text-[#e9d7a7]">{img.desc}</p>
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