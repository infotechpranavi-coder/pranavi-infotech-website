'use client'

import Link from 'next/link'
import { ArrowRight, Terminal, Cpu, Shield } from 'lucide-react'

const chips = [
    { icon: Cpu, label: 'AI-Powered' },
    { icon: Shield, label: 'Enterprise Grade' },
    { icon: Terminal, label: 'Full-Stack' },
]

export function TechSectionBanner() {
    return (
        <div className="relative overflow-hidden bg-[#020617] py-16 md:py-20">
            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Diagonal navy gradient blocks */}
            <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[100px] pointer-events-none animate-lightLeak" />
            <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[80px] pointer-events-none animate-flare" />

            {/* Horizontal scan lines */}
            <div className="absolute top-0 w-full h-px bg-primary/30 animate-scan pointer-events-none" style={{ animationDuration: '7s', top: '30%' }} />
            <div className="absolute top-0 w-full h-px bg-primary/20 animate-scan pointer-events-none" style={{ animationDuration: '9s', top: '70%', animationDelay: '3s' }} />

            {/* Vertical accent lines */}
            <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />
            <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Chip row */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                    {chips.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-bold tracking-widest uppercase backdrop-blur-sm"
                        >
                            <Icon size={11} />
                            {label}
                        </div>
                    ))}
                </div>

                {/* Heading */}
                <div className="overflow-hidden mb-4">
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] animate-maskReveal">
                        Precision Technology.
                    </h2>
                </div>
                <div className="overflow-hidden mb-8">
                    <h2
                        className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] animate-maskReveal text-primary italic"
                        style={{ animationDelay: '0.15s' }}
                    >
                        Measurable Impact.
                    </h2>
                </div>

                <p className="text-base text-white/50 max-w-xl mx-auto mb-10 leading-relaxed animate-revealText" style={{ animationDelay: '0.4s' }}>
                    From concept to deployment — we engineer digital solutions that scale with your ambition and
                    deliver results that matter.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-revealText" style={{ animationDelay: '0.6s' }}>
                    <Link href="/contact">
                        <button className="btn-diagnostic-primary group flex items-center gap-3 px-10 py-4 rounded-sm text-sm">
                            <span className="relative z-10">Start Your Project</span>
                            <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
                        </button>
                    </Link>
                    <Link href="/services">
                        <button className="btn-diagnostic-secondary group flex items-center gap-3 px-10 py-4 rounded-sm text-sm text-white border-white/20">
                            <span className="relative z-10">Explore Services</span>
                        </button>
                    </Link>
                </div>

                {/* Bottom counter row */}
                <div className="flex items-center justify-center gap-8 mt-14 pt-10 border-t border-white/10">
                    {[
                        { value: '500+', label: 'Clients' },
                        { value: '15yr', label: 'Experience' },
                        { value: '98%', label: 'Retention' },
                        { value: '4.9★', label: 'Rating' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-white tracking-tighter">{stat.value}</div>
                            <div className="text-[10px] font-bold text-primary uppercase tracking-[0.25em] mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom border glow */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
    )
}
