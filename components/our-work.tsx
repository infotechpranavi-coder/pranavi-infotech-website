'use client'

import { ArrowRight, Code2, ShieldCheck, Database, Globe, Cpu, Activity, Laptop, Brain, Smartphone } from 'lucide-react'
import { ScrollAnimate } from './scroll-animate'
import { SpotlightCard } from './ui/spotlight-card'
import Link from 'next/link'
import { Project } from '@/lib/projects'

const iconMap: { [key: string]: any } = {
    Globe,
    Cpu,
    Database,
    Activity,
    Code2,
    ShieldCheck,
    Laptop,
    Brain,
    Smartphone
}

export function OurWork({ projects }: { projects: Project[] }) {
    return (
        <section id="work" className="py-24 md:py-40 bg-white relative overflow-hidden holographic-noise">
            {/* VIBRANT ATMOSPHERIC BACKGROUND */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(var(--primary-rgb),0.08),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(var(--accent-purple-rgb),0.05),transparent_50%)] animate-pulse-subtle" />
                <div className="absolute top-1/2 -right-1/4 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-blob" />

                {/* Global Scanline overlay for this section */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '100% 4px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-24 text-center lg:text-left">
                    <ScrollAnimate direction="up">
                        <div className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-8 flex items-center justify-center lg:justify-start gap-4">
                            <span className="w-16 h-px bg-primary animate-expandRight" />
                            <span className="animate-tech-notate">Proven_Excellence // PRTF.v2</span>
                        </div>
                        <div className="overflow-hidden mb-6">
                            <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] animate-maskReveal font-outfit">
                                Our <span className="text-primary italic animate-surface">Mastery.</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 max-w-2xl mx-auto lg:mx-0 text-xl font-light leading-relaxed mb-8 animate-revealText" style={{ animationDelay: '0.6s' }}>
                            Architecture of the next generation of digital infrastructure. Clinical engineering meets strategic vision. Explore our record of solving complex global challenges with absolute precision.
                        </p>
                    </ScrollAnimate>
                </div>

                {/* Content removed as requested */}
            </div>
        </section>
    )
}
