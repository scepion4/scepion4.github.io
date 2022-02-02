import React from 'react';
import bigTelegram from '../img/icons/Telegram_big.jpg'
import bigViber from '../img/icons/Viber_big.png'
import bigWhatsapp from '../img/icons/WhatsApp_big.jpg'



export default function Clients() {
  return (
     <div className='clients'>
        <div className='wrraper-clients'>
           <h4>Оставте свои и данние и мы свяжемся с вами</h4>
           <form action='#' method='POST'>
              <lable style={{display:'block'}} for='name'>Имя</lable>
              <input name='user-name' id='name' type='text'/>
              <lable style={{display:'block'}} for='phone'>Телефон</lable>
              <input name='user-phone' id='phone' type='number'/>
              <lable style={{display:'block'}} for='rout'>Маршрут</lable>
              <select name="place" id="rout">
                 <option value='chernigov-borispol'>Чернигов- а/п Борисполь</option>
                 <option value='chernigov-zhulyani'>Чернигов- а/п Жуляны </option>
                 <option value='borispol-chernigov'>а/п Борисполь-Чернигов</option>
                 <option value='zhulyani-chernigov'>а/п Жуляни-Чернигов</option>
              </select>
              <br/>
              <button className='button-clients' type='submit'>Отправить</button>
           </form>
           <div className='our-contacts'>
           <h4>Или свяжитесь с нами сами</h4>
           <div className='clients-link'><a title="Whatsapp" href="whatsapp://send?phone=79270000000"><img src={bigWhatsapp} alt="Написать в Whatsapp" /></a></div>
           <div className='clients-link'><a title="Telegram" href="https://telegram.me/логинкомпании" target="_blank"><img src={bigTelegram} alt="Написать в Telegram" /></a></div>
           <div className='clients-link'><a title="Viber" href="viber://chat?number=79270000000"><img src={bigViber} alt="Написать в Viber" /></a></div>
           <h5>Заказ мест по телефону</h5>
           <p>+38 095 63 09 510</p>
           <p>+38 063 78 27 987</p>
           </div>
        </div>
     </div>
  )
}
