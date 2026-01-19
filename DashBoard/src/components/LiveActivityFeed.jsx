import React from "react";
import LiveActivityItem from "./LiveActivityItem";

function LiveActivityFeed() {
  return (
    <div
      className="bg-white/10 backdrop-blur-2xl border  border-white/20 rounded-3xl 
        p-6 hover:bg-white/15 transition-all duration-500 hover:scale-105"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Live Activity</h3>
          <p className="text-white/60 text-sm ">
            Real-time user actions and updates
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/70 text-xs font-medium">LIVE</span>
        </div>
      </div>

      <div className="space-y-4 max-h-64 overflow-y-auto">
        {/* map method */}
        <LiveActivityItem />
      </div>
    </div>
  );
}

export default LiveActivityFeed;
