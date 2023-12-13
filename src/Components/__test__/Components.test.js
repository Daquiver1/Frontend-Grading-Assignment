import { render, screen } from '@testing-library/react';
import UserName from './UserName';
import StudentProfile from '../StudentProfile';
import GradeStatus from '../GradeStatus';
import Instructor from '../Instructor';
import GradeReport from '../GradeReport';
test('renders my username correctly', async () => {
    render(<UserName></UserName>);
    const paragraphElement = screen.getByRole("paragraph");
    expect(paragraphElement).toBeInTheDocument('Welcome');
});

test('Should render the students profile', async () => {
    render(<StudentProfile></StudentProfile>);
    const profilepic = screen.getByRole("img")
    expect(profilepic).toBeInTheDocument(profile) 
    const paragraphElement = screen.getAllByRole("paragraph")
    expect(paragraphElement).toBeInTheDocument(props)  
})

test('Expecting a text', async () => {
    render(<GradeStatus></GradeStatus>)
    const paragraph = screen.getByText("No missing grade!!")
    expect(paragraph).toBeInTheDocument("paragraph")
})

test('Should render contact cards with props', async () => {
    render(<Instructor></Instructor>)
    const paragraphElement = screen.getAllByRole("paragraph")
    expect(paragraphElement).toBeInTheDocument(props)
    const mailto = screen.getByRole("link")
    expect(mailto).toBeInTheDocument("mail") 
})
it('Should filter through', () => {
    render(<GradeReport></GradeReport>)
    const filter = screen.getByRole("search")
    expect(filter).toBeInTheDocument('filter')
})

