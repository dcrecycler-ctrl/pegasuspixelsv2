import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustClarity } from "@/components/sections/TrustClarity";
import { WhatWeImprove } from "@/components/sections/WhatWeImprove";
import { PerceptionSection } from "@/components/sections/PerceptionSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-[#F7F8FA]">
        <Hero />
        <TrustClarity />
        <WhatWeImprove />
        <PerceptionSection />
        <OutcomesSection />
        <HowItWorksSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
