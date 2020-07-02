import React from 'react'
import { fireEvent, render, screen, createEvent } from '@testing-library/react'

import '@testing-library/jest-dom'
import DropCardArea from './DropCardArea'


test('should render: The div with className. ', () => {
    const { queryByTestId } = render (
        <DropCardArea className='test' />
    )

    const node = queryByTestId('dropCardArea')

    expect(node).toBeInTheDocument()
    expect(node).toHaveClass('test')
})

test('should render: The div. Simulate drop, check if cardId is on onDrop params ', () => {
    const fn = jest.fn();
    const { queryByTestId } = render (
        <DropCardArea onDrop={fn} />
    )

    const node = queryByTestId('dropCardArea')!
    fireEvent.drop(node, { dataTransfer: {getData: jest.fn(()=> 'testCardId')} });

    expect(node).toBeInTheDocument();
    expect(fn).toBeCalledWith(expect.any(Object), {cardId: 'testCardId'});
    expect(fn).toBeCalledTimes(1);
})