import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Componants/Navbar';
import Footer from './pages/Componants/Footer';
import Home from './pages/Home';
import Contactus from './pages/ContactUs';

function PageRoutes() {
  return (
    <div>
        <Router>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Contact-us" element={<Contactus/>} />


                
            </Routes>
          <Footer/>
        </Router>
      
    </div>
  )
}

export default PageRoutes
