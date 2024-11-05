import React from "react";
import { IconButton } from "../../react/components/core/icon-button";

const IconButtonPage = () => {
  return (
    <div>
      <div className="p-20">
        <div className="flex flex-wrap gap-20">
          <IconButton variant="solid" isLoading>
            AA
          </IconButton>
          <IconButton variant="outline">AA</IconButton>
          <IconButton variant="ghost">AA</IconButton>

          <IconButton variant="solid" colorScheme="red">
            AA
          </IconButton>
          <IconButton variant="outline" colorScheme="red">
            AA
          </IconButton>
          <IconButton variant="ghost" colorScheme="red">
            AA
          </IconButton>

          <IconButton variant="solid" colorScheme="black">
            AA
          </IconButton>
          <IconButton variant="outline" colorScheme="black">
            AA
          </IconButton>
          <IconButton variant="ghost" colorScheme="black">
            AA
          </IconButton>
          <IconButton variant="solid" size="xl">
            AA
          </IconButton>
          <IconButton variant="solid" disabled>
            AA
          </IconButton>
          <IconButton variant="outline">AA</IconButton>
          <IconButton variant="outline">AA</IconButton>
          <IconButton variant="ghost">AA</IconButton>
          <IconButton variant="ghost">AA</IconButton>
        </div>
      </div>
    </div>
  );
};

export default IconButtonPage;
