import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownBody from './DropdownBody'

let text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

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
        <DropdownBody title='Is software downloaded?' bodyText={text} />
      </div>
    )
  }
}

export default FAQ
