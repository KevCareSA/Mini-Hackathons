import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { useState } from 'react'
import MetricCard from './components/MetricCard';
import { Banknote, Users, Target, Zap, PieChart } from 'lucide-react';
import RevenueAnalytics from './components/RevenueAnalytics';
import LiveActivityFeed from './components/LiveActivityFeed';
import TrafficSource from './components/TrafficSource';
import SystemPerformance from './components/SystemPerformance';
import { Bar } from 'recharts';
import { BarChart } from 'lucide-react';


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

            <main className='flex-1 overflow-hidden p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 lg:space-y-8'>
              {/* Main content area */}
             {activeTab === 'overview' && (
              <>
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

                {/* Traffic Source & Performance */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  <TrafficSource />
                  <SystemPerformance />
                </div>
              </>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className='space-y-8'>
                <div className='bg-white/10 backdrop-blur-2xl border border-white/20
                  rounded-3xl p-12 text-center hover:bg-white/15 transition-all duration-500'>
                    <div className='w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600
                    rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl'>
                      <BarChart className='w-10 h-10 text-white' />
                    </div>
                    <h2 className='text-3xl font-bold bg-gradient-to-r from-white 
                    to-white/70 bg-clip-text text-transparent mb-4'>
                      Advanced Analytics Room
                    </h2>
                    <p className='text-white/60 max-w-2xl mx-auto mb-8 text-lg'>
                      Dive deeper into your data with our advanced analytics tools.
                      Uncover trends, track performance, and make data-driven decisions
                      to propel your business forward.
                    </p>

                    <div className='grid grid-cols-1'>
                      <div className='group p-8 bg-white/5 backdrop-blur-sm rounded-2xl 
                      border border-white/10 hover:bg-white/10 transition-all duration-300'>
                        <div className='w-16 h-16 bg-gradient-to-r from-cyan-400 
                        to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4
                        group-hover:scale-110 transition-all duration-300'>
                          <PieChart className='w-8 h-8 text-white' />
                        </div>
                      </div>

                    </div>

                </div>
              </div>
            )}

            </main>

        </div>

      </div>  
    </div>
  );
}

export default App
