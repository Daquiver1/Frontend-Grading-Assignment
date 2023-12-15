// LoginPage.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';

// Helper function to render the component within the context of MemoryRouter
const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
 window.history.pushState({}, 'Test page', route);
 return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="/" element={ui} />
      </Routes>
    </MemoryRouter>
 );
};

describe('LoginPage', () => {
 test('renders login form with student ID and PIN fields', () => {
    renderWithRouter(<LoginPage />);
    expect(screen.getByLabelText(/Student ID:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/PIN:/i)).toBeInTheDocument();
 });

 test('allows entering student ID and PIN', () => {
    renderWithRouter(<LoginPage />);
    const studentIdInput = screen.getByLabelText(/Student ID:/i);
    const pinInput = screen.getByLabelText(/PIN:/i);

    fireEvent.change(studentIdInput, { target: { value: '123456' } });
    fireEvent.change(pinInput, { target: { value: '1234' } });

    expect(studentIdInput).toHaveValue('123456');
    expect(pinInput).toHaveValue('1234');
 });

 test('navigates to dashboard on successful login', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate,
    }));

    renderWithRouter(<LoginPage />);
    const studentIdInput = screen.getByLabelText(/Student ID:/i);
    const pinInput = screen.getByLabelText(/PIN:/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(studentIdInput, { target: { value: '123456' } });
    fireEvent.change(pinInput, { target: { value: '1234' } });
    fireEvent.click(loginButton);

    expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
 });

 test('shows error on failed login', () => {
    window.alert = jest.fn(); // Mock window.alert function
    renderWithRouter(<LoginPage />);
    const studentIdInput = screen.getByLabelText(/Student ID:/i);
    const pinInput = screen.getByLabelText(/PIN:/i);
    const loginButton = screen.getByRole('button', { name: /login/i });

    fireEvent.change(studentIdInput, { target: { value: 'wrong-id' } });
    fireEvent.change(pinInput, { target: { value: 'wrong-pin' } });
    fireEvent.click(loginButton);

    expect(window.alert).toHaveBeenCalledWith('Invalid Student ID or PIN. Please try again.');
 });
});