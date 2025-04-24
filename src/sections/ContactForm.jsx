import {
  illustrations,
} from "@/data/images";

const ContactForm = () => {
  return (
    
    <section className="py-12 bg-[#124119] text-white relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Contáctanos</h2>
        
        <div className="grid grid-cols-1 gap-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nombre" className="block mb-2">
                Nombre*
              </label>
              <input
                type="text"
                id="nombre"
                placeholder="Nombres"
                className="w-full px-3 py-2 rounded bg-white text-black"
              />
            </div>
            <div>
              <input
                type="text"
                id="apellidos"
                placeholder="Apellidos"
                className="w-full px-3 py-2 rounded bg-white text-black mt-8"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-2">
              Correo Electrónico*
            </label>
            <input
              type="email"
              id="email"
              placeholder="GeoportalViche@correo.com"
              className="w-full px-3 py-2 rounded bg-white text-black"
            />
          </div>
          
          <div>
            <label htmlFor="mensaje" className="block mb-2">
              Mensaje*
            </label>
            <textarea
              id="mensaje"
              rows={6}
              className="w-full px-3 py-2 rounded bg-white text-black"
            ></textarea>
          </div>
          
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium px-8 py-2 rounded"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
      {/* Decorative element */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3">
        <img
          src={illustrations.trapiche.src}
          alt=""
          className="w-full h-full object-contain object-right"
        />
      </div>
    </section>
  );
};

export default ContactForm;
