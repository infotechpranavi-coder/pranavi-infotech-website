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
      {/* VIBRANT BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Mesh Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(var(--primary-rgb),0.03),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(var(--accent-purple-rgb),0.03),transparent_40%)]" />

        {/* Peripheral Glows */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent-purple/5 rounded-full blur-[100px]" />

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
              const nodeCode = `0x${(index + 10).toString(16).toUpperCase()}_${(index * 137 % 999).toString(16).toUpperCase()}`
              const isActive = selectedIndex === index

              return (
                <div key={service.title} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_31%] min-w-0 h-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{
                    opacity: isActive ? 1 : 0.75,
                    transform: isActive ? 'scale(1.02)' : 'scale(0.97)',
                    filter: isActive ? 'none' : 'saturate(0.8)',
                  }}
                >
                  <div className="group relative [perspective:1000px] h-full py-4">
                    {/* Background Bloom */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 rounded-full z-0`} />

                    <SpotlightCard className="h-full bg-white border-slate-100 hover:border-transparent transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 group rounded-[2.5rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.02)] group-hover:shadow-[inset_0_0_60px_rgba(0,0,0,0.04)]">
                      <div className="p-10 h-full flex flex-col relative z-20">

                        {/* Icon Container */}
                        <div className="flex justify-between items-start mb-12">
                          <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_30px_-5px] group-hover:shadow-current`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-2 group-hover:translate-x-0">
                            <ArrowUpRight className="w-6 h-6 text-primary" />
                          </div>
                        </div>

                        <div className="overflow-hidden mb-6">
                          <h3 className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-primary transition-colors duration-500 leading-tight">
                            {service.title}
                          </h3>
                        </div>

                        <p className="text-slate-500/80 leading-relaxed font-light mb-12 group-hover:text-slate-600 transition-colors duration-500 text-sm">
                          {service.description}
                        </p>

                        {/* Diagnostic Overlay */}
                        <div className="mt-auto pt-8 border-t border-slate-50 group-hover:border-slate-100 transition-colors relative">
                          <div className="flex justify-between items-end">
                            <div className="space-y-1">
                              <p className="text-[8px] font-mono text-primary/40 uppercase tracking-widest group-hover:text-primary group-hover:animate-pulse transition-colors">Diagnostic_Node</p>
                              <p className="text-[10px] font-mono text-slate-400 group-hover:text-slate-900 transition-colors duration-500">{nodeCode}</p>
                            </div>
                            <div className="flex gap-1 h-3 items-end">
                              {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
                                <div key={i} className={`w-0.5 rounded-full ${service.color.replace('text', 'bg').replace('500', '200')} group-hover:${service.color.replace('text', 'bg')} transition-all duration-700`} style={{ height: `${h * 2}px`, animationDelay: `${i * 0.1}s` }} />
                              ))}
                            </div>
                          </div>
                          <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.accent} w-0 group-hover:w-full transition-all duration-700 -mb-1`} />
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                </div>
              )
            })}

            {/* Contact Node Card */}
            <div className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_31%] min-w-0 h-auto py-4 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
              style={{
                opacity: selectedIndex === services.length ? 1 : 0.75,
                transform: selectedIndex === services.length ? 'scale(1.02)' : 'scale(0.97)',
                filter: selectedIndex === services.length ? 'none' : 'saturate(0.8)',
              }}>
              <Link href="/contact" className="group relative h-full [perspective:1000px] block">
                <div className="h-full bg-primary rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden shadow-2xl shadow-primary/20 hover:scale-[1.02] transition-all duration-700 cursor-pointer relative">
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform duration-500">
                      <ArrowUpRight className="text-white w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-black text-white tracking-tighter mb-6">
                      Ready to <br /><span className="italic">Transform?</span>
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed">
                      Initiate a high-impact architectural consultation for your organization today.
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-4 text-white font-bold text-sm tracking-[0.2em] uppercase mt-12 group-hover:gap-6 transition-all duration-500">
                    Schedule a Call
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-blob" />
                  <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/10 rounded-tr-[2.5rem] m-4" />

                  {/* Technical Coordinates */}
                  <div className="absolute top-10 right-10 text-[8px] font-mono text-white/20 writing-mode-vertical">
                    [NODE.INIT_88A]
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
