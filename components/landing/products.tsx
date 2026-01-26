

import products from "./data/productCategory";

export default function Products() {
    return (
        <section className="mx-auto px-5 py-10 " aria-labelledby="products-heading">
            <div className="flex flex-col md:col-row items-center  justify-center mx-auto">
                <span className="text-2xl font-bold tracking-tight text-primary text-center">Nuestros Productos</span>
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Categorias de productos</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-[50ch] mx-aut text-center">Contamos con un amplio inventario de productos dentales para satisfacer todas las necesidades de tu consultorio.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16 max-w-6xl mx-auto">
                {products.map((product) => (
                    <div key={product.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                            <product.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <a href="#contacto" className="bg-primary font-bold text-white px-6 py-3 rounded-lg text-sm hover:bg-primary/80 transition">
                    Cotizar
                </a>
            </div>
        </section>
    )
}