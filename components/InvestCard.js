import React from 'react'

function InvestCard(props) {
  return (
    <div className="invest-card card " >
    <div className='card-top'>
      <p>Stocks</p>
<img class="card-img-top" src={props.src} alt="Card image cap"></img>
</div>
<div className="card-body">
<p>Research-backed ideas</p>
<p>Research-backed ideas</p>
<p>Research-backed ideas</p>

<button className="invest-btn btn-style btn">Go somewhere</button>
</div>
</div>
  )
}

export default InvestCard