import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between px-5 py-3 border-b border-gray-300 items-center fixed top-0 w-full z-50 bg-white shadow-lg">
      <div className="flex items-center gap-5">
        <Image src="/tooth.svg" alt="logo" width={40} height={40} />
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold">Deposito dental</span>
          <span className="text-primary text-sm font-bold">Plazas del sol</span>
        </div>
      </div>

      <nav
        aria-label="Navegación principal"
        className="flex hidden lg:flex gap-6 items-center justify-center"
      >
        <ul className="flex gap-6">
          <li>
            <a href="#inicio" className="hover:text-yellow-500">
              Inicio
            </a>
          </li>
          <li>
            <a href="#productos" className="hover:text-yellow-500">
              Productos
            </a>
          </li>
          <li>
            <a href="#marcas" className="hover:text-yellow-500">
              Marcas
            </a>
          </li>
          <li>
            <a href="#nosotros" className="hover:text-yellow-500">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-yellow-500">
              Contacto
            </a>
          </li>
        </ul>
      </nav>

      <a
        href="/contacto"
        className="flex hidden lg:flex items-center justify-center bg-primary text-black p-1 px-2 rounded-lg font-bold text-sm h-11 hover:text-gray-100"
      >
        Cotizar ahora
      </a>
      <button className="flex lg:hidden items-center justify-center bg-primary text-black p-5 px-2 rounded-lg font-bold text-sm h-11 hover:text-gray-100">
        <Image src="/menu.svg" alt="menu" width={25} height={25} />
      </button>
    </header>
  );
}
