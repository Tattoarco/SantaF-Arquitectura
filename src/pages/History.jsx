import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TimeLine from "../components/timeline";

import HistoryFoto1 from "../assets/fondoHome1.png";
import HistoryPapel from "../assets/historyPapel.webp";

export default function History() {
  return (
    <section className="bg-[#0f172a] ">
      <Navbar />
      <div>
        <img src={HistoryPapel} alt="Fondo papel" className="absolute inset-0 w-full h-[11.5rem]  object-cover z-0 grayscale-75" />

        <div className="pt-25 pl-20 relative z-10">
          <h2 className="text-3xl font-bold">Conoce como se construyó Santa Fé</h2>
          <h3 className="text-xl font-medium">y como la cultura influyó.</h3>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-4 mt-15 px-15 ">
        <div>
          <iframe width="400" height="250 " src="https://www.youtube.com/embed/5t_uoaTkllk?autoplay=1&mute=1&loop=1&playlist=5t_uoaTkllk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-3xl shadow-lg" />
        </div>
        <div className="col-span-2 text-white text-justify pt-5">
          <p>Fundada en 1541 por el mariscal Jorge Robledo, Santa Fe de Antioquia fue durante siglos el corazón político y cultural del occidente colombiano. Declarada primera capital del departamento, su legado colonial aún se respira en cada calle empedrada, en las casas de balcones de madera y en los templos que guardan el paso del tiempo.</p>
          <p className="mt-4">Entre el brillo del sol y el murmullo del río Cauca, la ciudad conserva una atmósfera tranquila que conecta pasado y presente. Su arquitectura, declarada Monumento Nacional, y el majestuoso Puente de Occidente son símbolos del ingenio y la tradición antioqueña que aún perduran.</p>
          <p className="mt-4">Veamos en esta línea de tiempo como fue connstruido Santa Fé de Antioquia a lo largo de los años...</p>
        </div>
      </div>

      <div className="px-[20%]">
        <div className="h-1 w-full mt-10 bg-amber-200/45" />
      </div>
      <TimeLine />

      <div className="text-white">
        <h2>Materiales</h2>
        <p>Conece los principales materiales utilizados para realizar casas y un poco sobre su historia</p>
      </div>

      <Footer />
    </section>
  );
}
