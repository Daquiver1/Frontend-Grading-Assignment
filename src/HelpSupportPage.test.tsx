// HelpSupportPage.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import HelpSupportPage from './HelpSupportPage';

describe('HelpSupportPage', () => {
 beforeEach(() => {
    render(<HelpSupportPage />);
 });

 test('renders Help and Support title', () => {
    expect(screen.getByText('Help and Support')).toBeInTheDocument();
 });

 test('renders FAQs section', () => {
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('How do I report a missing grade?')).toBeInTheDocument();
    expect(screen.getByText('When will reported grades be updated?')).toBeInTheDocument();
 });

 test('renders support form with empty fields', () => {
    expect(screen.getByLabelText('Name:')).toHaveValue('');
    expect(screen.getByLabelText('Email:')).toHaveValue('');
    expect(screen.getByLabelText('Message:')).toHaveValue('');
 });

 test('allows user to input values into the support form', () => {
    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message:'), { target: { value: 'Need help with my account.' } });

    expect(screen.getByLabelText('Name:')).toHaveValue('John Doe');
    expect(screen.getByLabelText('Email:')).toHaveValue('john@example.com');
    expect(screen.getByLabelText('Message:')).toHaveValue('Need help with my account.');
 });

 test('submits the form', () => {
    window.alert = jest.fn(); // Mock window.alert function

    fireEvent.change(screen.getByLabelText('Name:'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message:'), { target: { value: 'Need help with my account.' } });
    fireEvent.click(screen.getByText('Send'));

    expect(window.alert).toHaveBeenCalledWith('Your support request has been submitted.');
    expect(screen.getByLabelText('Name:')).toHaveValue('');
    expect(screen.getByLabelText('Email:')).toHaveValue('');
    expect(screen.getByLabelText('Message:')).toHaveValue('');
 });
});