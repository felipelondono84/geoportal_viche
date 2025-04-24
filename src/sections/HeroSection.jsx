import { Play } from "lucide-react";
import {
  banner,
} from "@/data/images";

const HeroSection = () => {
  return (
    <section className="relative h-[600px]">
      <img
        src={banner.bg.src}
        alt={banner.bg.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10">
        <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">Geoportal el Viche</h1>
        <p className="max-w-xl text-sm px-4">
          Portal web para la gestión y visualización de información geográfica
          del territorio
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <img src={banner.bannerHillsBottom.src} alt={banner.bg.alt} />
      </div>
      <div className="absolute -top-20 right-0">
        <img src={banner.bannerCurveTop.src} alt={banner.bg.alt} />
      </div>
    </section>
  );
};

export default HeroSection;
