"use client";
import { ark } from "@ark-ui/solid";
import { cva, type VariantProps } from "class-variance-authority";
import {JSX, splitProps} from "solid-js"

const alertStyle = cva(
  "relative flex w-full shrink-0 gap-3 rounded-sm px-4 py-3",
  {
    variants: {
      variant: {
        solid: "text-white",
        outline: "border-base-300 border",
        soft: "",
        plain: "",
      },
      colorScheme: {
        primary: "",
        red: "",
        green: "",
        black: "",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "primary",
        className: "bg-primary-500",
      },
      {
        variant: "outline",
        colorScheme: "primary",
        className: "text-primary-500",
      },
      {
        variant: "soft",
        colorScheme: "primary",
        className: "bg-primary-100 text-primary-500",
      },
      {
        variant: "plain",
        colorScheme: "primary",
        className: "text-primary-500",
      },
      {
        variant: "solid",
        colorScheme: "green",
        className: "bg-green-500",
      },
      {
        variant: "outline",
        colorScheme: "green",
        className: "text-green-600",
      },
      {
        variant: "soft",
        colorScheme: "green",
        className: "bg-green-200 text-green-700",
      },
      {
        variant: "plain",
        colorScheme: "green",
        className: "text-green-500",
      },
      {
        variant: "solid",
        colorScheme: "red",
        className: "bg-red-500",
      },
      {
        variant: "outline",
        colorScheme: "red",
        className: "text-red-600",
      },
      {
        variant: "soft",
        colorScheme: "red",
        className: "bg-red-100 text-red-600",
      },
      {
        variant: "plain",
        colorScheme: "red",
        className: "text-red-600",
      },
      //
      {
        variant: "solid",
        colorScheme: "black",
        className: "bg-base-900",
      },
      {
        variant: "outline",
        colorScheme: "black",
        className: "text-base-900",
      },
      {
        variant: "soft",
        colorScheme: "black",
        className: "bg-base-200 text-base-900",
      },
      {
        variant: "plain",
        colorScheme: "black",
        className: "text-base-900",
      },
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "black",
    },
  },
);

interface AlertProps extends JSX.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertStyle> {

}

const Alert = (props: AlertProps) => {
    const [local, rest] = splitProps(props, ['variant', 'colorScheme'])
    return (
        <div
          role="alert"
          class={alertStyle({ variant:local.variant, colorScheme: local.colorScheme, class: rest.class })}
          {...props}
        />
      )
}



const AlertIcon = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => {
    
    return(
        <div {...props} />
      )
}

const AlertContent = (props:JSX.HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <div {...props} />
      )
};


const AlertTitle = (props: JSX.HTMLAttributes<HTMLHeadingElement>) => (
  <h5
  {...props}
    class={
      "mb-1 text-base font-medium leading-none tracking-tight " + props.class
    }
  />
);


interface AvatarDescriptionProps extends JSX.HTMLAttributes<HTMLDivElement> {

}

const AlertDescription = (props: AvatarDescriptionProps) => (
  <div
  {...props}
  class={"text-sm [&_p]:leading-relaxed " + props.class}
  />
);

export { Alert, AlertContent, AlertDescription, AlertIcon, AlertTitle };
