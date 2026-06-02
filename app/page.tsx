import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { PressureBlock } from "@/components/sections/PressureBlock";
import { TransformationSection } from "@/components/sections/TransformationSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { OutcomesSection } from "@/components/sections/OutcomesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="bg-[#F7F8FA]">
        <Hero />
        <ProblemSection />
        <PressureBlock />
        <TransformationSection />
        <SolutionSection />
        <OutcomesSection />
        <TrustSection />
        <HowItWorksSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
