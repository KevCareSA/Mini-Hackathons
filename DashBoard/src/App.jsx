import React from 'react'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

function App() {
  const [sidebar, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 
    to-pink-900 relative overflow-hidden">
      <div className='flex min-h-screen relative z-10'>
         <Sidebar 
         sidebar={sidebar} 
         setSidebarOpen={setSidebarOpen}
         activeTab={activeTab}
          setActiveTab={setActiveTab}
          />
      </div>
    </div>
  );
}

export default App
