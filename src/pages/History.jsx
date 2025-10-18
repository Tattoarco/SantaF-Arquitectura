import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TimeLine from "../components/timeline";

import Periodico from "../assets/periodico.jpg";

export default function History() {
  return (
    <section className="bg-[#0f172a] ">
      <Navbar />
      {/* Encabezado tipo periódico */}
      <header className="relative z-10 py-16 px-10 md:px-24 text-center border-b-[1px] border-amber-300/60 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Periodico})` }}>
        <div className="absolute inset-0 bg-[#0a1930]/70 backdrop-blur-[1px]"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-[Playfair_Display] font-bold tracking-wider text-amber-300 drop-shadow-md uppercase">
            <i className="fa-solid fa-landmark mr-3 text-amber-500"></i>
            Crónica de una ciudad viva
          </h1>
          <h3 className="mt-3 text-xl italic text-gray-200">La historia y la arquitectura de Santa Fé de Antioquia</h3>
        </div>
      </header>

      {/* Sección de video + texto */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 px-10 md:px-24">
        <div className="flex justify-center">
          <div className="p-[3px] bg-gradient-to-r from-[#c9a227] via-[#c40909] to-[#c9a227] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.6)] animate-gradient-x">
            <iframe width="400" height="250" src="https://www.youtube.com/embed/5t_uoaTkllk?autoplay=1&mute=1&loop=1&playlist=5t_uoaTkllk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-lg" />
          </div>
        </div>

        <article className="col-span-2 bg-[#00000070] backdrop-blur-sm p-6 rounded-xl border border-amber-200/40 text-white">
          <p className="indent-8 leading-relaxed text-justify">Fundada en 1541 por el mariscal Jorge Robledo, Santa Fe de Antioquia fue durante siglos el corazón político y cultural del occidente colombiano. Declarada primera capital del departamento, su legado colonial aún se respira en cada calle empedrada, en las casas de balcones de madera y en los templos que guardan el paso del tiempo.</p>

          <p className="mt-4 indent-8 leading-relaxed text-justify">Entre el brillo del sol y el murmullo del río Cauca, la ciudad conserva una atmósfera tranquila que conecta pasado y presente. Su arquitectura, declarada Monumento Nacional, y el majestuoso Puente de Occidente son símbolos del ingenio y la tradición antioqueña que aún perduran.</p>

          <p className="mt-4 indent-8 leading-relaxed text-justify text-amber-300">Veamos en esta línea de tiempo cómo fue construido Santa Fé de Antioquia a lo largo de los años...</p>
        </article>
      </div>

      {/* Separador decorativo */}
      <div className="px-[20%] my-12">
        <div className="h-[2px] w-full bg-gradient-to-r from-[#c9a227] via-[#c40909] to-[#c9a227]" />
      </div>

      {/* Línea de tiempo */}
      <section className="relative z-10 px-6 md:px-24">
        <h2 className="text-4xl font-[Playfair_Display] mb-8 text-center text-amber-300 uppercase tracking-wide">
          <i className="fa-solid fa-clock-rotate-left mr-2 text-amber-500"></i>
          Línea de tiempo
        </h2>
        <TimeLine />
      </section>

      {/* Materiales */}
      <section className="relative z-10 bg-[#00000080] mx-10 md:mx-24 my-16 p-10 rounded-2xl border border-amber-300/30">
        <h2 className="text-3xl font-[Playfair_Display] mb-4 text-amber-300">
          <i className="fa-solid fa-hammer mr-2 text-amber-500"></i>
          Materiales
        </h2>
        <p className="text-justify leading-relaxed text-gray-200">Conoce los principales materiales utilizados en la construcción de las casas coloniales y cómo cada elemento —el barro, la cal, la madera y la piedra— cuenta la historia de una tradición que ha resistido los siglos.</p>
      </section>

      <Footer />
    </section>
  );
}
