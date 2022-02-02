import React from 'react';
import viberBig from '../img/icons/Viber_big.png'
import viber from '../img/icons/Viber.png'

   
export default function Viber() {
   const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
return <a className='viber' title="Viber" href="viber://chat?number=79270000000">{devices.test(navigator.userAgent)?<img src={viber} alt="Написать в Viber" />:<img src={viberBig} alt="Написать в Viber" />}</a>;
}
