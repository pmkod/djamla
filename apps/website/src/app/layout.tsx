import "@repo/tailwind-config/globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Figtree } from "next/font/google";
import Script from "next/script";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - Djamla",
    default: "Djamla",
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
    <html lang="en" className={figtree.className} suppressHydrationWarning>
      <body className="bg-base-0">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          async
          src="https://analytics.4ml3f81l4vtbdgwuldhdcqwbq7reg4oiffr3xdbi.kodossou.com/script.js"
          data-website-id="36bf7c83-2410-4ee3-a2fe-ec6000b19fba"
        />
      </body>
    </html>
  );
}
