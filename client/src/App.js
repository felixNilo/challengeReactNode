import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import File from './components/File'
import Login from './components/Login'
import Credits from './components/Credits'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>     
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/files" element={<File />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App
