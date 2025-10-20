import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { motion } from "framer-motion";
import Periodico from "../assets/periodico.jpg";

export default function MakingOff() {
  return (
    <section className="relative bg-[#0f172a] text-white overflow-hidden">
      {/* Fondo con textura y superposición */}
      <img
        src={Periodico}
        alt="Textura de papel"
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/70 via-[#0f172a]/80 to-[#0f172a]/95"></div>

      <Navbar />

      {/* Encabezado principal */}
      <header className="relative text-center py-20 border-b border-amber-400/30 backdrop-blur-sm">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-[Playfair_Display] font-bold tracking-widest text-amber-300 drop-shadow-lg uppercase"
        >
          <i className="fa-solid fa-clapperboard text-amber-400 mr-3"></i>
          Making Off
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 text-lg italic text-gray-200 max-w-2xl mx-auto"
        >
          Detrás de cámaras: el proceso creativo, la historia y la pasión que dieron vida al proyecto.
        </motion.p>
      </header>
      
      {/* Contenido principal */}
      <main className="relative z-10 flex flex-col items-center py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#1e293b]/70 border border-amber-400/40 rounded-3xl shadow-[0_0_40px_rgba(255,191,73,0.15)] p-6 md:p-10 max-w-5xl text-center backdrop-blur-lg"
        >
          {/* Video con efecto retro */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300/40">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-transparent to-[#0f172a]/30 z-10"></div>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/IbSc5XypHxk?si=aCETueO7H5-MtyzJ"
              title="Video Making Off"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            ></iframe>
          </div>

          {/* Texto descriptivo */}
          <h2 className="mt-10 text-3xl font-semibold text-amber-300 tracking-wide">
            El proceso de creación
          </h2>
          <p className="mt-4 text-gray-200 text-justify leading-relaxed">
            Este video muestra las etapas detrás del desarrollo del proyecto:
            desde la exploración histórica y la investigación arquitectónica,
            hasta la conceptualización artística, el modelado y el diseño web.
            Cada decisión refleja el deseo de rescatar la esencia de Santa Fé de Antioquia,
            fusionando tradición, arte y tecnología.
          </p>

          {/* Línea decorativa */}
          <div className="mt-12 w-1/3 mx-auto h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full"></div>
        </motion.div>
      </main>

      {/* Footer */}
      <Footer />
    </section>
  );
}
