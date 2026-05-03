'use client'

import {
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { homeIndustries, type HomeIndustryIcon } from '@/lib/data/home-industries'
import { cn } from '@/lib/utils'

const iconMap: Record<HomeIndustryIcon, LucideIcon> = {
  landmark: Landmark,
  'heart-pulse': HeartPulse,
  'shopping-cart': ShoppingCart,
  building: Building2,
  factory: Factory,
}

export function HomeIndustriesRow() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduceMotion(mq.matches)
    if (mq.matches) {
      setRevealed(true)
      return
    }

    const el = wrapRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          io.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={wrapRef}
      className={cn(
        'relative mt-10 overflow-hidden rounded-[2rem] border border-slate-200/80',
        'bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.98))]',
        'shadow-[0_30px_90px_-50px_rgba(15,23,42,0.28)]',
      )}
    >
      <div
        className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-cyan-400/[0.14] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-violet-400/[0.12] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[90%] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(148 163 184 / 0.10) 1px, transparent 1px), linear-gradient(to bottom, rgb(148 163 184 / 0.10) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative border-b border-slate-200/80 px-6 py-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.26em] text-primary">
              Sector expertise
            </p>
            <h3 className="mt-3 font-outfit text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
              Solutions shaped around how each industry actually operates.
            </h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Clear, focused systems tailored to each business environment.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
              <p className="font-outfit text-xl font-semibold tracking-tight text-slate-950">5 core sectors</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">Enterprise-ready delivery</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">
        {homeIndustries.map((item, i) => {
          const Icon = iconMap[item.icon]
          const delay = reduceMotion ? 0 : 70 + i * 115

          return (
            <div
              key={item.title}
              className={cn(
                'group/ind relative min-w-0',
                i > 0 && 'border-t border-slate-200/80 md:border-l md:border-t-0 xl:border-l',
                i === 2 && 'md:border-l-0 xl:border-l',
                i === 4 && 'md:col-span-2 xl:col-span-1',
                !reduceMotion &&
                  'transition-[opacity,transform] duration-[680ms] ease-out-smooth motion-reduce:transition-none',
                revealed ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-[0.96]',
              )}
              style={
                reduceMotion
                  ? undefined
                  : { transitionDelay: revealed ? `${delay}ms` : '0ms' }
              }
            >
              <div
                className={cn(
                  'pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/ind:opacity-100',
                  item.hoverWash,
                )}
                aria-hidden
              />

              <div
                className="pointer-events-none absolute inset-0 translate-x-[-120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover/ind:translate-x-[120%] group-hover/ind:opacity-100 motion-reduce:hidden"
                aria-hidden
              />

              <div
                className={cn(
                  'relative flex h-full flex-col px-6 py-7 sm:px-8 sm:py-8',
                  'transition-transform duration-500 ease-out-smooth will-change-transform',
                  'lg:group-hover/ind:-translate-y-2 motion-reduce:lg:group-hover/ind:translate-y-0',
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={cn(
                      'relative flex h-[3.65rem] w-[3.65rem] items-center justify-center rounded-2xl sm:h-16 sm:w-16',
                      'transition-all duration-500 ease-out-smooth',
                      'lg:group-hover/ind:scale-[1.08] lg:group-hover/ind:-rotate-3 lg:group-hover/ind:shadow-2xl',
                      'motion-reduce:lg:group-hover/ind:scale-100 motion-reduce:lg:group-hover/ind:rotate-0',
                      item.iconClass,
                    )}
                    aria-hidden
                  >
                    <Icon className="relative z-[1] h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
                  </div>

                  <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 font-outfit text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    {item.eyebrow}
                  </span>
                </div>

                <h3 className="mt-6 max-w-[15rem] font-outfit text-xl font-semibold tracking-tight text-slate-950 sm:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center gap-2 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                  Industry-ready
                </div>
              </div>

              <div
                className={cn(
                  'pointer-events-none absolute inset-x-6 -bottom-px h-[3px] rounded-full opacity-0 blur-md transition-all duration-500',
                  'lg:group-hover/ind:opacity-100 lg:group-hover/ind:bottom-2 motion-reduce:hidden',
                  item.glowLine,
                )}
                aria-hidden
              />

              <div
                className={cn(
                  'pointer-events-none absolute inset-x-4 top-3 rounded-2xl opacity-0 transition-opacity duration-500',
                  'border border-white/50 shadow-[0_24px_56px_-30px_rgba(15,23,42,0.22)] lg:group-hover/ind:opacity-100 motion-reduce:hidden',
                )}
                aria-hidden
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
