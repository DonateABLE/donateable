import React from 'react'
import { Dropdown, DropdownButton, Container } from 'react-bootstrap'
import WhiteButton from '../WhiteButton';

const DropdownBody = ( props ) => {
  return (
    <div>
      <DropdownButton
        title={props.title}
        className='text-left'
        style={{
          color: '#26607D',
          paddingRight: '5%',
          paddingLeft: '5%',
          marginTop: '5%'
        }}>
        <Container
          style={{
            backgroundColor: 'white',
            color: 'black',
            width: '100%',
            marginBottom: '2%'
          }}>
          {props.bodyText}
        </Container>
      </DropdownButton>
    </div>
  )
}

export default DropdownBody
