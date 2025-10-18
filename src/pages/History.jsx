import { motion } from "framer-motion";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TimeLine from "../components/timeline";
import Periodico from "../assets/periodico.jpg";

export default function History() {
  return (
    <section className="bg-gradient-to-b from-[#0a1123] to-[#111827] text-white overflow-hidden">
      <Navbar />

      {/* Encabezado tipo periódico */}
      <header
        className="relative py-16 px-8 md:px-24 text-center border-b border-amber-300/50 bg-cover bg-center"
        style={{ backgroundImage: `url(${Periodico})` }}
      >
        <div className="absolute inset-0 bg-[#0a1930]/80 backdrop-blur-[2px]"></div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-[Playfair_Display] font-bold tracking-wide text-amber-300 drop-shadow-md uppercase">
            <i className="fa-solid fa-landmark mr-3 text-amber-500"></i>
            Crónica de una ciudad viva
          </h1>
          <p className="mt-3 text-lg italic text-gray-200">
            La historia y la arquitectura de Santa Fé de Antioquia
          </p>
        </motion.div>
      </header>

      {/* Sección video + texto */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 px-8 md:px-24 items-center">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-[#f1c232] via-[#c40909] to-[#f1c232] animate-[gradient_6s_linear_infinite] shadow-[0_0_25px_rgba(0,0,0,0.5)]">
            <iframe
              width="400"
              height="250"
              src="https://www.youtube.com/embed/5t_uoaTkllk?autoplay=1&mute=1&loop=1&playlist=5t_uoaTkllk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </motion.div>

        <motion.article
          className="col-span-2 bg-[#00000050] backdrop-blur-sm p-6 rounded-xl border border-amber-200/30"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="indent-8 leading-relaxed text-justify text-gray-100">
            Fundada en 1541 por el mariscal Jorge Robledo, Santa Fe de Antioquia fue durante siglos el corazón político y cultural del occidente colombiano. Declarada primera capital del departamento, su legado colonial aún se respira en cada calle empedrada, en las casas de balcones de madera y en los templos que guardan el paso del tiempo.
          </p>
          <p className="mt-4 indent-8 leading-relaxed text-justify text-gray-200">
            Entre el brillo del sol y el murmullo del río Cauca, la ciudad conserva una atmósfera tranquila que conecta pasado y presente. Su arquitectura, declarada Monumento Nacional, y el majestuoso Puente de Occidente son símbolos del ingenio y la tradición antioqueña que aún perduran.
          </p>
          <p className="mt-4 indent-8 leading-relaxed text-justify text-amber-300">
            Veamos en esta línea de tiempo cómo fue construido Santa Fé de Antioquia a lo largo de los años...
          </p>
        </motion.article>
      </section>

      {/* Separador decorativo */}
      <motion.div
        className="px-[20%] my-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="h-[2px] w-full bg-gradient-to-r from-[#f1c232] via-[#c40909] to-[#f1c232]" />
      </motion.div>

      {/* Línea de tiempo */}
      <section className="relative z-10 px-6 md:px-24">
        <motion.h2
          className="text-3xl md:text-4xl font-[Playfair_Display] mb-8 text-center text-amber-300 uppercase tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <i className="fa-solid fa-clock-rotate-left mr-2 text-amber-500"></i>
          Línea de tiempo
        </motion.h2>
        <TimeLine />
      </section>

      {/* Materiales */}
      <motion.section
        className="relative z-10 bg-[#00000070] mx-8 md:mx-24 my-16 p-10 rounded-2xl border border-amber-300/30"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl md:text-3xl font-[Playfair_Display] mb-4 text-amber-300">
          <i className="fa-solid fa-hammer mr-2 text-amber-500"></i>
          Materiales
        </h2>
        <p className="text-justify leading-relaxed text-gray-200">
          Conoce los principales materiales utilizados en la construcción de las casas coloniales y cómo cada elemento —el barro, la cal, la madera y la piedra— cuenta la historia de una tradición que ha resistido los siglos.
        </p>
      </motion.section>

      <Footer />
    </section>
  );
}
