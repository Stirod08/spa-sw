

export default function SobreSpaira() {

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16 place-items-stretch">
                <article className="flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2 uppercase text-verdeOscuro">Sobre Spaira</h2>

                    <p>En <span className="marca">Spaira</span> creemos que el verdadero bienestar nace cuando el <strong>cuerpo, la mente y el espíritu están en armonía.</strong> Por eso hemos creado un lugar donde puedas desconectar de la rutina, dejar atrás el estrés y reconectar con lo que más importa: <strong>tú mismo.</strong></p>
                    <br />

                    <p>Nuestro spa se inspira en la naturaleza, en el fluir del agua, en el silencio de los bosques y en la pureza de la tierra. Utilizamos métodos tradicionales junto con la última tecnología en cuidado corporal para ofrecerte una <strong>experiencia de renovación integral,</strong> personalizada y respetuosa con el entorno. En <span className="marca">Spaira</span> estás en manos de expertos que están ahí para guiarte en cada paso de tu camino hacia el equilibrio. </p>
                </article>
                <video src="videoSpaira.mp4" loop muted autoPlay></video>
            </section>
        </>
    )
}

