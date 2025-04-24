import {
  partners,
} from "@/data/images";

const PartnersSection = () => {
  return (
    <section className="py-32 container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-8">Miembros</h2>
    <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
      {partners.map((partner, idx) => (
        <img
          key={idx}
          src={partner.srcAlt}
          alt={partner.alt}
          className="h-36 w-auto"
        />
      ))}
    </div>
  </section>
  );
};

export default PartnersSection;
