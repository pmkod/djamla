export const solidRadioGroupCode = `import {
  RadioGroup as RadioGroupPrimitives,
  useRadioGroup,
} from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";
import { splitProps } from "solid-js";

interface RadioGroupProps extends RadioGroupPrimitives.RootProps {
  orientation?: "vertical" | "horizontal";
}

const RadioGroup = (props: RadioGroupProps) => {
    const [local, rest] =splitProps(props, ['orientation'])
    const {orientation = "vertical"} = local
    const {children, ...restProps} = rest
  return (
    <RadioGroupPrimitives.Root
      class={\`flex \${
        orientation === "vertical" ? "flex-col gap-y-1.5" : "gap-x-4"
        }\`}
        {...restProps}
        >
      {children}
    </RadioGroupPrimitives.Root>
  );
}

RadioGroup.displayName = "RadioGroup";

const radioGroupItemStyle = cva(
  "border-base-400 hover:bg-base-100 aspect-square rounded-full border p-0.5 transition-colors",
  {
    variants: {
      size: {
        sm: "w-3",
        md: "w-4",
        lg: "w-5",
        xl: "w-6",
      },
      checked: {
        true: "border-primary-400",
      },
    },
  },
);

const radioGroupItemTextStyle = cva("text-base-900", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-balance",
    },
  },
});

interface RadioGroupItemProps extends RadioGroupPrimitives.ItemProps,     VariantProps<typeof radioGroupItemStyle>,
VariantProps<typeof radioGroupItemTextStyle> {

}

const RadioGroupItem = (props: RadioGroupItemProps) => {
    const [local, rest] = splitProps(props, ['size', "checked"])
    const {children, ...restProps} = rest
  const radioGroup = useRadioGroup(props);

  
  const checked = radioGroup().getItemState(props).checked;




  return (
    <RadioGroupPrimitives.Item
      class="flex cursor-pointer items-center gap-x-2"
      {...restProps}
    >
      <div
        class={radioGroupItemStyle({
          size: local.size,
          checked: local.checked,
        })}
      >
        {checked && (
          <RadioGroupPrimitives.ItemControl class="h-full w-full rounded-full bg-blue-500" />
        )}
      </div>
      <RadioGroupPrimitives.ItemText
        class={radioGroupItemTextStyle({
          size: local.size,
        })}
      >
        {children}
      </RadioGroupPrimitives.ItemText>
      <RadioGroupPrimitives.ItemHiddenInput />
    </RadioGroupPrimitives.Item>
  );
};

RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
`