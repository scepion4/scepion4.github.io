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
           <Row className="align-items-center justify-content-center">
              <Col>
              <img src={clock}/>
              <h6 className='title-advantage'>{language==='Русский'?"Время":"Час"}</h6>
              <p className='subtitle-advantage'>{language==='Русский'?"Своевременная доставка вас на рейс и домой":"Своєчасна доставка вас на рейс"}</p>
              </Col>
              <Col>
              <img src={plane}/>
              <h6 className='title-advantage'>{language==='Русский'?"Встеча":"Зустріч"}</h6>
              <p className='subtitle-advantage'>{language==='Русский'?"Наш водитель встретит вас по возвращению из путешествия":"Наш водій зустріне вас по поверненню із подорожі"}</p>
              </Col>
              <Col>
              <img src={home}/>
              <h6 className='title-advantage'>{language==='Русский'?"Отправка":"Відправлення"}</h6>
              <p className='subtitle-advantage'>{language==='Русский'?"Доставляем из дома в аэропорт":"Доставляемо із дому до аеропорту"}</p>
              </Col>
              <Col>
              <img src={money}/>
              <h6 className='title-advantage'>{language==='Русский'?"Цена":"Ціна"}</h6>
              <p className='subtitle-advantage'>{language==='Русский'?"Самые низкие цены":"Самі низькі ціни"}</p>
              </Col>
           </Row>
        </div>
     </div>
  )
}
