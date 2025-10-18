import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const NavItem = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={() => setOpen(false)}
        className={`transition rounded-3xl px-4 py-1 hover:bg-[#ffffff2b] hover:scale-110 ${
          isActive ? "bg-[#ffffff30]" : ""
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 text-white">
      <div className="h-20 flex items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center gap-2 text-amber-400 font-bold text-2xl tracking-widest">
          <i className="fa-solid fa-landmark text-amber-500"></i>
          Santa Fé
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-8 px-6 py-2 border border-amber-300/40 rounded-full bg-transparent backdrop-blur-0">
            <NavItem to="/">Inicio</NavItem>
            <NavItem to="/History">Historia</NavItem>
            <NavItem to="/Proyecto">Proyecto</NavItem>
            <NavItem to="/MakingOff">Making off</NavItem>
          </div>
        </div>

        {/* Ícono decorativo o botón */}
        <div className="text-amber-400">
          <i className="fa-solid fa-church text-lg"></i>
        </div>

        {/* Menú móvil */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú móvil lateral */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 80 }}
              className="fixed top-0 right-0 w-64 h-full bg-[#0a0a0aa9] text-white shadow-2xl p-6 flex flex-col items-center justify-center gap-6 z-50"
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
