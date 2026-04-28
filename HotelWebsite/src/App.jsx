import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import AllRooms from './pages/AllRooms';

function App() {

  const isOwnerPath = useLocation().pathname.includes('/owner');

  return (

        <div className='min-h-screen bg-gradient-to-r from-white to-gray-300 relative overflow-hidden'>
           {!isOwnerPath && <Navbar /> }
           <div className='min-h-[70vh]'>
            <Routes>
              <Route path='/' element={<Home />} /> 
              <Route path='/rooms' element={<AllRooms />} />     
            </Routes>
           </div>
           <Footer />
        </div>
  )
}

export default App
0
