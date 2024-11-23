export const skeletonExampleCode = `import { Skeleton } from "../core/skeleton";

export const SkeletonExample = () => {
  return (
    <div className="border-base-200 flex w-72 items-center gap-x-2 rounded border px-4 py-3">
      <Skeleton width={40} height={40} rounded="full" />
      <div className="flex-1 space-y-1.5">
        <Skeleton width="100%" height={11} rounded="full" />
        <Skeleton width={50} height={11} rounded="full" />
      </div>
    </div>
  );
};
`;
