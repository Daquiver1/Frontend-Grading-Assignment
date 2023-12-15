// LandingPage.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from './LandingPage';

// Wrap component in Router to handle Link components
const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
 window.history.pushState({}, 'Test page', route);
 return render(ui, { wrapper: Router });
};

describe('LandingPage', () => {
 test('renders welcome message', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByText(/Welcome to the Missing Grade Reporting System/i)).toBeInTheDocument();
 });

 test('renders call-to-action links', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByText('Student Login')).toBeInTheDocument();
    expect(screen.getByText('Contact Instructors')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Grade Report')).toBeInTheDocument();
    expect(screen.getByText('Missing Grade Report')).toBeInTheDocument();
 });

 test('renders about section', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByText('About MGRS')).toBeInTheDocument();
    expect(screen.getByText(/The Missing Grade Reporting System is designed/i)).toBeInTheDocument();
 });

 test('renders how it works section', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByText('How It Works')).toBeInTheDocument();
    expect(screen.getByText('Log in with your student credentials.')).toBeInTheDocument();
 });

 test('renders FAQ preview', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    expect(screen.getByText('What should I do if I find a missing grade?')).toBeInTheDocument();
 });

 test('renders Contact Support link', () => {
    renderWithRouter(<LandingPage />);
    expect(screen.getByText('Contact Support')).toBeInTheDocument();
 });
});