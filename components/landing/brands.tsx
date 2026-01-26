import { Star } from "lucide-react";

export default function Brands() {
    const brands = Array(6).fill({ name: "3M" });

    return (
        <section id="marcas" className="py-24 bg-gray-50" aria-labelledby="brands-heading">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">Confianza Total</span>
                    <h2 id="brands-heading" className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        Nuestras Marcas
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Trabajamos con los líderes mundiales en odontología para garantizar la excelencia en cada tratamiento.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:from-primary/10 group-hover:to-primary/5 transition-colors">
                                <Star className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-2xl font-black text-gray-300 group-hover:text-primary transition-colors tracking-tighter">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
