import { syne, spaceGrotesk, inter, spaceMono } from "../styles/fonts";
import "../styles/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
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
      suppressHydrationWarning
    >
      <body className="bg-slate-100 leading-relaxed">{children}</body>
    </html>
  );
}
