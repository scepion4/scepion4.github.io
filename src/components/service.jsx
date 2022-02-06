import React from 'react';
import { Card } from 'react-bootstrap';
import borispol from '../img/borispol.jpg'
import jul from '../img/zhul.jpg'
import meet from '../img/meet.jpg'
import { useSelector } from 'react-redux';
import  {languageAll}  from './language';

export default function Service() {
   const language=useSelector(state=>state.LanguageSlice.valueLanguage)
   return (
      <div className='service'>
         <div className='service-wrraper'>
            <h3 className='service-title'>{languageAll.serviceTitle[language]}</h3>
            <Card className="bg-dark text-white mx-5 mb-4">
               <Card.Img style={{maxHeight:'400px', objectFit:'cover'}} src={borispol} alt="Card image" />
               <Card.ImgOverlay>
                  <Card.Title>{languageAll.serviceTopTitle[language]}</Card.Title>
                  <Card.Text>
                  {languageAll.serviceTop[language]}
                  </Card.Text>
               </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white mx-5 mb-4">
               <Card.Img style={{maxHeight:'400px', objectFit:'cover'}} src={jul} alt="Card image" />
               <Card.ImgOverlay>
                  <Card.Title>{languageAll.serviceCenterTitle[language]}</Card.Title>
                  <Card.Text>
                  {languageAll.serviceCenter[language]}
                  </Card.Text>
               </Card.ImgOverlay>
            </Card>
            <Card className="bg-dark text-white mx-5 mb-4">
               <Card.Img style={{maxHeight:'400px', objectFit:'cover'}} src={meet} alt="Card image" />
               <Card.ImgOverlay>
                  <Card.Title>{languageAll.serviceBottomTitle[language]}</Card.Title>
                  <Card.Text>
                  {languageAll.serviceBottom[language]}
                  
                  </Card.Text>
               </Card.ImgOverlay>
            </Card>
         </div>
      </div>
   )
}
