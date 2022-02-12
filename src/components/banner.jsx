import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import  {languageAll}  from './language';
import { gsap } from 'gsap';

export default function Banner() {
   let language=useSelector(state=>state.LanguageSlice.valueLanguage)
   const refSubtitle=useRef()
   const refBannerText=useRef()
   const refTitleBanner=useRef()
   useEffect(()=>{
      gsap.to(refSubtitle.current,{
         transform:'translateX(0)',
         duration:'2'
      })
      gsap.to(refBannerText.current,{
         transform:'translateX(0)',
         duration:'3'
      })
      gsap.to(refTitleBanner.current,{
         transform:'translateX(0)',
         duration:'1',
         
      })
   },[])
   return (
      <div className='banner'>
         <div className='wrraper-banner'>
            <div className='content-banner'>
               <h3 ref={refTitleBanner} className='title-banner'>{languageAll.bannerTitle[language]}</h3>
               <p ref={refSubtitle} className='banner-subtitle'>{languageAll.bannerSubtitle[language]}</p>
               <p ref={refBannerText} className='banner-text'>{languageAll.bannerText[language]}</p>
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
