import React, { Component }from 'react'
import CharityCards from './Charities/CharityCards'
import { Container } from 'react-bootstrap';

class Charities extends Component {
  render () {
    return(
      <div>
        <Container style={{background: 'white'}}>
          <CharityCards charityName='DONATEABLE' image='/img/charity/donateable-charity.png' />
          <CharityCards charityName='VICTIM SERVICES WELLINGTON' image='/img/charity/Victim-Services.png' />
          <CharityCards charityName='COMING SOON' />
        </Container>
      </div>
    )
  }
}

export default Charities