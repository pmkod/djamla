"use client";
import React, { useEffect, useState } from "react";
import { LinearProgress } from "../../react/components/core/linear-progress";

const LinearProgressPage = () => {
  const [progressValue, setProgressValue] = useState(50);
  useEffect(() => {
    setTimeout(() => {
      setProgressValue(80);
    }, 1000);
  }, []);
  return (
    <div>
      <div className="p-20">
        <div className="flex flex-col gap-y-10 max-w-96">
          <LinearProgress size="sm" value={progressValue} />
          <LinearProgress size="md" value={progressValue} />
          <LinearProgress size="lg" value={progressValue} />
        </div>
      </div>
    </div>
  );
};

export default LinearProgressPage;
