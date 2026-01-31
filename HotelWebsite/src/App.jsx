import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom';

function App() {

  const isOwnerPath = useLocation().pathname.includes('/owner');

  return (
    <div>
        <div className='min-h-screen bg-gradient-to-br from-white-100 to-gray-400 relative overflow-hidden'>
           {!isOwnerPath && <Navbar /> }
        </div>
    </div>
  )
}

export default App
