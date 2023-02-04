import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import MainNavigation from './MainNavigation'
import { BrowserRouter } from 'react-router-dom'

describe('Main Navigation Component', () => {
  test('Renders Header Element', () => {
    render(<MainNavigation />, { wrapper: BrowserRouter })
    expect(screen.getByText('Reactive Quotes')).toBeInTheDocument()
  })

  test('Renders Navigation Menu', () => {
    render(<MainNavigation />, { wrapper: BrowserRouter })
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
