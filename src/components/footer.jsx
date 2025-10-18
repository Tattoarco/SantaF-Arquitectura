import Logo from "/logo.jpg";

export default function Footer() {
  return (
    <footer className="relative bg-[#0f172a] text-white py-10 border-t border-amber-400/20 shadow-[0_-4px_20px_rgba(0,0,0,0.4)]">
      {/* Overlay decorativo sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Columna 1 - Logo y nombre */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={Logo}
            alt="Logo Gomal´s"
            className="h-24 w-24 object-cover rounded-3xl border-2 border-amber-400 shadow-lg"
          />
          <h2 className="mt-4 text-2xl font-bold text-amber-300 font-[Playfair_Display]">
            Gomal´s Studio
          </h2>
          <p className="text-sm text-amber-100/80">
            Diseño de Entretenimiento Digital – 2025
          </p>

          {/* Iconos sociales */}
          <div className="flex gap-5 mt-4 text-lg text-amber-300">
            <a href="#" className="hover:text-white transition-all duration-300">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition-all duration-300">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-white transition-all duration-300">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Columna 2 - Nosotros */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-amber-400 mb-3">
            Nosotros
          </h3>
          <p className="text-sm leading-relaxed text-gray-200">
            Somos estudiantes de{" "}
            <span className="font-semibold text-amber-300">
              Diseño de Entretenimiento Digital
            </span>
            , apasionados por la creatividad, la innovación y la tecnología.
            Este proyecto refleja nuestro compromiso con el arte, la cultura y
            la memoria arquitectónica de Santa Fé de Antioquia.
          </p>
        </div>

        {/* Columna 3 - Enlaces */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-amber-400 mb-3">
            Enlaces
          </h3>
          <ul className="space-y-3 text-sm text-amber-100">
            <li>
              <a
                href="#about"
                className="hover:text-white transition duration-300"
              >
                Sobre el proyecto
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-white transition duration-300"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#timeline"
                className="hover:text-white transition duration-300"
              >
                Línea del tiempo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="relative mt-10 border-t border-amber-400/20 pt-4 text-center text-sm text-amber-200/80 tracking-wide">
        &copy; {new Date().getFullYear()} Gomal´s Studio — Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
