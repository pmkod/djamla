import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalTitle, ModalTrigger, PinInput, RadioGroup, RadioGroupItem,

  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  IconButton,

  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  NativeSelect,
  Pagination,
  Avatar,
  AvatarImage,
  Alert,
  AlertIcon,
  AlertContent,
  AlertTitle,
  AlertDescription,
 } from "@repo/solid-ui"

 import { IconInfoCircle } from "@tabler/icons-solidjs";


const FourthPage = () => {
  return (
    <div class="min-h-screen">

<div class="p-10">
<PinInput length={4} />
</div>

<div class="p-10">
{/* <RadioGroup orientation="horizontal">
      <RadioGroupItem value="a">React</RadioGroupItem>
      <RadioGroupItem value="b">Solid</RadioGroupItem>
      <RadioGroupItem value="c">Vue</RadioGroupItem>
    </RadioGroup> */}
</div>

<div class="p-10">
<Modal>
      <ModalTrigger>
        <Button variant="outline" colorScheme="black">
          Open md Modal
        </Button>
      </ModalTrigger>
      <ModalContent size="md">
        <ModalHeader>
          <ModalCloseButton />

          <ModalTitle>Title</ModalTitle>
          <Button size="sm">Save</Button>
        </ModalHeader>
        <ModalBody>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad a
            laboriosam qui, quo modi fuga.
          </div>
          <div class="h-screen"></div>
        </ModalBody>
      </ModalContent>
    </Modal>
</div>

<div class="p-10">
<Drawer>
      <DrawerTrigger>
        <Button variant="outline" colorScheme="black">
          Open left drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent side="left">
        <DrawerHeader>
          <DrawerTitle>Title</DrawerTitle>
          <DrawerCloseButton />
        </DrawerHeader>

        <DrawerBody>
          <div class="h-screen">A</div>
          <div class="h-screen">B</div>
          <div class="h-screen">C</div>
          <div class="h-screen">D</div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
</div>
<div class="p-10">
<IconButton variant="solid">AA</IconButton>
</div>


<div class="p-10">
<Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>
            <a href="#">Home</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>
            <a href="#">Components</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
</div>



<div class="p-10">
<NativeSelect size="lg">
      <option value="1">Item 1</option>
      <option value="2">Item 2</option>
      <option value="3">Item 3</option>
      <option value="4">Item 4</option>
    </NativeSelect>
</div>



<div class="p-10">

<Alert colorScheme="primary">
      <AlertIcon>
        <IconInfoCircle size={20} />
      </AlertIcon>
      <AlertContent>
        <AlertTitle>Hello</AlertTitle>
        <AlertDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          cupiditate culpa, ex veniam impedit nobis aliquam officia error
          commodi atque?
        </AlertDescription>
      </AlertContent>
    </Alert>
</div>


<div class="p-10">


<Avatar size="md">
      <AvatarImage src="https://i.pravatar.cc/300" />
    </Avatar>
</div>


<div class="p-10"></div>

<div class="p-10"></div>

<div class="p-10"></div>

<div class="p-10">
<Pagination defaultPage={1} count={500} pageSize={10} />
</div>


    </div>
  )
}

export default FourthPage