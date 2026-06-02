import { AnimateIn } from "@/components/ui/AnimateIn";

export function TrustClarity() {
  return (
    <section className="bg-white border-y border-slate-200 py-24 md:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="max-w-[680px]">

          <AnimateIn>
            <div className="w-10 h-px bg-blue-600 mb-10" />
            <h2 className="text-[36px] md:text-[48px] font-black tracking-[-0.03em] leading-[1.05] text-slate-900 mb-8">
              We don&apos;t rebuild your business
            </h2>
            <p className="text-[18px] font-light text-slate-600 leading-[1.65] mb-4">
              We don&apos;t change how your team works or how your operations run.
            </p>
            <p className="text-[18px] font-light text-slate-600 leading-[1.65]">
              We improve how customers see and understand your business before they contact you.
            </p>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
