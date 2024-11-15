import { Metadata } from "next";
import { Figtree } from "next/font/google";
import { PropsWithChildren } from "react";
import "@repo/tailwind-config/globals.css";

export const metadata: Metadata = {
  title: "Djamla",
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
    </html>
  );
}
