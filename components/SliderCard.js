import React, { useEffect } from 'react'
import Slider from 'react-slick'
import KnowledgeCard from './KnowledgeCard';
import OfferCard from './OfferCard';
function SliderCard(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      useEffect(()=>{
        settings.autoplay = true
        settings.autoplaySpeed = 2000
      })
  return (
   <>
   {props.know ?
   <Slider {...settings}> 
   <KnowledgeCard />
   <KnowledgeCard />
   <KnowledgeCard />
   <KnowledgeCard />
    </Slider>
    :
    <Slider {...settings}> 
    <OfferCard />
    <OfferCard />
    <OfferCard />
    <OfferCard />
     </Slider>

   
}
  
   </>
  )
}

export default SliderCard