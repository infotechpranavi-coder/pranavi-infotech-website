'use client'

import { ScrollAnimate } from './scroll-animate'
import { Globe2, ShieldCheck, Cpu, Zap } from 'lucide-react'

const milestones = [
    { label: 'Uptime Reliability', value: '99.99%', icon: ShieldCheck },
    { label: 'Global Data Centers', value: '15+', icon: Globe2 },
    { label: 'Cloud Transactions', value: '1.2M/s', icon: Zap },
    { label: 'Managed Assets', value: '$2.5B+', icon: Cpu },
]

export function GlobalImpact() {
    return (
        <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
            {/* VIBRANT ATMOSPHERIC BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Multi-gradient Mesh */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent-purple/40 to-primary animate-pulse-subtle opacity-90" />

                {/* Glowing Peripheral Blobs */}
                <div className="absolute -top-1/2 -left-1/4 w-full h-[150%] bg-white/5 rounded-full blur-[120px] animate-blob" />
                <div className="absolute -bottom-1/2 -right-1/4 w-full h-[150%] bg-accent-purple/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />

                {/* Precision Grid */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 8%)', backgroundSize: '15px 15px' }} />

                {/* Sweeping Scan Line Overlay */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute w-full h-px bg-white/40 top-0 left-0 animate-scanVertical" style={{ animationDuration: '6s' }} />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 items-center">
                    {milestones.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <ScrollAnimate key={stat.label} delay={index * 100} direction="up">
                                <div className="text-baseline group relative">
                                    {/* Technical Coordinate Notation */}
                                    <div className="absolute -top-8 left-0 text-[10px] font-mono text-white/30 animate-tech-notate flex items-center gap-2" style={{ animationDelay: `${index * 0.2 + 0.5}s` }}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-white opacity-50 group-hover:bg-accent-purple group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                                        [NODE_OP.{index + 1}]
                                    </div>

                                    <div className="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500">
                                        <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                                            <Icon size={20} />
                                        </div>
                                        <span className="text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase">{stat.label}</span>
                                    </div>
                                    <div className="text-6xl md:text-7xl font-black tracking-tighter mb-4 tabular-nums group-hover:scale-110 origin-left transition-transform duration-700 overflow-hidden">
                                        <span className="block animate-maskReveal" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>{stat.value}</span>
                                    </div>

                                    {/* Animated Progress Line with Pulse */}
                                    <div className="relative h-1 w-12 overflow-hidden rounded-full bg-white/10 mt-6 group-hover:w-full transition-all duration-700">
                                        <div className="absolute inset-0 bg-white/60 animate-scan" style={{ animationDuration: '2s' }} />
                                    </div>

                                    {/* Sub-label for telemetry impact */}
                                    <div className="mt-4 text-[8px] font-mono text-white/20 group-hover:text-white/40 transition-colors uppercase tracking-widest leading-none">
                                        Telemetry_Active // Real-Time
                                    </div>
                                </div>
                            </ScrollAnimate>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
