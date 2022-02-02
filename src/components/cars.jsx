import React from 'react';
import { Carousel } from 'react-bootstrap';
import tauran from '../img/tauran.jpg'
import t5 from '../img/t5.jpeg'
import fabia from '../img/fabia.jpg'
export default function Cars() {
  return (
  <div style={{display:'flex',justifyContent:'center'}}>
    <h4>Наш автопарк</h4>
   <Carousel fade style={{maxWidth:'80%'}}>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={tauran}
       alt="First slide"
       style={{objectFit:'cover'}}
     />
     <Carousel.Caption>
       <h3>VW tauran</h3>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={t5}
       alt="Second slide"
       style={{objectFit:'cover'}}
     />
 
     <Carousel.Caption>
       <h3>VW T5</h3>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img
       className="d-block w-100"
       src={fabia}
       alt="Third slide"
       style={{objectFit:'cover'}}
     />
 
     <Carousel.Caption>
       <h3>SKODA</h3>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
 </div>
  )
}
