import React from 'react'
import { Sparkle, Crown } from 'lucide-react'

function Sidebar() {
  return (
    <div className={'fixed inset-y-0 left-0 z-50 w-80 bg-white/10 backdrop-blur-2xl border-r border-white/20 transform transition-all duration-500 ease-out lg:translate-x-0 lg:static lg:inset-0'}>
         <div className="flex items-center justify-between h-20 px-8 border-b border-white/20">
                <div className='flex items-center space-x-4'>
                    <div cla0s0sName='relative'>
                        <div className='w-12 h-12 bg-gradient-to-r from-purple-700 to-blue-600 rounded-2xl 
                            flex items-center justify-center shadow-2xl'>  
                            <Sparkle className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold bg-gradient-to-r from-white to-white/80 
                        bg-clip-text text-transparent '>
                            KevCare Flow
                        </h1>
                        <p className='text-xs text-white/60 font-medium'>
                            PREMIUM SHANDIS</p>
                    </div>
                </div>
                <button className='lg:hidden text-white/70 hover:text-white p-2 roundwered-xl 
                hover:bg-white/10 transition-colors'>
                    {/*<X className="w-6 h-6" /> */}
                </button>
            </div>

            <nav className='mt-8 px-6 space-y-2'>
                <button className={'w-full flex items-center px-6 py-4 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden'}>
                    {/* conditional rendering */}
                    {/* <div className={'absolute inset-0 bg-gradient-to-r opacity-30 rounded-2xl'}>
                    </div> */}
                    <div className={'p-2 rounded-xl bg-gradient-to-r mr-4 group-hover:scale-110 transition-all duration-300 relative z-10'}>
                        Item Icon
                    </div>
                    <span className='font-semibold relative z-10'>
                        Item Label
                    </span>

                </button>
            </nav>

            <div className='absolute bottom-0 left-0 right-0 p-6'>
                <div className='relative overflow-hidden bg-gradient-to-r from-purple-500/20
                to-pink-500/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20'>
                    <div className='absolute top-0 right-0 w-20 h-20 bg-gradient-to-br 
                    from-white/10 to-transparent rounded-full transform translate-x-10 
                    translate-y-10'></div>
                        <div className='relative'>
                            <div className='flex items-center space-x-3 mb-4'>
                                <div className='p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl'>
                                <Crown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Sidebar
