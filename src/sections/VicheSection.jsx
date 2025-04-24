import {
  illustrations,
  backgrounds,
  elements,
} from "@/data/images";

const VicheSection = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center max-w-6xl">
        {/* Left column - Text and Illustration */}
        <div className="text-center ">
          <h2 className="text-7xl font-bold text-green-900 mb-2">El Viche</h2>
          <p className="text-3xl text-gray-700 mb-8">Una bebida de tradición e historia</p>
          
          <div className="relative w-72 h-w-72 mx-auto mb-8">
            <img
              src={illustrations.viche.src}
              alt="Ilustración de el viche"
              className="w-full h-full object-contain"
            />
          </div>

          <button className="w-2/5 border-2 border-green-600 text-green-600 py-2 px-8 rounded-md text-2xl font-bold hover:bg-green-600 hover:text-white transition-colors cursor-pointer">
            Ver más
          </button>
        </div>

        {/* Right column - Images */}
        <div className="relative h-[600px] flex items-center">
          {/* Primera imagen (superior) */}
          <div className="absolute left-0 top-0 w-96 h-[400px] z-10">
            <img
              src={backgrounds.img2.src}
              alt="Personas trabajando con plantas"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          {/* Segunda imagen (inferior) */}
          <div className="absolute right-0 bottom-0 w-96 h-[380px]">
            <img
              src={backgrounds.img1.src}
              alt="Plantas de viche"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Decorative leaves */}
      <div className="absolute -left-20 top-0 bottom-0 w-96">
        <img
          src={elements.leavesL.src}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute -right-20 top-0 bottom-0 w-96">
        <img
          src={elements.leavesR.src}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
};

export default VicheSection;