"use client";
import { Badge } from "@/react/components/core/badge";
import React from "react";

const BadgePage = () => {
  return (
    <div>
      {/* <ComponentShowRoom
        sizes={["sm", "md", "lg", "xl"]}
        colorSchemes={["primary", "black"]}
        variants={["filled", "outlined", "plain", "soft"]}
        defaultSize="md"
      >
      </ComponentShowRoom> */}
      <Badge>Badge</Badge>
    </div>
  );
};

export default BadgePage;
