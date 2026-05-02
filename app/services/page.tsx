import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollAnimate } from '@/components/scroll-animate'
import Link from 'next/link'
import {
  ArrowUpRight,
  Brain,
  Building2,
  Cloud,
  Code2,
  Compass,
  Shield,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import {
  servicesCatalog,
  servicesIntro,
  servicesPositioning,
  type ServiceCategory,
} from '@/lib/data/services-catalog'
import { cn } from '@/lib/utils'

const categoryIcons: Record<ServiceCategory['icon'], LucideIcon> = {
  code: Code2,
  cloud: Cloud,
  brain: Brain,
  building: Building2,
  shield: Shield,
  compass: Compass,
  wrench: Wrench,
  sparkles: Sparkles,
}

export const metadata = {
  title: 'Services - Pranavi Infotech',
  description:
    'End-to-end IT solutions: application development, cloud, data & AI, enterprise systems, security, consulting, managed services, and emerging tech.',
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-primary/20 selection:text-slate-900">
      <Navbar />

      {/* Hero */}
      <header className="relative border-b border-slate-200/80 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
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

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex items-center gap-2 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Our services
          </p>
          <h1 className="font-outfit text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Your stack,{' '}
            <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
              end to end.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {servicesIntro}
          </p>
        </div>
      </header>

      {/* Jump nav */}
      <nav
        aria-label="Service categories"
        className="sticky top-[calc(var(--announcement-height,0px)+3.5rem)] z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {servicesCatalog.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 rounded-full border border-transparent px-3 py-1.5 font-outfit text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 transition-colors hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
            >
              {cat.title.replace(' and ', ' + ')}
            </a>
          ))}
        </div>
      </nav>

      {/* Categories */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {servicesCatalog.map((category, catIndex) => {
          const Icon = categoryIcons[category.icon]
          const n = String(catIndex + 1).padStart(2, '0')
          return (
            <ScrollAnimate key={category.id} delay={catIndex * 40}>
              <section
                id={category.id}
                className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24 lg:grid lg:grid-cols-12 lg:gap-12 lg:gap-x-16"
              >
                <div className="lg:col-span-4 lg:sticky lg:top-[calc(var(--announcement-height,0px)+3.5rem+3.25rem)] lg:self-start">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-widest text-slate-400">
                    {n} / {String(servicesCatalog.length).padStart(2, '0')}
                  </p>
                  <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  </div>
                  <h2 className="mt-5 font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {category.blurb}
                  </p>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:col-span-8 lg:mt-0">
                  {category.items.map((item) => (
                    <article
                      key={item.title}
                      className={cn(
                        'group rounded-2xl border border-slate-200/90 bg-white p-5 transition-all duration-200',
                        'hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_40px_-24px_rgba(var(--primary-rgb),0.35)]',
                      )}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-outfit text-[15px] font-semibold leading-snug text-slate-900 md:text-base">
                          {item.title}
                        </h3>
                        <ArrowUpRight
                          className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                          strokeWidth={1.75}
                        />
                      </div>
                      <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            </ScrollAnimate>
          )
        })}
      </div>

      {/* Positioning */}
      <section className="border-t border-slate-100 bg-slate-50/80 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollAnimate>
            <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
              Positioning
            </p>
            <p className="mt-6 font-outfit text-lg font-medium leading-relaxed text-slate-800 md:text-xl">
              {servicesPositioning}
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-6 py-3 font-outfit text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />
    </main>
  )
}
