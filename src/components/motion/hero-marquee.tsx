"use client";

type HeroMarqueeProps = {
  text: string;
  fontSize?: string;
};

export function HeroMarquee({
  text,
  fontSize = "13.35vw",
}: HeroMarqueeProps) {
  const marqueeStyle = {
    fontSize,
    lineHeight: "1",
  } as const;

  return (
    <div
      className="block w-full whitespace-nowrap text-center font-display tracking-[0.01em] text-white"
      style={marqueeStyle}
    >
      <span className="block w-full">{text}</span>
    </div>
  );
}
