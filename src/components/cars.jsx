import React from 'react';
import { Carousel } from 'react-bootstrap';
import tauran from '../img/tauran.jpg'
import vw from '../img/VW T5.jpg'
import fabia from '../img/fabia.jpg'
import octavia from '../img/octavia.jpg'
import mercedes from '../img/mercedes.jpg'
import opel1 from '../img/opel.jpg'
import opel2 from '../img/opel2.jpg'
import outlander from '../img/outlander.jpg'
import  {languageAll}  from './language';
import { useSelector } from 'react-redux';

export default function Cars() {
  const language=useSelector(state=>state.LanguageSlice.valueLanguage)
  return (
    <div className='cars' style={{ display: 'flex', justifyContent: 'center' }}>
      <h4>{languageAll.cars[language]}</h4>
      <Carousel variant='dark'>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={tauran}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>VW tauran</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={vw}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>VW T5</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={fabia}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>SKODA fabia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={octavia}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>SKODA octavia</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={mercedes}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3> MERCEDES vito</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={opel1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>OPEL vivaro</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={opel2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>OPEL vivaro</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={outlander}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>MITSUBISHI outlander</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
