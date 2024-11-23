import {
  authorGithubProfileLink,
  authorTwitterProfileLink,
} from "@/constants/links";
import { IconBrandTwitter } from "@tabler/icons-react";
import Link from "next/link";
import { Container } from "../core/container";
import { ExternalLink } from "../core/external-link";
import { Logo } from "../core/logo";

export const Footer = () => {
  return (
    <footer className="bg-base-100 border-t-base-300 border-t">
      <Container>
        <div className="flex items-end justify-between pb-12 pt-8">
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-base-500">
              A project create by{" "}
              <ExternalLink href={authorGithubProfileLink}>pmkod</ExternalLink>
            </p>
          </div>

          <Link
            href={authorTwitterProfileLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconBrandTwitter className="text-base-800" />
          </Link>
        </div>
      </Container>
    </footer>
  );
};
