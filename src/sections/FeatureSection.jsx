import { cards } from "@/data/images";
import { ArrowRight } from "lucide-react";

const DestacadosSection = () => {
  return (
    <section className="py-12 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Destacados</h2>
      <p className="text-center max-w-4xl mx-auto mb-12">
        Descubra las publicaciones mas destacadas del Geoportal Viche y manténgase actualizado con las 
        novedades estadísticas del territorio .
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-15 mx-auto ">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="rounded-lg overflow-hidden shadow-lg/25 bg-white"
          >
            <div className="h-64 relative">
              <img
                src={card.img.src}
                alt={card.img.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-2xl">{card.title}</h3>
              <div className="flex justify-end mt-4">
                <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md cursor-pointer">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        <div className="border rounded-full p-0.5 border-green-600">
          <div className="w-3 h-3 rounded-full bg-green-600" />
        </div>
        <div className="p-0.5">
          <div className="w-3 h-3 rounded-full bg-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default DestacadosSection;
