import { syne, spaceGrotesk, inter, spaceMono } from "../styles/fonts";
import "../styles/globals.css";
<<<<<<< HEAD
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
=======
import { metadata } from "./metadata";
>>>>>>> 58a2c9067d228ccc54c50c3c9afc4628f6a15252

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
<<<<<<< HEAD
      className={cn(
        "scroll-smooth",
        "antialiased",
        syne.variable,
        spaceGrotesk.variable,
        inter.variable,
        spaceMono.variable,
        "font-sans",
        geist.variable,
      )}
=======
      className={`scroll-smooth antialiased ${syne.variable} ${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
>>>>>>> 58a2c9067d228ccc54c50c3c9afc4628f6a15252
      suppressHydrationWarning
    >
      <body className="bg-slate-100 leading-relaxed">{children}</body>
    </html>
  );
}
