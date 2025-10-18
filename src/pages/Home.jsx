import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
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
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Fondo principal */}
      <img
        src={fondo}
        alt="Fondo"
        className="absolute inset-0 w-full h-screen object-cover"
      />
      <div className="absolute inset-0 bg-[#00000091]" />

      <Navbar />

      {/* Encabezado tipo periódico */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen px-4">
        <h1 className="text-6xl md:text-7xl font-[Playfair_Display] tracking-widest uppercase text-[#c9a227] drop-shadow-md">
          El alma de los espacios
        </h1>
        <h2 className="text-xl md:text-2xl mt-4 italic text-[#d8c18b]">
          Arquitectura y vida en Santa Fé de Antioquia
        </h2>
        <div className="mt-8 w-32 border-t-[3px] border-[#c9a227]" />
      </div>

      {/* Imagen + texto tipo artículo */}
      <div className="relative bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-20 px-6 md:px-20 flex flex-col md:flex-row gap-12 items-center border-t border-[#c9a227]/40">
        <div className="w-full md:w-1/2 border-2 border-[#c9a227] p-2 rounded-xl shadow-[0_0_25px_rgba(0,0,0,0.6)]">
          <img
            src={imgInicio}
            alt="Casa colonial Santa Fe"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 leading-relaxed font-light tracking-wide text-justify">
          <p className="italic text-[#eae6df]">
            “En Santa Fé de Antioquia, los espacios hablan en silencio. Entre
            muros coloniales y patios de sombra viva, el habitar se convierte en
            memoria viva del territorio.”
          </p>
          <p className="mt-4 italic text-[#eae6df]">
            Cada arco, cada ventana y cada piedra guardan el pulso de un pueblo
            que aprendió a vivir entre historia y permanencia.
          </p>
          <p className="mt-6 text-right text-[#c9a227] font-semibold italic">
            — Cronista anónimo
          </p>
        </div>
      </div>

      {/* Contexto tipo columna de periódico */}
      <div className="relative bg-slate-950 px-8 md:px-32 py-16">
        <img
          src={papel}
          alt="textura fondo"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 max-w-5xl mx-auto bg-[#0f172a]/60 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-[#c9a227]/30">
          <h2 className="text-4xl font-[Playfair_Display] text-center text-[#c9a227] mb-6">
            <i className="fa-solid fa-feather-pointed mr-2"></i>
            Contexto
          </h2>
          <div className="columns-1 md:columns-2 gap-8 text-sm md:text-base text-[#eae6df] leading-relaxed">
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

          <button
            onClick={() => setShowMore(!showMore)}
            className="block mx-auto mt-6 bg-gradient-to-r from-[#c9a227] to-[#c40909] px-6 py-2 rounded-xl font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_10px_rgba(201,162,39,0.5)]"
          >
            {showMore ? "Ver menos..." : "Leer más..."}
          </button>
        </div>
      </div>

      {/* Galería*/}
      <div className="relative bg-slate-950">
        <Gallery />
      </div>

      {/* Tabla final */}
      <div className="relative bg-slate-950 pb-4 px-10 md:px-32 pt-10">
        <h2 className="text-3xl font-[Playfair_Display] text-center text-[#c9a227] mb-8">
          <i className="fa-solid fa-venus-mars mr-2"></i>
          Roles de género en el hogar colonial
        </h2>
        <div className="bg-[#0f172a]/70 backdrop-blur-md border border-[#c9a227]/40 p-6 rounded-2xl shadow-lg">
          <Table columns={columns} data={rows} />
        </div>
      </div>

      <Footer />
    </section>
  );
}
