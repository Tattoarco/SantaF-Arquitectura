import Fondo from "../assets/fondoHome.jpg";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Gallery from "../pages/Gallery";

export default function Home() {
  return (
    <section className="h-screen">
      {/* Fondo */}
      <img src={Fondo} alt="Fondo" className="absolute inset-0 w-full h-full object-cover" />
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-[#00000078]"></div>
      {/* Degradado inferior */}
      <div className="gradient-bottom absolute bottom-0 w-full h-[20rem] bg-gradient-to-t from-[#0f172a] to-[#0f172a09]"></div>

      <Navbar />

      {/* Texto centrado con animación */}
      <div id="home" className="h-full flex flex-col items-center justify-center relative z-10 text-white text-center ">
        <h1 className="text-8xl font-bold mb-4 tracking-wider opacity-0 translate-y-10 animate-fadeUp">Arquitectura</h1>
        <h2 className="text-3xl opacity-0 translate-y-10 animate-fadeUp delay-200">Explora con nosotros sobre Santa Fé de Antioquia.</h2>
      </div>

      <section id="gallery">
        <Gallery />
      </section>

      <Footer />
    </section>
  );
}
