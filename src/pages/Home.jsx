import Footer from "../components/footer";
import Navbar from "../components/navbar";
import fondo from "../assets/fondoHome.jpg";

export default function Home() {
  return (
    <section className="h-screen">
      <img src={fondo} alt="Fondo" className="absolute inset-0 w-full h-full object-cover" />
      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-[#00000078]"></div>

      <Navbar />
      <div className="relative z-10 h-screen flex items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">¡Hola, Tenemos que hacer algoo!</h1>
      </div>
      <div className="gradient-bottom absolute bottom-0  w-full h-[20rem] z-10 bg-gradient-to-t from-[#0f172a] to-[#0f172a0b] "></div>

      <div className="h-screen bg-[#0f172a]"></div>
      <Footer />
    </section>
  );
}
