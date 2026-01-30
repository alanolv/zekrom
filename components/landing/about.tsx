import Image from "next/image";
import { Truck, Clock, ShieldCheck } from "lucide-react";

export default function About() {
    return (
        <section
            id="nosotros"
            className="relative w-full bg-primary py-20 lg:py-2"
            aria-labelledby="about-heading"
        >
            {/* Background decorations wrapper */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 opacity-10 rotate-12 scale-150 blur-[1px]">
                    <Image
                        src="/tooth.svg"
                        alt=""
                        width={200}
                        height={200}
                        style={{ filter: "brightness(0) invert(1)" }}
                    />
                </div>

                <div className="absolute bottom-20 right-20 opacity-10 -rotate-12 scale-125 blur-[1px]">
                    <Image
                        src="/tooth.svg"
                        alt=""
                        width={250}
                        height={250}
                        style={{ filter: "brightness(0) invert(1)" }}
                    />
                </div>

                <div className="absolute top-1/2 left-1/4 opacity-5 rotate-45 scale-100 blur-[2px]">
                    <Image
                        src="/tooth.svg"
                        alt=""
                        width={150}
                        height={150}
                        style={{ filter: "brightness(0) invert(1)" }}
                    />
                </div>

                <div className="absolute top-20 right-1/3 opacity-5 -rotate-6 scale-75">
                    <Image
                        src="/tooth.svg"
                        alt=""
                        width={180}
                        height={180}
                        style={{ filter: "brightness(0) invert(1)" }}
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center w-full min-h-[90vh] px-4 sm:px-6">
                <div className="text-center max-w-5xl w-full">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-white/90 uppercase mb-2 block">
                        ¿Por qué nosotros?
                    </span>

                    <h2
                        id="about-heading"
                        className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        Excelencia en suministros dentales
                    </h2>

                    <p className="text-base sm:text-lg text-white/80 max-w-[55ch] mx-auto leading-relaxed">
                        En Depósito Dental Plazas del Sol nos comprometemos a brindarte la
                        mejor experiencia de compra y servicio, con productos de la más alta
                        calidad para tu consultorio.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 w-full">
                        <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-white/20 rounded-full mb-4">
                                <Truck className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <span className="text-white font-medium text-center">
                                Envíos a todo Querétaro
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-white/20 rounded-full mb-4">
                                <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <span className="text-white font-medium text-center">
                                Más de 10 años de experiencia
                            </span>
                        </div>

                        <div className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="p-3 bg-white/20 rounded-full mb-4">
                                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <span className="text-white font-medium text-center">
                                Productos de la mejor calidad
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}