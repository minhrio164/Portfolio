import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "light-pill" | "ghost-pill";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  "light-pill":
    "bg-white text-[var(--color-ink)] hover:bg-white/90 focus-visible:outline-white/80 active:scale-[0.985]",
  "ghost-pill":
    "border border-[var(--color-border)] bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-surface-soft)] focus-visible:outline-[var(--color-ink)] active:scale-[0.985]",
};

export function Button({
  className,
  variant = "light-pill",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-4",
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    />
  );
}
