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
import Error404 from './components/Error-page/Error404';
import ErrorPage from './components/Error-page/Error-page';
import Footer from './components/Footer/Footer';
import Login from './components/Login-signup/Login';
import Signup from './components/Login-signup/Signup';
import { ConcertProvider } from './components/Modal/concert-context';

function App() {

  return (
    <>
    <ConcertProvider>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} errorElement={<ErrorPage />} >
            <Route path="/home/concerts" element={<Concerts />} errorElement={<ErrorPage />} />
            <Route path="/home/artists" element={<Artists />} errorElement={<ErrorPage />} />
            <Route path="/home/concert-halls" element={<ConcertHalls />} errorElement={<ErrorPage />} />
          </Route>
          <Route path='/contact' element={<Contact />} errorElement={<ErrorPage />} />
          <Route path='/my-account' element={<MyAccount />} errorElement={<ErrorPage />} />
          <Route path='/login' element={<Login />} errorElement={<ErrorPage />} />
          <Route path='/signup' element={<Signup />} errorElement={<ErrorPage />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </ConcertProvider>
    </>
  )
}

export default App
