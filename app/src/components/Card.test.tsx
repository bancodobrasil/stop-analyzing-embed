import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

import '@testing-library/jest-dom/extend-expect';

test('renders a card image', () => {
    const testTitle = 'this is a title';
    const testPara = 'this is a paragraph';
    const testImg = 'sampleImage.gif';
    const testLabel = 'this is a description for image';
    const { container } = render(
        <Card
            title={testTitle}
            paragraph={testPara}
            imageURL={testImg}
            ariaLabel={testLabel}
        />
    );

    screen.debug();
    screen.queryByText('this is a title');
    screen.queryAllByText('this is a paragraph');
    screen.queryByRole('img');
    screen.queryByLabelText(testLabel);
    // I am not sure if this is correct and it is necessary check image extension file here.
    // probably we would already have a type checker from API in real practice.
    screen.queryByText((testImg) => testImg.match(/jpe?g|png|gif$/));

    // to check if image container div comes before paragraph.
    expect(
        container.firstChild?.firstChild?.firstChild?.nextSibling
    ).toBeEmptyDOMElement();
});

test('reders elementsPlacement', () => {
    const testImg = 'sampleImage.gif';
    const testPara = 'this is a paragraph';
    const { container } = render(
        <Card elementsPlacement="pi" imageURL={testImg} paragraph={testPara} />
    );

    // to check the order of the DOM in case of having the elementsPlacement props
    expect(container.firstChild?.firstChild).toHaveTextContent(testPara);
});
