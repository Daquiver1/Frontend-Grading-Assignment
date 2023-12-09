import React, { useState, useEffect } from 'react';
import './gradereport.css';

export default function Report() {
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [gradesData, setGradesData] = useState([]);

  useEffect(() => {
    const generatedITGradesData = generateITCoursesData();
    const generatedCSGradesData = generateCSCoursesData();

    const mergedGradesData = [...generatedITGradesData, ...generatedCSGradesData];
    setGradesData(mergedGradesData);
  }, []);

  const generateITCoursesData = () => {
    const semesters = ['Spring', 'Summer', 'Fall'];
    const years = ['2023', '2022', '2021'];

    
    const itCourses = [
      {
        name: 'Information Technology Fundamentals',
        description: 'Introduction to the fundamentals of IT',
        credits: 3,
        instructor: 'Prof. Smith',
      },
      {
        name: 'Cybersecurity Fundamentals',
        description: 'Basic principles and practices of cybersecurity',
        credits: 3,
        instructor: 'Prof. Johnson',
      },
      {
        name: 'IT Ethics and Legal Issues',
        description: 'Exploration of ethical and legal aspects in IT',
        credits: 3,
        instructor: 'Prof. Williams',
      },
      {
        name: 'Cloud Infrastructure Management',
        description: 'Managing and maintaining cloud-based infrastructures',
        credits: 4,
        instructor: 'Prof. Brown',
      },
      {
        name: 'Digital Marketing Strategies',
        description: 'Application of IT in digital marketing practices',
        credits: 3,
        instructor: 'Prof. Garcia',
      },
      {
        name: 'E-Commerce Technologies',
        description: 'Exploring technology in electronic commerce',
        credits: 4,
        instructor: 'Prof. Martinez',
      },
      {
        name: 'Mobile Security',
        description: 'Security measures for mobile devices and apps',
        credits: 3,
        instructor: 'Prof. Lee',
      },
      {
        name: 'IT Project Development',
        description: 'Developing IT projects from start to finish',
        credits: 4,
        instructor: 'Prof. Thompson',
      },
      {
        name: 'Data Privacy and Security',
        description: 'Ensuring privacy and security of data',
        credits: 3,
        instructor: 'Prof. Hall',
      },
      {
        name: 'Health Information Technology',
        description: 'Use of IT in healthcare information systems',
        credits: 4,
        instructor: 'Prof. Davis',
      },
      {
        name: 'IT Governance and Compliance',
        description: 'Strategies for IT governance and compliance',
        credits: 3,
        instructor: 'Prof. Adams',
      },
      {
        name: 'Data Warehousing and Mining',
        description: 'Storing, retrieving, and analyzing large datasets',
        credits: 4,
        instructor: 'Prof. Wilson',
      },
      {
        name: 'Software Quality Assurance',
        description: 'Ensuring the quality of software products',
        credits: 3,
        instructor: 'Prof. Moore',
      },
      {
        name: 'IT Entrepreneurship',
        description: 'Entrepreneurial aspects in the field of IT',
        credits: 3,
        instructor: 'Prof. Garcia',
      },
      {
        name: 'Virtual Reality Technologies',
        description: 'Exploration of virtual reality technology',
        credits: 4,
        instructor: 'Prof. Hall',
      },
      {
        name: 'Artificial Intelligence Ethics',
        description: 'Ethical considerations in artificial intelligence',
        credits: 3,
        instructor: 'Prof. Baker',
      },
      {
        name: 'Advanced Web Development',
        description: 'Advanced concepts in web development',
        credits: 4,
        instructor: 'Prof. Rodriguez',
      },
      {
        name: 'IT Strategic Planning',
        description: 'Planning and executing IT strategies',
        credits: 3,
        instructor: 'Prof. Stewart',
      },
      {
        name: 'Cyber Forensics',
        description: 'Investigating cybercrimes and attacks',
        credits: 4,
        instructor: 'Prof. Sanchez',
      },
      {
        name: 'Health Informatics',
        description: 'Informatics applications in healthcare',
        credits: 3,
        instructor: 'Prof. Parker',
      },
      {
        name: 'IT Service Management',
        description: 'Managing IT services and processes',
        credits: 4,
        instructor: 'Prof. Carter',
      },
    
    ];

    const generatedITData = [];

    itCourses.forEach(course => {
      semesters.forEach(semester => {
        years.forEach(year => {
          const grade = {
            course: course.name,
            description: course.description,
            credits: course.credits,
            instructor: course.instructor,
            grade: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
            semester: semester,
            year: year,
          };
          generatedITData.push(grade);
        });
      });
    });

    return generatedITData;
  };

  const generateCSCoursesData = () => {
    const semesters = ['Spring', 'Summer', 'Fall'];
    const years = ['2023', '2022', '2021'];

  
    const csCourses = [
      {
        name: 'Introduction to Computer Science',
        description: 'Overview of computer science principles',
        credits: 3,
        instructor: 'Prof. Brown',
      },
      {
        name: 'Algorithms and Data Structures',
        description: 'Study of algorithms and data structures',
        credits: 4,
        instructor: 'Prof. Davis',
      },
      {
        name: 'Operating Systems',
        description: 'Understanding operating system concepts',
        credits: 3,
        instructor: 'Prof. Clark',
      },
      {
        name: 'Software Engineering',
        description: 'Principles of software engineering',
        credits: 4,
        instructor: 'Prof. Miller',
      },
      {
        name: 'Computer Graphics',
        description: 'Fundamentals of computer graphics',
        credits: 3,
        instructor: 'Prof. Hall',
      },
      {
        name: 'Machine Learning',
        description: 'Introduction to machine learning techniques',
        credits: 4,
        instructor: 'Prof. Wilson',
      },
      {
        name: 'Computer Vision',
        description: 'Understanding computer vision concepts',
        credits: 3,
        instructor: 'Prof. Garcia',
      },
      {
        name: 'Natural Language Processing',
        description: 'Study of natural language processing',
        credits: 4,
        instructor: 'Prof. Adams',
      },
      {
        name: 'Database Management Systems',
        description: 'Database principles and management',
        credits: 3,
        instructor: 'Prof. Johnson',
      },
      {
        name: 'Cybersecurity Fundamentals',
        description: 'Basic principles of cybersecurity',
        credits: 4,
        instructor: 'Prof. Martinez',
      },
      {
        name: 'Cloud Computing Technologies',
        description: 'Understanding cloud-based technologies',
        credits: 3,
        instructor: 'Prof. Thompson',
      },
      {
        name: 'Web Development Frameworks',
        description: 'Study of modern web development frameworks',
        credits: 4,
        instructor: 'Prof. Lee',
      },
      {
        name: 'Parallel and Distributed Computing',
        description: 'Study of parallel and distributed systems',
        credits: 3,
        instructor: 'Prof. Anderson',
      },
      {
        name: 'Advanced Algorithms',
        description: 'In-depth study of advanced algorithms',
        credits: 4,
        instructor: 'Prof. Garcia',
      },
      {
        name: 'Blockchain Technologies',
        description: 'Understanding blockchain and cryptocurrencies',
        credits: 3,
        instructor: 'Prof. Patel',
      },
      {
        name: 'Advanced Operating Systems',
        description: 'In-depth study of advanced operating system concepts',
        credits: 4,
        instructor: 'Prof. Carter',
      },
      {
        name: 'Computer Networks',
        description: 'Study of computer network architectures and protocols',
        credits: 3,
        instructor: 'Prof. Robinson',
      },
      {
        name: 'Artificial Intelligence',
        description: 'Introduction to artificial intelligence and machine learning',
        credits: 4,
        instructor: 'Prof. Hughes',
      },
      {
        name: 'Human-Computer Interaction',
        description: 'Study of interaction between humans and computers',
        credits: 3,
        instructor: 'Prof. White',
      },
      {
        name: 'Big Data Analytics',
        description: 'Analysis of large datasets using specialized tools',
        credits: 4,
        instructor: 'Prof. Cooper',
      },
      {
        name: 'Information Security',
        description: 'Study of information security concepts and practices',
        credits: 3,
        instructor: 'Prof. Price',
      },
      {
        name: 'Computer Architecture',
        description: 'Understanding computer system architectures',
        credits: 4,
        instructor: 'Prof. King',
      },
      {
        name: 'Software Testing and Quality Assurance',
        description: 'Testing and ensuring software quality',
        credits: 3,
        instructor: 'Prof. Bailey',
      },
      {
        name: 'Data Mining and Warehousing',
        description: 'Extraction of valuable information from large datasets',
        credits: 4,
        instructor: 'Prof. Foster',
      },
      {
        name: 'Internet of Things (IoT)',
        description: 'Study of interconnected IoT devices',
        credits: 3,
        instructor: 'Prof. Powell',
      },
       ];
    

    const generatedCSData = [];

    csCourses.forEach(course => {
      semesters.forEach(semester => {
        years.forEach(year => {
          const grade = {
            course: course.name,
            description: course.description,
            credits: course.credits,
            instructor: course.instructor,
            grade: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
            semester: semester,
            year: year,
          };
          generatedCSData.push(grade);
        });
      });
    });

    return generatedCSData;
  };


  
  const applyFilters = () => {
    let filteredGrades = gradesData;
  
    if (selectedSemester !== 'all') {
      filteredGrades = filteredGrades.filter(item => item.semester === selectedSemester);
      
      const coursesCount = filteredGrades.length;
      if (coursesCount < 6) {
        filteredGrades = filteredGrades.slice(0, 6);
      } else if (coursesCount > 7) {
        filteredGrades = filteredGrades.slice(0, 7);
      }
    }
  
    if (selectedYear !== 'all') {
      filteredGrades = filteredGrades.filter(item => item.year === selectedYear);
    }
  
    return filteredGrades;
    
  };
  const filteredGrades = applyFilters();
  


  return (
    <div className="grade-report-container">
      <h1 className="page-title">Grade Report</h1>

      <div className="filters-container">
        <label htmlFor="semester">Select Semester:</label>
        <select
          id="semester"
          value={selectedSemester}
          onChange={(e) => setSelectedSemester(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Fall">Fall</option>
        </select>

        <label htmlFor="academicYear">Select Academic Year:</label>
        <select
          id="academicYear"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="filter-select"
        >
          <option value="all">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>

      <div className="grade-list-container">
        <table className="grade-table">
          <thead>
            <tr>
              <th>Courses</th>
              <th>Description</th>
              <th>Credits</th>
              <th>Instructor</th>
              <th>Grade</th>
              <th>Semester</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {filteredGrades.map((grade, index) => (
              <tr key={index} className="grade-item">
                <td>{grade.course}</td>
                <td>{grade.description}</td>
                <td>{grade.credits}</td>
                <td>{grade.instructor}</td>
                <td>{grade.grade}</td>
                <td>{grade.semester}</td>
                <td>{grade.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
