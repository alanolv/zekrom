import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between p-5 border-b border-gray-300 items-center">
      <div className="flex items-center gap-5">
        <Image src="/tooth.svg" alt="logo" width={40} height={40} />
        <div className="flex flex-col items-start">
          <span className="text-2xl font-bold">Deposito dental</span>
          <span className="text-yellow-500 text-sm font-bold">
            Plazas del sol
          </span>
        </div>
      </div>
      <nav
        aria-label="Navegación principal"
        className="flex gap-6 items-center justify-center"
      >
        <ul className="flex gap-6">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/catalogo">Catálogo</a>
          </li>
          <li>
            <a href="/contacto">Contacto</a>
          </li>
        </ul>
      </nav>

      <a
        href="/contacto"
        className="flex items-center justify-center bg-yellow-500 text-black p-1 px-2 rounded-lg font-bold text-sm h-11"
      >
        Cotizar ahora
      </a>
    </header>
  );
}
