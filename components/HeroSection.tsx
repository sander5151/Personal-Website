import React from 'react'
import { FadeIn } from './FadeIn'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24 lg:px-8">
                <FadeIn className="order-2 lg:order-1">

                    <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
                        Sander van der{" "}
                        <span className="relative inline-block">
                            Dussen
                            <span className="absolute inset-x-0 bottom-1 -z-10 h-2 bg-[#FBBF24]/60" />
                        </span>
                    </h1>
                    <p className="mt-5 max-w-xl text-lg text-neutral-700">
                        Trainee consultant <span className="text-neutral-400">·</span> Techniek &amp; Proces{" "}
                        <span className="text-neutral-400">·</span>{" "}
                        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> Groningen</span>
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Button
                            asChild
                            size="lg"
                            className="bg-neutral-950 text-white shadow-none hover:bg-neutral-800"
                        >
                            <Link href="/contact">
                                Neem contact op <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="border-neutral-300">
                            <Link href="/ervaringen">Bekijk ervaring</Link>
                        </Button>
                    </div>
                </FadeIn>

                <FadeIn delay={120} className="order-1 lg:order-2">
                    <div className="relative mx-auto w-full max-w-md">
                        <img
                            src="/BW-Schets.png"
                            alt="Inkttekening portret van Sander van der Dussen"
                            className="w-full h-auto"
                            loading="eager"
                        />
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
