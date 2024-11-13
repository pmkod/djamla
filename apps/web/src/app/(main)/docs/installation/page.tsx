"use client";
import { DocText } from "@/components/core/doc-text";
import { ExternalLink } from "@/components/core/externaly-link";
import { SyntaxHighlighter } from "@/components/core/syntax-highlighter";
import {
  PackageManagerTabContent,
  PackageManagerTabs,
} from "@/components/tabs/package-manager-tabs";
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
    </>
  );
};

export default InstallationPage;
