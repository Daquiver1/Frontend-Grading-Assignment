// Footer.test.tsx
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('<Footer />', () => {
 const renderFooter = () => render(<Footer />);
 const getCopyrightText = () => screen.getByText(/© \d{4} Missing Grade Reporting System/);

 test('renders the correct copyright text with the current year', () => {
    const currentYear = new Date().getFullYear();
    renderFooter();
    expect(getCopyrightText()).toHaveTextContent(`© ${currentYear} Missing Grade Reporting System`);
 });
});