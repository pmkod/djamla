export const solidLabelCode = `import { JSX, splitProps } from "solid-js";

interface LabelProps extends JSX.LabelHTMLAttributes<HTMLLabelElement> {

};

 const Label = (props: LabelProps) => {
  const [local, labelProps] = splitProps(props, ["class"]);
  return (
    <label
      class={\`text-base-900 mb-1 text-sm font-medium data-[invalid]:text-red-500 \${local.class || ""}\`}
      {...labelProps}
    />
  );
};
export {Label}`