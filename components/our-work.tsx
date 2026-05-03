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
} from 'lucide-react'
import { ScrollAnimate } from './scroll-animate'
import { SpotlightCard } from './ui/spotlight-card'
import Link from 'next/link'
import { Project } from '@/lib/projects'
import { cn } from '@/lib/utils'

function sectionRuleClass(align: 'start' | 'center' = 'start') {
    return cn(
        'h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent',
        align === 'center' ? 'mx-auto max-w-md' : 'max-w-2xl lg:mx-0',
    )
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
    return (
        <>
            {/* Hero — matches About / Services / Contact */}
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

            {/* Project grid */}
            <section id="work" className="relative bg-white py-16 md:py-24">
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div role="presentation" className={cn(sectionRuleClass('start'), 'mb-12 max-w-none')} />

                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-9">
                        {projects.map((project, index) => {
                            const Icon = iconMap[project.icon] || Globe
                            const monogram = project.title
                                .split(/\s+/)
                                .slice(0, 2)
                                .map((w) => w[0])
                                .join('')
                                .toUpperCase()
                                .slice(0, 3)

                            return (
                                <ScrollAnimate key={project.id} delay={index * 55}>
                                    <SpotlightCard
                                        variant="glass-soft-light"
                                        className="group flex h-full flex-col overflow-hidden"
                                    >
                                        <div className="flex flex-1 flex-col px-6 pb-6 pt-7">
                                            <div className="flex justify-center pb-6">
                                                <div
                                                    className={cn(
                                                        'flex h-[92px] w-[92px] shrink-0 items-center justify-center rounded-2xl border border-slate-200/90',
                                                        'bg-white/65 backdrop-blur-[6px]',
                                                        'shadow-[0_6px_24px_-14px_rgba(var(--primary-rgb),0.12)] transition-[box-shadow,border-color] duration-300',
                                                        'group-hover:border-slate-300/90 group-hover:shadow-[0_8px_32px_-12px_rgba(var(--primary-rgb),0.16)]',
                                                    )}
                                                    aria-hidden
                                                >
                                                    <span className="font-display text-xl font-semibold tracking-[0.08em] text-slate-500">
                                                        {monogram || 'PR'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div role="presentation" className="border-t border-slate-200/80" />

                                            <div className="flex items-start justify-between gap-4 py-5">
                                                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                                                    {project.category}
                                                </span>
                                                <span className="text-right text-[11px] font-medium tabular-nums tracking-wide text-primary">
                                                    {project.stats}
                                                </span>
                                            </div>

                                            <div role="presentation" className="border-t border-slate-200/80" />

                                            <div className="flex gap-4 pb-5 pt-5">
                                                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-50/90 text-primary">
                                                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.65} />
                                                </div>
                                                <div className="min-w-0 flex-1 space-y-2">
                                                    <h3 className="font-outfit text-[17px] font-semibold leading-snug tracking-tight text-slate-900">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-[13px] leading-relaxed text-slate-600">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="relative mt-auto overflow-hidden rounded-lg ring-1 ring-slate-200/80">
                                                <img
                                                    src={project.image}
                                                    alt=""
                                                    className="h-[72px] w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                                                />
                                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/45 to-transparent" />
                                            </div>

                                            <div
                                                role="presentation"
                                                className="mt-5 border-t border-slate-200/80"
                                            />

                                            <div className="flex items-center gap-2 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary transition-opacity group-hover:opacity-100">
                                                Case overview
                                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                                            </div>
                                        </div>
                                    </SpotlightCard>
                                </ScrollAnimate>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
