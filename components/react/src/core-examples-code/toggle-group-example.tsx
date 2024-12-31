export const reactToggleGroupExampleCode = `import { Toggle } from "../core/toggle";
import { ToggleGroup } from "../core/toggle-group";

export const ToggleGroupExample = () => {
  return (
    <ToggleGroup multiple orientation="horizontal">
      <Toggle value="a" size="xl" variant="outline">
        A
      </Toggle>
      <Toggle value="b" size="xl" variant="outline">
        B
      </Toggle>
      <Toggle value="c" size="xl" variant="outline">
        C
      </Toggle>
    </ToggleGroup>
  );
};
`