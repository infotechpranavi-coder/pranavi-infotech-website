'use client'

import {
  Boxes,
  Building2,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { homeIndustries, type HomeIndustryIcon } from '@/lib/data/home-industries'
import { cn } from '@/lib/utils'

const iconMap: Record<HomeIndustryIcon, LucideIcon> = {
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  'shopping-bag': ShoppingBag,
  building: Building2,
  boxes: Boxes,
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
        'relative mt-10 overflow-hidden rounded-[2.5rem] border border-slate-200/80',
        'bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(247,250,252,0.98))]',
        'shadow-[0_40px_120px_-60px_rgba(15,23,42,0.24)]',
      )}
    >
      <div
        className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-sky-300/[0.18] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-indigo-300/[0.14] blur-3xl"
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

      <div className="relative border-b border-slate-200/80 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.28em] text-sky-600">
              Sector expertise
            </p>
            <h3 className="mt-3 max-w-3xl font-outfit text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Industry solutions your clients can understand in seconds.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Each solution area is presented with clear language, bold visual cues, and business-focused context.
            </p>
          </div>

          <div className="grid max-w-md grid-cols-2 gap-3">
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-white px-4 py-4 shadow-[0_20px_45px_-32px_rgba(15,23,42,0.35)]">
              <p className="font-outfit text-2xl font-semibold tracking-tight text-slate-950">5</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Core sectors</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200/80 bg-slate-950 px-4 py-4 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.6)]">
              <p className="font-outfit text-2xl font-semibold tracking-tight text-white">B2B</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">Client-first clarity</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-px bg-slate-200/80 md:grid-cols-2 xl:grid-cols-5">
        {homeIndustries.map((item, i) => {
          const Icon = iconMap[item.icon]
          const delay = reduceMotion ? 0 : 70 + i * 115

          return (
            <div
              key={item.title}
              className={cn(
                'group/ind relative min-w-0 bg-white',
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
                  'pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-500 group-hover/ind:opacity-100',
                  item.hoverWash,
                )}
                aria-hidden
              />

              <div
                className="pointer-events-none absolute inset-0 translate-x-[-120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 group-hover/ind:translate-x-[120%] group-hover/ind:opacity-100 motion-reduce:hidden"
                aria-hidden
              />

              <div
                className={cn(
                  'relative flex h-full flex-col px-6 py-7 sm:px-8 sm:py-8',
                  'transition-transform duration-500 ease-out-smooth will-change-transform',
                  'lg:group-hover/ind:-translate-y-1.5 motion-reduce:lg:group-hover/ind:translate-y-0',
                )}
              >
                <div className="relative mb-7 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.94))] p-5 shadow-[0_24px_50px_-38px_rgba(15,23,42,0.34)]">
                  <div
                    className={cn(
                      'pointer-events-none absolute inset-0 opacity-100',
                      item.hoverWash,
                    )}
                    aria-hidden
                  />
                  <div
                    className={cn(
                      'pointer-events-none absolute inset-x-0 top-0 h-1.5',
                      item.glowLine,
                    )}
                    aria-hidden
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className={cn(
                        'relative flex h-[5.9rem] w-[5.9rem] items-center justify-center rounded-[1.9rem] border sm:h-[6.2rem] sm:w-[6.2rem]',
                        'before:absolute before:inset-[6px] before:rounded-[1.45rem] before:border before:border-white/40 before:bg-white/12 before:content-[\'\']',
                        'transition-all duration-500 ease-out-smooth',
                        'ring-1 ring-white/70 saturate-[1.25] lg:group-hover/ind:scale-[1.08] lg:group-hover/ind:-rotate-3 lg:group-hover/ind:shadow-2xl',
                        'motion-reduce:lg:group-hover/ind:scale-100 motion-reduce:lg:group-hover/ind:rotate-0',
                        item.iconShellClass,
                      )}
                      aria-hidden
                    >
                      <div
                        className={cn(
                          'pointer-events-none absolute inset-[-18px] -z-[1] rounded-[2.3rem] bg-gradient-to-br blur-2xl',
                          'opacity-100 transition-all duration-500 lg:group-hover/ind:scale-110',
                          'motion-reduce:lg:group-hover/ind:scale-100',
                          item.iconGlowClass,
                        )}
                      />
                      <div
                        className={cn(
                          'pointer-events-none absolute right-1 top-1 h-3 w-3 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.72)]',
                          item.iconAccentClass,
                        )}
                      />
                      <div
                        className={cn(
                          'pointer-events-none absolute left-1.5 bottom-2 h-2 w-2 rounded-full opacity-90',
                          item.iconAccentClass,
                        )}
                      />
                      <div
                        className={cn(
                          'relative z-[1] flex h-[3.85rem] w-[3.85rem] items-center justify-center rounded-[1.2rem] sm:h-[4.05rem] sm:w-[4.05rem]',
                          item.iconPlateClass,
                        )}
                      >
                        <Icon className={cn('h-[2.05rem] w-[2.05rem] sm:h-[2.2rem] sm:w-[2.2rem]', item.iconColorClass)} strokeWidth={2.55} />
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="rounded-full border border-slate-200/90 bg-white/90 px-3 py-1.5 shadow-sm">
                        <span className="font-outfit text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                          0{i + 1}
                        </span>
                      </div>
                      <p className="mt-4 font-outfit text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Sector
                      </p>
                      <div className="mt-2 flex items-center justify-end gap-2">
                        <span className={cn('h-2 w-2 rounded-full shadow-[0_0_14px_rgba(15,23,42,0.12)]', item.markerClass)} />
                        <span className="font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-700">
                          Ready
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="max-w-[15rem] font-outfit text-xl font-semibold tracking-tight text-slate-950 sm:text-[22px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[18rem] text-[15px] leading-8 text-slate-600">
                  {item.description}
                </p>
                <p className="mt-4 max-w-[18rem] text-[13px] leading-6 text-slate-500">
                  Best for {item.audience.toLowerCase()}.
                </p>
                <div className="mt-7 flex items-center gap-3">
                  <span className={cn('h-2 w-2 rounded-full shadow-[0_0_14px_rgba(15,23,42,0.12)]', item.markerClass)} />
                  <span className="font-outfit text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700">
                    Industry-ready
                  </span>
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
