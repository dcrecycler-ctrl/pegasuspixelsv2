import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { RealityShift } from "@/components/sections/RealityShift";
import { ConnectedBenefits } from "@/components/sections/ConnectedBenefits";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { DigitalInfrastructure } from "@/components/sections/DigitalInfrastructure";
import { BusinessLayers } from "@/components/sections/BusinessLayers";
import { Industries } from "@/components/sections/Industries";
import { ConnectedExample } from "@/components/sections/ConnectedExample";
import { DigitalAudit } from "@/components/sections/DigitalAudit";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RealityShift />
        <ConnectedBenefits />
        <HowWeWork />
        <DigitalInfrastructure />
        <BusinessLayers />
        <Industries />
        <ConnectedExample />
        <DigitalAudit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
