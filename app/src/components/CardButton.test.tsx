import '@testing-library/jest-dom';

import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import CardButton from './CardButton';
import { ChoiceCardProps } from './ChoiceCard';

test('should render: Button Label with onClick event. No cardProps', () => {
  const fn = jest.fn();
  const { queryByText } = render(
    <CardButton buttonLabel="Button Label" onClick={fn} />
  );

  fireEvent.click(queryByText('Button Label')!);
  expect(fn).toBeCalledTimes(1);

  expect(queryByText('Button Label')).toHaveClass('btn-default');

  expect(queryByText('Button Label')).toBeInTheDocument();
  expect(queryByText('isPrimary')).toBeNull();
});

test('should render: Button Label with onClick event and isPrimary. No cardProps', () => {
  const fn = jest.fn();
  const { queryByText } = render(
    <CardButton buttonLabel="Button Label" onClick={fn} isPrimary={true} />
  );

  fireEvent.click(queryByText('Button Label')!);
  expect(fn).toBeCalledTimes(1);

  expect(queryByText('Button Label')).toBeInTheDocument();
  expect(queryByText('Button Label')).toHaveClass('btn-primary');
});

test('should render: Button Label with onClick event. There is cardProps, check if cardProps is on onClick params', () => {
  const propsCard: ChoiceCardProps = {
    id: 'X',
    title: 'Amazing',
  };
  const fn = jest.fn();
  const { queryByText } = render(
    <CardButton buttonLabel="Button Label" onClick={fn} cardProps={propsCard} />
  );

  const node = queryByText('Button Label');
  fireEvent.click(node!);

  expect(fn).toBeCalledWith(expect.any(Object), propsCard);
  expect(fn).toBeCalledTimes(1);

  expect(node).toBeInTheDocument();
  expect(node).toHaveClass('btn-default');
});
