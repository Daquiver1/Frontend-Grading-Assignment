
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from "./src/pages/home/hero";

describe('<App/>', () => {
  it('greets the user', () => {
    render(<Hero/>)
    const button = screen.getByText("Learn more")
    expect(button).toBeVisible()
  })
})