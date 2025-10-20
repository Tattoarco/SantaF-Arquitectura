import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import visitaderoImg from "../assets/ImgGallery/img7.JPG"; 
import habiatacion from "../assets/habitacion.jpg";

export default function Proyect() {
  return (
    <>
      {/* ENCABEZADO PRINCIPAL */}
      <section
        className="relative text-white overflow-hidden min-h-screen flex flex-col justify-center items-center bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: `url(${habiatacion})`,
        }}
      >
        {/* Capa oscura */}
        <div className="absolute inset-0 bg-[#0a1123]/70 backdrop-blur-[2px]" />

        {/* Navbar */}
        <Navbar />

        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-40 pb-24">
          <motion.h1
            className="text-5xl md:text-6xl font-[Playfair_Display] text-[#f1c232] tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Ecos del Visitadero
          </motion.h1>

          <motion.p
            className="mt-10 max-w-3xl text-gray-200 italic text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Una experiencia inmersiva que revive las emociones, silencios y miradas
            que habitan los espacios coloniales de Santa Fe de Antioquia.
          </motion.p>

          <motion.p
            className="mt-4 max-w-3xl text-gray-300 italic text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Sigue en creación, pero puedes leer más abajo
          </motion.p>
        </div>
      </section>

      {/* SECCIÓN: INTRODUCCIÓN */}
      <section className="relative bg-[#0b1326] py-20 px-6 md:px-32 border-t border-[#f1c232]/30 flex flex-col md:flex-row gap-10 items-center">
        {/* Imagen del texto introductorio */}
        <motion.img
          src={visitaderoImg}
          alt="Visitadero santafereño"
          className="w-full md:w-1/2 rounded-2xl shadow-[0_0_25px_rgba(241,194,50,0.2)] border border-[#f1c232]/30"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Texto */}
        <motion.div
          className="md:w-1/2 text-gray-200 leading-relaxed"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-[Playfair_Display] text-[#f1c232] mb-6 text-center md:text-left">
            Introducción
          </h2>
          <p className="text-justify">
            Este proyecto nace del deseo de comprender el{" "}
            <span className="text-[#f1c232] font-semibold">habitar santafereño</span>{" "}
            desde una perspectiva emocional y simbólica. Inspirados en la
            arquitectura colonial de Santa Fe de Antioquia, buscamos recrear la
            esencia de los espacios que guardan las memorias, costumbres y
            sentimientos de quienes los vivieron.
          </p>
          <p className="mt-4 text-justify">
            Nuestra historia, escrita por nosotros mismos, se construye a partir
            de los sentimientos que puede evocar el{" "}
            <span className="italic text-[#f1c232]">visitadero</span>: ese umbral
            entre lo íntimo y lo público, donde el silencio, la distancia y la
            mirada se vuelven protagonistas.
          </p>
        </motion.div>
      </section>

      {/* SECCIÓN: PERSONAJES */}
      <section className="relative bg-[#0b1326] py-20 px-6 md:px-32 border-t border-[#f1c232]/30">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-[Playfair_Display] text-[#f1c232] mb-10">
            Personajes del relato
          </h2>
          <p className="text-gray-200 italic mb-10 max-w-3xl mx-auto">
            Cada personaje representa una emoción o memoria que emerge desde los
            espacios del hogar santafereño.
          </p>

          {/* Aquí puedes agregar tus personajes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#111c35]/60 border border-[#f1c232]/30 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-full h-64 bg-[#222b45] rounded-lg mb-4 flex items-center justify-center text-[#f1c232]/70 italic">
                Imagen personaje 1
              </div>
              <h3 className="text-xl font-[Playfair_Display] text-[#f1c232] mb-2">
                María Isabel
              </h3>
              <p className="text-gray-300 text-sm">
                Representa la introspección, la espera y el deseo contenido.
              </p>
            </div>

            <div className="bg-[#111c35]/60 border border-[#f1c232]/30 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-full h-64 bg-[#222b45] rounded-lg mb-4 flex items-center justify-center text-[#f1c232]/70 italic">
                Imagen personaje 2
              </div>
              <h3 className="text-xl font-[Playfair_Display] text-[#f1c232] mb-2">
                Antonio
              </h3>
              <p className="text-gray-300 text-sm">
                Simboliza la mirada exterior, la distancia y la restricción social del vínculo.
              </p>
            </div>

            <div className="bg-[#111c35]/60 border border-[#f1c232]/30 rounded-xl p-4 shadow-lg hover:scale-105 transition-transform duration-300">
              <div className="w-full h-64 bg-[#222b45] rounded-lg mb-4 flex items-center justify-center text-[#f1c232]/70 italic">
                Imagen personaje 3
              </div>
              <h3 className="text-xl font-[Playfair_Display] text-[#f1c232] mb-2">
                La Casa
              </h3>
              <p className="text-gray-300 text-sm">
                No es solo un espacio físico: es una memoria viva que observa y
                resguarda los secretos de quienes la habitaron.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECCIÓN: REFERENCIAS */}
      <section className="relative bg-[#0b1326] py-16 px-6 md:px-32 border-t border-[#f1c232]/20">
        <div className="max-w-4xl mx-auto text-gray-300 text-sm leading-relaxed">
          <h2 className="text-xl font-[Playfair_Display] text-[#f1c232] mb-3">
            Referencias
          </h2>
          <p className="mt-2 italic text-[#f1c232]/80">
            Narrativa y personajes creados por el equipo del proyecto “Ecos del
            Visitadero”, inspirados en los sentimientos y tensiones que estos
            espacios pueden evocar en la vida cotidiana santafereña.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
