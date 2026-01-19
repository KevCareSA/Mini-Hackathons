import { Bell, ChevronDown, Menu, Search } from 'lucide-react'
import React from 'react'

function Header({ currentTime, activeTab, setSidebarOpen }) {
  return (
        // ===== Header Container (Glass Background) =====
    <div className='bg-white/10 backdrop-blur-xl border-b border-white/20 px-8 py-6'>

          {/* ===== Main Header Row ===== */}

        <div className='flex items-center justify-between'>

            {/* ===== Left Section: Menu + Title + Date ===== */}

            <div className='flex items-center space-x-6'>
                <button 
                    className='lg:hidden text-white/70 p-2 rounded-xl hover:bg-white/10 transition-colors
                '   onClick={() => setSidebarOpen(true)}>
                    <Menu className="w-6 h-6 text-white/70 hover:text-white transition-colors" />
                </button>

                <div>
                    <h2 className='text-3xl font-bold bg-gradient-to-r from-white to-white/70
                    bg-clip-text text-transparent capitalize'>
                        {activeTab} 
                    </h2>
                    <p className='text-sm text-white/60 mt-1'>
                        {currentTime.toLocaleDateString('en-US', {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </p>
                 </div>  
             </div>

            {/* ===== Right Section: Search + Notifications + User Info ===== */}
             <div className='flex items-center space-x-4'>
                <div className='hidden md:flex items-center bg-white/10 backdrop-blur-2xl border
                border-white/20 rounded-2xl px-6 py-3 w-96 group hover:bg-white/20 transition-all
                duration-300 '>
                    <Search className="w-5 h-5 mr-3 text-white/70 group-hover:text-white transition-colors" />
                    <input 
                        type="text" 
                        className='bg-transparent text-white placeholder-white
                    focus:outline-none flex-1'
                        placeholder='Search Your Shandis Here...' />
                </div>
                <div className='flex items-center space-x-2'>
                    <button className='relative p-3 text-white/70 hover:text-white hover:bg-white/10
                    rounded-2xl transition-all duration-300 group'>
                        <Bell className="w-6 h-6" />
                        <span className='absolute top-1 right-1 w-5 h-5 bg-gradient-to-r from-pink-500 to-red-500 
                        rounded-full text-xs text-white flex items-center justify-center'>24</span>
                    </button>

                    <div className='flex items-center space-x-3 cursor-pointer ml-4 bg-white/10 backdrop-blur-xl
                    rounded-2xl px-4 py-2 border border-white/20 hover:bg-white/20 transition-all duration-300
                    group'>
                        <div className='hidden md:flex flex-col justify-center text-center'>
                            <p className='text-white font-semibold '>Kevin Bill Gates Moks</p>
                            <p className='text-white/60 text-xs '>Principal Lead</p>
                        </div>
                        <div className='relative'>
                            <div className='h-12 w-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl 
                            flex items-center justify-center shadow-xl group-hover:scale-110 
                            transition-all duration-300'>
                                <span className='text-white font-bold'>KM</span>
                            </div>
                            <div className='absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full
                            border-2 border-white animate-pulse'>
                                <ChevronDown className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                    </div>

                </div>
             </div>
            
        </div>
    </div>
  )
}

export default Header
