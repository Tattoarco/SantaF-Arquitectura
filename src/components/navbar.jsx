export default function Navbar() {
  return (
    <nav className="fixed top-2 left-0 w-full z-50 animate-slideDownFade">
      <div className="flex text-white">
        {/* Logo */}
        <div className="grid place-content-center font-bold text-xl size-14 grow-3">Santa Fé</div>

        {/* Links */}
        <div className="flex justify-between items-center border border-amber-50 rounded-full px-5">
          {["Inicio", "Galería", "Historia", "Making off"].map((item, idx) => (
            <a key={idx} href={`#${item.toLowerCase().replace(" ", "")}`} className="transition-all duration-300 rounded-3xl px-4 py-1 hover:bg-[#ffffff4d] group flex items-center">
              {item}
              <i className="fa-solid fa-arrow-down ml-1 transform translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 text-orange-600"></i>
            </a>
          ))}
        </div>

        {/* Placeholder */}
        <div className="size-14 grow-3 grid place-content-center">holaaaaa</div>
      </div>
    </nav>
  );
}
