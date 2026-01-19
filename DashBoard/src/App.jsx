import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { useState } from 'react'
import MetricCard from './components/MetricCard';
import { Banknote, Users, Target, Zap } from 'lucide-react';
import RevenueAnalytics from './components/RevenueAnalytics';
import LiveActivityFeed from './components/LiveActivityFeed';

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
                <MetricCard 
                    title="Total Revenue"
                    value="R1.8M"
                    change={14.9}
                    icon={Banknote}
                    gradient='from-emerald-400 to-cyan-400'
                    subtitle="This Quarter"
                    trend={[42, 47, 44, 53, 58, 62, 60, 68, 74, 71, 79, 85]}
                  />

                  <MetricCard 
                    title="Active Users"
                    value="15.2K"
                    change={27.4}
                    icon={Users}
                    gradient='from-blue-400 to-purple-500'
                    subtitle="Monthly Active"
                    trend={[38, 42, 39, 48, 45, 52]}
                  />

                  <MetricCard
                    title="Conversion Rate"
                    value="12.8%"
                    change={25.4}
                    icon={Target}
                    gradient="from-purple-400 to-pink-500"
                    subtitle="Last 30 days"
                    trend={[28, 32, 35, 41, 38, 44]}
                  />

                  <MetricCard
                    title="Performance Score"
                    value="98.5%"
                    change={-2.1}
                    icon={Zap}
                    gradient="from-orange-400 to-red-500"
                    subtitle="System health"
                    trend={[85, 88, 92, 89, 94, 91]}
                  />



              </div>

              {/* Revenue Analytics Component */}
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {/* Placeholder for Revenue Analytics Component */}
                  <RevenueAnalytics />

                  {/* Live Activity Feed */}
                  <LiveActivityFeed />
              </div>
            </main>

        </div>

      </div>  
    </div>
  );
}

export default App
