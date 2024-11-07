import React from "react";
import { Container } from "../core/container";
import Link from "next/link";
import { Button } from "@/react/components/core/button";

export const HeroSection = () => {
  return (
    <Container>
      <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-10">
        <div className="max-w-4xl text-center text-7xl font-bold">
          Make beautiful websites, fast
        </div>
        <div className="max-w-xl text-center text-2xl text-base-600">
          Simple, powerful and customizable
        </div>

        <div>
          <Button size="xl" asChild>
            <Link href="/docs">Get started</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};
