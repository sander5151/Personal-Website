import { FadeIn } from "@/components/FadeIn";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Over mij — Sander van der Dussen",
    description: "Meer over Sander van der Dussen: achtergrond, interesses en drijfveren.",
    openGraph: {
        title: "Over mij — Sander van der Dussen",
        description: "Achtergrond, interesses en drijfveren.",
    },
};

const interests = [
    "Consulting",
    "Technologie",
    "Lokale politiek",
    "Sport",
    "Self-hosting",
];

export default function OverPage() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                <FadeIn>
                    <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-neutral-100 shadow-sm">
                        <Image
                            src="/blob.png"
                            alt="Portretfoto van Sander van der Dussen"
                            width={400}
                            height={500}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={100}>
                    <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">Over mij</p>
                    <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Nieuwsgierig, nuchter en altijd op zoek naar de beste oplossing.
                    </h1>
                    <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-700">
                        <p>
                            Mijn naam is Sander van der Dussen. Ik ben trainee consultant in het domein Techniek &amp;
                            Proces en woon in Groningen. In mijn werk help ik organisaties met het verbeteren van
                            processen, het invoeren van technologie en het maken van keuzes die op lange termijn houdbaar zijn.
                        </p>
                        <p>
                            Wat mij drijft is de combinatie van analytisch denken en menselijke nuance. Een goed
                            proces is pas geslaagd als de mensen die het gebruiken er beter van worden. Ik geloof in
                            korte lijnen, duidelijke afspraken en pragmatische stappen — liever vandaag een werkende
                            eerste versie dan over een half jaar het perfecte rapport.
                        </p>
                        <p>
                            Naast mijn werk ben ik betrokken bij lokale politiek, sport ik graag en draai ik thuis
                            een paar zelf gehoste servers. Het bouwen, kapot maken en weer repareren van dingen blijft
                            het beste leerproces dat ik ken.
                        </p>
                    </div>
                    <div className="mt-10 rounded-xl border border-neutral-100 bg-neutral-50/60 p-6">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-500">Interesses</h2>
                        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {interests.map((i) => (
                                <li key={i} className="flex items-center gap-3 text-neutral-800">
                                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
                                    {i}
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}