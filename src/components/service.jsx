import React from 'react';
import { Card } from 'react-bootstrap';
import borispol from '../img/borispol.jpg'
import jul from '../img/zhul.jpg'
import meet from '../img/meet.jpg'
import { useSelector } from 'react-redux';

export default function Service() {
   const language=useSelector(state=>state.LanguageSlice.valueLanguage)
   return (
      <div className='service'>
         <div className='service-wrraper'>
            <h3 className='service-title'>{language==='Русский'?"Наши услуги":"Наші послуги"}</h3>
            <Card className="bg-dark text-white mx-5 mb-4">
               <Card.Img style={{maxHeight:'400px', objectFit:'cover'}} src={borispol} alt="Card image" />
               <Card.ImgOverlay>
                  <Card.Title>{language==='Русский'?"Чернигов- а/п Борисполь-Чернигов":"Чернігів - а/п Бориспіль-Чернігів"}</Card.Title>
                  <Card.Text>
                  {language==='Русский'?"Комфортный трансфер с/до аэропорта Борисполь ":"Комфортний трансфер з/до аеропорту Бориспіль"}
                  </Card.Text>
               </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white mx-5 mb-4">
               <Card.Img style={{maxHeight:'400px', objectFit:'cover'}} src={jul} alt="Card image" />
               <Card.ImgOverlay>
                  <Card.Title>{language==='Русский'?"Чернигов- а/п Жуляны-Чернигов":"Чернігів - а/п Жуляни-Чернігів"}</Card.Title>
                  <Card.Text>
                  {language==='Русский'?"Комфортний трансфер с/до аэропорта Жуляны":"Комфортний трансфер з/до аеропорту Жуляни"}
                  </Card.Text>
               </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white mx-5 mb-4">
               <Card.Img style={{maxHeight:'400px', objectFit:'cover'}} src={meet} alt="Card image" />
               <Card.ImgOverlay>
                  <Card.Title>{language==='Русский'?"Встреча":"Зустріч"}</Card.Title>
                  <Card.Text>
                  {language==='Русский'?"Встреча вас в аэропорту по возвращению":"Зустріч вас в аеропорту по поверненню"}
                  
                  </Card.Text>
               </Card.ImgOverlay>
            </Card>
         </div>
      </div>
   )
}
