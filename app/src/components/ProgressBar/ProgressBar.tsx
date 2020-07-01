import React from 'react';

import './ProgressBar.css';

function ProgressBar({ progress = 0 }: { progress?: number }) {
  
  let progressBarProgress = progress;
  
  if (progressBarProgress < 0) {
    progressBarProgress = 0;
  }
  if (progressBarProgress > 100) {
    progressBarProgress = 100;
  }
  return (
    <div className="progress">
      <div
        role="progressbar"
        aria-label="Progress Bar to complete the analyze"
        className="progress-bar"
        aria-valuenow={progressBarProgress}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{ width: `${progressBarProgress}%` }}
      />
    </div>
  );
}

export default ProgressBar;
