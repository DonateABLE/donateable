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
                src="/img/tour/tour1.png"
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
                src="/img/tour/tour2.png"
                alt="Second slide"
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
                src="/img/tour/tour3.png"
                alt="Three slide"
              />
            </Container>
            <Carousel.Caption style={{marginTop: '10%'}}>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <img
                className="d-block img-fluid"
                src="/img/tour/tour4.png"
                alt="Fourth slide"
              />
            </Container>
            <Carousel.Caption style={{marginTop: '10%'}}>
              <h3>Fourth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <img
                className="d-block img-fluid"
                src="/img/tour/tour5.png"
                alt="Fifth slide"
              />
            </Container>
            <Carousel.Caption style={{marginTop: '10%'}}>
              <h3>Fifth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <img
                className="d-block img-fluid"
                src="/img/tour/tour6.png"
                alt="Sixth slide"
              />
            </Container>
            <Carousel.Caption style={{marginTop: '10%'}}>
              <h3>Sixth slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <Container>
              <img
                className="d-block img-fluid"
                src="/img/tour/tour7.png"
                alt="Seventh slide"
              />
            </Container>
            <Carousel.Caption style={{marginTop: '10%'}}>
              <h3>Seventh slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Tour
