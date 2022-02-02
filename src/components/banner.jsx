import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


export default function Banner() {
   const language=useSelector(state=>state.LanguageSlice.valueLanguage)
   return (
      <div className='banner'>
         <div className='wrraper-banner'>
            <div className='content-banner'>
               <h3 className='title-banner'>{language==='Русский'?"Трансфер Чернигов":"Трансфер Чернігів"}</h3>
               <p className='text-banner'>{language==='Русский'?"Везем от дома до терминала":"Веземо від будинку до терміналу"}</p>
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
