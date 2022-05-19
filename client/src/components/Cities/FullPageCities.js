import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ReactFullpage from '@fullpage/react-fullpage'
import CitiesShow from './CitiesShow'
import Button from 'react-bootstrap/Button'





const Fullpage = () => (

  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div id='1'>
              <p>PARIS</p>
              <Button variant = 'dark' onClick={() => fullpageApi.moveSectionDown()}>
              CITIES TO SHOW 
              </Button>
            </div>
          </div>
          <div className="section" >
            <div id='2'>
              <p>Restaurants</p>
            </div>
          </div>
          <div className="section">
            <p>Hotels</p>
          </div>
          <div className="section">
            <p>Section 4</p>
          </div>
          <div className="section">
            <p>Section 5</p>
          </div>
        </ReactFullpage.Wrapper>
      )
    }}
  />
)

// ReactDOM.render(<Fullpage />, document.getElementById('react-root'))
export default Fullpage
