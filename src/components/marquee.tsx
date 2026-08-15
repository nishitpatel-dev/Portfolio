import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  reverse?: boolean;
  durationMs?: number;
  className?: string;
};

export default function Marquee({
  children,
  reverse = false,
  durationMs = 40000,
  className,
}: MarqueeProps) {
  return (
    <div className={cn("marquee-row w-full min-w-0 max-w-full overflow-hidden", className)}>
      <div
        className={cn("marquee-track gap-4", reverse && "reverse")}
        style={{ "--marquee-duration": `${durationMs}ms` } as React.CSSProperties}
      >
        <div className="flex items-center gap-4 shrink-0" aria-hidden={false}>
          {children}
        </div>
        <div className="flex items-center gap-4 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
