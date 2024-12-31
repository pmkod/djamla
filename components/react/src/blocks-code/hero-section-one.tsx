export const reactHeroSectionOneCode = `import { Button } from "../core/button";

const HeroSectionOne = () => (
  <div className="mx-auto max-w-screen-xl">
    <div className="flex min-h-[84vh] flex-col items-center justify-center space-y-10 px-7 pb-8">
      <h1 className="text-base-800 max-w-4xl text-center text-5xl font-bold md:text-7xl">
        Make beautiful <br /> websites fast
      </h1>
      <p className="text-base-600 max-w-xl text-center text-xl">
        Simple, beautiful, powerful and customizable designed components that
        you can copy and paste into your code. <br /> Based on ark-ui and
        tailwindcss
      </p>

      <div className="flex gap-x-2">
        <Button size="xl" asChild>
          <a href="#">Get started</a>
        </Button>

        <Button variant="outline" colorScheme="black" size="xl" asChild>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Github
          </a>
        </Button>
      </div>
    </div>
  </div>
);

export { HeroSectionOne };
`