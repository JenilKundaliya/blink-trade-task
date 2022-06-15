import React from 'react'

function Header(props) {
  return (
    <div className='blink-header d-flex flex-row justify-content-between' style={{height:"80px"}}>
    <div>
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
    </div>
    <div>
        <button className='btn-style btn btn-primary'>{props.btn}</button>
    </div>
</div>
  )
}

export default Header