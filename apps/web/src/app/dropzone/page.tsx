import React from "react";
import {
  Dropzone,
  DropzoneText,
  DropzoneTrigger,
} from "../../react/components/core/dropzone";
import { Button } from "../../react/components/core/button";

const DropzonePage = () => {
  return (
    <div className="p-20">
      <div className="w-96">
        <Dropzone maxFiles={5}>
          <DropzoneText>Drop your file here</DropzoneText>
          <DropzoneTrigger asChild>
            <Button size="sm">Select file</Button>
          </DropzoneTrigger>
        </Dropzone>
      </div>
    </div>
  );
};

export default DropzonePage;
