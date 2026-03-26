'use client'

import { Globe, Shield, Zap, Target, Award, BarChart3 } from 'lucide-react'

const partners = [
    { name: 'GlobalCloud', icon: Globe },
    { name: 'SecuredSystems', icon: Shield },
    { name: 'LogicFlow', icon: Zap },
    { name: 'AeroTech', icon: Target },
    { name: 'PrimeAnalytics', icon: BarChart3 },
    { name: 'NovaConsulting', icon: Award },
]

export function LogoCloud() {
    return (
        <section className="py-16 bg-white border-y border-border/40 overflow-hidden relative holographic-noise">
            {/* ATMOSPHERIC GLOW */}
            <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.05),transparent_70%)] pointer-events-none" />

            <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
            <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex gap-20 items-center px-10 animate-dataStream">
                        {partners.map((partner) => {
                            const Icon = partner.icon
                            return (
                                <div
                                    key={partner.name}
                                    className="flex items-center gap-3 text-muted-foreground/40 hover:text-primary transition-all duration-700 cursor-default group"
                                >
                                    <Icon size={24} className="group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" />
                                    <span className="text-sm font-bold tracking-widest uppercase group-hover:tracking-[0.4em] transition-all duration-700">{partner.name}</span>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </section>
    )
}
