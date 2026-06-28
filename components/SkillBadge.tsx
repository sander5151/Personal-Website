import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function SkillBadge({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
    return (
        <Badge
            variant="outline"
            className={cn(
                "rounded-full px-3 py-1 text-sm font-medium",
                accent
                    ? "border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300",
            )}
        >
            {children}
        </Badge>
    );
}
