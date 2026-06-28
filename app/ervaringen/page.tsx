import { FadeIn } from "@/components/FadeIn";
import { SkillBadge } from "@/components/SkillBadge";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Ervaringen — Sander van der Dussen",
    description: "Werkervaring, opleiding en vaardigheden van Sander van der Dussen.",
    openGraph: {
        title: "Ervaringen — Sander van der Dussen",
        description: "Werkervaring, opleiding en vaardigheden.",
    },
};

type TimelineEntry = {
    role: string;
    org: string;
    period: string;
    description?: string;
    skills?: string[];
};

type ExperienceGroup = {
    company: string;
    totalPeriod: string;
    roles: TimelineEntry[];
};

const work: ExperienceGroup[] = [
    {
        company: "MAAK Techniek",
        totalPeriod: "sep. 2025 — heden",
        roles: [
            {
                role: "MogelijkMaker",
                org: "MAAK Techniek",
                period: "sep. 2025 — heden · 10 mnd",
                description: "Als MogelijkMaker bij MAAK Techniek volg ik een traineeship waarin ik me ontwikkel binnen het vakgebied van techniek en proces.",
                skills: ["SAP ERP", "SAP-producten", "+5 vaardigheden"],
            },
        ],
    },
    {
        company: "Hanze Studentenbelangen Vereniging",
        totalPeriod: "6 jr 2 mnd",
        roles: [
            {
                role: "Voorzitter Raad van Toezicht",
                org: "HSV",
                period: "mrt. 2025 — apr. 2026 · 1 jr 2 mnd",
                description: "Als voorzitter van de Raad van Toezicht van de HSV zet ik mij in om het bestuur kritisch én constructief te ondersteunen bij het realiseren van haar doelstellingen.",
            },
            {
                role: "Lid Raad van Toezicht",
                org: "HSV",
                period: "jul. 2022 — mrt. 2025 · 2 jr 9 mnd",
                description: "Als Lid van de Raad van Toezicht maak ik deel uit van het toezichthoudende orgaan van de vereniging. Door nauw contact te onderhouden en toezicht te houden in de gemaakte stappen.",
            },
            {
                role: "Fractievoorzitter",
                org: "HSV",
                period: "jan. 2022 — jul. 2022 · 7 maanden",
                description: "Tijdens mijn tijd als fractievoorzitter bij de Hanze Studentenbelangen Vereniging heb ik met passie en toewijding gewerkt aan het vertegenwoordigen van de belangen van studenten.",
            },
            {
                role: "Fractiesecretaris",
                org: "HSV",
                period: "nov. 2020 — jan. 2022 · 1 jr 3 mnd",
                description: "Als fractiesecretaris was ik verantwoordelijk voor het administratieve werk wat komt kijken bij het fractiewerk, waaronder het versturen van de vragen voor.",
            },
            {
                role: "Secretaris",
                org: "HSV",
                period: "sep. 2020 — jul. 2021 · 11 maanden",
                description: "Tijdens mijn tijd als secretaris van het bestuur bij de Hanze Studentenbelangen Vereniging heb ik met enthousiasme bijgedragen aan de versterking van de belangen van studenten.",
            },
            {
                role: "Kandidaat Fractielid",
                org: "HSV",
                period: "mrt. 2020 — nov. 2020 · 9 maanden",
                description: "Als kandidaat-fractielid heb ik actief bijgedragen aan het vertegenwoordigen van de belangen van studenten en het werken aan verbeteringen in onze studieomgeving.",
            },
        ],
    },
    {
        company: "VVD",
        totalPeriod: "3 jr 3 mnd",
        roles: [
            {
                role: "Fractiemedewerker VVD Gemeente Groningen",
                org: "VVD",
                period: "mrt. 2024 — apr. 2026 · 2 jr 2 mnd",
                description: "De functie van fractiemedewerker omvat voornamelijk secretariële ondersteuning van de fractie. Deze rol behelst het beheren van agenda's, voorbereiden van vergaderingen.",
                skills: ["Politieke campagnes", "Politiek"],
            },
            {
                role: "Secretaris netwerk Groningen-Haren",
                org: "VVD",
                period: "nov. 2023 — jun. 2024 · 8 maanden",
                description: "Als secretaris bij het VVD Netwerk Groningen-Haren vervul ik een essentiële rol. Mijn taken omvatten het zorgvuldig beheren van de agenda's, het nauwkeurig opstellen van notulen.",
                skills: ["Interne en externe communicatie", "Sociale media"],
            },
            {
                role: "Algemeen Bestuurslid netwerk Groningen-Haren",
                org: "VVD",
                period: "feb. 2023 — nov. 2023 · 10 maanden",
                description: "Als algemeen bestuurslid bij de VVD Gemeente Groningen-Haren ben ik gepassioneerd bezig met het bevorderen van liberaal beleid en het versterken van onze lokale gemeenschap.",
                skills: ["Politieke campagnes", "MailChimp"],
            },
        ],
    },
    {
        company: "Hanze",
        totalPeriod: "sep. 2022 — feb. 2025",
        roles: [
            {
                role: "Commissielid Advies Commissie Introductietijden en Incidenten (ACII)",
                org: "Hanze",
                period: "sep. 2022 — feb. 2025 · 2 jr 6 mnd",
                description: "De ACI adviseert over de veiligheid van studenten tijdens de introductieperiodes van de studentenorganisaties (bijv. studentenverenigingen, studieverenigingen, sportorganisaties, KEI en ESN).",
                skills: ["Openbare veiligheid", "Gezondheid en veiligheid"],
            },
        ],
    },
    {
        company: "Remarketed Group",
        totalPeriod: "feb. 2024 — jun. 2024",
        roles: [
            {
                role: "Afstudeer Stagair",
                org: "Remarketed Group",
                period: "feb. 2024 — jun. 2024 · 5 maanden",
                description: "Tijdens mijn afstudeerstage heb ik me beziggehouden met het optimaliseren van het buyback-proces binnen Remarketed. Ik heb het bedrijf een adviesrapport met een routekaart gegeven om het proces schaalbaar en efficiënt te maken met het oog op de toekomstige groei.",
                skills: ["Procesverbetering", "Verandermanagement"],
            },
        ],
    },
    {
        company: "Lidl Nederland",
        totalPeriod: "sep. 2018 — jun. 2020",
        roles: [
            {
                role: "Medewerker",
                org: "Lidl Nederland",
                period: "sep. 2018 — jun. 2020 · 1 jr 10 mnd",
                description: "Kassa medewerker & Vakkenvuller.",
            },
        ],
    },
    {
        company: "QHP BV",
        totalPeriod: "dec. 2017 — jul. 2018",
        roles: [
            {
                role: "Oproepkracht",
                org: "QHP BV",
                period: "dec. 2017 — jul. 2018 · 8 maanden",
                description: "Het picken van orders en het helpen ontladen van vracht.",
            },
        ],
    },
];

