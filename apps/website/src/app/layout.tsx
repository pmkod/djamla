import { Metadata } from "next";
import "@repo/tailwind-config/globals.css";
import { Html } from "./_html";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - Djamla",
    default: "Djamla",
  },
  description:
    "Accessible and customizable components built on Ark UI. Free and Open Source.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return <Html>{children}</Html>;
}
