import { tecnologias } from "@/app/data/tecnologias"
import Image from "next/image"


export default function Tecnologias() {

    return (
        <>
            <section className="container mx-auto px-8">
                <h2 className="text-4xl font-extrabold mb-6 mt-16 text-center uppercase text-verdeOscuro">Tecnología con propósito</h2>
                <p className="md:max-w-3xl mx-auto text-center">En Spaira, creemos que el bienestar se potencia con innovación. Por eso usamos equipos de última generación que complementan nuestras terapias con resultados visibles y respetuosos.</p>

                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 my-8">
                    {tecnologias.map(tecnologia => (

                        <article className="relative w-full" key={tecnologia.id}>
                            <Image
                                className="object-cover w-full"
                                src={`/${tecnologia.img}.jpg`}
                                alt={tecnologia.title}
                                width={1920}
                                height={1080}
                            />
                            <section className="bg-verdeClaro p-4 md:h-30 flex flex-col justify-between shadow-lg shadow-verdeOscuro/50">
                                <h3 className="text-lg font-bold text-blanco text-center">{tecnologia.title}</h3>
                                <p className="text-blanco text-center text-sm">{tecnologia.description}</p>
                            </section>
                        </article>


                    ))}
                </section>

            </section>
        </>
    )
}
