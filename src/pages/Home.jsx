import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Gallery from "../pages/Gallery";
import Navbar from "../components/navbar";

// import papel from "../assets/papel.png";
import imgInicio from "../assets/fondoHome.jpg";
import fondo from "../assets/principal.jpg";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const location = useLocation();

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
    <section className="bg-slate-900">
      {/* Fondo */}
      <img src={fondo} alt="Fondo" className="absolute inset-0 w-full h-screen object-cover bg-slate-900" />
      {/* Capa oscura */}
      <div className="absolute h-screen inset-0 bg-[#00000078]"></div>
      {/* Degradado inferior */}
      <div className="gradient-bottom absolute bottom-0 w-full h-[15rem] bg-gradient-to-t from-[#0f172a] to-[#0f172a09]"></div>

      <Navbar />

      {/* Texto centrado con animación */}
      <div id="home" className="h-screen flex flex-col items-center justify-center relative z-10 text-white text-center">
        <h1 className="text-7xl font-bold mb-4 tracking-wider opacity-0 translate-y-10 animate-fadeUp">El alma de los espacios</h1>
        <h2 className="text-3xl opacity-0 translate-y-10 animate-fadeUp delay-200">Arquitectura y vida en Santa Fé de Antioquia</h2>
      </div>

      {/* Segundo texto */}

      <div className="bg-gradient-to-b from-slate-900 to-slate-950 px-6 py-16  text-white flex gap-10">
        {/* Imagen con borde degradado */}
        <div className="relative flex justify-center group">
          <div className="w-full md:w-full p-[3px] rounded-xl bg-gradient-to-r from-[#c9a227] via-[#c40909] to-[#c9a227] shadow-[0_0_40px_rgba(0,0,0,0.6)] animate-gradient-x">
            <img src={imgInicio} alt="casa colonial Santa Fe de Antioquia" className="rounded-lg object-cover w-full h-full" />
          </div>

          {/* Tooltip */}
          <span className="absolute bottom-[-2.5rem] bg-slate-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">Imágen tomada de: </span>
        </div>

        {/* Texto poético */}
        <div className="text-center md:text-left px-4 md:px-0">
          <p className="text-base md:text-lg font-light leading-relaxed italic">En Santa Fé de Antioquia, los espacios hablan en silencio.</p>

          <p className="mt-4 text-sm md:text-base font-light leading-relaxed italic">Entre muros coloniales y patios de sombra viva, el habitar se convierte en memoria: un gesto que enlaza el pasado colonial con los albores de la república.</p>

          <p className="mt-4 text-sm md:text-base font-light leading-relaxed italic">Cada arco, cada ventana y cada piedra guardan el pulso de un pueblo que aprendió a vivir entre historia y permanencia.</p>

          <p className="mt-6 text-right text-sm font-semibold italic text-[#c9a227]">— Cronista anónimo</p>
        </div>
      </div>

      <div className="relative bg-slate-950 px-6 md:px-40 lg:px-45 flex flex-col  text-justify py-16">
        {/* Imagen de fondo */}
        {/* <img src={papel} alt="textura de papel" className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" /> */}

        {/* Contenido encima */}
        <div className="relative z-10  text-white font-extralight bg-black/55 p-10 rounded-2xl">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-left drop-shadow-lg flex justify-center">Contexto</h2>

          <p>La investigación sobre el patrimonio arquitectónico de Santa Fe de Antioquia permitió comprender cómo la historia, la arquitectura y la vida social se entrelazan en una ciudad que mantiene viva su memoria colonial.</p>

          <p className="mt-4">
            En el primer acercamiento, se identificó que Santa Fe conserva un estilo colonial español, con fachadas sobrias, techos de teja de barro y calles empedradas trazadas en forma de cuadrícula. Su arquitectura refleja el orden urbano impuesto por la colonia, pero también la adaptación al clima y a la vida local, usando materiales como el adobe, la tapia pisada y la madera. Como menciona
            Hernández Ciro (2021), la ciudad debe entenderse como un “producto social”, resultado del trabajo conjunto de indígenas, afrodescendientes y mestizos que dieron forma a su identidad patrimonial.
          </p>

          {/* Texto expandible */}
          <div className={`transition-all duration-700 ease-in-out overflow-hidden ${showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
            <p className="mt-4">Durante la investigación de campo, el grupo realizó entrevistas y registros fotográficos que mostraron la importancia del parque principal como eje de la vida social. Para los habitantes, el patrimonio no se limita a los edificios, sino que incluye los usos cotidianos del espacio, la convivencia y la memoria colectiva.</p>

            <p className="mt-4">Los relatos orales revelaron cómo las antiguas técnicas constructivas —como el uso de bahareque o corteza de roble— siguen siendo parte de la identidad local, junto con la diferenciación entre las casas coloniales del centro y las viviendas populares de las periferias.</p>

            <p className="mt-4">
              Ambos informes coinciden en que el patrimonio de Santa Fe de Antioquia no es solo un conjunto de muros antiguos, sino un tejido vivo de historia, arquitectura y comunidad. Su valor radica tanto en la conservación material como en la memoria de las personas que han habitado y transformado este espacio a lo largo del tiempo (Montoya et al., 2017; Alcaldía de Santa Fe de Antioquia,
              2020).
            </p>
          </div>

          {/* Botón */}
          <button onClick={() => setShowMore(!showMore)} className="mt-6 self-center bg-gradient-to-r from-[#c9a227] to-[#c40909] px-6 py-2 rounded-2xl cursor-pointer text-white font-medium hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(201,162,39,0.5)]">
            {showMore ? "Ver menos..." : "Ver más..."}
          </button>
        </div>
      </div>

      <div className="h-screen">
        <div className="justify-center h-full flex flex-col px-20">
          <h2 className="text-4xl font-bold mb-10 text-center md:text-left drop-shadow-lg text-white flex justify-center">Mapa sensorial</h2>
          <Gallery />
        </div>
      </div>

      <Footer />
    </section>
  );
}
