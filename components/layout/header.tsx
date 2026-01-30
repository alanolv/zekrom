"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-yellow-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#contacto"
          className="flex hidden lg:flex items-center justify-center bg-primary text-black p-1 px-2 rounded-lg font-bold text-sm h-11 hover:text-gray-100"
        >
          Cotizar ahora
        </a>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex lg:hidden items-center justify-center bg-white text-black p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <Menu size={25} />
        </button>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
