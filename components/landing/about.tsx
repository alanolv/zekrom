import Image from "next/image";
import { Truck, Clock, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <section className="relative w-full overflow-hidden py-20" aria-labelledby="about-heading" id="about-container">
            <div id="about-container-inside" className="flex items-center justify-center relative z-10 w-full">
                {/* Liquid Glass Background Elements */}
                <div className="absolute top-10 left-10 opacity-10 rotate-12 transform scale-150 blur-[1px] pointer-events-none">
                    <Image src="/tooth.svg" alt="" width={200} height={200} className="drop-shadow-2xl" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="absolute bottom-20 right-20 opacity-10 -rotate-12 transform scale-125 blur-[1px] pointer-events-none">
                    <Image src="/tooth.svg" alt="" width={250} height={250} className="drop-shadow-2xl" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="absolute top-1/2 left-1/4 opacity-5 rotate-45 transform scale-100 blur-[2px] pointer-events-none">
                    <Image src="/tooth.svg" alt="" width={150} height={150} className="drop-shadow-2xl" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <div className="absolute top-20 right-1/3 opacity-5 -rotate-6 transform scale-75 blur-none pointer-events-none">
                    <Image src="/tooth.svg" alt="" width={180} height={180} className="drop-shadow-2xl" style={{ filter: 'brightness(0) invert(1)' }} />
                </div>

                <div className="flex flex-col md:col-row items-center justify-center mx-auto relative z-20 px-6">
                    <div className="text-center max-w-4xl">
                        <span className="text-2xl font-bold tracking-tight text-white/90 uppercase mb-2 block">¿Por que nosotros?</span>
                        <h2 id="about-heading" className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Excelencia en suministros dentales</h2>
                        <p className="text-lg text-white/80 max-w-[50ch] mx-auto leading-relaxed">
                            En Depósito Dental Plazas del Sol nos comprometemos a brindarte la mejor experiencia de compra y servicio, con productos de la más alta calidad para tu consultorio.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-primary/20 rounded-full mb-4">
                                    <Truck className="w-8 h-8 text-primary" />
                                </div>
                                <span className="text-white font-medium text-center">Envíos a todo Querétaro</span>
                            </div>

                            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-primary/20 rounded-full mb-4">
                                    <Clock className="w-8 h-8 text-primary" />
                                </div>
                                <span className="text-white font-medium text-center">Más de 10 años de experiencia</span>
                            </div>

                            <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                                <div className="p-3 bg-primary/20 rounded-full mb-4">
                                    <ShieldCheck className="w-8 h-8 text-primary" />
                                </div>
                                <span className="text-white font-medium text-center">Productos de la mejor calidad</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}