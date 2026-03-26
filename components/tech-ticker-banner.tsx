'use client'

import { Activity, Globe2, TrendingUp, Cpu, ShieldCheck, Users, BarChart2, Wifi } from 'lucide-react'

const tickerItems = [
    { icon: Activity, label: 'System Uptime', value: '99.98%', unit: 'Reliability' },
    { icon: Globe2, label: 'Global Reach', value: '500+', unit: 'Active Clients' },
    { icon: TrendingUp, label: 'Client Growth', value: '3.2x', unit: 'Avg. ROI' },
    { icon: Cpu, label: 'Infrastructure', value: '1,200+', unit: 'Deployments' },
    { icon: ShieldCheck, label: 'Security Grade', value: 'Enterprise', unit: 'ISO Verified' },
    { icon: Users, label: 'Expert Team', value: '150+', unit: 'Consultants' },
    { icon: BarChart2, label: 'Data Volume', value: '4.7PB', unit: 'Processed' },
    { icon: Wifi, label: 'Global Response', value: '<12ms', unit: 'Ultra Speed' },
]

function TickerItem({ item }: { item: typeof tickerItems[0] }) {
    const Icon = item.icon
    return (
        <div className="flex items-center gap-3 px-8 shrink-0 group">
            {/* Separator */}
            <span className="w-px h-6 bg-primary/20 mr-4" />
            <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Icon size={13} className="text-primary" />
            </div>
            <div className="flex flex-col leading-none">
                <span className="text-[9px] font-bold text-white/35 tracking-[0.25em] uppercase mb-0.5">{item.label}</span>
                <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-black text-white tracking-tight">{item.value}</span>
                    <span className="text-[9px] font-bold text-primary tracking-wider uppercase">{item.unit}</span>
                </div>
            </div>
        </div>
    )
}

export function TechTickerBanner() {
    return (
        <div className="relative bg-[#020617] border-y border-primary/20 overflow-hidden py-3">
            {/* Atmospheric glows */}
            <div className="absolute left-0 top-0 w-48 h-full bg-primary/8 blur-2xl pointer-events-none" />
            <div className="absolute right-0 top-0 w-48 h-full bg-primary/8 blur-2xl pointer-events-none" />

            {/* Fade masks */}
            <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

            {/* Left label */}
            <div className="absolute left-0 top-0 h-full z-20 flex items-center pl-4 pr-6 pointer-events-none">
                <div className="flex items-center gap-1.5 bg-primary px-2.5 py-1 rounded-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span className="text-[9px] font-black text-white tracking-[0.3em] uppercase">Live Stats</span>
                </div>
            </div>

            {/* Scrolling content */}
            <div className="flex animate-marquee whitespace-nowrap pl-32" style={{ animationDuration: '30s' }}>
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        {tickerItems.map((item) => (
                            <TickerItem key={`${i}-${item.label}`} item={item} />
                        ))}
                    </div>
                ))}
            </div>

            {/* Top/bottom gradient lines */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </div>
    )
}
