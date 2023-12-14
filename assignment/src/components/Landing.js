import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import hp1 from './hp1.jpg';
import hp2 from './hp2.jpg';

const AppLanding = () => {
  return (

    <div style={{ height: '70vh', overflow: 'hidden', padding: '0px' }}>
      <Carousel fade style={{ width: '100%', height: '100%' }}>
        <Carousel.Item>
          <img className="d-block w-100" src={hp1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hp2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={hp1} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default AppLanding;
