'use client'

import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useCallback, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { HomeServiceCard } from '@/lib/data/home-services'

type Props = {
  services: HomeServiceCard[]
}

export function HomeServicesSlider({ services }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: false,
      dragFree: false,
      duration: 26,
    },
    [
      AutoScroll({
        speed: 0.75,
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
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          Swipe or use arrows to explore — each capability pairs engineering depth with clear business outcomes.
        </p>
        <div className="flex shrink-0 justify-start gap-2 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-primary/30 hover:text-primary"
            onClick={scrollPrev}
            aria-label="Previous services"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full border-slate-200 bg-white text-slate-500 shadow-sm transition-all hover:border-primary/30 hover:text-primary"
            onClick={scrollNext}
            aria-label="Next services"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden pb-1" ref={emblaRef}>
        <div className="flex touch-pan-y gap-5 cursor-grab active:cursor-grabbing md:gap-6 [-webkit-tap-highlight-color:transparent]">
          {services.map((item, index) => {
            const isSnap = selectedIndex === index
            return (
              <div
                key={item.title}
                className={cn(
                  'min-w-0 flex-[0_0_88%] transition-[transform,opacity] duration-500 ease-out-smooth sm:flex-[0_0_52%] lg:flex-[0_0_36%]',
                  !isSnap && 'scale-[0.98] opacity-[0.88]',
                )}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-[0_8px_30px_-18px_rgba(15,23,42,0.12)] transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_44px_-24px_rgba(var(--primary-rgb),0.18)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-[transform] duration-700 ease-out-smooth group-hover:scale-[1.04]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <h3 className="font-outfit text-base font-semibold leading-snug tracking-tight text-slate-900 md:text-[17px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 line-clamp-4 flex-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                    <Link
                      href="/services"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary"
                    >
                      Learn more
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>

      {scrollSnaps.length > 1 && (
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Service slides"
        >
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === selectedIndex}
              className={cn(
                'h-1.5 rounded-full transition-all duration-300 ease-out-smooth',
                i === selectedIndex
                  ? 'w-8 bg-primary shadow-[0_0_12px_-2px_rgba(var(--primary-rgb),0.4)]'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400',
              )}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to service ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
