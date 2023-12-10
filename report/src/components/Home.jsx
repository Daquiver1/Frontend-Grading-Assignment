import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faChartLine, faFileAlt } from '@fortawesome/free-solid-svg-icons';


const heroData = [
  {
    id: 1,
    image: require('../assets/images/children learning.jpg'),
    title: 'Unlock Academic Success',
    description: 'Embark on a journey of academic excellence and self-discovery. Our commitment to fostering a rich learning environment empowers you to unlock your full potential.',
    link: './components/help-and-support'
  },
  {
    id: 2,
    image: require('../assets/images/boy learning.jpg'),
    title: 'Simplify Your Grade Management',
    description: 'Start simplifying your grade management with our intuitive system. Our comprehensive tools guide you in tracking and managing your academic performance effortlessly.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/girl learning.jpg'),
    title: 'Experience the Joy of Academic Progress',
    description: 'Immerse yourself in a world where monitoring academic progress is an enjoyable and fulfilling experience. Discover the joy of seeing your efforts translate into meaningful achievements.',
    link: 'https://www.twitter.com'
  }
];

const graduatesData = [
  {
    id: 1,
    image: require('../assets/images/team2.jpg'),
    name: 'Alice Johnson',
    program: 'Computer Science',
    year: 'Class of 2021',
  },
  {
    id: 2,
    image: require('../assets/images/team9.jpg'),
    name: 'Bob Smith',
    program: 'Computer Science',
    year: 'Class of 2019',
  },
  {
    id: 2,
    image: require('../assets/images/team6.jpg'),
    name: 'Lily Bennett',
    program: 'Computer Science',
    year: 'Class of 2017',
  },
  {
    id: 2,
    image: require('../assets/images/team7.jpg'),
    name: 'Amelia Parker',
    program: 'Computer Science',
    year: 'Class of 2018',
  },
  // Add more graduates as needed
];

function Home() {
  return (
    <section>
      <div className='background'div>
      <Carousel>
        {heroData.map(hero => (
          <Carousel.Item key={hero.id}>
            <img
              className="d-block w-100"
              src={hero.image}
              alt={`slide ${hero.id}`}
            />
            <Carousel.Caption>
              <h2>{hero.title}</h2>
              <p>{hero.description}</p>
              <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="mt-5">
        {/* ... (unchanged) */}
      </Container>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Explore Our Features</h2>
        <p className="text-center">
          Discover the various tools and features designed to enhance your educational journey.
        </p>
        
        <Container className="mt-5">
          <Row className="text-center">
            <Col sm={12} md={4} className="mb-4">
              <div className="feature-card">
                <FontAwesomeIcon icon={faTachometerAlt} className="feature-icon" />
                <h3>Intuitive Dashboard</h3>
                <p>Stay organized with our user-friendly dashboard, providing a comprehensive overview of your academic performance at a glance.</p>
              </div>
            </Col>

            <Col sm={12} md={4} className="mb-4">
              <div className="feature-card">
                <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
                <h3>Detailed Grade Reports</h3>
                <p>Access detailed grade reports, including individual course grades, overall GPA, and insightful analytics to track your progress over time.</p>
              </div>
            </Col>

            <Col sm={12} md={4} className="mb-4">
              <div className="feature-card">
                <FontAwesomeIcon icon={faFileAlt} className="feature-icon" />
                <h3>Effortless Grade Submission</h3>
                <p>Use our Missing Grade Form to seamlessly submit missing grades and communicate with instructors for a quick resolution of grading issues.</p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Add more content or features here */}
      </Container>

      <Container fluid className="graduates-section mt-5">
        <h2 className="text-center mb-4">Meet Our Graduates</h2>
        <Row>
          {graduatesData.map((graduate) => (
            <Col key={graduate.id} sm={6} md={4} lg={3} className="mb-4">
              <div className="text-center">
                <Image src={graduate.image} alt={graduate.name} roundedCircle fluid className="mb-3" />
                <h4>{graduate.name}</h4>
                <p>{`${graduate.program}, Class of ${graduate.year}`}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </section>
  );
}

export default Home;