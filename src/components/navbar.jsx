import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // íconos

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
      setOpen(false); // cerrar menú si está abierto
    }
  };

  const NavButton = ({ id, children }) => {
    if (location.pathname === "/") {
      return (
        <button onClick={() => handleScroll(id)} className="transition rounded-3xl px-4 py-1 hover:bg-[#ffffff4d] hover:scale-110">
          {children}
        </button>
      );
    }
    return (
      <Link to="/" state={{ scrollTo: id }} onClick={() => setOpen(false)} className="transition rounded-3xl px-4 py-1 hover:bg-[#ffffff4d]">
        {children}
      </Link>
    );
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50">
      <div className="h-20 flex items-center justify-between px-6 text-white">
        {/* Logo */}
        <div className="font-bold text-xl flex justify-center">Santa Fé</div>

        {/* Menú desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-6 border border-amber-50 rounded-full px-6 py-2">
            <NavButton id="home">Inicio</NavButton>
            <NavButton id="gallery">Galería</NavButton>
            <NavButton id="history">Historia</NavButton>
            <NavButton id="makingOff">Making off</NavButton>
          </div>
        </div>

        <div >Holaaaa</div>

        {/* Botón hamburguesa mobile */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>{open ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
      </div>

      {/* Fondo oscuro clickeable */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black z-40" onClick={() => setOpen(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", stiffness: 80 }} className="fixed top-0 right-0 w-64 h-full bg-[#070000b1] text-white shadow-2xl p-6 flex flex-col items-center justify-center gap-6 z-50">
              <NavButton id="home">Inicio</NavButton>
              <NavButton id="gallery">Galería</NavButton>
              <NavButton id="history">Historia</NavButton>
              <NavButton id="makingOff">Making off</NavButton>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
