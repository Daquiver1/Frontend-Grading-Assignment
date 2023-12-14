
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomeLayout from './homeLayout'
import Hero from './hero'

describe('Home', () => {

  it('should show the get started button', () => {
    render(<Hero/>)
    const button = screen.getByText("Get started")
    expect(button).toBeVisible()
  })
})