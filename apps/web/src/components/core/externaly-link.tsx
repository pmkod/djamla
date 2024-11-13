import Link from "next/link";
import { ReactNode } from "react";

interface ExternalLinkProps {
  children: ReactNode;
  href: string;
}

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
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

export { ExternalLink };
