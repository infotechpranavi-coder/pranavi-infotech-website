'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { ScrollAnimate } from './scroll-animate'

export function CTASection() {
  return (
    <section className="py-32 md:py-56 bg-white relative overflow-hidden">
      {/* VIBRANT ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.15),transparent_50%),radial-gradient(circle_at_0%_100%,rgba(var(--accent-purple-rgb),0.1),transparent_50%),radial-gradient(circle_at_100%_0%,rgba(var(--accent-emerald-rgb),0.05),transparent_50%)] animate-pulse-subtle opacity-60" />

        {/* Glowing Atmospheric Surge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] animate-blob" style={{ animationDuration: '10s' }} />

        {/* Precision Grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        {/* Rapid Kinetic Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-accent-purple rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <ScrollAnimate>
          <div className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-8 flex items-center justify-center gap-6 group">
            <span className="w-16 h-px bg-primary group-hover:w-32 transition-all duration-1000 origin-right" />
            <span className="animate-tech-notate">Final_Node.Connect</span>
            <span className="w-16 h-px bg-primary group-hover:w-32 transition-all duration-1000 origin-left" />
          </div>
          <div className="overflow-hidden mb-10">
            <h2 className="text-6xl md:text-9xl font-black text-foreground tracking-tighter leading-[0.8] animate-maskReveal">
              Ready to <br />
              <span className="text-primary italic animate-surface block">Converge?</span>
            </h2>
          </div>
        </ScrollAnimate>

        <ScrollAnimate delay={100}>
          <p className="text-xl md:text-2xl text-slate-500/80 mb-16 leading-relaxed max-w-2xl mx-auto animate-revealText" style={{ animationDelay: '0.2s' }}>
            Initiate a strategic partnership today. Let's build the future of your enterprise architecture together.
          </p>
        </ScrollAnimate>

        <ScrollAnimate delay={200}>
          <div className="flex flex-col sm:flex-row gap-8 justify-center animate-revealText" style={{ animationDelay: '0.4s' }}>
            <Link href="/contact">
              <button className="btn-diagnostic-primary group px-16 py-6 shadow-2xl shadow-primary/40 hover:scale-105 transition-all duration-500 rounded-[2rem]">
                <span className="relative z-10 flex items-center gap-4 text-base tracking-widest uppercase">
                  Schedule a Call
                  <ArrowRight className="group-hover:translate-x-3 transition-transform duration-500 ease-out" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </Link>
            <Link href="/about">
              <button className="btn-diagnostic-secondary group px-16 py-6 rounded-[2rem]">
                <span className="relative z-10 text-base tracking-widest uppercase">The Vision</span>
              </button>
            </Link>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  )
}
