import React from 'react'
import { render } from '@testing-library/react'
import ChoiceCard from './ChoiceCard'

import '@testing-library/jest-dom';

test('should render: title. Should not render: paragraph, image', () => {
    const imgURLTest = "http://image"
    const { queryByText, queryByAltText } = render(
        <ChoiceCard id="X" title="Title" />
    )
    expect(queryByText('Title')).toBeInTheDocument()
    expect(queryByText('Paragraph')).toBeNull()
    expect(queryByAltText(imgURLTest)).toBeNull()
})

test('should render: title and image. Should not render: paragraph', () => {
    const imgURLTest = "http://image"
    const { queryByText, queryByAltText } = render(
        <ChoiceCard id="X" title="Title" imageURL={imgURLTest} />
    )
    expect(queryByText('Title')).toBeInTheDocument()
    expect(queryByText('Paragraph')).toBeNull()
    expect(queryByAltText(imgURLTest)).toBeInTheDocument()
})

test('should render: title and paragraph. Should not render: image', () => {
    const paragraphTextTest = "Paragraph test"
    const { queryByText, queryByAltText } = render(
        <ChoiceCard id="X" title="Title" paragraph={paragraphTextTest} />
    )
    expect(queryByText('Title')).toBeInTheDocument()
    expect(queryByText(paragraphTextTest)).toBeInTheDocument()
    expect(queryByAltText("http://image")).toBeNull()
})


test('should render: title, paragraph and image', () => {
    const paragraphTextTest = "Paragraph test"
    const imgURLTest = "http://image"
    const { queryByText, queryByAltText } = render(
        <ChoiceCard id="X" title="Title" paragraph={paragraphTextTest} imageURL={imgURLTest} />
    )
    expect(queryByText('Title')).toBeInTheDocument()
    expect(queryByText(paragraphTextTest)).toBeInTheDocument()
    expect(queryByAltText(imgURLTest)).toBeInTheDocument()
})
