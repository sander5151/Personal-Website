"use client";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
    name: z.string().trim().min(1, "Vul je naam in").max(100),
    email: z.string().trim().email("Ongeldig e-mailadres").max(255),
    message: z.string().trim().min(5, "Bericht is te kort").max(1000),
});

export function ContactForm() {
    const [submitting, setSubmitting] = useState(false);

    function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const parsed = schema.safeParse({
            name: fd.get("name"),
            email: fd.get("email"),
            message: fd.get("message"),
        });
        if (!parsed.success) {
            toast.error(parsed.error.issues[0]?.message ?? "Controleer het formulier");
            return;
        }
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            toast.success("Bedankt! Je bericht is verstuurd.");
            (e.target as HTMLFormElement).reset();
        }, 600);
    }

    return (
        <form onSubmit={onSubmit} className="space-y-5">
            <div className="space-y-2">
                <Label htmlFor="name">Naam</Label>
                <Input id="name" name="name" placeholder="Je naam" maxLength={100} required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" name="email" type="email" placeholder="jij@voorbeeld.nl" maxLength={255} required />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message">Bericht</Label>
                <Textarea id="message" name="message" placeholder="Waar kan ik je mee helpen?" rows={6} maxLength={1000} required />
            </div>
            <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="w-full bg-[#FBBF24] text-neutral-950 shadow-none hover:bg-amber-300 sm:w-auto"
            >
                {submitting ? "Versturen..." : (<>Verstuur <Send className="h-4 w-4" /></>)}
            </Button>
        </form>
    );
}
