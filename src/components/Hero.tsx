import Boton from "@/utility/Boton"

export default function Hero({ url }: { url: string }) {

    return (
        <>
            <section className="relative h-96 xl:h-[480px] 2xl:h-[600px] bg-center bg-no-repeat bg-cover"
            style={{backgroundImage:`url(image/${url}.jpg)`}}>
                
                <div className="absolute bg-black/50 w-full h-full flex flex-col items-center justify-center">
                    <h1 className="font-bold text-4xl md:text-6xl 2xl:text-8xl text-center mb-10 text-emerald-50">Desconecta - Respira - Renace</h1>
                    <p className="contenedor text-emerald-50 text-[20px] text-center">En <strong>Serena Spa & Wellness</strong>, transformamos el estrés en paz interior con experiencias sensoriales únicas en Medellín.</p>
                    <Boton url="#servicios" title=" Servicios"/>
                </div>
            </section>

        </>
    )
}