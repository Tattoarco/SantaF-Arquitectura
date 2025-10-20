import PropTypes from "prop-types";
import { Info } from "lucide-react";

export default function Card({ titulo, parrafos, img, referencias, audios }) {
  return (
    <section className="w-full border-2 border-amber-400/30 rounded-2xl p-4 bg-[#0b1326]/60 backdrop-blur-md shadow-lg relative">
      {/* Título */}
      <h2 className="text-xl md:text-2xl font-[Playfair_Display] mb-4 text-amber-300 text-center">
        {titulo}
      </h2>

      {/* Imagen */}
      {img && (
        <img
          src={img}
          alt={titulo}
          className="w-full h-64 object-cover rounded-xl mb-4 border border-amber-300/40 shadow-md"
        />
      )}

      {/* Contenido */}
      <article className="flex flex-col gap-y-3 text-gray-200 text-justify leading-relaxed">
        {Array.isArray(parrafos)
          ? parrafos.map((p, i) => <p key={i}>{p}</p>)
          : <p>{parrafos}</p>}
      </article>

      {/* Audios (opcional) */}
      {audios && audios.length > 0 && (
        <div className="mt-6 space-y-4">
          <h3 className="text-lg text-amber-300 font-[Playfair_Display] text-center">
            Entrevistas sobre la construcción santafereña
          </h3>
          {audios.map((audio, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-sm italic text-gray-300 mb-2 text-center">
                {audio.descripcion}
              </p>
              <audio controls className="w-full md:w-3/4 rounded-lg">
                <source src={audio.src} type="audio/mpeg" />
                Tu navegador no soporta la reproducción de audio.
              </audio>
            </div>
          ))}
        </div>
      )}

      {/* Tooltip de referencias */}
      {referencias && (
        <div className="mt-4 flex justify-start">
          <div className="relative group flex items-center gap-1 text-sm text-amber-400/80 cursor-pointer">
            <Info size={16} />
            <span>Ver fuente</span>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs p-2 rounded-lg shadow-md text-left z-10">
              {referencias}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

Card.propTypes = {
  titulo: PropTypes.string.isRequired,
  parrafos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  img: PropTypes.string,
  referencias: PropTypes.string,
  audios: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      descripcion: PropTypes.string,
    })
  ),
};
