import React, { Component } from 'react'

function Footer () {
  return (
    <div style={{
              color: 'white', 
              display: 'flex', 
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 10 }}>
              Powered By &nbsp;
      <a href="https://www.synergenics.ca" target="_blank">
        <img src="/img/logo/Synergenics-Logo-2008-White.png" style={{width: 120}}/>
      </a>
    </div>
  )
}

export default Footer