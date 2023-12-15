// App.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';


describe('<App />', () => {
 test('renders Navbar and Footer', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/navbar/i)).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
 });

 test('renders LandingPage on the root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/landing page content/i)).toBeInTheDocument();
 });

 test('renders LoginPage on the /login route', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/login page content/i)).toBeInTheDocument();
 });

 test('renders DashboardPage on the /dashboard route', () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/dashboard content/i)).toBeInTheDocument();
 });

 test('redirects to LandingPage on a non-existent route', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/landing page content/i)).toBeInTheDocument();
 });
});