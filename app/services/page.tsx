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
import { TypedText } from '@/components/ui/typed-text'

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
    <main className="min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#f6f9ff_0%,#ffffff_28%,#f7fbff_100%)] text-slate-900 selection:bg-primary/20 selection:text-slate-900">
      <Navbar />

      <header className="relative overflow-hidden border-b border-white/60 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_55%,#f5f9ff_100%)] pt-28 pb-16 md:pt-32 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4] animate-gridDrift"
          aria-hidden
          style={{
            backgroundImage:
              'linear-gradient(to right, rgb(226 232 240 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/[0.1] blur-3xl animate-floatSlow" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-accent-purple/[0.08] blur-3xl animate-blob" />
        <div className="pointer-events-none absolute left-1/2 top-14 h-24 w-[32rem] -translate-x-1/2 rounded-full bg-white/70 blur-3xl" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-100/60 blur-3xl animate-lightLeak" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <span className="absolute left-0 top-0 h-px w-40 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent animate-beamSweep" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div>
              <div className="glass-chip glass-outline inline-flex items-center gap-3 rounded-full px-3 py-2 animate-slideUp">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
                <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  Our services
                </p>
              </div>

              <h1 className="mt-6 font-outfit text-4xl font-semibold leading-[1.02] tracking-tight text-slate-900 animate-slideUp sm:text-5xl md:text-6xl">
                Your stack,{' '}
                <span className="bg-gradient-to-r from-primary via-sky-500 to-accent-purple bg-clip-text text-transparent">
                  end to end.
                </span>
              </h1>

              <ScrollAnimate delay={80}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  {servicesIntro}
                </p>
              </ScrollAnimate>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Modern delivery',
                  'Smooth implementation',
                  'Scalable systems',
                ].map((item, index) => (
                  <ScrollAnimate key={item} delay={120 + index * 60}>
                    <div className="glass-chip tech-beam inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_35px_-24px_rgba(var(--primary-rgb),0.35)]">
                      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                        <span className="absolute h-2.5 w-2.5 rounded-full bg-primary/20 animate-pulseRing" />
                        <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                      </span>
                      <span>{item}</span>
                    </div>
                  </ScrollAnimate>
                ))}
              </div>
            </div>

            <ScrollAnimate direction="left" className="lg:justify-self-end">
              <div className="glass-panel-strong glass-outline tech-grid relative overflow-hidden rounded-[2rem] p-6 text-slate-900">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.14),transparent_32%),linear-gradient(160deg,rgba(255,255,255,0.38),rgba(255,255,255,0.08))]" />
                <div className="pointer-events-none absolute -left-16 top-10 h-28 w-28 rounded-full border border-white/30 animate-driftX" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
                  <span className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent animate-shimmerLine" />
                </div>

                <div className="relative space-y-4">
                  {[
                    'Application to infrastructure delivery',
                    'Secure, scalable, and business-aligned systems',
                    'One team across build, cloud, data, and support',
                  ].map((item, index) => (
                    <div key={item} className="glass-panel rounded-[1.35rem] p-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 text-primary">
                          <span className="font-outfit text-xs font-semibold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-700">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </header>

      <nav
        aria-label="Service categories"
        className="sticky top-0 z-30 border-b border-white/60 bg-white/60 shadow-[0_20px_40px_-36px_rgba(15,23,42,0.2)] backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {servicesCatalog.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="glass-chip tech-beam shrink-0 rounded-full border border-transparent px-3 py-1.5 font-outfit text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white/90 hover:text-slate-900"
            >
              {cat.title.replace(' and ', ' + ')}
            </a>
          ))}
        </div>
      </nav>

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
                  <div className="mt-4 flex items-center gap-4">
                    <div className="glass-chip tech-beam flex h-11 w-11 items-center justify-center rounded-2xl shadow-sm">
                      <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                    </div>
                    <div className="relative hidden h-px flex-1 overflow-hidden rounded-full bg-slate-200/70 lg:block">
                      <span className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-shimmerLine" />
                    </div>
                  </div>
                  <h2 className="mt-5 font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                    {category.title}
                  </h2>
                  <div className="glass-panel tech-grid mt-4 rounded-[1.4rem] px-5 py-4">
                    <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                      {category.blurb}
                    </p>
                  </div>
                </div>

                <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:col-span-8 lg:mt-0">
                  {category.items.map((item, itemIndex) => (
                    <ScrollAnimate key={item.title} delay={itemIndex * 40}>
                      <article
                        className={cn(
                          'glass-panel glass-outline tech-grid group relative overflow-hidden rounded-[1.55rem] p-5 transition-all duration-500',
                          'hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_18px_56px_-26px_rgba(var(--primary-rgb),0.28)]',
                        )}
                      >
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent opacity-80" />
                        <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-sky-200/80 to-transparent opacity-60" />
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-full w-24 -translate-x-[140%] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-xl transition-transform duration-700 group-hover:translate-x-[420%]" />
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
                    </ScrollAnimate>
                  ))}
                </div>
              </section>
            </ScrollAnimate>
          )
        })}
      </div>

      <section className="relative overflow-hidden border-t border-slate-100 bg-[linear-gradient(180deg,rgba(248,250,252,0.7),rgba(255,255,255,0.95))] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-40 animate-gridDrift" aria-hidden style={{ backgroundImage: 'linear-gradient(to right, rgb(226 232 240 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.35) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
        <div className="pointer-events-none absolute left-1/2 top-10 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-sky-100/80 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/[0.12] blur-3xl animate-floatSlow" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-accent-purple/[0.12] blur-3xl animate-blob" />
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollAnimate>
            <div className="relative overflow-hidden px-4 py-8 md:px-8">
              <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/80 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
                <span className="absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent animate-beamSweep" />
              </div>
              <div className="pointer-events-none absolute left-8 top-8 h-20 w-px bg-gradient-to-b from-sky-200/70 to-transparent md:left-0 md:h-28" />
              <div className="pointer-events-none absolute right-8 top-8 h-20 w-px bg-gradient-to-b from-sky-200/70 to-transparent md:right-0 md:h-28" />
              <div className="pointer-events-none absolute left-1/2 top-20 h-48 w-[30rem] -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

              <div className="relative">
                <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-sky-100/80 bg-white/72 px-3 py-1.5 shadow-[0_10px_30px_-20px_rgba(59,130,246,0.25)] backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-2.5 w-2.5 rounded-full bg-primary/20 animate-pulseRing" />
                    <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                  </span>
                  <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                    Positioning
                  </p>
                </div>

                <div className="mx-auto mt-8 max-w-3xl">
                  <p className="font-outfit text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    We build for
                  </p>
                  <div className="mt-3 min-h-[3.6rem] md:min-h-[4.5rem]">
                    <TypedText
                      phrases={[
                        'enterprise transformation',
                        'scalable digital platforms',
                        'future-ready business systems',
                      ]}
                      className="bg-gradient-to-r from-slate-900 via-primary to-sky-500 bg-clip-text font-outfit text-3xl font-semibold tracking-tight text-transparent drop-shadow-[0_10px_30px_rgba(59,130,246,0.16)] md:text-5xl"
                    />
                  </div>
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  {servicesPositioning}
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                  {['Enterprise-ready', 'Scalable delivery', 'Tech-led growth'].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/58 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-600 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.18)] backdrop-blur-sm"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 font-outfit text-sm font-semibold text-white shadow-[0_22px_50px_-24px_rgba(15,23,42,0.5)] transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800 hover:shadow-[0_28px_60px_-24px_rgba(59,130,246,0.28)]"
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />
    </main>
  )
}
