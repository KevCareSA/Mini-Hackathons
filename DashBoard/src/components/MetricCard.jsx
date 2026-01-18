import { ArrowDown, ArrowUp } from 'lucide-react'
import React from 'react'

function MetricCard() {
  return (
    <div className='group relative overflow-hidden bg-white/10 backdrop-blur-xl
        border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all
         duration-500 hover:scale-105 hover:shadow-2xl'>
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 
            transition-opacity duration-500`}> 
        </div>
        <div className='relative z-10'>
            <div className='flex items-center justify-between mb-6 '>
                <div className={`p-4 rounded-2xl bg-gradient-to-br group-hover:scale-110 
                transition-all duration-300 shadow-lg`}>
                    {/* Icon can be placed here */}
                    Icons
                </div>
                <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-bold`}>
                    {/* conditional rendering */}
                    <ArrowUp />
                    <ArrowDown />

                    <span>Dynamic Content Shandis</span>
                </div>
            </div>

             <div className='space-y-2'>
                <h3 className='text-white/70 text-sm font-medium uppercase tracking-wide'>
                    Tittle 
                </h3>
                </div>
            </div>

    </div>
  )
}

export default MetricCard
