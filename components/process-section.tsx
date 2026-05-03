'use client'

import { Search, MapPin, Code2, Rocket, HeadphonesIcon } from 'lucide-react'
import { ScrollAnimate } from './scroll-animate'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery',
    description:
      'Deep-dive into your business goals, challenges, and technical requirements.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Strategy',
    description:
      'A tailored roadmap with milestones, timelines, and resource allocation.',
    color: 'bg-violet-500',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    description:
      'Agile development with iterative sprints, testing, and client feedback loops.',
    color: 'bg-primary',
    lightColor: 'bg-primary/10',
    textColor: 'text-primary',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description:
      'Zero-downtime deployment with thorough QA and seamless go-live execution.',
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    number: '05',
    icon: HeadphonesIcon,
    title: 'Evolve',
    description:
      'Ongoing optimization, monitoring, and feature enhancements for long-term growth.',
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 md:py-36 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[30%] bg-primary/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Container with Decorative Elements */}
        <div className="relative pt-16 mb-24 bg-white rounded-[3rem] p-10 md:p-16 border border-slate-200/50 overflow-hidden group/header shadow-sm">
          {/* Background Watermark */}
          <div className="absolute -top-12 -left-8 text-[15rem] font-black text-slate-900/[0.02] select-none pointer-events-none tracking-tighter leading-none group-hover/header:text-primary/[0.02] transition-colors duration-1000 uppercase">
            Process
          </div>

          {/* Technical Data Stream Line (Top) */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent">
            <div className="absolute top-0 left-0 h-full w-20 bg-primary/40 blur-sm animate-dataStream" />
          </div>

          {/* Technical Metadata */}
          <div className="absolute top-8 right-12 text-[7px] font-mono text-slate-300 flex items-center gap-6 hidden md:flex uppercase tracking-[0.2em]">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
              PROC_STATE: ACTIVE
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-slate-200" />
              LATENCY: 12ms
            </span>
            <span>SYNC_NODE_05</span>
          </div>

          <ScrollAnimate>
            <div className="relative z-10">
              <div className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Execution Framework
                <span className="w-2 h-2 rounded-full bg-primary/20" />
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-[-0.04em] leading-[0.9] mb-8">
                A Systematic <br />
                <span className="text-primary italic">Approach.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl font-light">
                Our battle-tested delivery pipeline ensures absolute precision from
                architectural discovery to global deployment.
              </p>
            </div>
          </ScrollAnimate>
        </div>

        {/* === DESKTOP: Horizontal Timeline Wrapper === */}
        <div className="hidden lg:block relative mb-12">
          {/* Central Connector Line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[5%] right-[5%] h-[3px] bg-slate-200/80 rounded-full z-0">
            <div
              className="h-full bg-gradient-to-r from-blue-400 via-primary to-amber-400 rounded-full origin-left"
              style={{
                animation: 'expandRight 2.5s var(--ease-out-smooth) 0.3s both',
              }}
            />
            {/* Traveling Light */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-16 h-[3px] bg-gradient-to-r from-transparent via-white to-transparent rounded-full"
              style={{
                animation: 'dataPulse 4s linear 2s infinite',
              }}
            />
            {/* Fixed Pulsing Data Nodes */}
            {[0.2, 0.4, 0.6, 0.8].map((pos, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full blur-[2px] opacity-40 animate-pulse"
                style={{ left: `${pos * 100}%`, animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isAbove = index % 2 === 0

              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center relative"
                  style={{
                    animation: `slideUp 0.6s var(--ease-out-smooth) ${index * 0.15 + 0.5}s both`,
                  }}
                >
                  {isAbove ? (
                    <>
                      {/* Card ABOVE */}
                      <div className="group mb-6 w-full">
                        <div className="bg-white rounded-[2rem] p-6 border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 hover:-translate-y-1 relative overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.01)] group-hover:shadow-[inset_0_0_60px_rgba(0,0,0,0.02)]">
                          <div className="absolute top-4 right-4 text-[7px] font-mono text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                            STEP_0{index + 1}
                          </div>
                          <div className={`inline-flex items-center gap-3 ${step.textColor} mb-4`}>
                            <div className={`w-9 h-9 ${step.lightColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                              <Icon size={16} strokeWidth={2.5} />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-[0.2em]">{step.title}</span>
                          </div>
                          <p className="text-xs text-slate-500/80 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                            {step.description}
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-px h-6 bg-slate-200 group-hover:bg-primary/30 transition-colors duration-500" />
                        </div>
                      </div>

                      {/* Node Circle */}
                      <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white text-sm font-black shadow-lg relative group cursor-default`}>
                        <span>{step.number}</span>
                        <div className={`absolute inset-0 rounded-full ${step.color} opacity-20 animate-ping`} style={{ animationDuration: '1.5s', animationDelay: `${index * 0.6}s` }} />
                      </div>

                      <div className="h-[calc(6px+1.5rem+theme(spacing.5)+theme(spacing.3)+theme(spacing.5))]" />
                    </>
                  ) : (
                    <>
                      <div className="h-[calc(theme(spacing.5)+theme(spacing.3)+theme(spacing.5)+1.5rem+6px)]" />

                      {/* Node Circle */}
                      <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white text-sm font-black shadow-lg relative group cursor-default`}>
                        <span>{step.number}</span>
                        <div className={`absolute inset-0 rounded-full ${step.color} opacity-20 animate-ping`} style={{ animationDuration: '1.5s', animationDelay: `${index * 0.6}s` }} />
                      </div>

                      {/* Card BELOW */}
                      <div className="group mt-6 w-full">
                        <div className="flex justify-center">
                          <div className="w-px h-6 bg-slate-200 group-hover:bg-primary/30 transition-colors duration-500" />
                        </div>
                        <div className="bg-white rounded-[2rem] p-6 border border-slate-100 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 hover:translate-y-1 relative overflow-hidden shadow-[inset_0_0_40px_rgba(0,0,0,0.01)] group-hover:shadow-[inset_0_0_60px_rgba(0,0,0,0.02)]">
                          <div className="absolute top-4 right-4 text-[7px] font-mono text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                            STEP_0{index + 1}
                          </div>
                          <div className={`inline-flex items-center gap-3 ${step.textColor} mb-4`}>
                            <div className={`w-9 h-9 ${step.lightColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                              <Icon size={16} strokeWidth={2.5} />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-[0.2em]">{step.title}</span>
                          </div>
                          <p className="text-xs text-slate-500/80 leading-relaxed font-light group-hover:text-slate-700 transition-colors">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* === TABLET/MOBILE: Vertical Layout === */}
        <div className="lg:hidden relative">
          <div className="absolute left-[1.375rem] top-0 bottom-0 w-[2px] bg-slate-200 z-0">
            <div
              className="w-full h-full bg-gradient-to-b from-blue-400 via-primary to-amber-400 rounded-full origin-top"
              style={{
                animation: 'drawVertical 2.5s var(--ease-out-smooth) 0.3s both',
              }}
            />
          </div>

          <div className="space-y-2">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <ScrollAnimate key={step.number} delay={index * 80} direction="up">
                  <div className="flex items-start gap-5 group relative z-10 py-5">
                    <div className={`w-[2.75rem] h-[2.75rem] rounded-full ${step.color} flex items-center justify-center text-white text-xs font-black shrink-0 shadow-md relative`}>
                      <span>{step.number}</span>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary/20 hover:shadow-xl transition-all duration-500 flex-1 shadow-[inset_0_0_30px_rgba(0,0,0,0.01)]">
                      <div className={`inline-flex items-center gap-3 ${step.textColor} mb-3`}>
                        <Icon size={16} strokeWidth={2.5} />
                        <span className="text-[11px] font-black uppercase tracking-[0.15em]">{step.title}</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimate>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
