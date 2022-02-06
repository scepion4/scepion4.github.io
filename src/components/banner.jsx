import React from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import  {languageAll}  from './language';

export default function Banner() {
   let language=useSelector(state=>state.LanguageSlice.valueLanguage)
   return (
      <div className='banner'>
         <div className='wrraper-banner'>
            <div className='content-banner'>
               <h3 className='title-banner'>{languageAll.bannerTitle[language]}</h3>
               <p className='banner-subtitle'>{languageAll.bannerSubtitle[language]}</p>
               <p className='banner-text'>{languageAll.bannerText[language]}</p>
               <div className="d-grid gap-4 mx-4">
            <Button href='tel:+380956309510' variant="primary" size="lg">
            +38 095 63 09 510
               </Button>
               <Button href='tel:+380637827987' variant="secondary" size="lg">
               +38 063 78 27 987
               </Button>
            </div>
            </div>
         </div>
      </div>
   );
}
