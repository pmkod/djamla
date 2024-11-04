import React from "react";
import { Badge } from "../../react/components/core/badge";

const BadgePage = () => {
  return (
    <div>
      <div className="pt-20 px-8 flex items-start gap-10 flex-wrap">
        <Badge size="lg">Hello</Badge>
        <Badge size="md">Hello</Badge>
        <Badge size="sm">Hello</Badge>
        <Badge colorScheme="black"> Hello</Badge>
        <Badge colorScheme="red"> Hello</Badge>

        <Badge variant="outline"> Hello</Badge>
        <Badge variant="outline"> Hello</Badge>
        <Badge variant="outline"> Hello</Badge>
        <Badge variant="outline" colorScheme="black">
          Hello
        </Badge>
        <Badge variant="outline" colorScheme="red">
          Hello
        </Badge>

        <Badge variant="soft"> Hello</Badge>
        <Badge variant="soft"> Hello</Badge>
        <Badge variant="soft"> Hello</Badge>
        <Badge variant="soft" colorScheme="black">
          Hello
        </Badge>
        <Badge variant="soft" colorScheme="red">
          Hello
        </Badge>

        <Badge variant="plain"> Hello</Badge>
        <Badge variant="plain"> Hello</Badge>
        <Badge variant="plain"> Hello</Badge>
        <Badge variant="plain" colorScheme="black">
          Hello
        </Badge>
        <Badge variant="plain" colorScheme="red">
          Hello
        </Badge>
      </div>
    </div>
  );
};

export default BadgePage;
