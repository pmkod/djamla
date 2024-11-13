import Link from "next/link";
import React, { ReactNode } from "react";
import { DocText } from "@/components/core/doc-text";
import {
  Accordion,
  AccordionItem,
  AccordionItemDetails,
  AccordionItemSummary,
} from "@repo/react-ui";

interface MyLinkProps {
  children: ReactNode;
  href: string;
}

const MyLink = ({ href, children }: MyLinkProps) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-b border-base-500"
    >
      {children}
    </Link>
  );
};

const IntroductionPage = () => {
  return (
    <>
      <DocText level="titleOne">Introduction</DocText>
      <DocText level="paragraphTwo">
        A collection of highly customizable UI components built on&nbsp;
        <MyLink href="https://ark-ui.com">@ark-ui/react</MyLink>
        &nbsp; and&nbsp;
        <Link href="https://tailwindcss.com">Tailwindcss</Link>. Elevate your
        React applications with our components. Zero-styling constraints, full
        TypeScript support, and top-tier accessibility baked in. Craft elegant
        interfaces without wrestling with complex implementations. From simple
        buttons to intricate patterns, turn your design vision into reality with
        minimal effort and maximum customization.
      </DocText>
      <DocText level="titleTwo">Remerciements</DocText>
      <ul className="list-disc list-inside pl-10 space-y-2">
        <li>
          <MyLink href="https://tailwindcss.com">Tailwind CSS&nbsp;</MyLink>
          for the utility-first CSS framework.
        </li>
        <li>
          <MyLink href="https://ark-ui.com">Ark UI</MyLink>&nbsp;for the
          accessible, unstyled components.
        </li>
        <li>
          <MyLink href="https://ui.shadcn.com/">Shadcn ui</MyLink> for inspiring
          this library and its form and table components.
        </li>
        <li>
          <MyLink href="https://ui.shadcn.com/">React Hook Form</MyLink> for
          powering our form validation.
        </li>
      </ul>
      <DocText level="titleTwo">FAQ</DocText>

      <Accordion>
        <AccordionItem value="b">
          <AccordionItemSummary>
            Wich frameworks are supported ?
          </AccordionItemSummary>
          <AccordionItemDetails>
            You can use it with all react based frameworks.
          </AccordionItemDetails>
        </AccordionItem>

        <AccordionItem value="c">
          <AccordionItemSummary>
            Can i use this in my project ?
          </AccordionItemSummary>
          <AccordionItemDetails>
            Yes, you can use it, it's open source.
          </AccordionItemDetails>
        </AccordionItem>

        <AccordionItem value="a">
          <AccordionItemSummary>
            Why not cn function like shadcn to merge tailwind classes
          </AccordionItemSummary>
          <AccordionItemDetails>
            I am not fan of overriding design system components class
          </AccordionItemDetails>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default IntroductionPage;
