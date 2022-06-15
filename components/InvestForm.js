import React from 'react'

function InvestForm() {
  return (
    <div className='page-style invest-form-page container-fluid' style={{backgroundColor:"black"}}>
        <div className='invest-form-div container-fluid' style={{backgroundColor:"#101825",margin:"0 auto",height:"350px",position:"relative"}}>
           
            <img src='/light_dark.png' className='img1'></img>
            <img src='/light_dark.png' className='img2'></img>
            <img src='/light_dark.png' className='img3'></img>
            <img src='/light_dark.png' className='img4'></img>
            <img src='/light_dark.png' className='img5'></img>
            <img src='/light_dark.png' className='img6'></img>
            <div className='invest-form-text' style={{zIndex:"100"}}>
            <h1>Start Your Investment Journey Today</h1>
            <div className='form-input'>
                <input type="text" placeholder="Enter Phone Number" />
                <button className='btn-style btn btn-primary' style={{background:"#20283B"}}>Get Started</button>
            </div>
            </div>
        </div>
    </div>

  )
}

export default InvestForm