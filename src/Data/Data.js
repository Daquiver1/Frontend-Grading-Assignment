

// Nav [a] Links  Data.......................
export const navLinks =[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Dashboard',
        path:'/dashboard'
    },
    {
        name:'Login',
        path:'/login'
    },
    {
        name:'Signup',
        path:'/signup'
    },    
  ];
  


// startup data.......................

// Startup data
export const startupdata = [
  {
    id: 1,
    title: 'Student Grade Reporting System',
    des: 'Track and report missing grades with an interactive interface designed for students at the University of Ghana.',
  },
  {
    id: 2,
    title: 'University Portal Enhancement',
    des: 'Improving the user experience of the University of Ghana portal to provide students with a seamless academic journey.',
  },
  {
    id: 3,
    title: 'Digital Learning Initiative',
    des: 'Introducing innovative digital learning solutions to enhance the educational experience for students at the University of Ghana.',
  },
];

// HowWork data
export const HowWorkdata = [
  {
    id: 1,
    title: 'Step 1: Login to the System',
    des: 'Access the system by securely logging in with your student ID and PIN to ensure data privacy and security.',
  },
  {
    id: 2,
    title: 'Step 2: View Dashboard',
    des: 'Explore your personalized dashboard, providing an overview of your current grades and any alerts for missing grades.',
  },
  {
    id: 3,
    title: 'Step 3: Report Missing Grade',
    des: 'Effortlessly report missing grades by filling out the form, including details such as course name, instructor, and expected grade.',
  },
  {
    id: 4,
    title: 'Step 4: Connect with Instructors',
    des: 'Contact your instructors through the system, making communication streamlined and efficient for both students and faculty.',
  },
];

  
  


  // import react Icon.......................
  import {  ImFacebook, ImBehance } from 'react-icons/im';
  import {  FiInstagram } from 'react-icons/fi';
  import {  RiTwitterXLine } from 'react-icons/ri';
  import {  GrLinkedinOption } from 'react-icons/gr';

  // Footers Data .......................  
  export const FootersLinksData = {
  
    Aboutus: [
      { linkname: 'Our Team ', link: "*", },    
      { linkname: 'Testimonials ', link: "*", },    
      { linkname: 'Contact Us ', link: "*", },    
      { linkname: 'Courses Roadmap ', link: "*", },    
      { linkname: 'Academics', link: "*", },   
     
    ],    
    Discover: [
      { linkname: 'Home ', link: "/", },    
      { linkname: 'DASHBOARD', link: "/DASHBOARD", },    
      { linkname: 'LOGIN ', link: "/LOGIN", },    
    
      // { linkname: 'Missing Grades', link: "/Missing Grades", },   
      { linkname: 'SIGNUP ', link: "/SIGNUP", }, 
      { linkname: 'GRADE REPORT ', link: "/REPORT", },  
    ],    
    Myaccount: [
      { linkname: 'Profile', link: "*", },    
      { linkname: 'Courses ', link: "*", },    
      { linkname: 'Grades or Results', link: "*", },    
      { linkname: 'Notifications  ', link: "*", },    
      { linkname: 'Logout ', link: "*", },      
    ],  
  
    Help: [
      { linkname: 'FAQs ', link: "*", },    
      { linkname: 'User Guides  ', link: "*", },    
      { linkname: 'Contact Support', link: "*", },    
      { linkname: 'Live Chat ', link: '#' },    
      { linkname: 'Webinars', link: "*", },   
    ],  
  
    socials: [
      { icon: ImFacebook, link: 'https://www.facebook.com' },
      { icon: FiInstagram, link: 'https://www.twitter.com' },
      { icon: GrLinkedinOption, link: 'https://www.instagram.com' },
      { icon: RiTwitterXLine, link: 'https://www.twitter.com' },
      { icon: ImBehance, link: 'https://www.twitter.com' }
    ],    
      
  };

export  const sidebarData = [
  { id: 1, label: 'Dashboard', icon: '📊' },
  { id: 2, label: 'Grade Report', icon: '📚' },
  { id: 3, label: 'Missing Grades', icon: '❗' },
  { id: 4, label: 'Instructor Contact', icon: '👩‍🏫' },
  { id: 5, label: 'Help & Support', icon: '❓' },
];

export const subjectsData = [
  { id: 1, course: 'MATH 225', grade: 'A', semester: 'Fall 2022', creditHours: 3, instructor: 'Dr. Smith' },
  { id: 2, course: 'DCIT 201', grade: 'B+', semester: 'Fall 2022', creditHours: 4, instructor: 'Prof. Johnson' },
  { id: 3, course: 'DCIT 203', grade: 'A-', semester: 'Spring 2023', creditHours: 3, instructor: 'Dr. Brown' },
  { id: 4, course: 'DCIT 209', grade: 'A', semester: 'Spring 2023', creditHours: 4, instructor: 'Prof. Davis' },
  { id: 5, course: 'DCIT 200', grade: 'B', semester: 'Fall 2022', creditHours: 3, instructor: 'Dr. Wilson' },
  { id: 6, course: 'MATH 223', grade: 'A+', semester: 'Fall 2022', creditHours: 4, instructor: 'Prof. Miller' },
  { id: 7, course: 'DCIT 205', grade: 'B-', semester: 'Spring 2023', creditHours: 3, instructor: 'Dr. Taylor' },
  { id: 8, course: 'MATH 254', grade: 'A', semester: 'Spring 2023', creditHours: 3, instructor: 'Prof. Anderson' },
  { id: 9, course: 'DCIT 207', grade: 'A-', semester: 'Fall 2022', creditHours: 3, instructor: 'Prof. Martinez' },
  { id: 10, course: 'CBAS 210', grade: 'B+', semester: 'Spring 2023', creditHours: 4, instructor: 'Dr. Garcia' },
];


export const instructorData = [
  { id: 1, name: 'Dr. Smith', email: 'drsmith@example.com' },
  { id: 2, name: 'Prof. Johnson', email: 'profjohnson@example.com' },
  { id: 3, name: 'Dr. Brown', email: 'drbrown@example.com' },
  { id: 4, name: 'Prof. Davis', email: 'profdavis@example.com' },
  { id: 5, name: 'Dr. Wilson', email: 'drwilson@example.com' },
  { id: 6, name: 'Prof. Miller', email: 'profmiller@example.com' },
  { id: 7, name: 'Dr. Taylor', email: 'drtaylor@example.com' },
  { id: 8, name: 'Prof. Anderson', email: 'profanderson@example.com' },
  { id: 9, name: 'Prof. Martinez', email: 'profmartinez@example.com' },
  { id: 10, name: 'Dr. Garcia', email: 'drgarcia@example.com' },
];


export const instructorImages = [
  'https://picsum.photos/id/1015/40/40',
  'https://picsum.photos/id/1020/40/40',
  'https://picsum.photos/id/1030/40/40',
  'https://picsum.photos/id/1040/40/40',
  'https://picsum.photos/id/1050/40/40',
  'https://picsum.photos/id/1060/40/40',
  'https://picsum.photos/id/1070/40/40',
  'https://picsum.photos/id/1080/40/40',
  'https://picsum.photos/id/1090/40/40',
  'https://picsum.photos/id/1100/40/40',
];
