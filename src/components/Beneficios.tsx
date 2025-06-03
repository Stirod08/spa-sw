export default function Beneficios() {
  return (
    <section className="py-16">
      <h2 className="titulo uppercase pb-4">Beneficios</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        
        <div className="flex flex-col items-center">
          <svg width="64" height="64" fill="none" stroke="#3a5221" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 24 24">
            <path d="M12 2s-6 7-6 11a6 6 0 0012 0c0-4-6-11-6-11z"/>
            <circle cx="12" cy="13" r="1.5"/>
          </svg>
          <p className="mt-4 text-lg font-medium text-gray-700">Ambiente zen y armonioso</p>
        </div>

        <div className="flex flex-col items-center">
          <svg width="64" height="64" fill="none" stroke="#3a5221" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 24 24">
            <path d="M12 2v2m6.364 1.636l-1.414 1.414M20 12h-2M17.364 18.364l-1.414-1.414M12 20v-2M6.636 17.364l1.414-1.414M4 12h2M6.636 6.636l1.414 1.414M9 12a3 3 0 106 0 3 3 0 00-6 0z"/>
          </svg>
          <p className="mt-4 text-lg font-medium text-gray-700">Aromaterapia con aceites esenciales</p>
        </div>

        <div className="flex flex-col items-center">
          <svg width="64" height="64" fill="none" stroke="#3a5221" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            viewBox="0 0 24 24">
            <path d="M12 14v7m0 0h5m-5 0H7m8-5v-4a4 4 0 10-8 0v4m12 0h-2m-8 0H4"/>
          </svg>
          <p className="mt-4 text-lg font-medium text-gray-700">Personal altamente certificado</p>
        </div>

      </div>
    </section>
  );
}
