import React from 'react';

import './ProgressBar.css';

function ProgressBar({
  progress,
  className
}:{className?:string,progress?:number}) {
  return (
    <div className={`progress progress-moved ${className}`}>
      <div className={`progress-bar progress-${progress}`}></div>
    </div>
  );
}

export default ProgressBar;
