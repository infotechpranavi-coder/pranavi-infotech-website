'use client'

import { BarChart3, Heart, ShoppingCart, Factory, GraduationCap, TrendingUp, ArrowRight } from 'lucide-react'
import { ScrollAnimate } from './scroll-animate'
import Link from 'next/link'

const industries = [
    {
        icon: BarChart3,
        name: 'Financial Services',
        tagline: 'Secure & Scalable Banking Solutions',
        description: 'We build secure digital banking platforms, payment gateways, and financial analytics dashboards that help banks and fintech companies serve millions of customers with confidence.',
        stats: '500M+ transactions processed',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        gradient: 'from-blue-500/20 to-indigo-500/20',
        accent: 'text-blue-600',
        accentBg: 'bg-blue-50',
    },
    {
        icon: Heart,
        name: 'Healthcare',
        tagline: 'Patient-First Digital Health',
        description: 'From telemedicine platforms to electronic health records, we create HIPAA-compliant solutions that improve patient outcomes and streamline clinical workflows.',
        stats: '50+ hospitals digitized',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
        gradient: 'from-teal-500/20 to-cyan-500/20',
        accent: 'text-teal-600',
        accentBg: 'bg-teal-50',
    },
    {
        icon: ShoppingCart,
        name: 'Retail & E-Commerce',
        tagline: 'Omnichannel Commerce Engines',
        description: 'We design and develop high-performance e-commerce platforms, inventory management systems, and customer loyalty programs that drive revenue and customer retention.',
        stats: '200% avg. growth for clients',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
        gradient: 'from-orange-500/20 to-rose-500/20',
        accent: 'text-orange-600',
        accentBg: 'bg-orange-50',
    },
    {
        icon: Factory,
        name: 'Manufacturing',
        tagline: 'Industry 4.0 Automation',
        description: 'Our smart factory solutions integrate IoT sensors, predictive maintenance, and real-time production dashboards to optimize your manufacturing operations end-to-end.',
        stats: '40% efficiency improvement',
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=800',
        gradient: 'from-slate-500/20 to-zinc-500/20',
        accent: 'text-slate-600',
        accentBg: 'bg-slate-100',
    },
    {
        icon: GraduationCap,
        name: 'Education',
        tagline: 'Next-Gen Learning Platforms',
        description: 'We build interactive learning management systems, virtual classrooms, and student analytics platforms that help educational institutions deliver world-class experiences.',
        stats: '1M+ students empowered',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
        gradient: 'from-emerald-500/20 to-green-500/20',
        accent: 'text-emerald-600',
        accentBg: 'bg-emerald-50',
    },
    {
        icon: TrendingUp,
        name: 'Telecommunications',
        tagline: 'Connected Network Solutions',
        description: 'From network management to billing infrastructure, we help telecom companies modernize their tech stack and deliver seamless connectivity experiences to their customers.',
        stats: '99.99% uptime achieved',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800',
        gradient: 'from-violet-500/20 to-purple-500/20',
        accent: 'text-violet-600',
        accentBg: 'bg-violet-50',
    },
]

export function IndustrySectors() {
    return (
        <section className="py-24 md:py-36 bg-white relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-primary/[0.02] rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-violet-500/[0.02] rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Container with Decorative Elements */}
                <div className="relative pt-16 mb-20 bg-slate-50/50 rounded-[3rem] p-10 md:p-16 border border-slate-100/50 overflow-hidden group/header">
                    {/* Background Watermark */}
                    <div className="absolute -top-16 -left-4 text-[12rem] font-black text-slate-950/[0.03] select-none pointer-events-none tracking-tighter leading-none group-hover/header:text-primary/[0.03] transition-colors duration-1000">
                        SECTORS
                    </div>

                    {/* Technical Data Stream Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent">
                        <div className="absolute top-0 left-0 h-full w-20 bg-primary/40 blur-sm animate-dataStream" />
                    </div>

                    {/* Tiny Technical Meta Data */}
                    <div className="absolute top-8 right-12 text-[7px] font-mono text-slate-300 flex items-center gap-4 hidden md:flex">
                        <span className="flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                            SECTOR_MAPPING: ACTIVE
                        </span>
                        <span className="w-8 h-px bg-slate-100" />
                        <span>DOMAIN_EXP: 100%</span>
                    </div>

                    <ScrollAnimate>
                        <div className="max-w-2xl relative z-10">
                            <div className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 flex items-center gap-3">
                                <span className="w-8 h-px bg-primary" />
                                Industry Verticals
                                <span className="w-2 h-2 rounded-full bg-primary/20" />
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-[0.9] mb-8">
                                Industries We <br />
                                <span className="text-primary italic">Empower.</span>
                            </h2>
                            <p className="text-lg text-slate-500 leading-relaxed max-w-xl font-light">
                                We deploy high-fidelity technical solutions across mission-critical sectors,
                                transforming complex legacy challenges into scalable digital advantages.
                            </p>
                        </div>
                    </ScrollAnimate>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((sector, index) => {
                        const Icon = sector.icon
                        return (
                            <ScrollAnimate key={sector.name} delay={index * 80} direction="up">
                                <div className="group rounded-2xl overflow-hidden bg-white border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-100 transition-all duration-700 h-full flex flex-col">
                                    {/* Image Area */}
                                    <div className="relative h-52 overflow-hidden">
                                        <img
                                            src={sector.image}
                                            alt={sector.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${sector.gradient} opacity-40`} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

                                        {/* Icon Badge */}
                                        <div className={`absolute top-4 left-4 w-10 h-10 ${sector.accentBg} backdrop-blur-sm rounded-xl flex items-center justify-center ${sector.accent} shadow-lg`}>
                                            <Icon size={18} strokeWidth={2.5} />
                                        </div>

                                        {/* Stats Pill */}
                                        <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold text-slate-600 tracking-tight shadow-sm">
                                            {sector.stats}
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <p className={`text-[10px] font-bold uppercase tracking-[0.15em] ${sector.accent} mb-2`}>
                                            {sector.tagline}
                                        </p>
                                        <h3 className="text-xl font-black text-slate-900 tracking-tight mb-3 group-hover:text-primary transition-colors duration-500">
                                            {sector.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-1">
                                            {sector.description}
                                        </p>
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-primary hover:gap-4 transition-all duration-500 group/link"
                                        >
                                            Learn More
                                            <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
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
