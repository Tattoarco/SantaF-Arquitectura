export default function Navbar() {
  return (
    <nav className="fixed top-2 left-0 w-full z-50 ">
      <div className="flex text-white">
        <div className="  grid place-content-center font-bold text-xl size-14 grow-3 ">Santa Fé</div>

        <div className="flex justify-between items-center border border-amber-50 rounded-full px-5 ">
          <a href="#home" className="transition  rounded-3xl px-4 py-1 hover:bg-[#ffffff4d] group ">
            Inicio
            <i className="fa-solid fa-arrow-down ml-1 opacity-0 group-hover:opacity-100 text-orange-600"></i>
          </a>
          <a href="#gallery" className="transition  rounded-3xl px-4 py-1 hover:bg-[#ffffff4d] group ">
            Galeria
            <i className="fa-solid fa-arrow-down ml-1 opacity-0 group-hover:opacity-100 text-orange-600"></i>
          </a>
          <a href="#history" className="transition  rounded-3xl px-4 py-1 hover:bg-[#ffffff4d] group ">
            Historia
            <i className="fa-solid fa-arrow-down ml-1 opacity-0 group-hover:opacity-100 text-orange-600"></i>
          </a>
          <a href="#makingOff" className="transition  rounded-3xl px-4 py-1 hover:bg-[#ffffff4d] group ">
            Making off
            <i className="fa-solid fa-arrow-down ml-1 opacity-0 group-hover:opacity-100 text-orange-600"></i>
          </a>
        </div>

        <div className="size-14 grow-3  grid place-content-center">holaaaaa</div>
      </div>
    </nav>
  );
}
