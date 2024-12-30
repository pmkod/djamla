import { JSX, splitProps } from "solid-js";

interface CardProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const Card = (props: CardProps) => 
    {
        const [local, rest] = splitProps(props, ['class'])

        return (
    <div
      class={
        "bg-base-0 border-base-300 text-base-800 rounded border shadow-sm " +
        local.class
      }
      {...rest}
    />
  )};

interface CardHeaderProps extends JSX.HTMLAttributes<HTMLDivElement> {}


const CardHeader = ( props : CardHeaderProps) => 
    
    {
        const [local, rest] = splitProps(props, ['class'])
    return    (
    <div
      class={"flex flex-col space-y-1.5 p-6 " + local.class}
      {...rest}
    />
  )}


interface CardTitleProps extends JSX.HTMLAttributes<HTMLDivElement> {}


const CardTitle = ( props: CardTitleProps) =>
    
    {
        const [local, rest] = splitProps(props, ['class'])

        return(
    <div
      
      class={
        "text-2xl font-semibold leading-none tracking-tight " + local.class
      }
      {...rest}
    />
  
)};

interface CardDescriptionProps extends JSX.HTMLAttributes<HTMLDivElement> {}


const CardDescription = (props: CardDescriptionProps) => 
    
    {
        const [local, rest] = splitProps(props, ['class'])

        return(
  <div class={"text-base-500 text-sm " + local.class} {...rest} />
)}

interface CardBodyProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const CardBody = (props: CardBodyProps) => 
    
   {
    const [local, rest] = splitProps(props, ['class'])


   return (
  <div class={"p-6 pt-0 " + local.class} {...rest} />
)}


interface CardFooterProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const CardFooter =  (props: CardFooterProps) => {
    const [local, rest] = splitProps(props, ['class'])

   return (
    <div
      class={"flex items-center gap-4 px-6 pb-6 " + local.class}
      {...rest}
    />
  )}


export { Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle };
