import { links } from "@/data/router";
import { partners, icons } from "@/data/images";

const Header = () => {
  return (
    <header>
      <nav className="bg-green-700 text-white h-[109px] w-full relative">
        {/* Contenedor principal con paddings laterales fijos */}
        <div className="w-full ps-[90px] pe-[50px] flex items-center justify-between h-full">
          {/* Izquierda: logo principal */}
          <div className="flex items-center gap-2 text-2xl shrink-0">
            <div>
              <span className="text-white text-3xl font-bold">Geo</span>
              <span className="text-white text-3xl font-light">portal</span>
            </div>
            <img
              src={icons.vicheIcon.src}
              alt={icons.vicheIcon.alt}
              className="h-16 w-auto"
            />
          </div>

          {/* Derecha: logos aliados */}
          <div className="flex items-center space-x-3 shrink-0">
            {partners.map((partner, idx) => (
              <img
                key={idx}
                src={partner.src}
                alt={partner.alt}
                className="h-14 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* Centro: navegación */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center space-x-8 text-white text-2xl">
          {links.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:underline">
              {link.title}
            </a>
          ))}
        </div>


      </nav>
    </header>
  );
};

export default Header;
