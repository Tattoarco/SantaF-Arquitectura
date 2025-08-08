import LogoU from "../assets/logoUPB.png";

export default function Footer() {
  return (
    <footer className=" bg-linear-65 from-purple-500 to-orange-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        {/* Logo UPB */}
        <div className="flex justify-center md:justify-start">
          <img
            src={LogoU} 
            alt="Logo UPB"
            className="h-16 ml-20"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-lg font-semibold">Universidad Pontificia Bolivariana</h2>
          <p>Diseño de Entretenimiento Digital - 2025</p>
        </div>        
      </div>

      <div className="mt-4 text-center text-sm text-orange-200">&copy; {new Date().getFullYear()} Universidad Pontificia Bolivariana. Todos los derechos reservados.</div>
    </footer>
  );
}
