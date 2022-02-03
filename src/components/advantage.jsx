import React from 'react';
import {Col,Row} from 'react-bootstrap';
import clock from '../img/icons/clock.png'
import plane from '../img/icons/plane.png'
import home from '../img/icons/home.png'
import money from '../img/icons/money.png'
import { useSelector } from 'react-redux';

export default function Advantage() {
   const language=useSelector(state=>state.LanguageSlice.valueLanguage)
  return (
     <div className='advantage'>
        <div className='wrraper-advantage'>
           <Row md={3} xs={1} className="align-items-center justify-content-center">
              <Col>
              <img src={clock}/>
              <h6 className='title-advantage'>{language==='Русский'?"Время":"Час"}</h6>
              <p className='subtitle-advantage'>{language==='Русский'?"Всегда рассчитуем время что бы не опоздать на рейс":"Своєчасна доставка вас на рейс"}</p>
              </Col>
              <Col>
              <img src={plane}/>
              <h6 className='title-advantage'>{language==='Русский'?"Встеча":"Зустріч"}</h6>
              <p className='subtitle-advantage'>{language==='Русский'?"По прилету в аэропорт звоним и предоставляем информацию по трансферу домой":"Наш водій зустріне вас по поверненню із подорожі"}</p>
              </Col>
              <Col>
              <img src={home}/>
              <h6 className='title-advantage'>{language==='Русский'?"Отправка":"Відправлення"}</h6>
              <p className='subtitle-advantage'>{language==='Русский'?"Забираем от домаи доставляем на комфортных автомобилях в аэропорт":"Забираємо від будинку і доставляємо на комфортних автомобілях в аеропорт"}</p>
              </Col>
           </Row>
        </div>
     </div>
  )
}
