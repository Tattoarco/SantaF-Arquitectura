import LogoU from "/logo.jpg";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white py-12 overflow-hidden">
      {/* Overlay degradado sutil */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo y título */}
        <div className="flex flex-col items-center md:items-start">
          <img src={LogoU} alt="Logo UPB" className="h-28 rounded-3xl shadow-lg border-4 border-white/20" />
          <h2 className="mt-4 text-xl font-bold">Universidad Pontificia Bolivariana</h2>
          <p className="text-sm text-orange-100">Diseño de Entretenimiento Digital - 2025</p>
        </div>

        {/* Nosotros */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Nosotros</h3>
          <p className="text-sm leading-relaxed text-orange-100">
            Somos estudiantes de <span className="font-bold">Diseño de Entretenimiento Digital</span>, apasionados por la creatividad, la innovación y la tecnología. Este proyecto refleja nuestro compromiso con el arte, la cultura y el desarrollo digital.
          </p>
        </div>

        {/* Enlaces / contacto */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Enlaces</h3>
          <ul className="space-y-2 text-sm text-orange-100">
            <li>
              <a href="#galeria" className="hover:text-white transition">
                Galería
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                Sobre el proyecto
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea final */}
      <div className="relative mt-10 border-t border-white/20 pt-4 text-center text-sm text-orange-200">&copy; {new Date().getFullYear()} Universidad Pontificia Bolivariana. Todos los derechos reservados.</div>
    </footer>
  );
}
  