export default function Faq() {
  const faqs = [
    {
      pregunta: '¿Necesito agendar con anticipación?',
      respuesta:
        'Sí. Te recomendamos reservar al menos 24 horas antes para garantizar tu horario preferido. Puedes hacerlo por WhatsApp o directamente desde nuestro sitio web.',
    },
    {
      pregunta: '¿Qué debo llevar a mi cita?',
      respuesta:
        'Nada más que tu disposición para relajarte. Nosotros te proveeremos todo lo necesario: batas, toallas y productos.',
    },
    {
      pregunta: '¿Puedo cancelar o reprogramar mi cita?',
      respuesta:
        'Claro. Solo te pedimos avisar con mínimo 6 horas de anticipación. Así damos espacio a otra persona que necesite su momento de pausa.',
    },
    {
      pregunta: '¿Los tratamientos son personalizados?',
      respuesta:
        'Totalmente. Antes de iniciar, realizamos una breve consulta para adaptar cada técnica a tus necesidades del día.',
    },
  ];
  return (
    <>
      <section className="container mx-auto px-8">
        <h2 className="text-4xl font-extrabold mb-6 mt-16 text-center uppercase text-verdeOscuro">
          Preguntas Frecuentes
        </h2>
        <p className="italic font-light text-gray-900 text-center">
          Sabemos que cuidar de ti también implica tener claridad. Aquí respondemos lo más consultado por nuestra
          comunidad Spaira.
        </p>

        <article className="space-y-4 max-w-3xl mx-auto my-12">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-gray-200 rounded-md p-4">
              <summary className="cursor-pointer font-medium text-verdeOscuro">{faq.pregunta}</summary>
              <p className="mt-2 text-sm text-gray-600">{faq.respuesta}</p>
            </details>
          ))}
        </article>
      </section>
    </>
  );
}
