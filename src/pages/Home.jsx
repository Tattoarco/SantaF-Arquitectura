import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Table from "../components/table";
import Gallery from "../pages/Gallery";

import papel from "../assets/casaHome.PNG";
import imgInicio from "../assets/fondoHome.jpg";
import fondo from "../assets/principal.jpg";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  const columns = [
    "Espacio del hogar",
    "Uso principal",
    "Género asociado",
    "Significado social / simbólico",
    "Transformación actual",
  ];

  const rows = [
    {
      espacio_del_hogar: "Zaguán (entrada)",
      uso_principal: "Recibir visitas, paso hacia el interior",
      género_asociado: "Masculino / público",
      "significado_social_/_simbólico":
        "Representa la apertura hacia la calle y el control masculino del acceso.",
      transformación_actual:
        "Hoy se usa como espacio de recepción o galería abierta.",
    },
    {
      espacio_del_hogar: "Patio central",
      uso_principal: "Eje de ventilación y reunión familiar",
      género_asociado: "Femenino / doméstico",
      "significado_social_/_simbólico":
        "Centro de la vida doméstica, asociado al cuidado, costura y crianza.",
      transformación_actual:
        "Mantiene su valor simbólico de unión y frescura, ahora como espacio social.",
    },
    {
      espacio_del_hogar: "Sala principal",
      uso_principal: "Reuniones sociales y representación del estatus familiar",
      género_asociado: "Masculino / público",
      "significado_social_/_simbólico":
        "Espacio donde se consolidaban jerarquías sociales y se negociaban alianzas.",
      transformación_actual:
        "Actualmente funciona como área de convivencia o exhibición cultural.",
    },
    {
      espacio_del_hogar: "Cocina y despensa",
      uso_principal: "Preparación de alimentos y gestión del hogar",
      género_asociado: "Femenino / laboral",
      "significado_social_/_simbólico":
        "Lugar de transmisión de saberes culinarios y de interacción femenina.",
      transformación_actual:
        "Hoy se integra al comedor y se percibe como espacio compartido y creativo.",
    },
    {
      espacio_del_hogar: "Habitaciones interiores",
      uso_principal: "Descanso, intimidad y crianza",
      género_asociado: "Femenino / privado",
      "significado_social_/_simbólico":
        "Espacio de cuidado y refugio, restringido al visitante masculino.",
      transformación_actual:
        "Se mantiene la privacidad, pero con una distribución más equitativa.",
    },
  ];

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset =
            element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }, 200);
      }
    }
  }, [location.state]);

  return (
    <section className="relative bg-gradient-to-b from-[#0a1123] to-[#111827] text-white overflow-hidden">
      {/* Fondo principal */}
      <img
        src={fondo}
        alt="Fondo"
        className="absolute inset-0 w-full h-screen object-cover opacity-80"
      />
      <div className="absolute inset-0 bg-[#00000090]" />

      <Navbar />

      {/* Encabezado principal */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-[Playfair_Display] tracking-widest uppercase text-[#f1c232] drop-shadow-md">
          El alma de los espacios
        </h1>
        <h2 className="text-lg md:text-xl mt-4 italic text-[#d8c18b]">
          Arquitectura y vida en Santa Fé de Antioquia
        </h2>
        <div className="mt-8 w-24 border-t-[3px] border-[#f1c232]" />
      </motion.div>

      {/* Imagen + texto tipo artículo */}
      <section className="relative bg-[#0f172a]/90 py-20 px-6 md:px-20 flex flex-col md:flex-row gap-12 items-center border-t border-[#f1c232]/30">
        <motion.div
          className="w-full md:w-1/2 border border-[#f1c232]/50 p-2 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.6)]"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={imgInicio}
            alt="Casa colonial Santa Fe"
            className="rounded-lg object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 leading-relaxed font-light tracking-wide text-justify"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="italic text-gray-200">
            “En Santa Fé de Antioquia, los espacios hablan en silencio. Entre
            muros coloniales y patios de sombra viva, el habitar se convierte en
            memoria viva del territorio.”
          </p>
          <p className="mt-4 italic text-gray-200">
            Cada arco, cada ventana y cada piedra guardan el pulso de un pueblo
            que aprendió a vivir entre historia y permanencia.
          </p>
          <p className="mt-6 text-right text-[#f1c232] font-semibold italic">
            — Cronista anónimo
          </p>
        </motion.div>
      </section>

      {/* Contexto */}
      <section className="relative bg-[#0b1326] px-8 md:px-32 py-16">
        <img
          src={papel}
          alt="textura fondo"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <motion.div
          className="relative z-10 max-w-5xl mx-auto bg-[#111c35]/60 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-[#f1c232]/30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-[Playfair_Display] text-center text-[#f1c232] mb-6">
            <i className="fa-solid fa-feather-pointed mr-2"></i>
            Contexto
          </h2>
          <div className="columns-1 md:columns-2 gap-8 text-sm md:text-base text-gray-100 leading-relaxed">
            <p>
              La investigación sobre el patrimonio arquitectónico de Santa Fe de
              Antioquia permitió comprender cómo la historia, la arquitectura y
              la vida social se entrelazan en una ciudad que mantiene viva su
              memoria colonial.
            </p>
            <p>
              Santa Fe conserva un estilo colonial español, con fachadas sobrias
              y techos de barro. Su arquitectura refleja el orden urbano impuesto
              por la colonia, pero también la adaptación al clima y a la vida
              local.
            </p>
            {showMore && (
              <>
                <p>
                  Como menciona Hernández Ciro (2021), la ciudad debe entenderse
                  como un “producto social”, resultado del trabajo conjunto de
                  indígenas, afrodescendientes y mestizos que dieron forma a su
                  identidad patrimonial.
                </p>
                <p>
                  Los relatos orales revelaron cómo las antiguas técnicas
                  constructivas siguen siendo parte de la identidad local.
                </p>
              </>
            )}
          </div>

          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="block mx-auto mt-6 bg-gradient-to-r from-[#f1c232] to-[#c40909] px-6 py-2 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(241,194,50,0.5)]"
            whileTap={{ scale: 0.95 }}
          >
            {showMore ? "Ver menos..." : "Leer más..."}
          </motion.button>
        </motion.div>
      </section>

      {/* Galería */}
      <div className="relative bg-[#0b1326]">
        <Gallery />
      </div>

      {/* Tabla final */}
      <section className="relative bg-[#0b1326] pb-10 px-10 md:px-32 pt-12">
        <motion.h2
          className="text-3xl font-[Playfair_Display] text-center text-[#f1c232] mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <i className="fa-solid fa-venus-mars mr-2"></i>
          Roles de género en el hogar colonial
        </motion.h2>
        <motion.div
          className="bg-[#111c35]/70 backdrop-blur-md border border-[#f1c232]/40 p-6 rounded-2xl shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Table columns={columns} data={rows} />
        </motion.div>
      </section>

      <Footer />
    </section>
  );
}
