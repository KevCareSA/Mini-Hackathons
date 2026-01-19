import React from 'react'

function LiveActivityItem() {
  return (
    <div className="flex items-center space-x-2 p-4 rounded-2xl bg-white/5 
     hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border 
     border-white/10 hover:border-white/20 group">
        <div className={`p-3 rounded-xl group-hover:scale-110 transition-transform 
            duration-300 `}>
                icon here
        </div>
        <div className='flex-1 min-w-0'>
            <p className='text-white font-medium truncate'>Activity Users</p>
            <p className='text-white/70 text-sm truncate'>Activity Action</p>

        </div>
        <div className='text-right'>
            <p className='text-white font-medium truncate'>Activity Amount</p>
            <p className='text-white/70 text-sm truncate'>Activity Time</p>

        </div>
    </div>
  )
}

export default LiveActivityItem
