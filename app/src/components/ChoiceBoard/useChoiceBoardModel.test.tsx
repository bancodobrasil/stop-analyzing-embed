import { act, renderHook } from '@testing-library/react-hooks';
import useChoiceBoardModel from './useChoiceBoardModel';


test('initial options should be on allOption array', async () => {

  const { result } = renderHook(() => useChoiceBoardModel(['option1', 'option2']));

  act(() => {
    result.current.allOptions;
  });

  expect(result.current.allOptions).toStrictEqual(['option1', 'option2']);
});
