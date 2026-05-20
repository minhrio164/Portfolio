import localFont from "next/font/local";

export const hostGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/HostGrotesk-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HostGrotesk-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-host-grotesk",
  display: "swap",
});

export const crackerGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/CrackerGrotesk-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cracker-grotesk",
  display: "swap",
});
