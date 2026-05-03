'use client'

import { useEffect, useState } from 'react'
import {
  BarChart3,
  Code2,
  Layers,
  Network,
  ShieldCheck,
  Sparkles,
  UserCog,
} from 'lucide-react'
import { ScrollAnimate } from '@/components/scroll-animate'
import {
  homeWhyCards,
  type WhyCardIcon,
} from '@/lib/data/home-why-approach'
import { cn } from '@/lib/utils'

const whyIcons: Record<WhyCardIcon, typeof UserCog> = {
  'user-cog': UserCog,
  code: Code2,
  layers: Layers,
  chart: BarChart3,
  'shield-check': ShieldCheck,
  network: Network,
}

const pillClass =
  'inline-flex items-center gap-2 rounded-full border border-sky-200/80 bg-white/85 px-4 py-2 font-outfit text-[10px] font-bold uppercase tracking-[0.22em] text-sky-700 shadow-[0_8px_24px_-18px_rgba(14,165,233,0.65)] backdrop-blur'

export function HomeWhyApproach() {
  const [activeStep, setActiveStep] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()

    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', update)
      return () => mq.removeEventListener('change', update)
    }

    mq.addListener(update)
    return () => mq.removeListener(update)
  }, [])

  useEffect(() => {
    if (reduceMotion) return

    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % homeWhyCards.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [reduceMotion])

  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_42%,#f8fafc_100%)] py-18 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(148 163 184 / 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.12) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="pointer-events-none absolute -left-16 top-12 h-[360px] w-[360px] rounded-full bg-cyan-400/[0.12] blur-[110px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-20 h-[320px] w-[320px] rounded-full bg-violet-400/[0.10] blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[280px] w-[70%] -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollAnimate className="max-w-2xl">
            <span className={pillClass}>
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
              Functional delivery model
            </span>
            <h2 className="mt-5 font-outfit text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-[3rem] lg:leading-[1.02]">
              A sharper, more live view of how Pranavi works.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Strong execution, visible process, and systems designed to keep moving after launch.
            </p>
          </ScrollAnimate>

          <ScrollAnimate delay={80}>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                ['06', 'Delivery signals'],
                ['24/7', 'Support mindset'],
                ['Live', 'Workflow pulse'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/80 bg-white/80 px-4 py-3 text-center shadow-[0_18px_50px_-34px_rgba(15,23,42,0.22)] backdrop-blur"
                >
                  <div className="font-outfit text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                    {value}
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-500 sm:text-[11px]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimate>
        </div>

        <div className="grid gap-8">
          <ScrollAnimate className="min-w-0">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-[0_30px_90px_-46px_rgba(15,23,42,0.28)] backdrop-blur md:p-8">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
              <div className="pointer-events-none absolute right-4 top-4 flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.14)]" />
                Live strengths
              </div>

              <div className="max-w-lg">
                <span className={pillClass}>Why Pranavi Infotech</span>
                <h3 className="mt-5 font-outfit text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                  Practical capabilities with a modern delivery rhythm.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  Every engagement is built to feel organized, responsive, and easy to trust.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {homeWhyCards.map((card, i) => {
                  const Icon = whyIcons[card.icon]
                  const isLive = i === activeStep % homeWhyCards.length

                  return (
                    <article
                      key={card.title}
                      className={cn(
                        'group relative overflow-hidden rounded-[1.5rem] border p-5 transition-all duration-500',
                        'bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))]',
                        isLive
                          ? 'border-sky-200 shadow-[0_24px_60px_-34px_rgba(14,165,233,0.42)] -translate-y-1'
                          : 'border-slate-200/90 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.25)] hover:-translate-y-1 hover:border-sky-200/70',
                      )}
                    >
                      <div
                        className={cn(
                          'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500',
                          isLive && 'opacity-100',
                        )}
                        aria-hidden
                        style={{
                          background:
                            'radial-gradient(circle at top right, rgba(56,189,248,0.14), transparent 40%), radial-gradient(circle at bottom left, rgba(168,85,247,0.10), transparent 42%)',
                        }}
                      />
                      <div className="relative flex items-start gap-4">
                        <div
                          className={cn(
                            'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-[1.06]',
                            card.accent,
                            isLive && 'scale-[1.04]',
                          )}
                          aria-hidden
                        >
                          <Icon className="h-5 w-5" strokeWidth={2.15} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h4 className="font-outfit text-[15px] font-semibold leading-snug text-slate-950">
                              {card.title}
                            </h4>
                            <span className="rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                              0{i + 1}
                            </span>
                          </div>
                          <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  )
}
