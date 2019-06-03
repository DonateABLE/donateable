import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Text from './resources/assets/js/components/Text'
import Buttons from './resources/assets/js/components/Buttons'
import Image from './resources/assets/js/components/Image'
import 'bootstrap'

ReactDOM.render(
  <div class='button-holder'>
    <style class='text/css'>
      {`
        .button-holder{
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        body {
          background-color: white;
          background-image: url("./img/donateABLE-background1.png");
        }
      `}
    </style>
    <Image />
    <Text />
    <Buttons />
  </div>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
