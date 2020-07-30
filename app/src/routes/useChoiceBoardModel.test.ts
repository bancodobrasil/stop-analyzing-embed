import { act, renderHook } from '@testing-library/react-hooks';

import useChoiceBoardModel from './useChoiceBoardModel';

// Below test is no longer valid, since we are no longer passing in variables to the useChoiceBoardModel
// instead we are doing a fetch for the initial options

// test('initial options should be on allOption array', async () => {
//   const { result } = renderHook(() =>
//     useChoiceBoardModel()
//   );

//   act(() => {
//     result.current.allOptions;
//   });

//   expect(result.current.allOptions).toStrictEqual(['option1', 'option2']);
// });
