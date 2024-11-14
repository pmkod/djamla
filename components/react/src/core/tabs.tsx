"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "@ark-ui/react";
import { cva, VariantProps } from "class-variance-authority";

const Tabs = TabsPrimitive.Root;

const tabListStyle = cva(
  "relative flex h-10 items-center justify-start border-b border-b-base-300",
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
  }
);

const TabList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List> &
    VariantProps<typeof tabListStyle>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> &
    VariantProps<typeof tabListStyle>
>(({ className, children, size, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={tabListStyle({ size, className })}
    {...props}
  >
    {children}
  </TabsPrimitive.List>
));

TabList.displayName = "TabList";

const Tab = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={
        "inline-flex flex-shrink-0 text-base-700 h-full items-center justify-center overflow-visible whitespace-nowrap px-3 text-sm font-medium transition-all hover:bg-base-200 disabled:pointer-events-none disabled:opacity-50 " +
        className
      }
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator className="w-[--width] h-0.5 left-0 bottom-0 bg-primary-600" />
    </TabsPrimitive.Trigger>
  );
});

Tab.displayName = "Tab";

const TabContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={
      "ring-offset-background text-base-700 focus-visible:ring-ring mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
      className
    }
    {...props}
  />
));

TabContent.displayName = "TabContent";

export { Tabs, Tab, TabList, TabContent };
