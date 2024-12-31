export const formCode = `"use client";
import { ark } from "@ark-ui/react";
import { createContext, forwardRef, useContext, useId } from "react";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import { Label } from "../core/label";

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

FormField.displayName = "FormField";

const useFormField = () => {
  const fieldContext = useContext(FormFieldContext);
  const itemContext = useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: \`\${id}-form-item\`,
    formDescriptionId: \`\${id}-form-item-description\`,
    formMessageId: \`\${id}-form-item-message\`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={"space-y-2 " + className} {...props} />
    </FormItemContext.Provider>
  );
});

FormItem.displayName = "FormItem";

const FormLabel = forwardRef<
  HTMLLabelElement,
  React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLElement>,
    HTMLLabelElement
  >
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      aria-invalid={error !== undefined}
      htmlFor={formItemId}
      className={className}
      {...props}
    />
  );
});

FormLabel.displayName = "FormLabel";

const FormControl = forwardRef<
  React.ElementRef<typeof ark.slot>,
  React.ComponentPropsWithoutRef<typeof ark.slot>
>((props, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <ark.slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? \`\${formDescriptionId}\`
          : \`\${formDescriptionId} \${formMessageId}\`
      }
      aria-invalid={!!error}
      asChild
      {...props}
    />
  );
});

FormControl.displayName = "FormControl";

const FormFieldHelperText = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={"text-base-500 text-sm leading-[1] " + className}
      {...props}
    />
  );
});

FormFieldHelperText.displayName = "FormFieldHelperText";

const FormFieldErrorMessage = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const message = error ? String(error?.message) : children;

  if (!message) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={"text-sm font-medium text-red-500 " + className}
      {...props}
    >
      {message}
    </p>
  );
});

FormFieldErrorMessage.displayName = "FormFieldErrorMessage";

export {
  Form,
  FormControl,
  FormField,
  FormFieldErrorMessage,
  FormFieldHelperText,
  FormItem,
  FormLabel,
  useFormField,
};
`