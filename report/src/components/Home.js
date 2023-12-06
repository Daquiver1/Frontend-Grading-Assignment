import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/children learning.jpg'),
    title: <h1 className="display-4">Excellence in Education</h1>,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: './components/help and support'
  },
  {
    id: 2,
    image: require('../assets/images/boy learning (1).jpg'),
    title: 'Start Your Future Financial Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('../assets/images/girl learning.jpg'),
    title: 'Enjoy the Difference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
    link: 'https://www.twitter.com'
  }
]

function Home() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>

      <div>
      {/* Header */}
      <Container>
        
       
          <p className="lead">
            Welcome to Grade Report, your go-to platform for tracking academic excellence.
          </p>
          <hr className="my-4" />
          <p>
            Log in to access your grades, view your dashboard, and stay on top of your academic performance.
          </p>
          <p className="lead">
            <Button as={Link} to="/login" variant="primary">Log In</Button>
          </p>
      </Container>

      {/* Additional Content Section (You can add more sections as needed) */}
      <Container>
        <h2 className="mt-5">Explore Our Features</h2>
        <p>
          Discover the various tools and features designed to enhance your educational journey.
        </p>
        {/* Add more content or features here */}
      </Container>
    </div>

    </section>

  );
}
export default Home;