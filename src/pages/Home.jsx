import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Table from "../components/table";
import Gallery from "../components/Gallery";

import papel from "../assets/casaHome.PNG";
import imgInicio from "../assets/fondoHome.jpg";
import fondo from "../assets/principal.jpg";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

  const columns = ["Espacio del hogar", "Uso principal", "Género asociado", "Significado social / simbólico", "Transformación actual"];

  const rows = [
    {
      espacio_del_hogar: "Zaguán (entrada)",
      uso_principal: "Recibir visitas, tránsito entre lo público y lo doméstico",
      género_asociado: "Masculino / público",
      "significado_social_/_simbólico": "Simbolizaba el control masculino del acceso al hogar y la vigilancia del contacto con el exterior.",
      transformación_actual: "Hoy mantiene la función de recibidor, pero se percibe como un espacio neutro y abierto al tránsito.",
    },
    {
      espacio_del_hogar: "Patio central",
      uso_principal: "Centro de ventilación, descanso y reunión familiar",
      género_asociado: "Femenino / doméstico",
      "significado_social_/_simbólico": "Era el corazón de la vida doméstica: trabajo, crianza, conversación femenina y cohesión familiar.",
      transformación_actual: "Conserva su valor como lugar de encuentro, aunque es más compartido y menos jerarquizado.",
    },
    {
      espacio_del_hogar: "Sala principal",
      uso_principal: "Recibir visitas, actos sociales y exhibición del estatus",
      género_asociado: "Masculino / público",
      "significado_social_/_simbólico": "Representaba la autoridad del patriarca y la visibilidad de la familia en la esfera social.",
      transformación_actual: "Se ha convertido en espacio de convivencia o múltiple uso, con menor carga jerárquica.",
    },
    {
      espacio_del_hogar: "Cocina y despensa",
      uso_principal: "Preparación de alimentos y gestión del hogar",
      género_asociado: "Femenino / laboral",
      "significado_social_/_simbólico": "Lugar de saberes y tareas femeninas, central en la reproducción social y doméstica.",
      transformación_actual: "Hoy se integra más al comedor o al espacio común, reflejando dinámicas más igualitarias.",
    },
    {
      espacio_del_hogar: "Habitaciones interiores",
      uso_principal: "Descanso, intimidad y crianza",
      género_asociado: "Femenino / privado",
      "significado_social_/_simbólico": "Asociadas a la esfera privada, al cuidado, al recogimiento y al encierro simbólico femenino.",
      transformación_actual: "Sigue siendo lugar de privacidad, pero el uso y su significado se han flexibilizado.",
    },
  ];

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }, 200);
      }
    }
  }, [location.state]);

  return (
    <section className="relative bg-gradient-to-b from-[#0a1123] to-[#111827] text-white overflow-hidden">
      {/* Fondo principal */}
      <img src={fondo} alt="Fondo" className="absolute inset-0 w-full h-screen object-cover opacity-80" />
      <div className="absolute inset-0 bg-[#00000090]" />

      <Navbar />

      {/* Encabezado principal */}
      <motion.div className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-4" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl md:text-6xl font-[Playfair_Display] tracking-widest uppercase text-[#f1c232] drop-shadow-md">El alma de los espacios</h1>
        <h2 className="text-lg md:text-xl mt-4 italic text-[#d8c18b]">Arquitectura y vida en Santa Fé de Antioquia</h2>
        <div className="mt-8 w-24 border-t-[3px] border-[#f1c232]" />
      </motion.div>

      {/* Imagen + texto tipo artículo */}
      <section className="relative bg-[#0f172a]/90 py-20 px-6 md:px-20 flex flex-col md:flex-row gap-12 items-center border-t border-[#f1c232]/30">
        <motion.div className="w-full md:w-1/2 border border-[#f1c232]/50 p-2 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.6)]" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <img src={imgInicio} alt="Casa colonial Santa Fe" className="rounded-lg object-cover w-full h-full" />
        </motion.div>

        <motion.div className="w-full md:w-1/2 leading-relaxed font-light tracking-wide text-justify" initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <p className="italic text-gray-200">“En Santa Fé de Antioquia, los espacios hablan en silencio. Entre muros coloniales y patios de sombra viva, el habitar se convierte en memoria viva del territorio.”</p>
          <p className="mt-4 italic text-gray-200">Cada arco, cada ventana y cada piedra guardan el pulso de un pueblo que aprendió a vivir entre historia y permanencia.</p>
          <p className="mt-6 text-right text-[#f1c232] font-semibold italic">— Cronista anónimo</p>
        </motion.div>
      </section>

      {/* Contexto */}
      <section className="relative bg-[#0b1326] px-8 md:px-32 py-16">
        <img src={papel} alt="textura fondo" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <motion.div className="relative z-10 max-w-5xl mx-auto bg-[#111c35]/20 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-[#f1c232]/30" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <h2 className="text-3xl font-[Playfair_Display] text-center text-[#f1c232] mb-6">
            <i className="fa-solid fa-feather-pointed mr-2"></i>
            Contexto
          </h2>
          <div className="columns-1 md:columns-2 gap-8 text-sm md:text-base text-gray-100 leading-relaxed">
            <p>La investigación sobre el patrimonio arquitectónico de Santa Fe de Antioquia permitió comprender cómo la historia, la arquitectura y la vida social se entrelazan en una ciudad que mantiene viva su memoria colonial.</p>
            <p>Santa Fe conserva un estilo colonial español, con fachadas sobrias y techos de barro. Su arquitectura refleja el orden urbano impuesto por la colonia, pero también la adaptación al clima y a la vida local.</p>
            {showMore && (
              <>
                <p>Como menciona Hernández Ciro (2021), la ciudad debe entenderse como un “producto social”, resultado del trabajo conjunto de indígenas, afrodescendientes y mestizos que dieron forma a su identidad patrimonial.</p>
                <p>Los relatos orales revelaron cómo las antiguas técnicas constructivas siguen siendo parte de la identidad local.</p>
              </>
            )}
          </div>

          <motion.button onClick={() => setShowMore(!showMore)} className="block mx-auto mt-6 bg-gradient-to-r from-[#f1c232] to-[#c40909] px-6 py-2 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(241,194,50,0.5)]" whileTap={{ scale: 0.95 }}>
            {showMore ? "Ver menos..." : "Leer más..."}
          </motion.button>
        </motion.div>
      </section>

      {/* Galería */}
      <div className=" bg-[#0b1326]">
        <Gallery />
      </div>

      {/* Tabla final */}
      <section className="relative bg-[#0b1326] pb-10 px-10 md:px-32 pt-12">
        <motion.h2 className="text-3xl font-[Playfair_Display] text-center text-[#f1c232] mb-8" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <i className="fa-solid fa-venus-mars mr-2"></i>
          Roles de género en el hogar
        </motion.h2>
        <div className="text-justify flex flex-col gap-y-5 mb-2">
          <p>
            La configuración del hogar de la élite en la época colonial y decimonónica en ciudades como Santa Fe de Antioquia (y por extensión en ámbitos similares de la región) revela cómo el espacio doméstico participaba de las jerarquías de género y de las relaciones de poder. Como señalan Suzy Bermúdez y Diana Urbano, en su artículo “Los espacios en los hogares de la élite santafereña en el
            siglo XIX desde una perspectiva de género”, los distintos recintos del hogar no eran neutros: estaban asociados a usos, roles y valores que reforzaban la distinción entre lo público–masculino y lo doméstico–femenino.
          </p>
          <p>La siguiente tabla sintetiza cinco espacios clave del hogar tradicional, su uso, el género asociado, su significado simbólico y cómo han sido reinterpretados en el presente.</p>
        </div>
        <motion.div className="bg-[#111c35]/70 backdrop-blur-md border border-[#f1c232]/40 p-6 rounded-2xl shadow-lg" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.2 }}>
          <Table columns={columns} data={rows} />
        </motion.div>
      </section>

      <Footer />
    </section>
  );
}
