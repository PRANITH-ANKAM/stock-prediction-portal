import { useState } from 'react'
import './assets/css/style.css'
import Main from './components/Main'
import Register from './components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Head from './components/Head'
import Footer from './components/Footer'
import Login from './components/Login'

function App() {

  return (
    <> 
    <BrowserRouter>
    <Head/>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/register' element={<Register />} />
        <Route path='login' element={<Login/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
