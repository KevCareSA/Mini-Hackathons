import React from 'react'
import { trafficSources } from '../data/data'

function TrafficSource() {
  return (
    // NEW: Glass card container like your screenshot
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 
    hover:bg-white/15 transition-colors duration-300">

      {/* NEW: Card Title */}
      <h3 className="text-xl font-bold text-white mb-6">Traffic Sources</h3>

      <div className="grid grid-cols-2 gap-6">
        {/* Traffic Source Item (later this will be mapped) */}
        {trafficSources.map((source, index) => {
          const SourceIcon = source.icon;
          return (
           <div key={index} className="text-center group">

            <div className="relative mb-4">
              <svg
                className="w-24 h-24 mx-auto transform group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 96 96">

                {/* Background ring */}
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke='rgb(255,255,255,0.1)'  // Light background ring
                  strokeWidth="8"
                  fill="none"
                />

                {/* NEW: Progress ring */}
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke={source.color}         // NEW: color
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2.5 * source.value} 251`} // Circumference approx 251.2
                  strokeLinecap="round"
                  transform="rotate(-90 48 48)"
                  className="transition-all duration-1000"
                />
              </svg>

              {/* NEW: Floating center icon badge */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm 
                  group-hover:bg-white/20 transition-colors duration-300">
                  {<SourceIcon 
                    className="w-6 h-6" 
                    style={{ color: source.color }} />}
                </div>
              </div>
          </div>

          {/* NEW: Labels under circle */}
          <p className="text-white font-semibold text-sm">{source.name}</p>
          <p className="text-2xl font-bold text-white">{source.value}</p>

        </div>
      )})}
      </div>

    </div>
  )
}

export default TrafficSource
