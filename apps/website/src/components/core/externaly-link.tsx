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
      className="border-base-500 border-b"
    >
      {children}
    </Link>
  );
};

export { ExternalLink };
