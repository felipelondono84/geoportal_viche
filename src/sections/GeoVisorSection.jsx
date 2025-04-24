import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { illustrations, icons } from "@/data/images";
import { geovisorNodes } from "@/data/geovisors";

const GeoVisorSection = () => {
  const [activeNodeId, setActiveNodeId] = useState(1);
  
  const activeNode = geovisorNodes.find(node => node.id === activeNodeId) || geovisorNodes[0];

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-green-800">Geovisor</h2>
          <h3 className="text-xl mb-1">Nodos</h3>
          <div className="w-56 h-1 bg-green-700 mx-auto mb-6"></div>
          
          <p className="max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            sed nulla et eros mattis elementum. Sed et nibh odio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto relative">
          {/* Left Column - Buttons */}
          <div className="flex flex-col gap-3 relative z-10 w-80">
            {geovisorNodes.map((node) => (
              <button
                key={node.id}
                className={`py-3 px-6 rounded-lg text-left text-2xl font-medium cursor-pointer shadow-md/35 ${
                  node.id === activeNodeId
                    ? "bg-green-700 text-white"
                    : "bg-white border border-green-800 text-green-700 hover:bg-green-100"
                }`}
                onClick={() => setActiveNodeId(node.id)}
              >
                {node.name}
              </button>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <div className="bg-green-600 text-white py-5 px-6" style={{ backgroundImage: "url('./images/backgrounds/headers/bg-header.png')" }}>
              <h3 className="text-2xl font-bold text-center">
                {activeNode.name}
              </h3>
            </div>
            
            <div className="p-8">
              <p className="text-center mb-10">
                {activeNode.description}
              </p>
              
              <div className="flex justify-center mb-8">
                <img
                  src={icons.mapIcon.src}
                  alt={icons.mapIcon.alt}
                  className="w-20 h-20"
                />
              </div>
              
              <div className="flex justify-center gap-4 flex-wrap">
                <a 
                  href={activeNode.geovisorLink} 
                  className="border border-green-600 text-green-600 py-2 px-5 rounded-full flex items-center gap-1 text-sm"
                >
                  VER GEOVISOR <ArrowUpRight className="w-4 h-4" />
                </a>
                <a 
                  href={activeNode.moreInfoLink} 
                  className="border border-yellow-500 text-yellow-500 py-2 px-5 rounded-full flex items-center gap-1 text-sm"
                >
                  CONOCE MÁS <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute left-0 top-0 h-full w-1/3 pointer-events-none">
          <img
            src={illustrations.bgLeft.src}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute right-0 top-0 h-full w-1/3 pointer-events-none">
          <img
            src={illustrations.bgRight.src}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default GeoVisorSection;
