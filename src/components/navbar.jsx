import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Componente NavItem simplificado (solo navegación)
  const NavItem = ({ to, children }) => {
    const isActive = location.pathname === to;

    return (
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className={`transition rounded-3xl px-4 py-1 hover:bg-[#ffffff4d] hover:scale-110 ${
          isActive ? "bg-[#ffffff2d]" : ""
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="h-20 flex items-center justify-between px-6 text-white">
        {/* Logo */}
        <div className="font-bold text-xl">Santa Fé</div>

        {/* Menú desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-6 border border-amber-50 rounded-full px-6 py-2">
            <NavItem to="/">Inicio</NavItem>
            <NavItem to="/History">Historia</NavItem>
            <NavItem to="/Proyecto">Proyecto</NavItem>
            <NavItem to="/MakingOff">Making off</NavItem>
          </div>
        </div>

        {/* Ejemplo de texto u otro botón */}
        <div>Holaaaa</div>

        {/* Botón hamburguesa mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil (overlay + panel) */}
      <AnimatePresence>
        {open && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* Panel lateral */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 right-0 w-64 h-full bg-[#070000b1] text-white shadow-2xl p-6 flex flex-col items-center justify-center gap-6 z-50"
            >
              <NavItem to="/">Inicio</NavItem>
              <NavItem to="/History">Historia</NavItem>
              <NavItem to="/Proyecto">Proyecto</NavItem>
              <NavItem to="/MakingOff">Making off</NavItem>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
