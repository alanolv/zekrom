"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#marcas", label: "Marcas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="flex justify-between px-5 py-3 border-b border-gray-300 items-center fixed top-0 w-full z-50 bg-white shadow-lg">
        <div className="flex items-center gap-5">
          <Image src="/tooth.svg" alt="logo" width={40} height={40} />
          <div className="flex flex-col items-start">
            <span className="text-2xl font-bold">Deposito dental</span>
            <span className="text-primary text-sm font-bold">
              Plazas del sol
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex gap-6 items-center justify-center"
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

        {/* Desktop CTA */}
        <a
          href="#contacto"
          className="hidden lg:flex items-center justify-center bg-primary text-black p-1 px-2 rounded-lg font-bold text-sm h-11 hover:text-gray-100"
        >
          Cotizar ahora
        </a>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden items-center justify-center bg-primary text-black p-5 px-2 rounded-lg font-bold text-sm h-11 hover:text-gray-100 relative z-50"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <div className="w-[25px] h-[25px] relative">
            {/* Hamburger / X icon with animation */}
            <span
              className={`absolute left-0 w-full h-[2.5px] bg-black rounded transition-all duration-300 ${
                isOpen
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : "top-[4px] rotate-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2.5px] bg-black rounded transition-all duration-300 ${
                isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
              }`}
            />
            <span
              className={`absolute left-0 w-full h-[2.5px] bg-black rounded transition-all duration-300 ${
                isOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-[4px] rotate-0"
              }`}
            />
          </div>
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <nav
        aria-label="Navegación móvil"
        className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-2xl lg:hidden transition-all duration-400 ease-out ${
          isOpen
            ? "mobile-menu-open"
            : "mobile-menu-closed"
        }`}
      >
        <div className="pt-[76px] pb-6 px-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`mobile-menu-item ${isOpen ? "mobile-menu-item-visible" : ""}`}
                style={{ transitionDelay: isOpen ? `${index * 60 + 100}ms` : "0ms" }}
              >
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 px-4 text-lg font-medium text-gray-700 hover:text-primary hover:bg-amber-50 rounded-xl transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="flex items-center justify-center bg-primary text-black py-3 px-6 rounded-xl font-bold text-base hover:brightness-110 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Cotizar ahora
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
