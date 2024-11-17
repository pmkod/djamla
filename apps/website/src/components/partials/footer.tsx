import React from "react";
import { Container } from "../core/container";
import { Logo } from "../core/logo";
import { ExternalLink } from "../core/externaly-link";
import { authorGithubProfileLink, githupRepoLink } from "@/constants/links";

export const Footer = () => {
  return (
    <footer className="bg-base-100 border-t-base-300 border-t">
      <Container>
        <div className="pb-12 pt-8">
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-base-500">
            A project create by{" "}
            <ExternalLink href={authorGithubProfileLink}>pmkod</ExternalLink>
          </p>
          <p className="text-base-500">
            The source code is available on{" "}
            <ExternalLink href={githupRepoLink}>Github</ExternalLink>
          </p>
        </div>
      </Container>
    </footer>
  );
};
