import React from 'react';
import {Navbar,Nav,Container,DropdownButton,Dropdown} from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import Clients from '../pages/clients';
import Home from '../pages/Home';
import Help from '../pages/help'
import { useDispatch, useSelector } from 'react-redux';
import {chanageLanguage} from '../redux/slice'
import  {languageAll}  from './language';
import phone from '../img/icons/phone.jpg'

export default function SiteNavbar() {
 const dispatch = useDispatch()
 let language=useSelector(state=>state.LanguageSlice.valueLanguage)

 if(!language===null){
 localStorage.setItem("language",language)
 }else{
localStorage.setItem("language",'Русский')
 }
  return (
    <>
   <Navbar bg="light" expand="lg" >
   <Container fluid>
     <Navbar.Brand href="/">{languageAll.bannerTitle[language]}</Navbar.Brand>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarToggleExternalContent">
       <Nav
         className="me-auto my-4 my-lg-0"
         style={{ maxHeight: '100px' }}
         
       >
<a style={{marginRight:'30pxh',textDecoration:'none', color:'blue'}} href='/help'>{languageAll.help[language]}</a>
       </Nav>
       <Nav 
       className="my-4 my-lg-0 dropdawn"
         style={{display:'flex',alignItems:'center', marginTop:'30px', maxHeight: '100px' }}>
<a className='nav-number' href='tel:+380956309510'><img src={phone}></img>+380956309510</a>
<a className='nav-number' href='tel:+380637827987'><img src={phone}></img>+380637827987</a>
<DropdownButton style={{marginRight:'30px'}} id="dropdown-menu-align-end" title={(localStorage.getItem('language'))?localStorage.getItem('language'):'Русский'} className="d-flex me-6">
  <Dropdown.Item onClick={e=>dispatch(chanageLanguage(e.target.innerText))} href="#">Русский</Dropdown.Item>
  <Dropdown.Item onClick={e=>dispatch(chanageLanguage(e.target.innerText))} href="#">Українська</Dropdown.Item>
  <Dropdown.Item onClick={e=>dispatch(chanageLanguage(e.target.innerText))} href="#">English</Dropdown.Item>
</DropdownButton>
</Nav>
     </Navbar.Collapse>
   </Container>
 </Navbar>
 <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/help' element={<Help/>}/>
 </Routes>
 </>
);
}

