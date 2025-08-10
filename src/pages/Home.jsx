import Footer from "../components/footer";
import Navbar from "../components/navbar";
import fondo from "../assets/fondoHome.jpg";

export default function Home() {
  return (
    <section className="h-screen">
      <img src={fondo} alt="Fondo" className="absolute inset-0 w-full h-full object-cover" />
      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-[#00000078]"></div>
      <div className="gradient-bottom absolute bottom-0  w-full h-[20rem] bg-gradient-to-t from-[#0f172a] to-[#0f172a09]"></div>

      <Navbar />
      <div className="relative z-10 h-screen flex items-center justify text-white">
        <div className="break-words max-w-md ml-52 ">
          <h1 className="text-5xl font-bold mb-4 tracking-[5px] ">Explora la arquitectura de Santa Fé de Antioquia</h1>
        </div>
      </div>

      <div className="h-screen rounded-t-3xl"></div>
      <Footer />
    </section>
  );
}
