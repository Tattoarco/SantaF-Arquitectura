export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
        <div className="flex text-white">
          <div className="  grid place-content-center font-bold text-xl size-14 grow-3 ">
            Santa Fé
            </div>

          <div className="flex justify-center items-center  size-14 grow-7">
            <a href="#inicio" className="transition  rounded-xl px-4 py-1 hover:bg-orange-500">
              Inicio
            </a>
            <a href="#historia" className="transition  rounded-xl px-4 py-1 hover:bg-orange-500">
              Historia
            </a>
            <a href="#galeria" className="transition  rounded-xl px-4 py-1 hover:bg-orange-500">
              Galería
            </a>
            <a href="#contacto" className="transition  rounded-xl px-4 py-1 hover:bg-orange-500">
              Making off
            </a>
          </div>

          <div className="size-14 grow-3  grid place-content-center">
            holaaaaa
          </div>
        </div>
    </nav>
  );
}
