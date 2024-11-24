import Link from "next/link";

interface FrameworkItemProps {
  path: string;
  label: string;
  imgSrc: string;
}

const FrameworkItem = ({ path, label, imgSrc }: FrameworkItemProps) => {
  return (
    <Link
      href={path}
      className="border-base-200 hover:bg-base-100 flex aspect-video flex-col items-center justify-center gap-y-4 rounded border transition-colors"
    >
      <img src={imgSrc} className="aspect-square w-14" alt={label + " logo"} />
      <div className="text-base-900">{label}</div>
    </Link>
  );
};

export { FrameworkItem };
