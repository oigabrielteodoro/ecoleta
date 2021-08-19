import React from 'react'
import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import '@jest/globals'
import 'jest-styled-components'

import App from './App'

test('should be able render correctly', () => {
  render(<App />)

  expect(screen.getByText('Ecoleta')).toBeInTheDocument()
})
