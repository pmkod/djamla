import React from "react";
import { Rating } from "../../react/components/core/rating";

const RatingPage = () => {
  return (
    <div>
      <div className="p-20">
        <div className="flex flex-wrap gap-20">
          <Rating count={5} defaultValue={3} size="sm" />
          <Rating count={5} defaultValue={3} />
          <Rating count={5} defaultValue={3} size="lg" />
        </div>
      </div>
    </div>
  );
};

export default RatingPage;
