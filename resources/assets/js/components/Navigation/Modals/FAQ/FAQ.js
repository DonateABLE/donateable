import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import dropDown from './dropDown'

class FAQ extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      dropDown1: false,
      dropDown2: false,
      dropDown3: false,
      dropDown4: false,
      dropDown5: false,
      dropDown6: false
    }
  }

  render () {
    return (
      <dropDown title='Is there any software installed on my system to be able to donate?' bodyText='Body Text Example'/>
    )
  }
}

export default FAQ
