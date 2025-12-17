/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Smartphone, Globe, Mail, User, Layers, ArrowRight, BarChart2, PieChart, TrendingUp, CheckCircle, Users } from 'lucide-react';

// --- DATA UNIFICATION DIAGRAM ---
export const DataUnificationDiagram: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const sources = [
    { icon: <Globe size={20} />, label: "Web", color: "text-blue-500", bg: "bg-blue-100" },
    { icon: <Smartphone size={20} />, label: "Mobile", color: "text-purple-500", bg: "bg-purple-100" },
    { icon: <Mail size={20} />, label: "Email", color: "text-orange-500", bg: "bg-orange-100" },
    { icon: <Database size={20} />, label: "CRM", color: "text-green-500", bg: "bg-green-100" },
  ];

  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border border-slate-100 max-w-2xl mx-auto">
      <h3 className="text-xl font-bold mb-8 text-slate-800">Unified 360° Customer View</h3>
      
      <div className="flex items-center justify-between w-full gap-4 md:gap-8 relative">
        
        {/* Left Side: Sources */}
        <div className="flex flex-col gap-4">
            {sources.map((source, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex items-center gap-3 p-3 rounded-lg border border-slate-100 shadow-sm ${source.bg} bg-opacity-50`}
                >
                    <div className={`${source.color}`}>{source.icon}</div>
                    <span className="text-xs font-semibold text-slate-600">{source.label}</span>
                    
                    {/* Animated Particles moving to center */}
                    <AnimatePresence>
                        {activeStep === 0 && (
                             <motion.div 
                                className={`absolute w-3 h-3 rounded-full ${source.color.replace('text', 'bg')}`}
                                initial={{ left: "100%", opacity: 1 }}
                                animate={{ left: "200%", top: "50%", opacity: 0 }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                             />
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>

        {/* Center: The CDP Engine */}
        <div className="flex flex-col items-center z-10">
            <div className="w-24 h-24 bg-brand-600 rounded-full flex flex-col items-center justify-center text-white shadow-lg shadow-brand-500/30 relative">
                <Layers size={32} className="mb-1" />
                <span className="text-[10px] font-bold">HiLab CDP</span>
                
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full border-4 border-brand-400 opacity-0 animate-ping"></div>
            </div>
        </div>

        {/* Right: The Output (Unified Profile) */}
        <div className={`flex flex-col items-center transition-all duration-500 ${activeStep >= 1 ? 'opacity-100 transform translate-x-0' : 'opacity-50 transform translate-x-4'}`}>
            <div className="bg-white p-4 rounded-xl shadow-lg border border-slate-200 w-48">
                <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500">
                        <User size={20} />
                    </div>
                    <div>
                        <div className="h-3 w-20 bg-slate-800 rounded mb-1"></div>
                        <div className="h-2 w-12 bg-slate-400 rounded"></div>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="h-2 w-full bg-blue-100 rounded"></div>
                    <div className="h-2 w-3/4 bg-purple-100 rounded"></div>
                    <div className="h-2 w-5/6 bg-orange-100 rounded"></div>
                </div>
                <div className="mt-4 flex gap-2">
                    <div className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded">Active</div>
                    <div className="px-2 py-1 bg-brand-100 text-brand-700 text-[10px] font-bold rounded">VIP</div>
                </div>
            </div>
        </div>

      </div>

      <div className="mt-8 flex gap-8 text-sm font-medium text-slate-500">
          <div className={`transition-colors ${activeStep === 0 ? 'text-brand-600' : ''}`}>1. Ingest</div>
          <div className={`transition-colors ${activeStep === 1 ? 'text-brand-600' : ''}`}>2. Unify</div>
          <div className={`transition-colors ${activeStep === 2 ? 'text-brand-600' : ''}`}>3. Activate</div>
      </div>
    </div>
  );
};

// --- ANALYTICS DASHBOARD PREVIEW ---
export const AnalyticsPreview: React.FC = () => {
    return (
        <div className="w-full bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-inner">
            <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <BarChart2 size={16} className="text-brand-500" /> Segment Performance
                </h4>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                {/* Metric 1 */}
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                    <div className="text-xs text-slate-400 mb-1">Customer Lifetime Value</div>
                    <div className="text-lg font-bold text-slate-800">$1,240</div>
                    <div className="flex items-center text-[10px] text-green-600 mt-1">
                        <TrendingUp size={12} className="mr-1" /> +12% vs last month
                    </div>
                </div>
                {/* Metric 2 */}
                <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">
                    <div className="text-xs text-slate-400 mb-1">Churn Risk</div>
                    <div className="text-lg font-bold text-slate-800">2.4%</div>
                    <div className="flex items-center text-[10px] text-green-600 mt-1">
                        <CheckCircle size={12} className="mr-1" /> Stable
                    </div>
                </div>
            </div>

            <div className="mt-4 bg-white p-3 rounded-lg shadow-sm border border-slate-100 h-32 flex items-end justify-between px-2 pb-2 gap-2">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                    <motion.div 
                        key={i}
                        className="w-full bg-brand-500 rounded-t-sm opacity-80 hover:opacity-100 transition-opacity"
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                ))}
            </div>
        </div>
    )
}
