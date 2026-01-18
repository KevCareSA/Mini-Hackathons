import { Menu } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='bg-white/10 backdrop-blur-xl border-b border-white/20 px-8 py-6'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-6'>
                <button className='lg:hidden text-white/70 p-2 rounded-xl hover:bg-white/10 transition-colors'>
                    <Menu className="w-6 h-6 text-white/70 hover:text-white transition-colors" />
                </button>
            </div>     
        </div>
    </div>
  )
}

export default Header
