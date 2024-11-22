import { IconMenu, IconMenu2 } from "@tabler/icons-react";
import { Button } from "../core/button";
import { IconButton } from "../core/icon-button";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../core/drawer";

const headerLinks = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/blog",
    name: "Blog",
  },
  {
    path: "/forum",
    name: "Forum",
  },
  {
    path: "/contact",
    name: "Contact",
  },
  {
    path: "/about",
    name: "About",
  },
];

const HeaderOne = () => {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 mx-auto flex h-16 max-w-[1366px] items-center bg-white px-6">
      <DrawerMenu />
      <a href="#" className="text-2xl font-bold">
        Logo
      </a>

      <div className="flex-1">
        <div className="hidden space-x-5 pl-16 md:block">
          {headerLinks.map(({ path, name }, index) => (
            <a
              key={index}
              href="#"
              className="text-base-600 hover:text-base-800 inline-block py-1 font-medium transition-colors"
            >
              {name}
            </a>
          ))}
        </div>
      </div>

      <div className="space-x-2">
        <Button variant="ghost" colorScheme="black" size="md">
          Log in
        </Button>
        <Button size="md">Sign up</Button>
      </div>
    </header>
  );
};

const DrawerMenu = () => {
  return (
    <div className="mr-4 md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <IconButton variant="outline" colorScheme="black">
            <IconMenu2 />
          </IconButton>
        </DrawerTrigger>
        <DrawerContent side="left">
          <div className="flex h-max gap-x-4 px-2">
            <DrawerCloseButton />

            <a href="#" className="text-2xl font-bold">
              Logo
            </a>
          </div>
          <DrawerBody>
            {headerLinks.map(({ path, name }, index) => (
              <a
                key={index}
                href="#"
                className="text-base-600 hover:text-base-800 block px-2.5 py-1 text-xl font-medium transition-colors"
              >
                {name}
              </a>
            ))}
          </DrawerBody>
          <DrawerFooter>
            <div className="flex w-full flex-col gap-y-2">
              <Button variant="outline" fullWidth colorScheme="black" size="md">
                Log in
              </Button>
              <Button size="md" fullWidth>
                Sign up
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export { HeaderOne };
