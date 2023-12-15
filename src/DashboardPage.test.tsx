// DashboardPage.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DashboardPage from './DashboardPage';

describe('<DashboardPage />', () => {
 test('renders page title and welcome message', () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/welcome, \[student name\]/i)).toBeInTheDocument();
 });

 test('renders list of grades', () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Calculus: A')).toBeInTheDocument();
    expect(screen.getByText('Java: B+')).toBeInTheDocument();
    expect(screen.getByText('Networking: A-')).toBeInTheDocument();
 });

 test('renders missing grades alert with a link to report missing grades', () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Missing Grades')).toBeInTheDocument();
    expect(screen.getByText('Probability')).toBeInTheDocument();
    expect(screen.getByText('Assembly Language')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /report/i })).toBeInTheDocument();
 });
});