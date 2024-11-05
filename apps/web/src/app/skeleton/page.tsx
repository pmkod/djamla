import React from "react";
import { Skeleton } from "../../react/components/core/skeleton";

const SkeletonPage = () => {
  return (
    <div>
      <div className="p-20 space-y-20">
        <div className="flex w-72 items-center gap-x-2 rounded border border-gray-200 px-4 py-3">
          <Skeleton width={40} height={40} rounded="full" />
          <div className="flex-1 space-y-1.5">
            <Skeleton width="100%" height={11} rounded="full" />
            <Skeleton width={50} height={11} rounded="full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonPage;
