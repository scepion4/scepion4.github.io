import React from 'react';
import { useSelector } from 'react-redux';
import  {languageAll}  from '../components/language';

export default function Help() {
   const language=useSelector(state=>state.LanguageSlice.valueLanguage)
   console.log(language)
  return (
     <div className='help'>
        <div className='help-wrraper'>
           <h3>{languageAll.helpTitle[language]}</h3>
           <p className='help-quetion'>{languageAll.helpQuestionCost[language]}</p>
           <p className='help-answer'>{languageAll.helpAskCost[language]}</p>
           <p className='help-quetion'>{languageAll.helpQuestionOrder[language]}</p>
           <p className='help-answer'>{languageAll.helpAskOrder[language]}</p>
           <p className='help-quetion'>{languageAll.helpQuestionCall[language]}</p>
           <p className='help-answer'>{languageAll.helpAskCall[language]}</p>
           <p className='help-quetion'>{languageAll.helpQuestionPay[language]}</p>
           <p className='help-answer'>{languageAll.helpAskPay[language]}</p>
           <p className='help-quetion'>{languageAll.helpQuestionTips[language]}</p>
           <p className='help-answer'>{languageAll.helpAskTips[language]}</p>
     </div>
     </div>
  )
}
