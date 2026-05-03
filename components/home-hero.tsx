'use client'

import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const heroSlides = [
  {
    title: 'Application Engineering',
    blurb: 'Modern web and mobile products built for speed, stability, and scale.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600',
  },
  {
    title: 'Cloud Infrastructure',
    blurb: 'Reliable cloud systems designed for performance, continuity, and growth.',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
  },
  {
    title: 'AI Automation',
    blurb: 'Practical automation that reduces manual effort and improves decisions.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
  },
]

const metrics = [
  ['Build', 'Web, mobile, and enterprise platforms'],
  ['Scale', 'Cloud-first systems with clean delivery'],
  ['Optimize', 'Automation that saves time and effort'],
]

export function HomeHero() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, 4200)

    return () => window.clearInterval(interval)
  }, [])

  const activeSlide = heroSlides[activeIndex]

  const goPrev = () => {
    setActiveIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  }

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % heroSlides.length)
  }

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_85%_18%,rgba(15,23,42,0.08),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#ffffff_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(226 232 240 / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.7) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,0.95), rgba(0,0,0,0.25))',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:gap-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-outfit text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600 shadow-sm">
              Enterprise technology partner
            </div>

            <h1 className="mt-6 max-w-4xl font-outfit text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-[5.5rem]">
              Clean technology
              <span className="block text-slate-500">built for real</span>
              <span className="block text-primary">business momentum.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              We design and deliver software, cloud systems, and automation with a clear process, modern execution,
              and dependable results.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-outfit text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Start a project
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 font-outfit text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-900 hover:text-slate-950"
              >
                View services
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {metrics.map(([label, text]) => (
                <div
                  key={label}
                  className="rounded-[1.4rem] border border-slate-200 bg-white/90 p-4 shadow-[0_16px_40px_-32px_rgba(15,23,42,0.35)]"
                >
                  <div className="font-outfit text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {label}
                  </div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-12 hidden h-32 w-32 rounded-full bg-cyan-100 blur-3xl lg:block" />
            <div className="absolute -right-6 bottom-10 hidden h-36 w-36 rounded-full bg-slate-200/80 blur-3xl lg:block" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-42px_rgba(15,23,42,0.35)]">
              <div className="border-b border-slate-200 px-5 py-4 sm:px-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-outfit text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                      Current focus
                    </div>
                    <div className="mt-1 font-outfit text-xl font-semibold text-slate-950">
                      {activeSlide.title}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={goPrev}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-900 hover:text-slate-950"
                      aria-label="Previous hero slide"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:border-slate-900 hover:text-slate-950"
                      aria-label="Next hero slide"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950">
                  <div className="relative aspect-[4/4.6]">
                    {heroSlides.map((slide, index) => (
                      <div
                        key={slide.title}
                        className={cn(
                          'absolute inset-0 transition-all duration-[900ms] ease-out-smooth',
                          activeIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]',
                        )}
                      >
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.14),rgba(15,23,42,0.72))]" />
                      </div>
                    ))}

                    <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                      <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-outfit text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
                      </div>
                      <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-outfit text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur">
                        Tech delivery
                      </div>
                    </div>

                    <div className="absolute inset-x-4 bottom-4 rounded-[1.35rem] border border-white/12 bg-white/10 p-4 backdrop-blur-md">
                      <div className="font-outfit text-2xl font-semibold leading-tight text-white">
                        {activeSlide.title}
                      </div>
                      <p className="mt-2 max-w-sm text-sm leading-6 text-white/76">{activeSlide.blurb}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={cn(
                        'rounded-[1.1rem] border px-4 py-3 text-left transition-all',
                        activeIndex === index
                          ? 'border-slate-900 bg-slate-950 text-white'
                          : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-white',
                      )}
                      aria-label={`Go to hero slide ${index + 1}`}
                    >
                      <div className="font-outfit text-[10px] font-semibold uppercase tracking-[0.18em] opacity-70">
                        Focus area
                      </div>
                      <div className="mt-1 font-outfit text-sm font-semibold leading-5">{slide.title}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
