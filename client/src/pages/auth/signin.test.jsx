
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SignIn from "./signin"


describe('Home', () => {

  it('should show the sign in button', () => {
    render(<SignIn/>)
    const button = screen.getByText("Sign in to your account")
    expect(button).toBeVisible()
  })
})