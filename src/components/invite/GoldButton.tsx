import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type GoldButtonProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  fullWidth?: boolean;
  pulse?: boolean;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "children" | "className">;

/** Botão de convite: borda dourada, brilho no hover, estado de toque no mobile. */
export function GoldButton<T extends ElementType = "button">({
  as,
  children,
  fullWidth,
  pulse,
  className,
  ...rest
}: GoldButtonProps<T>) {
  const Tag = (as ?? "button") as ElementType;
  return (
    <Tag
      {...rest}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full",
        "border border-gold/60 bg-gold/[0.06] px-8 py-4",
        "font-sans text-[0.7rem] font-medium uppercase tracking-[0.28em] text-champagne",
        "transition-all duration-500 ease-out",
        "hover:scale-[1.03] hover:border-gold hover:bg-gold/15 hover:text-gold-light",
        "hover:shadow-[0_0_38px_-6px_rgba(212,175,55,0.55)]",
        "active:scale-[0.98] active:bg-gold/20",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        fullWidth && "w-full",
        pulse && "animate-luxe-pulse",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-[linear-gradient(90deg,transparent,rgba(241,215,122,0.28),transparent)] transition-transform duration-[1100ms] group-hover:translate-x-full"
      />
      <span className="relative flex items-center gap-2">{children}</span>
    </Tag>
  );
}
