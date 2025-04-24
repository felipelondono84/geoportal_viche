import HeroSection from "../sections/HeroSection";
import FeatureSection from "../sections/FeatureSection";
import GeoVisorSection from "../sections/GeoVisorSection";
import VicheSection from "../sections/VicheSection";
import PartnersSection from "../sections/PartnersSection";
import ContactForm from "../sections/ContactForm";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Geovisor Section */}
      <GeoVisorSection />

      {/* Viche Section */}
      <VicheSection />

      {/* Partners Section */}
      <PartnersSection />

      {/* Contact Form */}
      <ContactForm />
    </>
  );
};

export default Home;
