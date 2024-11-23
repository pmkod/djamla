import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

interface BlockItemProps {
  path: string;
  name: string;
}
const BlockItem = ({ path, name }: BlockItemProps) => {
  return (
    <Link
      href={path}
      className="hover:bg-base-100 border-base-200 flex h-20 items-center justify-between gap-x-4 rounded-sm border px-5 transition-colors"
    >
      <p className="text-base-500 text-lg font-medium">{name}</p>
      <IconArrowRight className="text-base-400" />
    </Link>
  );
};

export { BlockItem };
