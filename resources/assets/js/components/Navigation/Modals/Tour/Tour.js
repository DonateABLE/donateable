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
              <h3>LET'S GET STARTED</h3>
              <p>How can you help your favourite charities without opening your wallet?
                It's simple. All you have to do is lend your computer's power to generate
                real value for the charity of your choice. The following tutorial will walk
                you through the steps to start making a difference today. It is that easy.</p>
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
              <h3>LOGIN TO YOUR ACCOUNT</h3>
              <p> Create an account to track how much you are donating,
                 what charities you are donating to, and
                 what your top charities are.</p>
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
              <h3>CHOOSE YOUR CHARITY</h3>
              <p>Choose from a number of charities that do amazing work in
                 Guelph and Wellington County each and everyday. You will
                 find a variety of charities from different industries across
                 the county. Choosing just one will be difficult, so why not
                 help them all?</p>
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
              <h3> START DONATING </h3>
              <p>You've now selected your charity and are ready to start
                 giving back. On the charity page you will find a brief write-up
                 on what the charity stands for and what they are trying to
                 accomplish. You will also find links to their social media,
                 a direct donation link and stats of how much people have
                 donated to date.</p>
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
              <h3>SELECT YOUR CPU POWER</h3>
              <p>Next, set the amount of processing power you would like to donate.
                 Basically, the more processor power you donate, the more algorithms
                 get solved, which is then translated into digital currency that is
                 then converted into real money. Helping your charity continue to do
                 good in their community.</p>
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
              <h3>ACCEPT AND GET STARTED</h3>
              <p>We want to make sure you fully understand the
                full process donateABLE uses. To do this after
                you click the Start button to begin donating you will get
                a pop-up stating 'By accepting you are agreeing to allow
                donateABLE to use your processor to complete complex algorithms.
                Nothing is installed on your system during this process.</p>
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
              <h3>LEAVE TAB OPEN AND <br /> KEEP BROWSING</h3>
              <p>As long as you keep the donateABLE tab running in your browser you will 
                be able to continue on with your computer usage as normal. As soon as the
                tab is closed your donation will end. Going away or not using your computer?
                Turn the CPU usage up and donate all day, everyday. Every second of your
                donation makes a difference.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }
}

export default Tour
