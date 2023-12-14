import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  test('renders login form', () => {
    render(<Login />);
    
    // Check if the login form is rendered
    const loginForm = screen.getByRole('form', { name: 'Student Login' });
    expect(loginForm).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<Login />);
    
    const studentIdInput = screen.getByLabelText(/student id/i);
    const pinInput = screen.getByLabelText(/pin/i);

    fireEvent.change(studentIdInput, { target: { value: '12345678' } });
    fireEvent.change(pinInput, { target: { value: '12345' } });

    expect(studentIdInput.value).toBe('12345678');
    expect(pinInput.value).toBe('12345');
  });

  test('handles login with valid input', () => {
    render(<Login />);
    
    console.log = jest.fn();

    fireEvent.change(screen.getByLabelText(/student id/i), { target: { value: '12345678' } });
    fireEvent.change(screen.getByLabelText(/pin/i), { target: { value: '12345' } });

    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(console.log).toHaveBeenCalledWith(
      'Logging in with Student ID:', '12345678', 'and PIN:', '12345'
    );
  });

});
