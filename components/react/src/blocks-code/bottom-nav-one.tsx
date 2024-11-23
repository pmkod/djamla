export const bottomNavOneCode = `import { IconBell, IconHome2, IconSearch, IconUser } from "@tabler/icons-react";
import { PropsWithChildren, ReactNode } from "react";

const bottomNavLinks = [
  {
    path: "/home",
    label: "Home",
    icon: <IconHome2 />,
  },
  {
    path: "/search",
    label: "Seach",
    icon: <IconSearch />,
  },
  {
    path: "/notifications",
    label: "Notifications",

    icon: <IconBell />,
  },
  {
    path: "/profile",
    label: "Profile",

    icon: <IconUser />,
  },
];

const BottomNavOne = ({ children }: PropsWithChildren) => {
  return <BottomNav />;
};

const BottomNav = () => {
  return (
    <div className="bg-base-0 fixed bottom-0 left-0 right-0 z-40 flex h-16 border-t">
      {bottomNavLinks.map((props, index) => (
        <BottomNavItem key={index} {...props} />
      ))}
    </div>
  );
};

interface BottomNavItemProps {
  path: string;
  label: string;
  icon: ReactNode;
}

const BottomNavItem = ({ path, label, icon }: BottomNavItemProps) => {
  return (
    <a
      href="#"
      className="text-base-500 flex flex-1 flex-col items-center justify-center gap-y-0.5"
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </a>
  );
};

export { BottomNavOne };
`;
