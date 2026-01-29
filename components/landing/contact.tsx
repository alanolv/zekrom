"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
    const WHATSAPP_NUMBER = "524421234567"; // Modificar con el número real (incluyendo código de país)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const { name, email, message } = formData;

        const text = `Hola, mi nombre es ${name}.\nMi correo es: ${email}\n\nMensaje: ${message}`;
        const encodedText = encodeURIComponent(text);

        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`, "_blank");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    return (
        <section id="contacto" className="mx-auto px-5 py-20 sm:py-24 md:py-20 lg:py-12" aria-labelledby="contact-heading">
            {/* Título arriba */}
            <div className="text-center mb-16">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Deposito Dental Plazas del Sol</span>
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Contactanos
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    Estamos a tu disposición para resolver cualquier duda o solicitud.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch gap-12 justify-center max-w-7xl mx-auto">
                {/* Mapa de Google */}
                <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-0 rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.45479748678085!2d-100.37922654300931!3d20.576752354005873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d344c5eba96e33%3A0x8118cede5e850487!2sDeposito%20dental%20plazas%20del%20Sol!5e0!3m2!1ses-419!2smx!4v1769706662999!5m2!1ses-419!2smx" width="600" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                {/* Formulario */}
                <div className="w-full lg:w-1/2 max-w-xl bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Tu nombre completo"
                                className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm focus:border-primary focus:ring-primary transition-all p-3 border"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="tu@email.com"
                                className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm focus:border-primary focus:ring-primary transition-all p-3 border"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                            <textarea
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="¿En qué podemos ayudarte?"
                                className="mt-1 block w-full rounded-xl border-gray-200 shadow-sm focus:border-primary focus:ring-primary transition-all p-3 border"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-4 px-6 rounded-xl font-bold hover:bg-primary/90 transition-all hover:shadow-lg active:scale-[0.98]"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}