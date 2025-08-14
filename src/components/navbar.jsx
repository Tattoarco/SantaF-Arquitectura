import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 80; // ajuste por navbar
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  const NavButton = ({ id, children }) => {
    if (location.pathname === "/") {
      return (
        <button
          onClick={() => handleScroll(id)}
          className="transition rounded-3xl px-4 py-1 hover:bg-[#ffffff4d] group"
        >
          {children}
        </button>
      );
    }
    return (
      <Link
        to="/"
        state={{ scrollTo: id }}
        className="transition rounded-3xl px-4 py-1 hover:bg-[#ffffff4d] group"
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-2 left-0 w-full z-50">
      <div className="flex text-white">
        <div className="grid place-content-center font-bold text-xl size-14 grow-3">Santa Fé</div>

        <div className="flex justify-between items-center border border-amber-50 rounded-full px-5">
          <NavButton id="home">Inicio</NavButton>
          <NavButton id="gallery">Galería</NavButton>
          <NavButton id="history">Historia</NavButton>
          <NavButton id="makingOff">Making off</NavButton>
        </div>

        <div className="size-14 grow-3 grid place-content-center">Holaaa</div>
      </div>
    </nav>
  );
}
