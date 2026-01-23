import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between py-10 px-5 border-t border-gray-300 items-center bg-[#193c4d] text-white gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-15">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-5">
            <Image src="/tooth.svg" alt="logo" width={40} height={40} />
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold">Deposito dental</span>
              <span className="text-yellow-500 text-sm font-bold">
                Plazas del sol
              </span>
            </div>
          </div>
          <p className="max-w-[50ch] text-sm text-gray-300">
            Tu proveedor de confianza para todo tipo de productos y materiales
            dentales. Más de 10 años sirviendo a profesionales de la salud
            dental en Queretaro.
          </p>
          <div className="flex gap-2 flex-row">
            <a href="https://www.facebook.com/DepositoDentalPlazasDelSol">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={30}
                height={30}
              />
            </a>
            <a href="https://www.facebook.com/DepositoDentalPlazasDelSol">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={30}
                height={30}
              />
            </a>
            <a href="https://maps.app.goo.gl/prn1sBAohZWGh4os5">
              <Image src="/maps.svg" alt="maps" width={30} height={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Horario de Atención</h3>
          <p className="text-sm max-w-[30ch] text-gray-300">
            <strong>Lunes a Viernes:</strong>
            <br />
            9:00 a.m. - 7:00 p.m.
          </p>
          <p className="text-sm max-w-[30ch] text-gray-300">
            <strong>Sábado:</strong>
            <br />
            9:00 a.m. - 2:00 p.m.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-bold">Contacto</h3>
          <p className="text-sm max-w-[30ch] text-gray-300">
            Av. Luis Vega Monrroy 701, zona dos extendida, Plazas del Sol 1ra
            Secc, 76099 Santiago de Querétaro, Qro.
          </p>
          <p className="text-sm max-w-[30ch] text-gray-300">+52 442 403 8726</p>
        </div>
      </div>

      <div className="flex justify-center border-t border-gray-500 pt-5">
        <p>
          © 2026 Depósito Dental Plazas del Sol. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
