"use client";
import { DocText } from "@/components/core/doc-text";
import { ExternalLink } from "@/components/core/externaly-link";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  PackageManagerTabContent,
  PackageManagerTabs,
} from "@/components/tabs/package-manager-tabs";
import { Tab, TabContent, TabList, Tabs } from "@repo/react-ui";
import React from "react";

const InstallationPage = () => {
  return (
    <>
      <DocText level="titleOne">Installation</DocText>
      <DocText level="paragraphTwo">
        How to install dependencies to use Djamla
      </DocText>
      <DocText level="titleTwo">Tailwindcss</DocText>
      <DocText level="paragraphTwo">
        Djamla is based on tailwindcss. You need to install tailwindcss in your
        project. See instuctions on tailwindcss{" "}
        <ExternalLink href="https://tailwindcss.com/docs/installation/framework-guides">
          docs
        </ExternalLink>
        .
      </DocText>
      <DocText level="titleTwo">Ark ui</DocText>
      <DocText level="paragraphTwo">You need to install ark ui</DocText>
      <PackageManagerTabs>
        <PackageManagerTabContent value="npm">
          <SyntaxHighlighter>npm add @ark-ui/react</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="yarn">
          <SyntaxHighlighter>yarn add @ark-ui/react</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="pnpm">
          <SyntaxHighlighter>pnpm add @ark-ui/react</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="bun">
          <SyntaxHighlighter>bun add @ark-ui/react</SyntaxHighlighter>
        </PackageManagerTabContent>
      </PackageManagerTabs>
      <DocText level="titleTwo">Tabler icons</DocText>
      <DocText level="paragraphTwo">You need to install tabler icons</DocText>
      <PackageManagerTabs>
        <PackageManagerTabContent value="npm">
          <SyntaxHighlighter>npm add @tabler/icons-react</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="yarn">
          <SyntaxHighlighter>yarn add @tabler/icons-react</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="pnpm">
          <SyntaxHighlighter>pnpm add @tabler/icons-react</SyntaxHighlighter>
        </PackageManagerTabContent>
        <PackageManagerTabContent value="bun">
          <SyntaxHighlighter>bun add @tabler/icons-react</SyntaxHighlighter>
        </PackageManagerTabContent>
      </PackageManagerTabs>
      <DocText level="titleTwo">Add colors in your globals.css</DocText>
      <SyntaxHighlighter language="css">
        {`
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Base */
  --color-base-0: 255 255 255;
  --color-base-50: 249 250 251;
  --color-base-100: 243 244 246;
  --color-base-200: 229 231 235;
  --color-base-300: 209 213 219;
  --color-base-400: 156 163 175;
  --color-base-500: 107 114 128;
  --color-base-600: 75 85 99;
  --color-base-700: 55 65 81;
  --color-base-800: 31 41 55;
  --color-base-900: 17 24 39;
  --color-base-950: 3 7 18;
  --color-base-1000: 0 0 0;

  /* primary */
  --color-primary-50: 238 242 255;
  --color-primary-100: 224 231 255;
  --color-primary-200: 199 210 254;
  --color-primary-300: 165 180 252;
  --color-primary-400: 129 140 248;
  --color-primary-500: 99 102 241;
  --color-primary-600: 79 70 229;
  --color-primary-700: 67 56 202;
  --color-primary-800: 55 48 163;
  --color-primary-900: 49 46 129;
  --color-primary-950: 30 27 75;
}

.dark {
  /* Base */
  --color-base-0: 0 0 0;
  --color-base-50: 3 7 18;
  --color-base-100: 17 24 39;
  --color-base-200: 31 41 55;
  --color-base-300: 55 65 81;
  --color-base-400: 75 85 99;
  --color-base-500: 107 114 128;
  --color-base-600: 156 163 175;
  --color-base-700: 209 213 219;
  --color-base-800: 229 231 235;
  --color-base-900: 243 244 246;
  --color-base-950: 249 250 251;
  --color-base-1000: 255 255 255;

  /* primary */
  --color-primary-50: 30 27 75;
  --color-primary-100: 49 46 129;
  --color-primary-200: 55 48 163;
  --color-primary-300: 67 56 202;
  --color-primary-400: 79 70 229;
  --color-primary-500: 99 102 241;
  --color-primary-600: 129 140 248;
  --color-primary-700: 165 180 252;
  --color-primary-800: 199 210 254;
  --color-primary-900: 224 231 255;
  --color-primary-950: 238 242 255;
}
`}
      </SyntaxHighlighter>
      <DocText level="titleTwo">Edit your tailwind config file</DocText>
      <DocText level="paragraphTwo">
        Add withOpacity() function in your tailwind config file
      </DocText>
      <Tabs defaultValue="js">
        <TabList>
          <Tab value="js">tailwind.config.js or .cjs or .mjs</Tab>
          <Tab value="ts">tailwind.config.ts</Tab>
        </TabList>

        <TabContent value="js">
          <SyntaxHighlighter language="typescript">
            {`
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return \`rgb(var(\${variableName}) / \${opacityValue})\`;
    }
    return \`rgb(var(\${variableName}))\`;
  };
          `}
          </SyntaxHighlighter>
        </TabContent>
        <TabContent value="ts">
          <SyntaxHighlighter language="typescript">
            {`
function withOpacity(variableName: string): any {
  return ({ opacityValue }: { opacityValue: string }) => {
    if (opacityValue !== undefined) {
      return \`rgb(var(\${variableName}) / \${opacityValue})\`;
    }
    return \`rgb(var(\${variableName}))\`;
  };
          `}
          </SyntaxHighlighter>
        </TabContent>
      </Tabs>

      <DocText level="paragraph">Add colors tailwind config file</DocText>

      <Tabs defaultValue="js">
        <TabList>
          <Tab value="js">tailwind.config.js or .cjs or .mjs</Tab>
          <Tab value="ts">tailwind.config.ts</Tab>
        </TabList>
        <TabContent value="js">
          <SyntaxHighlighter language="typescript">
            {`
/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"

module.exports = {
  content: [
    // your content here
  ],
  // Your others things here
  theme: {
    extend: {
      colors: {
        base: {
          0: withOpacity("--color-base-0"),
          50: withOpacity("--color-base-50"),
          100: withOpacity("--color-base-100"),
          200: withOpacity("--color-base-200"),
          300: withOpacity("--color-base-300"),
          400: withOpacity("--color-base-400"),
          500: withOpacity("--color-base-500"),
          600: withOpacity("--color-base-600"),
          700: withOpacity("--color-base-700"),
          800: withOpacity("--color-base-800"),
          900: withOpacity("--color-base-900"),
          950: withOpacity("--color-base-950"),
          1000: withOpacity("--color-base-1000"),
        },
        primary: {
          50: withOpacity("--color-primary-50"),
          100: withOpacity("--color-primary-100"),
          200: withOpacity("--color-primary-200"),
          300: withOpacity("--color-primary-300"),
          400: withOpacity("--color-primary-400"),
          500: withOpacity("--color-primary-500"),
          600: withOpacity("--color-primary-600"),
          700: withOpacity("--color-primary-700"),
          800: withOpacity("--color-primary-800"),
          900: withOpacity("--color-primary-900"),
          950: withOpacity("--color-primary-950"),
        },
      },
    },
  },
  plugins: [],
};

export default config;
          `}
          </SyntaxHighlighter>
        </TabContent>
        <TabContent value="ts">
          <SyntaxHighlighter language="typescript">
            {`
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // your content here
  ],
  // Your others things here
  theme: {
    extend: {
      colors: {
        base: {
          0: withOpacity("--color-base-0"),
          50: withOpacity("--color-base-50"),
          100: withOpacity("--color-base-100"),
          200: withOpacity("--color-base-200"),
          300: withOpacity("--color-base-300"),
          400: withOpacity("--color-base-400"),
          500: withOpacity("--color-base-500"),
          600: withOpacity("--color-base-600"),
          700: withOpacity("--color-base-700"),
          800: withOpacity("--color-base-800"),
          900: withOpacity("--color-base-900"),
          950: withOpacity("--color-base-950"),
          1000: withOpacity("--color-base-1000"),
        },
        primary: {
          50: withOpacity("--color-primary-50"),
          100: withOpacity("--color-primary-100"),
          200: withOpacity("--color-primary-200"),
          300: withOpacity("--color-primary-300"),
          400: withOpacity("--color-primary-400"),
          500: withOpacity("--color-primary-500"),
          600: withOpacity("--color-primary-600"),
          700: withOpacity("--color-primary-700"),
          800: withOpacity("--color-primary-800"),
          900: withOpacity("--color-primary-900"),
          950: withOpacity("--color-primary-950"),
        },
      },
    },
  },
  plugins: [],
};

export default config;
          `}
          </SyntaxHighlighter>
        </TabContent>
      </Tabs>
    </>
  );
};

export default InstallationPage;
