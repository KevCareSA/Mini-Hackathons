import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { revenueData } from "../data/data";


function RevenueAnalytics() {
  return (
    <div
      className="lg:col-span-2 bg-white/10 backdrop-blur-2xl border border-white/20
            rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 hover:scale-105"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl text-white mb-2 font-semibold">
            Revenue Analytics
          </h3>
          <p className="text-white/60">Real Time financial analytics</p>
        </div>
        <div className="flex items-center space-x-3">
          {/* Revenue pill */}
          <div className="flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
            <span className="text-white/80 text-sm font-medium">Revenue</span>
          </div>

          {/* Users pill */}
          <div className="flex items-center space-x-2 bg-white/10 rounded-2xl px-4 py-2">
            <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
            <span className="text-white/80 text-sm font-medium">Users</span>
          </div>
        </div>
      </div>

        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
                <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0} />
                    </linearGradient>

                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.6)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.6)" fontSize={12} />

                <Tooltip
                    contentStyle={{
                        backgroundColor: "rgba(0, 0, 0, 0.8)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: "16px",
                        color: "#ffffff",
                        backdropFilter: "blur(16px)",
                    }}
                    itemStyle={{ color: "#ffffff" }}
                    labelStyle={{ color: "#ffffff", fontSize: 12 }}
                />

                <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#06B6D4"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                />

                    <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#8B5CF6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorUsers)"
                 />


            </AreaChart>
        </ResponsiveContainer>

    </div>
  );
}

export default RevenueAnalytics;
