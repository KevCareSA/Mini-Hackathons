import React from 'react'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

function App() {
  const [sidebar, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    // Root container: full-screen height + gradient background for the whole app
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 
      to-pink-900 relative overflow-hidden">
      
       {/* Main layout wrapper: flex container that holds the sidebar and future main content */}
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
