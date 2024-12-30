
import { Tabs as TabsPrimitives } from "@ark-ui/solid";
import { cva, VariantProps } from "class-variance-authority";
import {splitProps} from "solid-js"

const Tabs = (props: TabsPrimitives.RootProps) => {
    return (
        <TabsPrimitives.Root
          {...props}
        />
      )
}

const tabListStyle = cva(
  "border-b-base-300 relative flex h-10 items-center justify-start border-b",
  {
    variants: {
      size: {
        sm: "h-9",
        md: "h-10",
        lg: "h-11",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

interface TabListProps extends TabsPrimitives.ListProps, VariantProps<typeof tabListStyle> {}

const TabList = (props:  TabListProps) => {
    const [local, rest] = splitProps(props, ['size'])
    return (
        <TabsPrimitives.List
          class={tabListStyle({ size: local.size })}
          {...rest}
        />
      )
}

const Tab = (props: TabsPrimitives.TriggerProps) => {
    const [local, rest] = splitProps(props, ["children"])

  return (
    <TabsPrimitives.Trigger
      class={
        "text-base-700 hover:bg-base-200 inline-flex h-full flex-shrink-0 items-center justify-center overflow-visible whitespace-nowrap px-3 text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 "
      }
      {...rest}
    >
      {local.children}
      <TabsPrimitives.Indicator class="bg-primary-600 bottom-0 left-0 h-0.5 w-[--width]" />
    </TabsPrimitives.Trigger>
  );
};


const TabContent = (props: TabsPrimitives.ContentProps) => {
    return (
        <TabsPrimitives.Content
          class="ring-offset-background text-base-700 focus-visible:ring-ring mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 "
          {...props}
        />
      )
}


export { Tab, TabContent, TabList, Tabs };
