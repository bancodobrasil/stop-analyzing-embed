import React from 'react';

import './ProgressBar.css';

function ProgressBar({
  progress
}:{progress?:Number}) {
  return (
    <div className={`mt-2 progress progress-moved progress-${progress}`}>
      <div className="progress-bar"></div>
    </div>
  );
}

export default ProgressBar;
