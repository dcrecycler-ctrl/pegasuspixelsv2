import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { DigitalInfrastructure } from "@/components/sections/DigitalInfrastructure";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { Solutions } from "@/components/sections/Solutions";
import { Industries } from "@/components/sections/Industries";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemStatement />
        <DigitalInfrastructure />
        <HowWeWork />
        <Solutions />
        <Industries />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
