'use client';

import React from 'react';
import {
    TrendingUp,
    Users,
    Target,
    Activity,
    Clock,
    ArrowUpRight,
    MoreHorizontal,
    Mail,
    Smartphone,
    MapPin,
    CheckCircle2
} from 'lucide-react';
import { Lead } from '@/lib/leads';

// --- Analytics Charts (SVG Based) ---
export function DashboardAnalytics() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traffic Trend Chart */}
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-xl font-black text-slate-900 tracking-tight font-outfit">Performance Vectors</h3>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Real-time Velocity</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full text-[10px] font-black text-primary uppercase tracking-widest">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Live Sync
                    </div>
                </div>

                <div className="h-48 relative">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(var(--primary-rgb), 0.2)" />
                                <stop offset="100%" stopColor="rgba(var(--primary-rgb), 0)" />
                            </linearGradient>
                        </defs>
                        {/* Area */}
                        <path
                            d="M 0 80 Q 15 70, 25 75 T 45 60 T 65 65 T 85 40 T 100 35 V 100 H 0 Z"
                            fill="url(#chartGradient)"
                            className="animate-pulse-subtle"
                        />
                        {/* Line */}
                        <path
                            d="M 0 80 Q 15 70, 25 75 T 45 60 T 65 65 T 85 40 T 100 35"
                            fill="none"
                            stroke="rgb(var(--primary-rgb))"
                            strokeWidth="2"
                            strokeDasharray="200"
                            strokeDashoffset="200"
                            className="animate-dash"
                        />
                        {/* Data Points */}
                        <circle cx="25" cy="75" r="1.5" fill="rgb(var(--primary-rgb))" />
                        <circle cx="45" cy="60" r="1.5" fill="rgb(var(--primary-rgb))" />
                        <circle cx="65" cy="65" r="1.5" fill="rgb(var(--primary-rgb))" />
                        <circle cx="85" cy="40" r="1.5" fill="rgb(var(--primary-rgb))" />
                    </svg>
                </div>

                <div className="grid grid-cols-4 mt-6 gap-4">
                    {['Mon', 'Tue', 'Wed', 'Thu'].map((day) => (
                        <div key={day} className="text-center">
                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{day}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Conversion Nexus */}
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-0" />
                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-xl font-black tracking-tight font-outfit">Conversion Nexus</h3>
                        <div className="text-primary"><TrendingUp size={24} /></div>
                    </div>

                    <div className="space-y-6">
                        {[
                            { label: 'Strategic Leads', value: 84, color: 'bg-primary' },
                            { label: 'System Uptime', value: 100, color: 'bg-emerald-500' },
                            { label: 'Resource Load', value: 34, color: 'bg-violet-500' }
                        ].map((stat) => (
                            <div key={stat.label} className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-white/40">
                                    <span>{stat.label}</span>
                                    <span>{stat.value}%</span>
                                </div>
                                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full ${stat.color} transition-all duration-1000 ease-in-out`}
                                        style={{ width: `${stat.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Recent Leads (CRM) ---
export function RecentLeads({ leads }: { leads: Lead[] }) {
    return (
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden">
            <div className="p-8 border-b border-slate-50 flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-black text-slate-900 tracking-tight font-outfit">Lead Intelligence</h3>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Real-time Pipelines</p>
                </div>
                <button className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-slate-50/50 border-b border-slate-50">
                        <tr>
                            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Inquiry Source</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                            <th className="px-8 py-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Engagement</th>
                            <th className="px-8 py-4 text-right"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {leads.map((lead) => (
                            <tr key={lead.id} className="group hover:bg-slate-50/30 transition-colors">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white transition-all">
                                            <Users size={18} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-black text-slate-900">{lead.name}</p>
                                            <p className="text-[10px] text-slate-400 font-medium">{lead.company || lead.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-8 py-6">
                                    <span className={`px-2 py-0.5 rounded-md text-[8px] font-bold uppercase tracking-widest ${lead.status === 'new' ? 'bg-blue-50 text-blue-500' :
                                            lead.status === 'contacted' ? 'bg-emerald-50 text-emerald-500' :
                                                'bg-slate-50 text-slate-400'
                                        }`}>
                                        {lead.status}
                                    </span>
                                </td>
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <Clock size={12} className="text-slate-300" />
                                        {new Date(lead.date).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <button className="p-2 text-slate-300 hover:text-primary transition-colors">
                                        <ArrowUpRight size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

// --- Activity Feed ---
export function ActivityFeed() {
    const activities = [
        { title: 'System Synchronized', desc: 'Projects data synchronized with cloud storage.', time: '2 mins ago', icon: CheckCircle2, color: 'text-emerald-500' },
        { title: 'New Strategic Lead', desc: 'Inquiry received from Future Corp regarding CRM.', time: '1 hour ago', icon: Target, color: 'text-primary' },
        { title: 'Security Protocol', desc: 'Admin session authenticated via secure token.', time: '3 hours ago', icon: Activity, color: 'text-violet-500' },
    ];

    return (
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <div className="mb-8">
                <h3 className="text-xl font-black text-slate-900 tracking-tight font-outfit">Telemetry Stream</h3>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Operational Pulse</p>
            </div>

            <div className="space-y-8">
                {activities.map((item, idx) => (
                    <div key={idx} className="flex gap-4 group">
                        <div className="relative flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon size={18} />
                            </div>
                            {idx !== activities.length - 1 && (
                                <div className="w-px h-full bg-slate-100 mt-2" />
                            )}
                        </div>
                        <div className="flex-grow pt-1">
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors">{item.title}</h4>
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item.time}</span>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed font-light">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
