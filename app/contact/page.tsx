import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
    title: "Contact — Sander van der Dussen",
    description: "Neem contact op met Sander van der Dussen — trainee consultant in Groningen.",
    openGraph: {
        title: "Contact — Sander van der Dussen",
        description: "Stuur een bericht of vind me op LinkedIn.",
    },
};

export default function ContactPage() {
    return (
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <FadeIn>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">Contact</p>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Laten we praten.</h1>
                <p className="mt-4 text-lg text-neutral-700">
                    Heb je een vraag, idee of project waar ik aan kan bijdragen? Stuur gerust een bericht — ik reageer meestal binnen een paar dagen.
                </p>
            </FadeIn>

            <FadeIn delay={80} className="mt-10">
                <Card className="border-neutral-100 p-6 shadow-sm sm:p-8">
                    <ContactForm />
                </Card>
            </FadeIn>

            <FadeIn delay={140} className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-neutral-700">Liever even kort kennismaken? Tot snel.</p>
                <div className="flex items-center gap-3">
                    <a
                        href="https://www.linkedin.com/in/sander-van-der-dussen/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:border-[#FBBF24]"
                    >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="mailto:hello@example.com"
                        aria-label="E-mail"
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:border-[#FBBF24]"
                    >
                        <Mail className="h-4 w-4" /> E-mail
                    </a>
                </div>
            </FadeIn>
        </section >
    );
}