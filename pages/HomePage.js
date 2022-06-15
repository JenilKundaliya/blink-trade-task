import React from 'react'
import Image from "next/image"
import mainImg from "../public/bg_cover_dark.png"
import InvestCard from '../components/InvestCard'
import Header from '../components/Header'
import KnowledgeCard from '../components/KnowledgeCard'
import SliderCard from '../components/SliderCard'
import OfferCard from '../components/OfferCard'
// 2F313C
function HomePage() {
  return (
      <>
    <div className='landing-page container-fluid' style={{height:"80vh",backgroundColor:"#2F313C"}}>
        <div className='landing-div row' style={{height:"80vh"}}>
            <div className='col-12 col-md-6 d-flex flex-column justify-content-center ' style={{padding:"0"}}>
                <h1 style={{color:"white"}}>The next generation <br></br> trading experience</h1> 
                <button className='btn' style={{background:`linear-gradient(10.2deg, #FA7415 0%, #D946EF 100%)`,marginTop:"1rem",fontSize:"18px",padding:"10px 30px",color:"white",borderRadius:"50px",fontWeight:"600",width:"243px",textTransform:"uppercase"}}>Get Started</button>
            </div>
            <div className='col-12 col-md-6 d-flex justify-content-end align-items-center'>
                <Image src={mainImg} width={600} height={500}></Image>
            </div>

        </div>
    </div>
    <div className='page-style blink-page container-fluid' style={{backgroundColor:"black"}}>

<Header title="Why Blinktrade" desc="Discover why we are the best investment option" btn="Know More" />
<div className='blink-cards d-flex flex-xs-column flex-sm-row flex-wrap justify-content-between align-items-center' style={{margin:"1rem 0"}}>
    
<div className="card-style blink-card card" >
  <div className='card-top'>
 <img class="card-img-top" src="/usp-dark1.png" alt="Card image cap"></img>
  </div>
 
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
<div className="card-style blink-card card ">
<div className='card-top'>
 <img class="card-img-top" src="/USP2 - Dark.png" alt="Card image cap"></img>
  </div>

  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div className="card-style blink-card card " >
<div className='card-top'>
 <img class="card-img-top" src="/USP4 - Dark.png" alt="Card image cap"></img>
  </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>
<div className="card-style blink-card card " >
<div className='card-top'>
 <img className="card-img-top" src="/USP3 - Dark.png" alt="Card image cap"></img>
  </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
  </div>
</div>

</div>
    </div>



    <div className='page-style invest-page container-fluid d-flex flex-column flex-lg-row justify-content-between' style={{backgroundColor:"black"}}>
        <div className='investment-left'>
    <div>
    <h2>Start Investment here</h2>
    <p>All investment options are available</p>
    </div>
    <div>
        <button className='btn-style btn btn-primary'>Know More</button>
    </div>

        </div>
        <div className='investment-right d-flex flex-wrap flex-row justify-content-between'>
       <InvestCard src="/stock.png"/>
       <InvestCard src="/mf.png"/>
       <InvestCard src="/ipo.png" />
       <InvestCard src="/uss.png"/>
       <InvestCard src="/fno.png"/>
       <InvestCard src="/fds.png"/>
        </div>
        
        
    </div>


    <div className='page-style know-page container-fluid ' style={{backgroundColor:"black"}}>
      <Header title="Blinktrade Knowledgebase" desc="All investment options are here" btn="Know more" />
      
      {/* <div className='d-flex flex-xs-column flex-sm-row flex-wrap justify-content-between align-items-center' style={{margin:"1rem 0"}}> */}
      <SliderCard know/>
        {/* </div> */}
    </div>

    <div className='page-style offers-page container-fluid' style={{backgroundColor:"black"}}>
      <Header title="Offers for you" desc="Don't we all love it" btn="know more" />
      <SliderCard />
      
    </div>


    </>
  )
}

export default HomePage