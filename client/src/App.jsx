import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Concerts from './components/Home/Concerts';
import Artists from './components/Home/Artists';
import ConcertHalls from './components/Home/Concert-halls';
import Contact from './components/Contact/Contact';
import MyAccount from './components/My-Account/My-Account';

function App() {

  return (
    <>
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} >
          <Route path="/home/concerts" element={<Concerts />} />
          <Route path="/home/artists" element={<Artists />} />
          <Route path="/home/concert-halls" element={<ConcertHalls />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-account' element={<MyAccount />} />
      </Routes>
    </div>
    </>
  )
}

export default App
