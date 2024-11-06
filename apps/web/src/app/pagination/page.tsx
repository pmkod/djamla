import React from "react";
import { Pagination } from "../../react/components/core/pagination";

const PaginationPage = () => {
  return (
    <div>
      <div className="p-10">
        <Pagination defaultPage={1} count={500} pageSize={10} />
      </div>
    </div>
  );
};

export default PaginationPage;
