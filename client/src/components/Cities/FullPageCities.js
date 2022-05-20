import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useParams, useNavigate, Link } from 'react-router-dom'
import ReactFullpage from '@fullpage/react-fullpage'
import CitiesShow from './CitiesShow'
import Button from 'react-bootstrap/Button'
import axios from 'axios'


// const Fullpage = () => (


  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = { 1000 } /* Options here */


    render={({ state, fullpageApi }) => {
      // fullpageApi.responsiveSlides.toSlides()
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div>
              <p>Paris</p>
              <Button variant = 'dark' onClick={() => fullpageApi.moveSectionDown()}>
              CITIES TO SHOW 
              </Button>
            </div>
          </div>
          <div className="section" >
            <p>Restaurants</p>
            <div className="slide" data-anchor="slide1">Slide 2.1</div>
            <div className="slide" data-anchor="slide2">Slide 2.2</div>
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


// // ReactDOM.render(<Fullpage />, document.getElementById('react-root'))
// export default Fullpage
