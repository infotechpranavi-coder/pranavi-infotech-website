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
        'relative mt-10 overflow-hidden rounded-3xl border border-white/70',
        'bg-white/60 shadow-[0_8px_44px_-24px_rgba(15,23,42,0.18)] backdrop-blur-2xl',
        'ring-1 ring-slate-200/50',
      )}
    >
      <div
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-blue-400/[0.14] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-violet-400/[0.12] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/90 to-transparent"
        aria-hidden
      />

      <div className="relative flex flex-col lg:flex-row">
        {homeIndustries.map((item, i) => {
          const Icon = iconMap[item.icon]
          const delay = reduceMotion ? 0 : 70 + i * 115

          return (
            <div
              key={item.title}
              className={cn(
                'group/ind relative lg:min-w-0 lg:flex-1',
                i > 0 && 'border-t border-slate-200/70 lg:border-l lg:border-t-0',
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

              {/* Shine sweep */}
              <div
                className="pointer-events-none absolute inset-0 translate-x-[-120%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 group-hover/ind:translate-x-[120%] group-hover/ind:opacity-100 motion-reduce:hidden"
                aria-hidden
              />

              <div
                className={cn(
                  'relative flex flex-col items-center px-6 py-10 text-center sm:px-8 sm:py-11 lg:px-6 lg:py-12 xl:px-8',
                  'transition-transform duration-500 ease-out-smooth will-change-transform',
                  'lg:group-hover/ind:-translate-y-2 motion-reduce:lg:group-hover/ind:translate-y-0',
                )}
              >
                <div
                  className={cn(
                    'relative mb-5 flex h-[3.65rem] w-[3.65rem] items-center justify-center rounded-full sm:h-16 sm:w-16',
                    'transition-all duration-500 ease-out-smooth',
                    'lg:group-hover/ind:scale-[1.12] lg:group-hover/ind:-rotate-6 lg:group-hover/ind:shadow-2xl',
                    'motion-reduce:lg:group-hover/ind:scale-100 motion-reduce:lg:group-hover/ind:rotate-0',
                    item.iconClass,
                  )}
                  aria-hidden
                >
                  <Icon className="relative z-[1] h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2} />
                </div>

                <h3 className="font-outfit text-base font-bold tracking-tight text-slate-900 sm:text-[17px]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-slate-600 lg:max-w-none">
                  {item.description}
                </p>
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
