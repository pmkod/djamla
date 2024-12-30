import { Accordion, AccordionItem, AccordionItemDetails, AccordionItemSummary, Button, Card, CardBody, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Collapsible, CollapsibleContent, CollapsibleTrigger, HoverCard, HoverCardContent, HoverCardTrigger, PinInput, Popover, PopoverCloseButton, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger, Slider, Switch, Textarea } from "@repo/solid-ui";
import { SignaturePadExample } from "~/components/signature-pad-example";
import { TableExample } from "~/components/table-example";


export default function Home() {


    return (
        <div>
            <div class="p-10 flex">
                <Textarea />
            </div>
            <div class="p-10 flex">

            <Switch />
            </div>
            <div class="p-10 flex">

<Checkbox />
</div>


<div class="p-10 flex">
<Collapsible>
      <CollapsibleTrigger>
        <Button>Collapsible</Button>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div class="flex h-52 w-96 items-center justify-center rounded border border-blue-400 bg-blue-100 px-20 text-blue-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis,
          minima!
        </div>
      </CollapsibleContent>
    </Collapsible>
</div>

<div class="p-10 flex">

<Accordion>
      <AccordionItem value="a">
        <AccordionItemSummary>A</AccordionItemSummary>
        <AccordionItemDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          tenetur!
        </AccordionItemDetails>
      </AccordionItem>

      <AccordionItem value="b">
        <AccordionItemSummary>B</AccordionItemSummary>
        <AccordionItemDetails>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
          consequuntur.
        </AccordionItemDetails>
      </AccordionItem>

      <AccordionItem value="c">
        <AccordionItemSummary>C</AccordionItemSummary>
        <AccordionItemDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          culpa earum, beatae aliquam deserunt ipsum reiciendis necessitatibus
          maxime architecto quod modi delectus nesciunt accusantium sapiente
          minus doloremque expedita dolor laborum quidem esse magni eum adipisci
          optio autem! Quos saepe molestiae vitae consequatur eligendi maxime
          repudiandae? Maxime voluptates assumenda voluptate placeat!
        </AccordionItemDetails>
      </AccordionItem>
    </Accordion>

</div>

<div class="p-10">
<Card>
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardBody>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolor
          perferendis omnis odio odit mollitia voluptas libero iste voluptatibus
          dignissimos. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto placeat reprehenderit ut consequuntur laudantium! Lorem
          ipsum dolor sit amet,
        </div>
      </CardBody>
      <CardFooter class="flex justify-between">
        <Button variant="outline" fullWidth>
          Cancel
        </Button>
        <Button fullWidth>Deploy</Button>
      </CardFooter>
    </Card>
</div>

<div class="p-10">
    <SignaturePadExample />
</div>

<div class="p-10">
<HoverCard>
      <HoverCardTrigger>
        <Button variant="ghost">@nextjs</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div class="flex w-80 justify-between space-x-4">
          {/* <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar> */}
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">@nextjs</h4>
            <p class="text-sm">
              The React Framework – created and maintained by @vercel.
            </p>
            <div class="flex items-center pt-2">
              <span class="text-muted-foreground text-xs">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
</div>

<div class="p-10">
<Popover>
      <PopoverTrigger>
        <Button>Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverCloseButton />
        </PopoverHeader>
        <PopoverDescription>Description</PopoverDescription>
      </PopoverContent>
    </Popover>
</div>

<div class="p-10">
    <Slider size="md" />
</div>
<div class="p-10">
<PinInput length={4} />
</div>
        </div>
    )
}