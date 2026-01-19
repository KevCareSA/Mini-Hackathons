import React from "react";
import { Sparkle, Crown, Rocket, X } from "lucide-react";
import { useState } from "react";
import { menuItems } from "../data/data";

function Sidebar({ sidebar, setSidebarOpen, activeTab, setActiveTab }) {
  return (
    // Root sidebar container: fixed position, full height, width 80, semi-transparent with blur effect
    <div
      className={`${sidebar ? "translate-x-0" : "-translate-x-full"} 
        fixed inset-y-0 left-0 z-50 w-80 bg-white/10 backdrop-blur-2xl border-r
         border-white/20 transform transition-all duration-500 ease-out 
         lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}
    >
      {/* Header section: Logo + App name + Mobile close button */}
      <div className="flex items-center justify-between h-20 px-8 border-b border-white/20">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div
              className="w-12 h-12 bg-gradient-to-r from-purple-700 to-blue-600 rounded-2xl 
                            flex items-center justify-center shadow-2xl"
            >
              <Sparkle className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* App branding text */}
          <div>
            <h1
              className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 
                        bg-clip-text text-transparent "
            >
              KevCare Flow
            </h1>
            <p className="text-xs text-white/60 font-medium">PREMIUM SHANDIS</p>
          </div>
        </div>
        <button
          className="lg:hidden text-white/70 hover:text-white p-2 rounded-xl 
                hover:bg-white/10 transition-colors"
          onClick={() => setSidebarOpen(false)}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* navigation div within the sidebar */}
      <nav className="flex-1 mt-8 px-6 space-y-2 overflow-y-auto">
        {/* map through nav items */}
        {menuItems.map((item) => {
          return (
            <button
              key={item.id}
              className={`w-full flex items-center px-6 py-4 text-left rounded-2xl transition-all duration-300 group relative overflow-hidden ${activeTab === item.id ? "bg-white/20 text-white shadow-2xl scale-105" : "text-white/70 hover:text-white hover:bg-white/10 hover:scale-105"}`}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
            >
              {/* conditional rendering */}
              {activeTab === item.id && (
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-30 rounded-2xl`}
                ></div>
              )}

              <div
                className={`p-2 rounded-xl bg-gradient-to-r mr-4 group-hover:scale-110 transition-all duration-300 relative z-10 ${item.gradient}`}
              >
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold relative z-10">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer / Upgrade card section:
                - Always stays at bottom due to flex layout
                - Promotional CTA area */}
      <div className="p-6">
        <div
          className="relative overflow-hidden bg-gradient-to-r from-purple-500/20
                to-pink-500/20 backdrop-blur-sm rounded-3xl p-6 border border-white/20"
        >
          <div
            className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br 
                    from-white/10 to-transparent rounded-full transform translate-x-10 
                    translate-y-10"
          ></div>
          <div className="relative">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold">Premium Member</h3>
                <p className="text-white/60 text-xs ">Advanced Analytics</p>
              </div>
            </div>
            <button
              className="w-full bg-gradient-to-r to-purple-600 hover:scale-105 
                            hover: shadow-2xl text-white font-bold py-3 rounded-2xl 
                            transition-all duration-300"
            >
              <Rocket className="w-5 h-5 inline-block mr-2" />
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
