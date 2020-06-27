/**
 * Component that trigger a timer to hurry the user in the choosing interaction
 * This component renders a reverse progress-bar and ends automatically the choosing process
 */
import React from "react";
import useTimerComponentModel from "./useTimerComponentModel";

function TimerComponent({ timeout }: { timeout: number }) {
  const { remainingTime, rendered, setRendered } = useTimerComponentModel({ timeout });

  return (
    <>
      {rendered && (
        <div>
          <strong>{remainingTime} seconds</strong>
          <button onClick={(_) => setRendered(false)}>Dismiss</button>
        </div>
      )}
    </>
  );
}
export default TimerComponent;
