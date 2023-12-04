import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './src/pages/home/hero';

describe('Testing homepage', () => {
  it('should display the sign up button', () => {
    render(<Hero />);
    const button = screen.getByText('Sign up');
    expect(button).toBeVisible();
  });
});