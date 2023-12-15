// GradeReportPage.test.tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import GradeReportPage from './GradeReportPage';

describe('<GradeReportPage />', () => {
 test('renders page title and filter section', () => {
    render(<GradeReportPage />);
    expect(screen.getByText('Grade Report')).toBeInTheDocument();
    expect(screen.getByLabelText('Filter by Semester:')).toBeInTheDocument();
 });

 test('renders all grade reports by default', () => {
    render(<GradeReportPage />);
    expect(screen.getByText('First Semester')).toBeInTheDocument();
    expect(screen.getByText('Biology: A')).toBeInTheDocument();
    expect(screen.getByText('Chemistry: B+')).toBeInTheDocument();
    expect(screen.getByText('Second Semester')).toBeInTheDocument();
    expect(screen.getByText('Mathematics: A-')).toBeInTheDocument();
    expect(screen.getByText('History: B')).toBeInTheDocument();
 });

 test('filters grade reports by selected semester', async () => {
    render(<GradeReportPage />);
    fireEvent.change(screen.getByLabelText('Filter by Semester:'), {
      target: { value: 'First Semester' },
    });
    await waitFor(() => {
      expect(screen.getByText('First Semester')).toBeInTheDocument();
      expect(screen.getByText('Biology: A')).toBeInTheDocument();
      expect(screen.queryByText('Second Semester')).not.toBeInTheDocument();
    });
 });

 test('shows all semesters when filter is cleared', async () => {
    render(<GradeReportPage />);
    fireEvent.change(screen.getByLabelText('Filter by Semester:'), {
      target: { value: 'First Semester' },
    });
    fireEvent.change(screen.getByLabelText('Filter by Semester:'), {
      target: { value: '' },
    });
    await waitFor(() => {
      expect(screen.getByText('First Semester')).toBeInTheDocument();
      expect(screen.getByText('Second Semester')).toBeInTheDocument();
    });
 });
});