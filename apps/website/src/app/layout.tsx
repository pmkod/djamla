import { Metadata } from "next";
import Script from "next/script";
import { Figtree } from "next/font/google";
import { PropsWithChildren } from "react";
import "@repo/tailwind-config/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Djamla",
    default: "D",
  },
  description:
    "Accessible and customizable components built on Ark UI. Free and Open Source.",
};

const figtree = Figtree({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={figtree.className}>
      <body className="bg-base-0">{children}</body>

      <Script
        async
        src="https://umami.djamla.com/script.js"
        data-website-id="690cac2b-2ee7-41b5-aac4-21a1be5eab51"
      />
    </html>
  );
}
