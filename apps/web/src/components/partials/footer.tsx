import React from "react";
import { Container } from "../core/container";
import { Logo } from "../core/logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-t-base-300">
      <Container>
        <div className="pt-10 pb-12">
          <div className="mb-4">
            <Logo />
          </div>
          <p className="text-base-500">
            A project create by{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/pmkod"
              className="border-b border-b-base-400"
            >
              pmkod
            </Link>
          </p>
          <p className="text-base-500">
            The source code is available on{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/pmkod/djamla"
              className="border-b border-b-base-400"
            >
              Github
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};
