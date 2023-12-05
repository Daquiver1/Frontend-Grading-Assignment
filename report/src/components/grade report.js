import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: 'https://www.google.com',
    image: require('../assets/images/img2.jpg'),
    title: 'Lonely Path',
    subtitle: 'Web Design'
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/img3.jpg'),
    title: 'Photographer Girl',
    subtitle: 'Branding'
  },
  // ... (add other works as needed)
];

const paginationItems = [];
const activePage = 2; // Replace this with the actual active page from your state or props

for (let number = 1; number <= 5; number++) {
  paginationItems.push(
    <Pagination.Item key={number} active={number === activePage}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Works</h2>
          <div className="subtitle">Check out our awesome works</div>
        </div>
        <Row className='portfoliolist'>
          {worksData.map((work) => (
            <Col sm={4} key={work.id}>
              <div className='portfolio-wrapper'>
                <a href={work.link}>
                  <Image src={work.image} />
                  <div className='label text-center'>
                    <h3>{work.title}</h3>
                    <p>{work.subtitle}</p>
                  </div>
                </a>
              </div>
            </Col>
          ))}
        </Row>
        <Pagination>{paginationItems}</Pagination>
      </Container>
    </section>
  );
}

export default AppWorks;
