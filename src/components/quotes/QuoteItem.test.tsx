import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import QuoteItem from './QuoteItem'
import { MemoryRouter } from 'react-router-dom'

const defaultProps = {
  key: 'k1',
  id: 'q1',
  author: 'Dummy User',
  text: 'Dummy Text',
}

describe('QuoteItem', () => {
  test('is rendered with Text prop', () => {
    // Arrange
    render(
      <MemoryRouter>
        <QuoteItem {...defaultProps} />
      </MemoryRouter>,
    )

    // Act
    const singleItemText = screen.getByText(defaultProps.text)

    // Assert
    expect(singleItemText).toBeTruthy()
  })

  test('is rendered with Author prop', () => {
    // Arrange
    render(
      <MemoryRouter>
        <QuoteItem {...defaultProps} />
      </MemoryRouter>,
    )

    // Act
    const singleItemAuthor = screen.getByText(defaultProps.author)

    // Assert
    expect(singleItemAuthor).toBeTruthy()
  })

  test('renders valid anchor for quote detail', () => {
    // Arrange
    render(
      <MemoryRouter>
        <QuoteItem {...defaultProps} />
      </MemoryRouter>,
    )

    // Act
    const buttonElement = screen.getByRole('link')
    userEvent.click(buttonElement)

    // Assert

    const outputElement = screen.getByText('View Fullscreen')

    expect(outputElement).toHaveAttribute('href', '/quotes/q1')
  })
})
