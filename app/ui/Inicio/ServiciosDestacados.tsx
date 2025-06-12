import { servicios } from "@/app/data/servicios"
import Image from "next/image"

export default function ServiciosDestacados() {

    return (
        <>
            <section className="my-8">
                <h2 className="text-2xl font-bold mb-2 uppercase text-verdeOscuro text-center">Servicios</h2>
                <p className="md:max-w-3xl mx-auto text-center">Explora los rituales diseñados para renovar tu cuerpo y reconectar con tu energía. Cada servicio ha sido pensado para darte una experiencia transformadora y profundamente relajante.</p>
                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-8 mx-auto place-items-stretch">
                    {servicios.map(servicio => (
                        <article key={servicio.id} className="border border-gray-300 ">
                            <Image className="object-cover w-full" src={servicio.image} alt={servicio.title}  width={500} height={500}/>
                            <section className="p-4 text-center">
                                <h3 className="text-xl font-bold my-4">{servicio.title}</h3>
                            <p>{servicio.description}</p>
                            </section>
                        </article>
                    ))}
                </section>
            </section>
        </>
    )
}