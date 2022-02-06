import React from 'react';
import {Col,Row} from 'react-bootstrap';
import clock from '../img/icons/clock.png'
import plane from '../img/icons/plane.png'
import home from '../img/icons/home.png'
import money from '../img/icons/money.png'
import { useSelector } from 'react-redux';
import  {languageAll}  from './language';

export default function Advantage() {
   const language=useSelector(state=>state.LanguageSlice.valueLanguage)
  return (
     <div className='advantage'>
        <div className='wrraper-advantage'>
           <Row md={3} xs={1} className="align-items-center justify-content-center">
              <Col>
              <img src={clock}/>
              <h6 className='title-advantage'>{languageAll.advantageLeftTitle[language]}</h6>
              <p className='subtitle-advantage'>{languageAll.advantageLeft[language]}</p>
              </Col>
              <Col>
              <img src={plane}/>
              <h6 className='title-advantage'>{languageAll.advantageCenterTitle[language]}</h6>
              <p className='subtitle-advantage'>{languageAll.advantageCenter[language]}</p>
              </Col>
              <Col>
              <img src={home}/>
              <h6 className='title-advantage'>{languageAll.advantageRightTitle[language]}</h6>
              <p className='subtitle-advantage'>{languageAll.advantageRight[language]}</p>
              </Col>
           </Row>
        </div>
     </div>
  )
}
