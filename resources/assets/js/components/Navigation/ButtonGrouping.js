import React, { Component } from 'react'
import { Button, ButtonGroup, Modal } from 'react-bootstrap'

// This component is for the collection of buttons that pull down
// in the hamburger menu

class ButtonGrouping extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      showAbout: false,
      showHIW: false,
      showPrivPolicy: false
    }
  }

  handleShowAbout = () => {
    this.setState({showAbout: true});
  };

  handleHideAbout = () => {
    this.setState({showAbout: false});
  };

  render () {
    return (
      <div className='text-center'>
        <style className='text/css'>
          {`                 
                   .btn-turq {
                    background-color: #45A6D7;
                    border-color: #979797;
                    border-radius: 0;
                    color: white;
                    vertical-align: middle;
                    font-weight: 100;
                    letter-spacing: 0.05em;
                    font-family: 'Montserrat-Bold', sans-serif;
                    width: 305px;
                    height: 48px;
                    font-size: 10pt;
                  }

                  .modal-turq {
                    background-color: #445A6D7;
                  }
          `}
        </style>
        <ButtonGroup vertical>
          <Button variant='turq' size='lg'>HOME</Button>
          <Button variant='turq' size='lg' onClick={this.handleShowAbout}>ABOUT</Button>
          <Button variant='turq' size='lg'>HOW IT WORKS</Button>
          <Button variant='turq' size='lg'>CHARITIES</Button>
          <Button variant='turq' size='lg'>PRIVACY POLICY</Button>
          <Button variant='turq' size='lg'>CONTACT</Button>
          <Button variant='turq' size='lg'>FAQ</Button>
          <Button variant='turq' size='lg'>TAKE A TOUR</Button>
        </ButtonGroup>
        {/* This is the Beginning of the modals that will be rendered */}
        <Modal 
          size='lg'
          show={this.state.showAbout}
          onHide={this.handleHideAbout}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className='text-center'>
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          {/* WHO */}
          <Modal.Body> 
            <p>
              donateABLE is a website designed, developed, and managed by Synergenics,
              a professional IT support and solutions provider to Guelph and Southwestern 
              Ontario for over 30 years. Their 30 years of service has allowed them to
              build relationships with many companies in a variety of different 
              industries, but some of their most cherished relationships are with local
              Guelph charities and organizations.
            </p>
          </Modal.Body>

          {/* WHAT */}
          <Modal.Body>
            <p>
            donateABLE is a website project developed and managed by Synergenics. 
            This solution will take small amounts of computational power donated 
            from individuals and pool it together into a larger resource to generate 
            real monetary value for your charity. This website is going to allow anyone 
            with a computer to make a difference no matter what their financial situation 
            is, by donating unused computer time.
            </p>
          </Modal.Body>

          {/* WHY */}
          <Modal.Body>
            <p>
              Synergenics has consistently made an effort, for the past 30 years, to give 
              back to their local community in any way they can. They have done this by 
              providing discounted IT support, sponsoring local youth organizations, 
              and donating and sponsoring local golf tournaments. Now they are combining 
              their passion and knowledge in the IT world with their passion of giving 
              back to create a solution that makes a difference.
            </p>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ButtonGrouping
