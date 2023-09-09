import { render, screen } from '@testing-library/react'
import Button from '../index.tsx'

describe('Button', () => {
  test('Should have submit text', () => {
    render(<Button text='Submit' />)
    const buttonText = screen.getByText(/submit/i)
    expect(buttonText).toBeVisible()
  })
})
