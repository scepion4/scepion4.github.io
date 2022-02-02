import React from 'react';
import {Navbar,Nav,Container,DropdownButton,Dropdown} from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom';
import Clients from '../pages/clients';
import Home from '../pages/Home';
import Help from '../pages/help'
import { useDispatch, useSelector } from 'react-redux';
import {chanageLanguage} from '../redux/slice'
import { useEffect } from 'react';

export default function SiteNavbar() {
 const dispatch = useDispatch()
 const language=useSelector(state=>state.LanguageSlice.valueLanguage)
 localStorage.setItem("language",language)
 
 console.log(language)
  return (
    <>
   <Navbar bg="light" expand="lg" >
   <Container fluid>
     <Navbar.Brand href="/">{language==='Русский'?"Трансфер Чернигов":"Трансфер Чернігів"}</Navbar.Brand>
     <Navbar.Toggle aria-controls="navbarScroll" />
     <Navbar.Collapse id="navbarScroll">
       <Nav
         className="me-auto my-2 my-lg-0"
         style={{ maxHeight: '100px' }}
         navbarScroll
       >
<a style={{marginRight:'30pxh',textDecoration:'none', color:'#1a1515'}} href='/help'>{language==='Русский'?"Помошь":"Допомога"}</a>
       </Nav>
<a className='nav-number' href='tel:+380956309510'>+380956309510</a>
<a className='nav-number' href='tel:+380637827987'>+380637827987</a>
<DropdownButton style={{marginRight:'30px'}} id="dropdown-basic-button" title={localStorage.getItem('language')} className="d-flex me-6">
  <Dropdown.Item onClick={e=>dispatch(chanageLanguage(e.target.innerText))} href="#">Русский</Dropdown.Item>
  <Dropdown.Item onClick={e=>dispatch(chanageLanguage(e.target.innerText))} href="#">Українська</Dropdown.Item>
</DropdownButton>

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

