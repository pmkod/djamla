export const reactRadioGroupExampleCode = `import { RadioGroup, RadioGroupItem } from "../core/radio-group";

export const RadioGroupExample = () => {
  return (
    <RadioGroup orientation="horizontal">
      <RadioGroupItem value="a">React</RadioGroupItem>
      <RadioGroupItem value="b">Solid</RadioGroupItem>
      <RadioGroupItem value="c">Vue</RadioGroupItem>
    </RadioGroup>
  );
};
`