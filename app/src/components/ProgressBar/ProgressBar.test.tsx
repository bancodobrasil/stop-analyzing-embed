import React from 'react';
import { render } from '@testing-library/react';
import ProgressBar from './ProgressBar';

import '@testing-library/jest-dom';

const progresses = [10, 20, 40, 55, 12, 33, 88, 99];
test(`should render 8 ProgressBar with ${progresses.join(' ')} wide`, () => {
  const { container } = render(
    <div>
      {progresses.map((p) => (
        <ProgressBar key={p} progress={p} />
      ))}
    </div>
  );

  for (let index = 0; index < progresses.length; index++) {
    const prg = progresses[index];
    const currProgress = container.querySelectorAll('.progress-bar')[index];
    const style = window.getComputedStyle(currProgress);

    expect(currProgress?.getAttribute('aria-valuenow')).toContain(prg);
    expect(style.width).toBe(`${prg}%`);
  }
});

test('should render ProgressBar with 0 and 100 even with the values are out of range (<0 and >0)', () => {
  const { container } = render(
    <div>
      <ProgressBar progress={-10} />
      <ProgressBar progress={210} />
    </div>
  );
  const negativeProgress = container.querySelectorAll('.progress-bar')[0];
  const styleNegative = window.getComputedStyle(negativeProgress);
  expect(negativeProgress?.getAttribute('aria-valuenow')).toContain(0);
  expect(styleNegative.width).toBe('0%');

  const positiveProgress = container.querySelectorAll('.progress-bar')[1];
  const stylePositive = window.getComputedStyle(positiveProgress);
  expect(positiveProgress?.getAttribute('aria-valuenow')).toContain(100);
  expect(stylePositive.width).toBe('100%');
});
