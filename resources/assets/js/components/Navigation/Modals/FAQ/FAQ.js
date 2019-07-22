import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownBody from './DropdownBody'

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
      <div>
        <DropdownBody title='Is there any software installed on my system to be able to donate?' bodyText='Body Text Example' />
      </div>
    )
  }
}

export default FAQ
