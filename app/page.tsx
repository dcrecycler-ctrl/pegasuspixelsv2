import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustClarity } from "@/components/sections/TrustClarity";
import { PerceptionSection } from "@/components/sections/PerceptionSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { WhatWeImprove } from "@/components/sections/WhatWeImprove";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <Hero />
        <TrustClarity />
        <PerceptionSection />
        <SolutionSection />
        <WhatWeImprove />
        <OutcomesSection />
        <HowItWorksSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