const volunteering: ExperienceGroup[] = [
    {
        company: "JOVD Driemaster",
        totalPeriod: "okt. 2021 — heden",
        roles: [
            {
                role: "Redactielid & Eindredacteur",
                org: "JOVD Driemaster",
                period: "okt. 2025 — heden · 9 mnd",
                description: "Bij De Driemaster, het onafhankelijke verenigingsblad van de JOVD, houd ik me bezig met zowel het redactionele als eindredactionele werk.",
            },
            {
                role: "Webbeheer & Editor",
                org: "JOVD Driemaster",
                period: "sep. 2022 — okt. 2023 · 1 jr 2 mnd",
                description: "Tijdens mijn tijd als Webbeheer & Editor bij de JOVD Driemaster heb ik mogen bijdragen aan de prachtige vereniging.",
            },
            {
                role: "Adjunct-hoofdredacteur",
                org: "JOVD Driemaster",
                period: "okt. 2021 — sep. 2022 · 1 jr",
                description: "Als Adjunct-hoofdredacteur ben ik verantwoordelijk voor het updaten van de website van de Driemaster.",
            },
        ],
    },
    {
        company: "JOVD Friesland",
        totalPeriod: "sep. 2019 — sep. 2020",
        roles: [
            {
                role: "Secretaris-vicevoorzitter",
                org: "JOVD Friesland",
                period: "sep. 2019 — sep. 2020 · 1 jr 1 mnd",
                description: "Tijdens mijn betrokkenheid als Secretaris-vicevoorzitter bij de afdeling Friesland van de JOVD.",
            },
        ],
    },
];

