import { FadeIn } from "@/components/FadeIn";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <HeroSection />"
      <section className="border-t border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <FadeIn>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Even voorstellen</h2>
            <p className="mt-5 text-lg leading-relaxed text-neutral-700">
              Ik ben Sander — trainee consultant met een voorliefde voor techniek, processen en alles wat
              organisaties efficiënter maakt. Vanuit Groningen werk ik aan opdrachten waarin
              strategie, mensen en systemen samenkomen. Nieuwsgierig naar wat ik doe?
              Bekijk mijn <a href="/ervaringen" className="font-medium text-neutral-950 underline decoration-[#FBBF24] decoration-2 underline-offset-4">ervaring</a>{" "}
              of <a href="/contact" className="font-medium text-neutral-950 underline decoration-[#FBBF24] decoration-2 underline-offset-4">neem contact op</a>.
            </p>
          </FadeIn>
        </div>
      </section>"
    </main>
  );
}
