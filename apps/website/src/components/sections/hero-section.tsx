import { githupRepoLink } from "@/constants/links";
import { Button } from "@repo/react-ui";
import Link from "next/link";
import { Container } from "../core/container";

export const HeroSection = () => {
  return (
    <Container>
      <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-10 pb-8">
        <h1 className="text-base-800 max-w-4xl text-center text-5xl font-bold md:text-7xl">
          Make beautiful websites fast
        </h1>
        <p className="text-base-600 max-w-xl text-center text-xl">
          Simple, beautiful, powerful and customizable designed components that
          you can copy and paste into your code. <br /> Based on ark-ui and
          tailwindcss
        </p>

        <div className="flex gap-x-2">
          <Button size="xl" asChild>
            <Link href="/docs/introduction">Get started</Link>
          </Button>

          <Button variant="outline" colorScheme="black" size="xl" asChild>
            <Link
              href={githupRepoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};
