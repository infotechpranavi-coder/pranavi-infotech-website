'use client'

import { Brain, Cloud, Laptop, Smartphone, Terminal, Shield, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { ScrollAnimate } from './scroll-animate'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'

const services = [
  {
    icon: Laptop,
    title: 'Custom Software',
    description: 'We build custom software that fits your business needs perfectly.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    accent: 'from-blue-500 to-cyan-400'
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'We use AI to help your business work smarter and faster.',
    color: 'text-fuchsia-500',
    bg: 'bg-fuchsia-500/10',
    accent: 'from-fuchsia-600 to-purple-500'
  },
  {
    icon: Cloud,
    title: 'SaaS Development',
    description: 'We create cloud platforms that grow with your company.',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    accent: 'from-purple-500 to-pink-500'
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'We build fast and easy-to-use apps for iPhone and Android.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    accent: 'from-emerald-500 to-teal-400'
  },
  {
    icon: Terminal,
    title: 'Cloud & DevOps',
    description: 'We set up and manage your cloud to keep things running smoothly.',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    accent: 'from-rose-500 to-orange-500'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'We protect your data and business from online threats.',
    color: 'text-slate-600',
    bg: 'bg-slate-600/10',
    accent: 'from-slate-700 to-slate-900'
  }
]

export function ServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      skipSnaps: false,
      dragFree: true
    },
    [
      AutoScroll({
        speed: 2,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  )

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="services" className="py-24 md:py-40 bg-white relative overflow-hidden selection:bg-primary selection:text-white">
      {/* Minimal background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(var(--primary-rgb),0.02),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(var(--accent-purple-rgb),0.02),transparent_40%)]" />

        {/* Technical Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <ScrollAnimate>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-8">
                <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Our Services
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={100}>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter italic leading-none overflow-hidden">
                <span className="block animate-maskReveal text-balance">Expert <span className="text-primary not-italic">Services.</span></span>
              </h2>
            </ScrollAnimate>

            <ScrollAnimate delay={150}>
              <p className="mt-6 text-lg text-slate-500 max-w-xl leading-relaxed font-light">
                Accelerating digital evolution through high-performance engineering and strategic innovation. <br className="hidden md:block" />
                We build the architecture that defines modern enterprises.
              </p>
            </ScrollAnimate>
          </div>

          <ScrollAnimate delay={200} className="shrink-0 flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full w-14 h-14 border-slate-200 text-slate-400 transition-all duration-300 hover:border-primary hover:text-primary active:scale-95 shadow-sm`}
              onClick={scrollPrev}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`rounded-full w-14 h-14 border-slate-200 text-slate-400 transition-all duration-300 hover:border-primary hover:text-primary active:scale-95 shadow-sm`}
              onClick={scrollNext}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </ScrollAnimate>
        </div>

        <div className="overflow-visible" ref={emblaRef}>
          <div className="flex gap-8 cursor-grab active:cursor-grabbing">
            {services.map((service, index) => {
              const Icon = service.icon
              const isActive = selectedIndex === index

              return (
                <div key={service.title} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_31%] min-w-0 h-auto transition-all duration-700 ease-out-soft"
                  style={{
                    opacity: isActive ? 1 : 0.9,
                  }}
                >
                  <div className="group relative h-full py-4">
                    <SpotlightCard className="h-full transition-all duration-300 overflow-hidden group rounded-[1.75rem]">
                      <div className="p-8 md:p-9 h-full flex flex-col">

                        {/* Icon Container */}
                        <div className="flex items-start justify-between gap-6 mb-8">
                          <div className={`w-12 h-12 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.03]`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors duration-200" />
                        </div>

                        <div className="overflow-hidden mb-4">
                          <h3 className="text-2xl font-semibold text-slate-900 tracking-tight leading-tight">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-slate-600 leading-relaxed font-normal mb-10 text-sm">
                          {service.description}
                        </p>

                        <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-xs font-medium text-slate-500">Learn more</span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors duration-200" />
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                </div>
              )
            })}

            {/* Contact Node Card */}
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_31%] min-w-0 h-auto py-4 transition-all duration-700 ease-out-soft"
              style={{
                opacity: selectedIndex === services.length ? 1 : 0.9,
              }}>
              <Link href="/contact" className="group relative h-full block">
                <div className="h-full bg-white rounded-[1.75rem] p-8 md:p-9 flex flex-col justify-between overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-[box-shadow,transform,border-color] duration-200 cursor-pointer relative">
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                      <ArrowUpRight className="text-primary w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">
                      Ready to transform?
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      Book a quick consultation and we’ll map the fastest path to your next release.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-10">
                    <span className="text-sm font-medium text-slate-800">Schedule a call</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors duration-200" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
