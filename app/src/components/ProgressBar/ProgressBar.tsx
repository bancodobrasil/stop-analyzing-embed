import React from 'react';

import './ProgressBar.css';

function ProgressBar({ progress = 0 }: { progress?: number }) {
  if (progress < 0) {
    progress = 0;
  }
  if (progress > 100) {
    progress = 100;
  }
  return (
    <div className="progress">
      <div
        role="progressbar"
        className="progress-bar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
