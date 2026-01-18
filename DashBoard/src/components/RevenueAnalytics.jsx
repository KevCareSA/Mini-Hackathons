import React from 'react'

function RevenueAnalytics() {
  return (
    <div className='lg:col-span-2 bg-white/10 backdrop-blur-2xl border border-white/20
            rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105'>
        <div className='flex items-center justify-between mb-8'>
            <div>
                <h3 className='text-2xl text-white mb-2 font-semibold'>
                    Revenue Analytics
                </h3>
                <p className='text-white/60' 
                >Real Time financial analytics</p>
            </div>
            <div className='flex items-center space-x-3'>
                <div className='flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2'>
                    <div className='w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 
                    rounded-full'>

                    </div>
                    <span className='text-white/80 text-sm font-medium'>Revenue</span>
                </div>
        </div>
            
        </div>
        
    </div>
  )
}

export default RevenueAnalytics
