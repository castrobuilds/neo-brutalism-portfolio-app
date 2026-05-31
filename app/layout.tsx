import { syne, spaceGrotesk, inter, spaceMono } from "../styles/fonts";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth antialiased ${syne.variable} ${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-slate-100 leading-relaxed">{children}</body>
    </html>
  );
}
