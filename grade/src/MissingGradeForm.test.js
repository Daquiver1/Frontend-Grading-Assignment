import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MissingGradeForm from './MissingGradeForm';

describe('MissingGradeForm Component', () => {
  test('renders form elements', () => {
    render(<MissingGradeForm />);
    
    expect(screen.getByLabelText(/course name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/instructor name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/expected grade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/explanation/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('handles input change', () => {
    render(<MissingGradeForm />);
    
    fireEvent.change(screen.getByLabelText(/course name/i), { target: { value: 'Test Course' } });
    fireEvent.change(screen.getByLabelText(/instructor name/i), { target: { value: 'Test Instructor' } });
    fireEvent.change(screen.getByLabelText(/expected grade/i), { target: { value: 'A' } });
    fireEvent.change(screen.getByLabelText(/explanation/i), { target: { value: 'Test explanation.' } });

    expect(screen.getByLabelText(/course name/i).value).toBe('Test Course');
    expect(screen.getByLabelText(/instructor name/i).value).toBe('Test Instructor');
    expect(screen.getByLabelText(/expected grade/i).value).toBe('A');
    expect(screen.getByLabelText(/explanation/i).value).toBe('Test explanation.');
  });

  test('handles form submission', async () => {
    render(<MissingGradeForm />);
    
    fireEvent.change(screen.getByLabelText(/course name/i), { target: { value: 'Test Course' } });
    fireEvent.change(screen.getByLabelText(/instructor name/i), { target: { value: 'Test Instructor' } });
    fireEvent.change(screen.getByLabelText(/expected grade/i), { target: { value: 'A' } });
    fireEvent.change(screen.getByLabelText(/explanation/i), { target: { value: 'Test explanation.' } });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(await screen.findByText(/your missing grade report has been submitted/i)).toBeInTheDocument();
  });
});
