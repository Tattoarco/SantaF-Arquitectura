import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Fondo from "../assets/fondoHome.jpg";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
  import Timeline from "../components/timeline";
import Gallery from "../pages/Gallery";
import MakingOf from "../pages/MakingOff";

export default function Home() {
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
      <img src={Fondo} alt="Fondo" className="absolute inset-0 w-full h-screen object-cover bg-slate-900" />
      {/* Capa oscura */}
      <div className="absolute h-screen inset-0 bg-[#00000078]"></div>
      {/* Degradado inferior */}
      <div className="gradient-bottom absolute bottom-0 w-full h-[15rem] bg-gradient-to-t from-[#0f172a] to-[#0f172a09]"></div>

      <Navbar />

      {/* Texto centrado con animación */}
      <div id="home" className="h-screen flex flex-col items-center justify-center relative z-10 text-white text-center">
        <h1 className="text-8xl font-bold mb-4 tracking-wider opacity-0 translate-y-10 animate-fadeUp">Arquitectura</h1>
        <h2 className="text-3xl opacity-0 translate-y-10 animate-fadeUp delay-200">Explora con nosotros sobre Santa Fé de Antioquia.</h2>
      </div>

      <section id="gallery" className="h-screen">
        <Gallery />
      </section>

      <section id="history"  >
        <Timeline />
      </section>

      <section id="makingOff" className="h-screen">
        <MakingOf/>
      </section>

      <Footer />
    </section>
  );
}
