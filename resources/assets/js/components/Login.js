import React, { Component } from 'react'
import Text from './Text'
import { Container } from 'react-bootstrap';

class Login extends Component {
  render () {
    return (
      <div>
        <Container style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <img src='/img/logo/donateABLE-long-colour-250.png' style={{width: '100%'}} />
          <br />
          <p style={{color: '#26607D', fontWeight: '700'}}>
          Simply lend your computer’s power to generate
          real value for the charity of your choice. Donate
          to your favourite charities without opening your
          wallet. It is that easy!
          </p>
        </Container>
      </div>
    )
  }
}

export default Login
