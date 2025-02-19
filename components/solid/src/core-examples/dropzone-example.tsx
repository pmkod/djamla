import { Button } from "../core/button";
import { Dropzone, DropzoneText, DropzoneTrigger } from "../core/dropzone";

export const DropzoneExample = () => {
  return (
    <Dropzone maxFiles={5}>
      <DropzoneText>Drop your file here</DropzoneText>
      <DropzoneTrigger asChild>
        <Button size="sm">Select file</Button>
      </DropzoneTrigger>
    </Dropzone>
  );
};
