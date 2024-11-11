import React from "react";
import { Container } from "../core/container";
import Link from "next/link";
import { Button } from "@repo/react-ui";

export const HeroSection = () => {
  return (
    <Container>
      <div className="min-h-[80vh] pb-8 flex flex-col items-center justify-center space-y-10">
        <div className="max-w-4xl text-5xl md:text-7xl text-center text-base-800 font-bold">
          Make beautiful websites fast
        </div>
        <div className="max-w-xl text-xl text-center text-base-600">
          Simple, beautiful, powerful and customizable designed components that
          you can copy and paste into your code. <br /> Based on ark-ui and
          tailwindcss
        </div>

        <div className="flex gap-x-2">
          <Button size="xl" asChild>
            <Link href="/docs/introduction">Get started</Link>
          </Button>

          <Button variant="outline" colorScheme="black" size="xl" asChild>
            <Link href="/docs/introduction">Github</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};
