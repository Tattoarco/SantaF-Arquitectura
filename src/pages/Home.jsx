import Footer from "../components/footer";
import Navbar from "../components/navbar";
import fondo from "../assets/fondoHome.jpg";

export default function Home() {
  return (
    <section className="relative h-screen">
      <img
        src={fondo}
        alt="Fondo"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 bg-[#00000078]"></div>

      <Navbar />
      <div className="relative z-10 h-screen flex items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">¡Hola, Tenemos que hacer algoo!</h1>
      </div>
      {/* <Footer /> */}
    </section>
  );
}
