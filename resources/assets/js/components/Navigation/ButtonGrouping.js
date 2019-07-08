import React, { Component } from 'react'
import { Button, ButtonGroup, Modal } from 'react-bootstrap'
import ModalText from './Modals/ModalText'
import TwoItems from './Modals/TwoItems'
import { NavLink } from 'react-router-dom'

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
      showContact: false,
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
  }  
  
  // Contact 
  handleShowContact = () => {
    this.setState({showContact: true})
  }
  
  handleHideContact = () => {
    this.setState({showContact: false});
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
                   .btn-turqgroup {
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

                  .modal-content {
                    background-color: #45A6D7;
                  }

                  .modal-body {
                    background-color: #45A6D7;
                    display: flex;
                    justify-content: center; 
                    align-items: center;
                    padding-top: 0px;
                    padding-bottom: 0px;
                  }
          `}
        </style>
        <ButtonGroup vertical style={{width: 305, marginTop:10}}>
          <NavLink to='/'>
            <Button variant='turqgroup' size='lg'>HOME</Button>
          </NavLink> 
          <Button variant='turqgroup' size='lg' onClick={this.handleShowAbout}>ABOUT</Button>
          <Button variant='turqgroup' size='lg' onClick={this.handleShowHIW}>HOW IT WORKS</Button>
          <NavLink to ='/charities'>
            <Button variant='turqgroup' size='lg'>CHARITIES</Button>
          </NavLink>
          <Button variant='turqgroup' size='lg' onClick={this.handleShowPP}>PRIVACY POLICY</Button>
          <Button variant='turqgroup' size='lg' onClick={this.handleShowContact}>CONTACT</Button>
          <Button variant='turqgroup' size='lg' onClick={this.handleShowFAQ}>FAQ</Button>
          <Button variant='turqgroup' size='lg'>TAKE A TOUR</Button>
        </ButtonGroup>

        {/* This is the Beginning of the modals that will be rendered */}
        <Modal 
          size='lg'
          show={this.state.showAbout}
          onHide={this.handleHideAbout}
          scrollable={true}
        >
          <Modal.Header style={{backgroundColor: '#45A6D7',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingTop: '25px',
            paddingBottom:'0px'}} closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className='text-center'
             style={{color: '#FFFFFF', paddingLeft:'30px'}}
             >
             <img src='/img/logo/donateABLE-long-white-500.png' style={{width: '70%'}}/>
            </Modal.Title>
          </Modal.Header>
          {/* WHO */}

          <Modal.Body style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingTop: '10px',
            paddingBottom:'0px'}}>
          
          <ModalText fontSize1={14} fontSize2={14} text1='THE WHO, WHAT & WHYS OF DONATEABLE' text2='THE NEWEST AND EASIEST WAY TO DONATE'/>
            

          <hr width={'69%'} noshade  style={{display: 'block', height: '1px',
              border: 0, borderTop: '1px solid #ccc',
              marginTop: '10px', padding: 0}}/> 

            <TwoItems imgSrc='/img/aboutus/About-Us-WHAT.png' text='IS DONATEABLE DEVELOPED BY' />  
          

          <p style={{color: '#FFFFFF'}}>
              donateABLE is a website designed, developed, and managed by Synergenics,
              a professional IT support and solutions provider to Guelph and Southwestern 
              Ontario for over 30 years. Their 30 years of service has allowed them to
              build relationships with many companies in a variety of different 
              industries, but some of their most cherished relationships are with local
              Guelph charities and organizations.
            </p>
   

          {/* WHAT */}

          <hr width={'69%'} noshade  style={{display: 'block', height: '1px',
              border: 0, borderTop: '1px solid #ccc',
              marginTop: '10px', padding: 0}}/> 
          <p style={{color: '#FFFFFF'}}>
            donateABLE is a website project developed and managed by Synergenics. 
            This solution will take small amounts of computational power donated 
            from individuals and pool it together into a larger resource to generate 
            real monetary value for your charity. This website is going to allow anyone 
            with a computer to make a difference no matter what their financial situation 
            is, by donating unused computer time.
            </p>


          {/* WHY */}
   

          <hr width={'69%'} noshade  style={{display: 'block', height: '1px',
              border: 0, borderTop: '1px solid #ccc',
              marginTop: '10px', padding: 0}}/> 

          <p style={{color: '#FFFFFF'}}>
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
          scrollable={true}
        >
          <Modal.Header style={{backgroundColor: '#45A6D7',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingTop: '25px',
            paddingBottom:'0px'}} closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className='text-center'
             style={{color: '#FFFFFF', paddingLeft:'30px'}}
             >
             <img src='/img/logo/donateABLE-long-white-500.png' style={{width: '70%'}}/>
            </Modal.Title>
          </Modal.Header>


          <Modal.Body style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingTop: '0px',
            paddingBottom:'10px'}}>
          <ModalText fontSize1={14} fontSize2={14} text1='USE YOUR COMPUTER POWER TO GENERATE' text2='MONEY FOR YOUR CHOSEN CHARITY'/>
          
          <hr width={'69%'} noshade  style={{display: 'block', height: '1px',
              border: 0, borderTop: '1px solid #ccc',
              marginTop: '10px', padding: 0}}/>
          

          
          
          <p style={{color: '#FFFFFF'}}>
          The first step is the easiest, or the hardest depending on how you look at it, 
          which is selecting the charity you would like to donate to. Simply select a 
          charity out of our provided list that you wish to donate to and begin lending 
          your computer's processor to solve complex algorithms. It's easy and anyone 
          with a computer is able to donate.          
          </p> 

          <hr width={'69%'} noshade  style={{display: 'block', height: '1px',
              border: 0, borderTop: '1px solid #ccc',
              marginTop: '10px', padding: 0}}/>

          <p style={{color: '#FFFFFF'}}>

          The second step is setting the amount of processing power you would like to 
          donate. Basically, the more processor power you donate, the more algorithms 
          get solved, which is then translated into digital currency that is then 
          converted into real money to help your charity continue to do good 
          in their community.
          </p> 

          <hr width={'69%'} noshade  style={{display: 'block', height: '1px',
              border: 0, borderTop: '1px solid #ccc',
              marginTop: '10px', padding: 0}}/>
          
          <p style={{color: '#FFFFFF'}}>
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
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingTop: '0px',
            paddingBottom:'0px'}}>
          <img src='/img/logo/donateABLE-long-white-500.png' style={{width: '70%'}}/>
          </Modal.Body>

          <Modal.Body> 
          
          <h6>
          Effective Date: January 1st, 2019 
          </h6>
          <p style={{color: '#FFFFFF'}}>
          This privacy notice discloses the privacy practices for donateABLE 
          and our website; donateable.ca. This privacy notice 
          applies solely to information collected by this website, except 
          where stated otherwise. <br/>
          <br/>
          It will notify you of the following:<br/>
          <br/>
          What information we collect; <br/>
          With whom it is shared;<br/>
          How it can be corrected;<br/>
          How it is secured;<br/>
          How policy changes will be communicated; and<br/>
          How to address concerns over misuse of personal data.<br/>
        </p>

        
        <br/>
        <h6> Information Collection, Use, and Sharing </h6>

        <p style={{color: '#FFFFFF'}}>
          We are the sole owners of the information collected on this site. 
          We only have access to/collect information that you voluntarily 
          give us via email or other direct contact from you. We will not 
          sell or rent this information to anyone. 
        </p>
        
        <p style={{color: '#FFFFFF'}}>
          We will use your information to respond to you, regarding the reason you contacted us. We will not share your 
          information with any third party outside of our organization. 
        </p>

        <p style={{color: '#FFFFFF'}}>
          Unless you ask us not to, we may contact you via email in the future to tell you about statistics, new charities or features, 
          or changes to this privacy policy. 
        </p>
        
        <br/>
        <h6> Your Access to and Control Over Information </h6>

        <p style={{color: '#FFFFFF'}}>
        You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the contact 
        form provided on our website: <br/>
        <br/>
        See what data we have about you, if any.<br/>
        <br/>
        Change/correct any data we have about you.<br/>
        <br/>
        Have us delete any data we have about you.<br/>
        <br/>
        Express any concern you have about our use of your data<br/>
      </p>
      
      <br/>
      <h6 style={{color: '#FFFFF'}}> Security </h6>

      <p style={{color: '#FFFFFF'}}>
      We take precautions to protect your information. When you submit 
      sensitive information via the website, your information is 
      protected both online and offline. 
      </p>


          </Modal.Body>
        </Modal>

        <Modal 
          size='lg'
          show={this.state.showContact}
          onHide={this.handleHideContact}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title" className='text-center'>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            paddingTop: '0px',
            paddingBottom:'0px'}}>
          <img src='/img/logo/donateABLE-long-white-500.png' style={{width: '70%'}}/>
          <ModalText fontSize1={20} fontSize2={14} text1='THANK YOU FOR VISITING' text2='WE WOULD LIKE TO HEAR FROM YOU' />

          </Modal.Body>

          <Modal.Body> 
            {/* JOIN THE PROGRAM */}
            <p style={{color: '#FFFFFF'}}>
          Are you a local, Guelph and Wellington County, non-profit charity that would like 
          to be featured on donateABLE? Simply fill out the form below and a member of our 
          team will be in touch with the next steps.
          </p>  

          {/* Technical Support */}
          <p style={{color: '#FFFFFF'}}>
          If you are having any problems with the site functionality or have a technical 
          question please fill out the form below to submit a ticket. A member of our team 
          will get back to you within 48 business hours.
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
          <p style={{color: '#FFFFFF'}}>  
            This is some Generic Paragraphs
          </p>  
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default ButtonGrouping
