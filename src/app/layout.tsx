import type { Metadata } from "next";
import type { ReactNode } from "react";

import { crackerGrotesk, hostGrotesk } from "@/app/fonts";
import { AgentationDevtools } from "@/components/dev/agentation-devtools";

import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Thinker",
  description: "Figma-first portfolio homepage built with Next.js and Tailwind.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${hostGrotesk.variable} ${crackerGrotesk.variable}`}
    >
      <body>
        {children}
        <AgentationDevtools />
      </body>
    </html>
  );
}
