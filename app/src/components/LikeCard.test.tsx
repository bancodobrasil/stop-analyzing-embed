import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'

import LikeCard from './LikeCard'

test('should render: title and image. Should not render: paragraph', () => {
    const imgURLTest = "http://image"
    const { queryByText, queryByAltText } = render(
        <LikeCard id="X" title="Title" imageURL={imgURLTest} />
    )
    expect(queryByText('Title')).toBeInTheDocument()
    expect(queryByText('Paragraph')).toBeNull()
    expect(queryByAltText(imgURLTest)).toBeInTheDocument()
})

test('should render: title and paragraph. Should not render: image', () => {
    const paragraphTextTest = "Paragraph test"
    const { queryByText, queryByAltText } = render(
        <LikeCard id="X" title="Title" paragraph={paragraphTextTest} />
    )
    expect(queryByText('Title')).toBeInTheDocument()
    expect(queryByText(paragraphTextTest)).toBeInTheDocument()
    expect(queryByAltText("http://image")).toBeNull()
})


test('should render: title, paragraph and image', () => {
    const paragraphTextTest = "Paragraph test"
    const imgURLTest = "http://image"
    const { queryByText, queryByAltText } = render(
        <LikeCard id="X" title="Title" paragraph={paragraphTextTest} imageURL={imgURLTest} />
    )
    expect(queryByText('Title')).toBeInTheDocument()
    expect(queryByText(paragraphTextTest)).toBeInTheDocument()
    expect(queryByAltText(imgURLTest)).toBeInTheDocument()
})