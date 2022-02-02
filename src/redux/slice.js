import { createSlice } from '@reduxjs/toolkit'

 const LanguageSlice =createSlice({
name:'language',
initialState:{
valueLanguage:localStorage.getItem('language')
},
reducers:{
   chanageLanguage(state,action) {
      state.valueLanguage=action.payload
   }
}
})

export default LanguageSlice.reducer
export const{chanageLanguage}=LanguageSlice.actions