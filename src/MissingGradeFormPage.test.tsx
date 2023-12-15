// MissingGradeFormPage.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import MissingGradeFormPage from './MissingGradeFormPage';

describe('MissingGradeFormPage', () => {
 beforeEach(() => {
    // Mock the window.alert function
    window.alert = jest.fn();
 });

 test('renders form with all fields and submit button', () => {
    render(<MissingGradeFormPage />);
    expect(screen.getByLabelText(/Course Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Instructor Name:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Expected Grade:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Explanation:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit Report/i })).toBeInTheDocument();
 });

 test('allows input to be entered in all fields', () => {
    render(<MissingGradeFormPage />);
    fireEvent.change(screen.getByLabelText(/Course Name:/i), { target: { value: 'History 101' } });
    fireEvent.change(screen.getByLabelText(/Instructor Name:/i), { target: { value: 'Professor Smith' } });
    fireEvent.change(screen.getByLabelText(/Expected Grade:/i), { target: { value: 'A' } });
    fireEvent.change(screen.getByLabelText(/Explanation:/i), { target: { value: 'I submitted all assignments on time.' } });

    expect(screen.getByLabelText(/Course Name:/i)).toHaveValue('History 101');
    expect(screen.getByLabelText(/Instructor Name:/i)).toHaveValue('Professor Smith');
    expect(screen.getByLabelText(/Expected Grade:/i)).toHaveValue('A');
    expect(screen.getByLabelText(/Explanation:/i)).toHaveValue('I submitted all assignments on time.');
 });

 test('submits form and resets fields', () => {
    render(<MissingGradeFormPage />);
    fireEvent.change(screen.getByLabelText(/Course Name:/i), { target: { value: 'History 101' } });
    fireEvent.change(screen.getByLabelText(/Instructor Name:/i), { target: { value: 'Professor Smith' } });
    fireEvent.change(screen.getByLabelText(/Expected Grade:/i), { target: { value: 'A' } });
    fireEvent.change(screen.getByLabelText(/Explanation:/i), { target: { value: 'I submitted all assignments on time.' } });
    fireEvent.click(screen.getByRole('button', { name: /Submit Report/i }));

    expect(window.alert).toHaveBeenCalledWith('Your missing grade report has been submitted.');
    expect(screen.getByLabelText(/Course Name:/i)).toHaveValue('');
    expect(screen.getByLabelText(/Instructor Name:/i)).toHaveValue('');
    expect(screen.getByLabelText(/Expected Grade:/i)).toHaveValue('');
    expect(screen.getByLabelText(/Explanation:/i)).toHaveValue('');
 });
});