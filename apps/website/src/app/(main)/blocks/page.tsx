import { Container } from "@/components/core/container";
import { BlockItem } from "@/components/items/block-item";
import React from "react";

const blocks = [
  {
    path: "/blocks/headers",
    name: "Headers",
  },
  {
    path: "/blocks/hero-sections",
    name: "Hero sections",
  },
  {
    path: "/blocks/footers",
    name: "Footers",
  },
  {
    path: "/blocks/login-forms",
    name: "Login forms",
  },
  {
    path: "/blocks/signup-forms",
    name: "Signup forms",
  },
  {
    path: "/blocks/password-reset-forms",
    name: "Password reset forms",
  },
  {
    path: "/blocks/otp-verification-forms",
    name: "Otp verifiction forms",
  },
  {
    path: "/blocks/new-password-forms",
    name: "New password forms",
  },
];

const BlocksPage = () => {
  return (
    <>
      <div className="text-base-800 text-center text-4xl font-bold">Blocks</div>
      <div className="text-base-500 mx-auto mt-2 max-w-96 text-center leading-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis enim
        soluta eligendi sequi ut?
      </div>

      <div className="mb-40 mt-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {blocks.map(({ path, name }, index) => (
            <BlockItem key={index} path={path} name={name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlocksPage;
