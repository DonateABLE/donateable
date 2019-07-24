import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownBody from './DropdownBody'

let paragraph1 = 'Absolutely not. One of the goals of donateABLE is to make donating simple and convenient for all users. By eliminating the need for software to be installed we have enabled users to be able to donate from any of their devices at anytime, anywhere. donateABLE uses scripting language inside your web browser of choice to perform all of the complex hashing algorithms. Simply closing the browser, or the tab associated with the donating, will stop the process entirely, and nothing will be left behind on your system.'
let paragraph2 = 'The overall mission and purpose of donateABLE is to give back to the local community. The project in it`s entirety was funded solely by Synergenics, for all of the development and implementation of this new technology. Going forward, 85% of all donated CPU power will go directly to your charity of choice. The remaining 15% will be kept back to help fund infrastructure and management costs related to running this endeavour.'
let paragraph3 = 'The current digital currency being mined by this project is an open source Cryptocurrency, founded in April 2014, called MONERO (XMR). This specific currency is being used due to the fact that it uses the CryptoNight hash algorithms, which are geared to work best with CPU’s and are deliberately made to be resilient towards ASIC mining to keep the currency safer and available to the masses.'
let paragraph4 = 'There could be a few different factors preventing you from being able to donate. Certain browsers, pop up blockers and anti virus packages have the potential of stop the mining process from being invoked. If you are not prompted with a pop up after pressing the START button on your selected charity to begin donating, you may need to add an exception for the donateABLE website in any of those three solutions. If adding the exception does not resolve the issue, feel free to contact our support staff from the Technical Support form on the Contact Us Page.'
let paragraph5 = 'A cheque for all the proceeds will be given directly to the charities on a yearly basis. Synergenics will handle the process of converting the digital assets raised for the charities, and turning them into FIAT currency.'
let paragraph6 = 'Average computer tasks such as web browsing, word processing, and YouTube use less than 30% CPU in total. The rest of it is unused and can be put towards donations. Feel free to experiment with the amount of CPU you use to donate with, and to turn it up when you are leaving your computer for a while.'

let titleText1 = 'Is there any software installed on my system to be able to donate?'
let titleText2 = 'What percentage raised goes to charity?          '
let titleText3 = 'What currency is being mined?                    '
let titleText4 = 'Why is my browser not letting me donate?         '
let titleText5 = 'How does the charity receive the donated money?  '
let titleText6 = 'How much processing power should I donate?       '
class FAQ extends Component {
  render () {
    return (

      <div>
        <style>
          {`
            .btn {
              font-weight: 600;
              font-size: 0.75rem;
              padding-left: 10px;
              padding-right: 10px;
              text-transform: none;
              width: 100%;
              white-space: normal;
              text-align: left;
            }
          `}
        </style>
        <DropdownBody title={titleText1} bodyText={paragraph1} />
        <DropdownBody title={titleText2} bodyText={paragraph2} />
        <DropdownBody title={titleText3} bodyText={paragraph3} />
        <DropdownBody title={titleText4} bodyText={paragraph4} />
        <DropdownBody title={titleText5} bodyText={paragraph5} />
        <DropdownBody title={titleText6} bodyText={paragraph6} />
      </div>
    )
  }
}

export default FAQ
