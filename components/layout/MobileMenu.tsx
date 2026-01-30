"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    navLinks: { href: string; label: string }[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col animate-in fade-in slide-in-from-top-5 duration-300">
            <div className="flex justify-between px-5 py-3 border-b border-gray-300 items-center bg-white shadow-sm">
                <div className="flex items-center gap-5">
                    <Image src="/tooth.svg" alt="logo" width={40} height={40} />
                    <div className="flex flex-col items-start">
                        <span className="text-2xl font-bold">Deposito dental</span>
                        <span className="text-primary text-sm font-bold">Plazas del sol</span>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 text-gray-600 hover:text-black transition-colors"
                    aria-label="Cerrar menú"
                >
                    <X size={28} />
                </button>
            </div>

            <nav className="flex-1 overflow-y-auto py-8">
                <ul className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={onClose}
                                className="text-2xl font-medium hover:text-primary transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li className="mt-4">
                        <a
                            href="#contacto"
                            onClick={onClose}
                            className="flex items-center justify-center bg-primary text-black px-8 py-3 rounded-xl font-bold text-lg hover:shadow-md transition-all active:scale-95"
                        >
                            Cotizar ahora
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="p-8 border-t border-gray-100 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Deposito dental Plazas del sol
            </div>
        </div>
    );
}
