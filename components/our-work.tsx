'use client'

import {
    ArrowRight,
    Code2,
    ShieldCheck,
    Database,
    Globe,
    Cpu,
    Activity,
    Laptop,
    Brain,
    Smartphone,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react'
import { ScrollAnimate } from './scroll-animate'
import { SpotlightCard } from './ui/spotlight-card'
import Link from 'next/link'
import { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useCallback, useEffect, useState } from 'react'
import { Button } from './ui/button'

function sectionRuleClass(align: 'start' | 'center' = 'start') {
    return cn(
        'h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent',
        align === 'center' ? 'mx-auto max-w-md' : 'max-w-2xl lg:mx-0',
    )
}

/** One short line for carousel cards — first sentence, or trimmed. */
function minimalDescription(text: string): string {
    const s = text.trim()
    const dot = s.indexOf('.')
    if (dot > 0 && dot <= 110) return s.slice(0, dot + 1)
    if (s.length <= 100) return s
    const slice = s.slice(0, 100)
    const sp = slice.lastIndexOf(' ')
    return (sp > 50 ? slice.slice(0, sp) : slice) + '…'
}

const iconMap: { [key: string]: typeof Globe } = {
    Globe,
    Cpu,
    Database,
    Activity,
    Code2,
    ShieldCheck,
    Laptop,
    Brain,
    Smartphone,
}

export function OurWork({ projects }: { projects: Project[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            align: 'start',
            loop: true,
            skipSnaps: false,
            dragFree: false,
            duration: 28,
        },
        [
            AutoScroll({
                speed: 0.85,
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
        <>
            <header className="relative overflow-hidden border-b border-slate-200/80 pt-28 pb-16 md:pt-32 md:pb-20">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.35]"
                    aria-hidden
                    style={{
                        backgroundImage:
                            'linear-gradient(to right, rgb(226 232 240 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.5) 1px, transparent 1px)',
                        backgroundSize: '48px 48px',
                    }}
                />
                <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/[0.07] blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-accent-purple/[0.06] blur-3xl" />

                <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8 lg:text-left">
                    <ScrollAnimate direction="up">
                        <p className="mb-4 inline-flex items-center gap-2 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            Portfolio
                        </p>
                        <h1 className="font-outfit text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                            Our{' '}
                            <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
                                Projects.
                            </span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
                            Architecture of the next generation of digital infrastructure.
                            Clinical engineering meets strategic vision. Explore our record of
                            solving complex global challenges with absolute precision.
                        </p>
                        <div role="presentation" className={cn(sectionRuleClass('start'), 'my-10')} />
                        <ScrollAnimate delay={120}>
                            <Link
                                href="/contact"
                                className={cn(
                                    'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-sm transition-all',
                                    'hover:border-primary/25 hover:bg-slate-50/90 hover:shadow-[0_12px_36px_-18px_rgba(var(--primary-rgb),0.2)]',
                                )}
                            >
                                Start a project
                                <ArrowRight className="h-4 w-4 text-primary" />
                            </Link>
                        </ScrollAnimate>
                    </ScrollAnimate>
                </div>
            </header>

            <section
                id="work"
                className="relative bg-white py-16 md:py-24"
                aria-roledescription="carousel"
                aria-label="Project highlights"
            >
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-10 flex flex-col gap-8 md:mb-12 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-xl text-center md:text-left">
                            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                                Selected work
                            </h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                                Swipe or use the arrows — smooth scroll, minimal copy, full imagery.
                            </p>
                        </div>
                        <div className="flex shrink-0 justify-center gap-3 md:justify-end">
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="h-12 w-12 rounded-full border-slate-200 text-slate-500 shadow-sm transition-all duration-300 hover:border-primary/35 hover:text-primary active:scale-95"
                                onClick={scrollPrev}
                                aria-label="Previous projects"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="h-12 w-12 rounded-full border-slate-200 text-slate-500 shadow-sm transition-all duration-300 hover:border-primary/35 hover:text-primary active:scale-95"
                                onClick={scrollNext}
                                aria-label="Next projects"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    <div className="overflow-hidden pb-2" ref={emblaRef}>
                        <div className="flex touch-pan-y cursor-grab gap-6 active:cursor-grabbing md:gap-8 [-webkit-tap-highlight-color:transparent]">
                            {projects.map((project, index) => {
                                const Icon = iconMap[project.icon] || Globe
                                const isSnap = selectedIndex === index
                                const blurb = minimalDescription(project.description)

                                return (
                                    <div
                                        key={project.id}
                                        className={cn(
                                            'min-w-0 flex-[0_0_88%] transition-[transform,opacity] duration-500 ease-out-smooth sm:flex-[0_0_52%] lg:flex-[0_0_31.5%]',
                                            !isSnap && 'scale-[0.97] opacity-[0.82]',
                                        )}
                                    >
                                        <SpotlightCard
                                            variant="glass-soft-light"
                                            className={cn(
                                                'group flex h-full flex-col overflow-hidden',
                                                'shadow-[0_8px_40px_-20px_rgba(15,23,42,0.12)] transition-[box-shadow,transform] duration-500',
                                                'hover:-translate-y-1 hover:shadow-[0_20px_50px_-24px_rgba(var(--primary-rgb),0.14)]',
                                            )}
                                        >
                                            <div className="relative aspect-[16/10] w-full overflow-hidden">
                                                <img
                                                    src={project.image}
                                                    alt=""
                                                    className="h-full w-full object-cover transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-[1.03]"
                                                />
                                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/25 via-transparent to-white/10" />
                                                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/25 text-primary shadow-sm backdrop-blur-md transition-transform duration-300 group-hover:scale-105">
                                                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.65} />
                                                </div>
                                            </div>

                                            <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-5">
                                                <div className="flex items-start justify-between gap-3 border-b border-slate-200/80 pb-4">
                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                                                        {project.category}
                                                    </span>
                                                    <span className="text-right text-[10px] font-medium tabular-nums text-primary">
                                                        {project.stats}
                                                    </span>
                                                </div>

                                                <h3 className="mt-4 font-outfit text-lg font-semibold leading-snug tracking-tight text-slate-900">
                                                    {project.title}
                                                </h3>
                                                <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-slate-600">
                                                    {blurb}
                                                </p>

                                                <Link
                                                    href="/contact"
                                                    className="mt-auto flex items-center gap-2 border-t border-slate-200/80 pt-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary"
                                                >
                                                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                                                        View case
                                                    </span>
                                                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {scrollSnaps.length > 1 && (
                        <div
                            className="mt-8 flex flex-wrap items-center justify-center gap-2"
                            role="tablist"
                            aria-label="Slide indicators"
                        >
                            {scrollSnaps.map((_, i) => (
                                <button
                                    key={i}
                                    type="button"
                                    role="tab"
                                    aria-selected={i === selectedIndex}
                                    className={cn(
                                        'h-1.5 rounded-full transition-all duration-300 ease-out',
                                        i === selectedIndex
                                            ? 'w-8 bg-primary shadow-[0_0_14px_-2px_rgba(var(--primary-rgb),0.45)]'
                                            : 'w-1.5 bg-slate-300 hover:bg-slate-400',
                                    )}
                                    onClick={() => emblaApi?.scrollTo(i)}
                                    aria-label={`Go to project ${i + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
