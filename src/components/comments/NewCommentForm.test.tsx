import NewCommentForm from './NewCommentForm'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

test('NewCommentForm is rendered', () => {
  render(
    <NewCommentForm
      onAddedComment={function (): void {
        throw new Error('Function not implemented.')
      }}
      quoteId={''}
    />,
  )

  const newCommentTextarea = screen.getByRole('textbox')
  expect(newCommentTextarea).toBeTruthy()
})
