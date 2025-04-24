import {
  icons,
} from "@/data/images";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-4 mt-2.5">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="text-sm">
          Geoportal Viche 2025 - Todos los derechos reservados
        </div>
        <div className="border h-1/2 py-2"></div>
        <div className="flex gap-3">
          <a href="#" aria-label="Twitter">
            <img src={icons.xIcon.src} alt={icons.xIcon.src} />
          </a>
          <a href="#" aria-label="Youtube">
            <img src={icons.youtubeIcon.src} alt={icons.youtubeIcon.src} />
          </a>
          <a href="#" aria-label="Instagram">
            <img src={icons.igIcon.src} alt={icons.igIcon.src} />
          </a>
          <a href="#" aria-label="WhatsApp">
            <img src={icons.whatsappIcon.src} alt={icons.whatsappIcon.src} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
