import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto px-5 py-24 " aria-labelledby="hero-heading">
      <div className="flex flex-col md:flex-row items-center gap-16 justify-center mx-auto">
        {/* Texto */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left ">
          <h1
            id="hero-heading"
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 "
          >
            Todo para tu <br />
            <span className="text-primary font-bold">Consultorio Dental</span>
          </h1>

          <p className="text-xl text-gray-500 mb-8 max-w-[42ch]">
            Equipamiento, insumos y tecnología dental de alta calidad para
            odontólogos y clínicas en{" "}
            <strong className="text-primary">Querétaro</strong>. Precios
            competitivos y entrega confiable.
          </p>
          <div className="flex flex-col">
            <p className="text-md text-gray-600 mb-2 max-w-[40ch] flex items-center gap-2">
              <Image src="/check.svg" alt="Check" width={20} height={20} />
              Más de 10 años de experiencia
            </p>
            <p className="text-md text-gray-600 mb-2 max-w-[40ch] flex items-center gap-2">
              <Image src="/check.svg" alt="Check" width={20} height={20} />
              Marcas de primera calidad
            </p>
            <p className="text-md text-gray-600 mb-8 max-w-[40ch] flex items-center gap-2">
              <Image src="/check.svg" alt="Check" width={20} height={20} />
              Envios a todo Queretaro
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="#productos"
              className="bg-primary font-bold text-white px-6 py-3 rounded-lg text-sm hover:bg-primary/80 transition"
            >
              Ver productos
            </a>

            <a
              href="#contacto"
              className="border border-gray-300 px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
              Cotizar ahora
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative w-full max-w-md">
          <Image
            src="/hero.png"
            alt="Productos y equipamiento para consultorio dental"
            width={500}
            height={500}
            priority
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
