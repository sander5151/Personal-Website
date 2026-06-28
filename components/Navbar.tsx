"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
    { to: "/", label: "Home" },
    { to: "/over", label: "Over mij" },
    { to: "/ervaringen", label: "Ervaringen" },
    { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="sticky    top-0 z-50 w-full border-b border-neutral-100 bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/70">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="group flex items-center gap-3 text-base font-bold tracking-tight">
                    <img src="/logo.png" alt="SvD monogram" className="h-8 w-auto transition-transform group-hover:scale-105" />                </Link>

                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((l) => {
                        const active = pathname === l.to;
                        return (
                            <li key={l.to}>
                                <Link
                                    href={l.to}
                                    className={cn(
                                        "relative text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950",
                                        "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-[#FBBF24] after:transition-all",
                                        active ? "text-neutral-950 after:w-full" : "after:w-0 hover:after:w-full",
                                    )}
                                >
                                    {l.label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Open menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-72 bg-white p-0">
                            <SheetHeader className="border-b border-neutral-100 px-6 py-5">
                                <SheetTitle className="text-left text-base font-semibold tracking-tight">Menu</SheetTitle>
                            </SheetHeader>
                            <ul className="flex flex-col px-3 py-4">
                                {links.map((l) => {
                                    const active = pathname === l.to;
                                    return (
                                        <li key={l.to}>
                                            <Link
                                                href={l.to}
                                                onClick={() => setOpen(false)}
                                                className={cn(
                                                    "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                                                    active
                                                        ? "bg-amber-50 text-neutral-950"
                                                        : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-800",
                                                )}
                                            >
                                                {l.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}