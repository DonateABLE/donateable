import React from 'react'
import { Dropdown, DropdownButton, Container } from 'react-bootstrap'

const DropdownBody = ( props ) => {
  return (
    <div>
      <DropdownButton
        title={props.title}
        style={{
          color: '#26607D',
          paddingRight: '5%',
          paddingLeft: '5%',
          marginTop: '2%'
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
