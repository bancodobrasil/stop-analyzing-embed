import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import DismissButton from './DismissButton';

test('should render: Button Label with onClick event.', () => {
  const fn = jest.fn();
  const { queryByText } = render(
    <DismissButton buttonLabel="Button Label" onClick={fn} />
  );

  fireEvent.click(queryByText('Button Label')!);
  expect(fn).toBeCalledTimes(1);

  expect(queryByText('Button Label')).toBeInTheDocument();
});

