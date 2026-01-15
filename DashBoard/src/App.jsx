import React from 'react'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 
    to-pink-900 relative overflow-hidden">
      <div className='flex min-h-screen relative z-10'>
         <Sidebar />
      </div>
    </div>
  );
}

export default App
