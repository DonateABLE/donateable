import React, { Component } from 'react';
import { Carousel, Container } from 'react-bootstrap'

class Tour extends Component {

  render () {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <Container>
              <img
                className="d-block img-fluid"
                src="/img/logo/D-Coloured-250x250.png"
                alt="First slide"
              />
            </Container>
            <Carousel.Caption style={{marginTop: '10%'}}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <img
                className="d-block img-fluid"
                src="/img/logo/D-Coloured-250x250.png"
                alt="Third slide"
              />
            </Container>
            <Carousel.Caption style={{marginTop: '10%'}}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <img
                className="d-block img-fluid"
                src="/img/logo/D-Coloured-250x250.png"
                alt="Third slide"
              />
            </Container>
            <Carousel.Caption style={{marginTop: '10%'}}>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Tour
