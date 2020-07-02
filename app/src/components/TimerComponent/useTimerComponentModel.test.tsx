import { renderHook, act } from '@testing-library/react-hooks';
import useTimerComponentModel from './useTimerComponentModel';

test('should test the timeout', async () => {
  const { result } = renderHook(() => useTimerComponentModel({ timeout: 15 }));

  act(() => {
    result.current.remainingTime;
  });

  expect(result.current.remainingTime).toBe(15);
  // implement a test to expect the remaining time to be 0
});
