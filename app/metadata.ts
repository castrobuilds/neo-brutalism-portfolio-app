// app/metadata.ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "My App",
    template: "%s | My App",
  },
  description: "A modern Next.js application",
  applicationName: "My App",
  metadataBase: new URL("https://example.com"),
};
