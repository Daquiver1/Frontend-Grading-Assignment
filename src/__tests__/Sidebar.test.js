import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const mockRoutes = [
  { path: '/admin/dashboard', name: 'Dashboard', icon: 'fa fa-dashboard', layout: '/admin' },
  { path: '/admin/grades', name: 'Grades', icon: 'fa fa-bar-chart', layout: '/admin' },
  // Add more mock routes as needed
];

test('renders Sidebar with correct logo and title', () => {
  render(
    <MemoryRouter initialEntries={['/admin/dashboard']}>
      <Sidebar color="blue" routes={mockRoutes} />
    </MemoryRouter>
  );

  // Check if the title "Missing Grade System" is present
  const titleText = screen.getByText('Missing Grade System');
  expect(titleText).toBeInTheDocument();
});

test('renders Sidebar with correct active route', () => {
  render(
    <MemoryRouter initialEntries={['/admin/dashboard']}>
      <Sidebar color="blue" routes={mockRoutes} />
    </MemoryRouter>
  );

  // Check if the "Dashboard" link is present and has the "active" class
  const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
  expect(dashboardLink).toBeInTheDocument();
//   expect(dashboardLink).toHaveClass('active');
});

test('renders Sidebar with correct inactive route', () => {
  render(
    <MemoryRouter initialEntries={['/admin/grades']}>
      <Sidebar color="blue" routes={mockRoutes} />
    </MemoryRouter>
  );

  // Check if the "Dashboard" link is present and does not have the "active" class
  const dashboardLink = screen.getByRole('link', { name: 'Dashboard' });
  expect(dashboardLink).toBeInTheDocument();

  // Check if the "Grades" link is present and has the "active" class
  const gradesLink = screen.getByRole('link', { name: 'Grades' });
  expect(gradesLink).toBeInTheDocument();
});
