// InstructorContactPage.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import InstructorContactPage from './InstructorContactPage';

describe('InstructorContactPage', () => {
 test('renders page title', () => {
    render(<InstructorContactPage />);
    expect(screen.getByText('Instructor Contacts')).toBeInTheDocument();
 });

 test('renders a list of instructors', () => {
    render(<InstructorContactPage />);
    expect(screen.getByText('Dr. Abena Smith')).toBeInTheDocument();
    expect(screen.getByText('Prof. Ernest Adu')).toBeInTheDocument();
 });

 test('renders instructor contact information', () => {
    render(<InstructorContactPage />);
    const emailLink = screen.getByText('abena.smith@university.edu');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:abena.smith@university.edu');
    expect(screen.getByText('555-1234')).toBeInTheDocument();
 });

 test('simulates email click', () => {
    render(<InstructorContactPage />);
    window.open = jest.fn(); // Mock window.open function
    const emailLink = screen.getByText('abena.smith@university.edu');
    fireEvent.click(emailLink);
    expect(window.open).toHaveBeenCalledWith('mailto:abena.smith@university.edu', '_self');
 });
});