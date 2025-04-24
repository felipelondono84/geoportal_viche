import { Link } from "react-router-dom";

const NodosSection = () => {
  const nodos = [
    {
      name: "Alto y medio Baudó",
      slug: "alto-y-medio-baudo",
      image: "/assets/card_alto_baudo.png",
    },
    {
      name: "Costa Pacífica Nariñense",
      slug: "costa-pacifica-narinense",
      image: "/assets/card_pacifica_narino.png",
    },
    {
      name: "Bajo Baudó",
      slug: "bajo-baudo",
      image: "/assets/card_bajo_baudo.png",
    },
  ];

  return (
    <section className="py-10 bg-gray-50 max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Nodos</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {nodos.map((nodo, idx) => (
          <div key={idx} className="bg-white rounded shadow overflow-hidden">
            <img
              src={nodo.image}
              alt={nodo.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold">{nodo.name}</h3>
              <div className="flex gap-2">
                <Link
                  to={`/nodo/${nodo.slug}`}
                  className="bg-gray-800 text-white px-3 py-1 text-xs rounded"
                >
                  Conoce más
                </Link>
                <a
                  href={`/geovisor?nodo=${nodo.slug}`}
                  className="bg-indigo-600 text-white px-3 py-1 text-xs rounded"
                >
                  Ver geovisor
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NodosSection;
