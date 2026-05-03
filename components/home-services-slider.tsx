'use client'

import Link from 'next/link'
import {
  ArrowUpRight,
  Brain,
  Building2,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code2,
  Shield,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { HomeServiceCard } from '@/lib/data/home-services'

type Props = {
  services: HomeServiceCard[]
}

const iconMap: Record<string, LucideIcon> = {
  'Application Development': Code2,
  'Cloud and Infrastructure': Cloud,
  'Data and AI Solutions': Brain,
  'Enterprise Systems': Building2,
  'DevOps and Automation': Wrench,
  'Cybersecurity and Compliance': Shield,
  'IT Consulting and Digital Transformation': Sparkles,
}

const accentMap: Record<string, string> = {
  'Application Development': 'from-cyan-400 via-sky-500 to-blue-600',
  'Cloud and Infrastructure': 'from-indigo-400 via-blue-500 to-cyan-400',
  'Data and AI Solutions': 'from-fuchsia-400 via-violet-500 to-indigo-500',
  'Enterprise Systems': 'from-amber-300 via-orange-400 to-rose-500',
  'DevOps and Automation': 'from-emerald-300 via-teal-400 to-cyan-500',
  'Cybersecurity and Compliance': 'from-lime-300 via-emerald-400 to-green-500',
  'IT Consulting and Digital Transformation': 'from-pink-400 via-rose-500 to-orange-400',
}

export function HomeServicesSlider({ services }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      breakpoints: {
        '(min-width: 640px)': { align: 'center' },
      },
      loop: true,
      skipSnaps: false,
      dragFree: false,
      duration: 36,
    },
    [
      AutoScroll({
        speed: 0.72,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onReinit = useCallback(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onReinit()
    emblaApi.on('select', onReinit)
    emblaApi.on('reInit', onReinit)
    return () => {
      emblaApi.off('select', onReinit)
      emblaApi.off('reInit', onReinit)
    }
  }, [emblaApi, onReinit])

  return (
    <div className="relative">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3 py-1.5 font-outfit text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Hot right now
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            Swipe through bold service drops built for brands, platforms, systems, and scale.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full border-slate-200/80 bg-white/85 text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900"
            onClick={scrollPrev}
            aria-label="Previous services"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full border-slate-200/80 bg-white/85 text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-900"
            onClick={scrollNext}
            aria-label="Next services"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          </div>
        </div>

      <div className="overflow-hidden py-1 sm:px-2 lg:px-0" ref={emblaRef}>
        <div className="flex items-stretch touch-pan-y gap-3 cursor-grab active:cursor-grabbing md:gap-4 [-webkit-tap-highlight-color:transparent]">
          {services.map((item, index) => {
            const isActive = selectedIndex === index
            const Icon = iconMap[item.title] ?? Sparkles
            const accent = accentMap[item.title] ?? 'from-cyan-400 via-blue-500 to-violet-500'

            return (
              <div
                key={item.title}
                className={cn(
                  'flex min-w-0 flex-[0_0_100%] transition-[transform,opacity,filter] duration-700 ease-out-smooth sm:flex-[0_0_58%] lg:flex-[0_0_42%]',
                  isActive ? 'scale-100 opacity-100 blur-0' : 'scale-[0.975] opacity-[0.62] blur-[0.4px]',
                )}
              >
                <div className="relative flex w-full overflow-hidden rounded-[1.75rem] shadow-[0_20px_50px_-30px_rgba(15,23,42,0.35)]">
                  <div className={cn('absolute inset-0 bg-gradient-to-br opacity-95', accent)} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.14),transparent_30%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.04),rgba(15,23,42,0.24))]" />

                  <div className="relative grid h-full min-h-[260px] w-full gap-0 lg:min-h-[300px] lg:grid-cols-[0.92fr_1.08fr]">
                    <div className="relative flex flex-col justify-between p-4 text-white sm:p-4.5 lg:p-5">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 font-outfit text-[9px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                            <Icon className="h-3 w-3" strokeWidth={2} />
                            Service drop
                          </div>
                          <div className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-outfit text-[9px] font-semibold uppercase tracking-[0.18em] text-white/80 backdrop-blur">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>

                        <h3 className="mt-4 max-w-sm font-outfit text-[1.45rem] font-semibold leading-[0.96] tracking-tight sm:text-[1.8rem] lg:text-[2.05rem]">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 max-w-sm text-[13px] leading-relaxed text-white/82 sm:text-[13px]">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center gap-2.5">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 font-outfit text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-all hover:-translate-y-0.5 hover:bg-black"
                        >
                          Explore more
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                        </Link>
                        <div className="rounded-full border border-white/20 bg-white/10 px-3 py-2 font-outfit text-[9px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur">
                          Business-ready
                        </div>
                      </div>
                    </div>

                    <div className="relative min-h-[180px] overflow-hidden lg:min-h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-slate-950/8 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-slate-950/20" />
                      <div className="absolute inset-x-3 bottom-3 rounded-[1rem] border border-white/15 bg-white/12 p-3 backdrop-blur-md sm:inset-x-4 sm:bottom-4 sm:p-3">
                        <div className="font-outfit text-sm font-semibold text-white sm:text-[15px]">
                          Built to move fast and scale right
                        </div>
                        <div className="mt-1 text-[12px] leading-relaxed text-white/78">
                          Modern delivery, cleaner architecture, and sharper business outcomes.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {scrollSnaps.length > 1 && (
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Service slides">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === selectedIndex}
                className={cn(
                  'transition-all duration-300 ease-out-smooth',
                  i === selectedIndex
                    ? 'h-2.5 w-12 rounded-full bg-slate-950 shadow-[0_10px_18px_-10px_rgba(15,23,42,0.5)]'
                    : 'h-2.5 w-2.5 rounded-full bg-slate-300 hover:bg-slate-400',
                )}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {services.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={cn(
                  'rounded-full px-3 py-1.5 font-outfit text-[10px] font-semibold uppercase tracking-[0.16em] transition-all duration-300',
                  selectedIndex === index
                    ? 'bg-slate-950 text-white'
                    : 'bg-white text-slate-500 ring-1 ring-slate-200 hover:text-slate-900',
                )}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
