"use client";
import { useTheme } from "@/hooks/use-theme";
import { Figtree } from "next/font/google";
import Script from "next/script";
import React, { PropsWithChildren } from "react";

const figtree = Figtree({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const Html = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();

  return (
    <html lang="en" className={figtree.className}>
      <body className={`bg-base-0 ${theme}`}>{children}</body>

      <Script
        async
        src="https://umami.djamla.com/script.js"
        data-website-id="690cac2b-2ee7-41b5-aac4-21a1be5eab51"
      />
    </html>
  );
};
