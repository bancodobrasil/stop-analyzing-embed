import { useState, useEffect } from 'react';

/**
 * ViewModel of the View TimerComponent
 *
 * This has the state attributes of the components and the functions (commands) used
 * to handle the UI events of the user interactions
 */
export default ({ timeout }: { timeout: number }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);
  const [rendered, setRendered] = useState(true);

  useEffect(() => {
    if (remainingTime > 0) {
      setTimeout(() => {
        if (remainingTime > 0) {
          setRemainingTime(remainingTime - 1);
        }
      }, 1000);
    }
  }, [timeout, remainingTime]);

  return {
    remainingTime,
    rendered,
    setRendered,
  };
};