const education: TimelineEntry[] = [
    {
        role: "Bachelor's degree, Technische Bedrijfskunde",
        org: "Hanze",
        period: "jan. 2018 — jul. 2024",
        description: "Cijfer: 6.9 · Afgestudeerd in Technische Bedrijfskunde met een sterke interesse in Industry 4.0, procesoptimalisatie en digitalisering. Activiteiten: HSV, JOVD Friesland, VVD Groningen-Haren.",
        skills: ["in- & verkoop", "Supply Chain-management", "+10 vaardigheden"],
    },
    {
        role: "HAVO, Natuur & Techniek",
        org: "OSG Singelland",
        period: "2013 — 2018",
        description: "Activiteiten en verenigingen: Debatclub.",
    },
];

const skillsAccent = ["Consulting", "Procesanalyse", "Stakeholdermanagement", "Procesverbetering", "Verandermanagement"];
const skillsNeutral = ["SAP ERP", "Politieke campagnes", "Lean", "Agile / Scrum", "Interne communicatie", "Sociale media", "Supply Chain-management", "Openbare veiligheid", "Self-hosting"];

function TimelineGroup({ group }: { group: ExperienceGroup }) {
    return (
        <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-neutral-100" />
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">{group.company}</span>
                <span className="text-xs text-neutral-400">{group.totalPeriod}</span>
                <div className="h-px flex-1 bg-neutral-100" />
            </div>
            <div className="space-y-6 border-l-2 border-neutral-100 pl-6">
                {group.roles.map((r) => (
                    <div key={r.role} className="relative">
                        <span className="absolute -left-[1.45rem] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400 ring-1 ring-amber-200" />
                        <p className="font-semibold text-neutral-950">{r.role}</p>
                        <p className="mt-0.5 text-sm text-neutral-500">{r.period}</p>
                        {r.description && <p className="mt-2 text-sm leading-relaxed text-neutral-700">{r.description}</p>}
                        {r.skills && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                {r.skills.map((s) => (
                                    <span key={s} className="rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs text-neutral-600">{s}</span>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function EducationItem({ item }: { item: TimelineEntry }) {
    return (
        <div className="relative border-l-2 border-neutral-100 pl-6 pb-8 last:pb-0">
            <span className="absolute -left-[1.45rem] mt-1.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-amber-400 ring-1 ring-amber-200" />
            <p className="font-semibold text-neutral-950">{item.role}</p>
            <p className="mt-0.5 text-sm text-neutral-500">{item.org} · {item.period}</p>
            {item.description && <p className="mt-2 text-sm leading-relaxed text-neutral-700">{item.description}</p>}
        </div>
    );
}

export default function ErvaringenPage() {
    return (
        <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <FadeIn>
                <p className="text-sm font-semibold uppercase tracking-wider text-amber-700">CV</p>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Ervaringen</h1>
                <p className="mt-4 max-w-2xl text-lg text-neutral-700">
                    Een overzicht van mijn werk, opleiding en de vaardigheden die ik daarin heb opgebouwd.
                </p>
            </FadeIn>

            <FadeIn delay={80} className="mt-14">
                <h2 className="text-2xl font-bold tracking-tight">Werkervaring</h2>
                <div className="mt-8">
                    {work.map((group) => (
                        <TimelineGroup key={group.company} group={group} />
                    ))}
                </div>
            </FadeIn>

            <Separator className="my-14" />

            <FadeIn>
                <h2 className="text-2xl font-bold tracking-tight">Vrijwilligerswerk</h2>
                <div className="mt-8">
                    {volunteering.map((group) => (
                        <TimelineGroup key={group.company} group={group} />
                    ))}
                </div>
            </FadeIn>

            <Separator className="my-14" />

            <FadeIn>
                <h2 className="text-2xl font-bold tracking-tight">Opleiding</h2>
                <div className="mt-8">
                    {education.map((e) => (
                        <EducationItem key={e.role} item={e} />
                    ))}
                </div>
            </FadeIn>

            <Separator className="my-14" />

            <FadeIn>
                <h2 className="text-2xl font-bold tracking-tight">Vaardigheden</h2>
                <div className="mt-6 flex flex-wrap gap-2">
                    {skillsAccent.map((s) => <SkillBadge key={s} accent>{s}</SkillBadge>)}
                    {skillsNeutral.map((s) => <SkillBadge key={s}>{s}</SkillBadge>)}
                </div>
            </FadeIn>
        </section>
    );
}