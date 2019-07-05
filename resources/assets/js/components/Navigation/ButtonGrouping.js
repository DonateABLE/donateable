import React, { Component } from 'react'
import { Button, ButtonGroup, Modal } from 'react-bootstrap'

// This component is for the collection of buttons that pull down
// in the hamburger menu

class ButtonGrouping extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      /* init states */
      showAbout: false,
      showHIW: false,
      showPP: false,
      showFAQ: false
    }
  }


  /* State Handling Functions */

  // About
  handleShowAbout = () => {
    this.setState({showAbout: true});
  };

  handleHideAbout = () => {
    this.setState({showAbout: false});
  };

  // How it Works
  handleShowHIW = () => {
    this.setState({showHIW: true})
  }
  
  handleHideHIW = () => {
    this.setState({showHIW: false});
  };
  
  // Privacy Policy
  handleShowPP = () => {
    this.setState({showPP: true})
  }
  
  handleHidePP = () => {
    this.setState({showPP: false});
  };
  
  // Frequently Asked Questions
  handleShowFAQ = () => {
    this.setState({showFAQ: true})
  }
  
  handleHideFAQ = () => {
    this.setState({showFAQ: false});
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
          <Button variant='turq' size='lg' onClick={this.handleShowHIW}>HOW IT WORKS</Button>
          <Button variant='turq' size='lg'>CHARITIES</Button>
          <Button variant='turq' size='lg' onClick={this.handleShowPP}>PRIVACY POLICY</Button>
          <Button variant='turq' size='lg'>CONTACT</Button>
          <Button variant='turq' size='lg' onClick={this.handleShowFAQ}>FAQ</Button>
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
        
        <Modal 
          size='lg'
          show={this.state.showHIW}
          onHide={this.handleHideHIW}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className='text-center'>
             Title 
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          
          
          <p>
          The first step is the easiest, or the hardest depending on how you look at it, 
          which is selecting the charity you would like to donate to. Simply select a 
          charity out of our provided list that you wish to donate to and begin lending 
          your computer's processor to solve complex algorithms. It's easy and anyone 
          with a computer is able to donate.          
          </p> 

          <p>
          The second step is setting the amount of processing power you would like to 
          donate. Basically, the more processor power you donate, the more algorithms 
          get solved, which is then translated into digital currency that is then 
          converted into real money to help your charity continue to do good 
          in their community.
          </p> 
          
          <p>
          The third step is the easiest. Now that you have selected your charity and 
          set your processing power you are now ready to start donating. Select the 
          start button and carry on with your day. You can browse websites, go walk 
          the dog, or take a trip. No matter what you do just leave donateABLE on 
          and running and we do the rest.
          </p> 
           
          </Modal.Body>
        </Modal>

       <Modal 
          size='lg'
          show={this.state.showPP}
          onHide={this.handleHidePP}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className='text-center'>
            Privacy Policy  
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          
          <h3>
          Effective Date: January 1st, 2019 
          </h3>
          <p>
          This privacy notice discloses the privacy practices for donateABLE 
          and our website; https://www.donateable.ca. This privacy notice 
          applies solely to information collected by this website, except 
          where stated otherwise. 
         
          It will notify you of the following:
          
          What information we collect;
          With whom it is shared;
          How it can be corrected;
          How it is secured;
          How policy changes will be communicated; and
          How to address concerns over misuse of personal data.
        </p>


        <h3> Information Collection, Use, and Sharing </h3>

        <p> We are the sole owners of the information collected on this site. 
          We only have access to/collect information that you voluntarily 
          give us via email or other direct contact from you. We will not 
          sell or rent this information to anyone. 
        </p>
        
        <p> 
          We will use your information to respond to you, regarding the reason you contacted us. We will not share your 
          information with any third party outside of our organization. 
        </p>

        <p> 
          Unless you ask us not to, we may contact you via email in the future to tell you about statistics, new charities or features, 
          or changes to this privacy policy. 
        </p>

        <h3> Your Access to and Control Over Information </h3>

      <p> 
        You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the contact 
        form provided on our website: 

        See what data we have about you, if any.

        Change/correct any data we have about you.

        Have us delete any data we have about you.

        Express any concern you have about our use of your data
      </p>
      
      <h3> Security </h3>

      <p>
      We take precautions to protect your information. When you submit 
      sensitive information via the website, your information is 
      protected both online and offline. 
      </p>


          </Modal.Body>
        </Modal>

        <Modal 
          size='lg'
          show={this.state.showFAQ}
          onHide={this.handleHideFAQ}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className='text-center'>
             Frequently Asked Questions
            </Modal.Title>
          </Modal.Header>
          <Modal.Body> 
          <p>
           This is some Generic Paragraphs
          </p>  
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ButtonGrouping
