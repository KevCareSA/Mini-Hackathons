import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { useState } from 'react'
import MetricCard from './components/MetricCard';

function App() {
  const [sidebar, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    // Root container: full-screen height + gradient background for the whole app
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 
      to-pink-900 relative overflow-hidden">
      
       {/* Main layout wrapper: flex container that holds the sidebar content */}
      <div className='flex min-h-screen relative z-10'>
         <Sidebar 
         sidebar={sidebar} 
         setSidebarOpen={setSidebarOpen}
         activeTab={activeTab}
          setActiveTab={setActiveTab}
          />
          
        {/* Header Layout Wrapper */}
        <div className='flex-1 flex flex-col overflow-hidden'>
          <Header 
            currentTime={currentTime}
            activeTab={activeTab}
            setSidebarOpen={setSidebarOpen}
              />

            <main className='flex-1 overflow-hidden p-8 space-y-8'>
              {/* Main content area */}
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <MetricCard />
              </div>
            </main>
            
        </div>

      </div>  
    </div>
  );
}

export default App
