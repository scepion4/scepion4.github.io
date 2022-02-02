import React from 'react';
import { Col,Container,Row } from 'react-bootstrap';
import telegram from '../img/icons/Telegram.png'
import viber from '../img/icons/Viber.png'
import whatsapp from '../img/icons/WhatsApp.png'
import { useSelector } from 'react-redux';


export default function Footer() {
   const language=useSelector(state=>state.LanguageSlice.valueLanguage)
  return (
     <div className='footer'>
        <div className='footer-wrapper'>
             <Container style={{marginTop:'30px',marginBottom:'30px'}}>
              <Row className='justify-content-around justify-items-center'>
                 <Col style={{color:'#ede1e1'}} xs lg="2">©2022</Col>
                 <Col md="auto">
                 <a className='link-footer' title="Telegram" href="https://telegram.me/логинкомпании" target="_blank"><img src={telegram} alt="Написать в Telegram" /></a>
                 <a className='link-footer' title="Whatsapp" href="whatsapp://send?phone=79270000000"><img src={viber} alt="Написать в Whatsapp" /></a>
                 <a className='link-footer' title="Viber" href="viber://chat?number=79270000000"><img src={whatsapp} alt="Написать в Viber" /></a>
                 </Col>
                 <Col xs lg="2"><a style={{textDecoration:'none',color:'#ede1e1',}} href='/'>{language==='Русский'?"Трансфер Чернигов":"Трансфер Чернігів"}</a></Col>
              </Row>
              </Container>
        </div>
     </div>
  )
}
