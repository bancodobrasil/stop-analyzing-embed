/**
 * Component that trigger a timer to hurry the user in the choosing interaction
 * This component renders a reverse progress-bar and ends automatically the choosing process
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import useTimerComponentModel from './useTimerComponentModel';

function TimerComponent({ timeout }: { timeout: number }) {
  const { remainingTime, rendered, setRendered } = useTimerComponentModel({
    timeout,
  });
  const { t } = useTranslation();

  return (
    <>
      {rendered && (
        <div>
          <strong>
            {remainingTime} {t('seconds')}
          </strong>
          <button type="button" onClick={(_) => setRendered(false)}>
            {t('Dismiss')}
          </button>
        </div>
      )}
    </>
  );
}
export default TimerComponent;
