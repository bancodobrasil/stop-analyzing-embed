import React from 'react';
import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import TimerComponent from './TimerComponent';

test('should show finish message after 10 seconds', () => {
  const { container } = render(<TimerComponent timeout={10} />);
});
