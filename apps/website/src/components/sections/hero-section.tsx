import React from "react";
import { Container } from "../core/container";
import Link from "next/link";
import { Button } from "@repo/react-ui";

export const HeroSection = () => {
  return (
    <Container>
      <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-10 pb-8">
        <div className="text-base-800 max-w-4xl text-center text-5xl font-bold md:text-7xl">
          Make beautiful websites fast
        </div>
        <div className="text-base-600 max-w-xl text-center text-xl">
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
