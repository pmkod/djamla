import React from "react";
import { Loader } from "../../react/components/core/loader";

const LoaderPage = () => {
  return (
    <div>
      <div className="flex gap-x-7 p-4">
        <Loader size="sm" colorScheme="primary" />
        <Loader size="md" colorScheme="black" />
        <Loader size="lg" colorScheme="green" />
        <Loader size="xl" colorScheme="red" />
      </div>
    </div>
  );
};

export default LoaderPage;
