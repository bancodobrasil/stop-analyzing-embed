import React from "react";

import "./ProgressBar.css";

function ProgressBar({
  width,
  className,
}: {
  className?: string;
  width?: number;
}) {
  return (
    <div className={`progress`}>
      <div
        role={`progressbar`}
        className={`progress-bar`}
        aria-valuenow={width}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: width + "%" }}
      ></div>
    </div>
  );
}

export default ProgressBar;
