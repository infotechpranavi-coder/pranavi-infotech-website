'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* MINIMAL ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft Mesh Gradient Base */}
        <div className="absolute top-0 left-1/4 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-pulse-subtle" />
        <div className="absolute bottom-0 right-1/4 w-[40%] h-[40%] bg-accent-purple/5 rounded-full blur-[140px] animate-pulse-subtle" style={{ animationDelay: '2s' }} />

        {/* Subtle Paper Texture/Noise (Global Feel) */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* REFINED FLOATING BANNER */}
        <div className="flex justify-center mb-16 animate-fadeIn">
          <Link
            href="/our-work"
            className="group inline-flex items-center gap-4 px-1 py-1 pr-6 rounded-full bg-slate-50 border border-slate-100/60 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 active:scale-95"
          >
            <span className="bg-primary/5 text-primary text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-primary/10">
              Protocol // 04
            </span>
            <span className="text-[12px] font-medium text-slate-500 tracking-tight group-hover:text-primary transition-colors">
              Elevating Digital Experiences with AI Excellence
            </span>
            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <ArrowRight size={12} />
            </div>
          </Link>
        </div>

        <div className="mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-[0.95] mb-10 animate-slideUp font-outfit">
            Innovation <span className="text-slate-400 font-light">meets</span> <br />
            <span className="text-primary italic">Precision.</span> <br />
            Future <span className="text-slate-400 font-light">is</span> Engineered.
          </h1>

          <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-light animate-revealText tracking-tight" style={{ animationDelay: '0.4s' }}>
            Transforming complex operational challenges into high-performance digital infrastructure with surgical engineering and visionary design.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-revealText" style={{ animationDelay: '0.6s' }}>
          <Link href="/contact" className="px-8 py-4 bg-primary text-white text-sm font-bold rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-[0_15px_30px_rgba(var(--primary-rgb),0.2)] active:scale-95 flex items-center gap-3">
            Initiate Project
            <ArrowRight size={18} />
          </Link>
          <Link href="/services" className="px-8 py-4 bg-white text-slate-600 border border-slate-100 text-sm font-bold rounded-xl transition-all duration-500 hover:bg-slate-50 hover:border-slate-200 active:scale-95">
            Technical Stack
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
