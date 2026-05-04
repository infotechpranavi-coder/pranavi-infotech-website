import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollAnimate } from '@/components/scroll-animate'
import Image from 'next/image'
import {
  ArrowUpRight,
  Check,
  Linkedin,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import {
  aboutHero,
  coreValues,
  founder,
  missionVision,
  team,
  whatWeDo,
} from '@/lib/data/about-page'
import { cn } from '@/lib/utils'
import settings from '@/lib/data/settings.json'
import { TypedText } from '@/components/ui/typed-text'

export const metadata = {
  title: 'About Pranavi Infotech',
  description:
    'Learn about Pranavi Infotech: mission, vision, approach, values, founder message, and the team behind reliable technology delivery.',
}

const sectionLinks = [
  { href: '#mission', label: 'Mission & vision' },
  { href: '#what-we-do', label: 'What we do' },
  { href: '#values', label: 'Values' },
  { href: '#founder', label: 'Founder' },
  { href: '#team', label: 'Team' },
]

const heroHighlights = [
  'Reliable product engineering',
  'Secure and scalable systems',
  'Long-term client partnerships',
]

const aboutSignals = [
  { value: 'End-to-end', label: 'technology delivery' },
  { value: 'Process-led', label: 'execution model' },
  { value: 'Quality-first', label: 'engineering culture' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#f6f9ff_0%,#ffffff_26%,#f7fbff_100%)] text-slate-900 selection:bg-primary/20 selection:text-slate-900">
      <Navbar />

      <header className="relative overflow-hidden border-b border-white/60 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_55%,#f5f9ff_100%)] pt-28 pb-16 md:pt-32 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
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

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-end">
            <div>
              <div className="glass-chip glass-outline inline-flex items-center gap-3 rounded-full px-3 py-2 animate-slideUp">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={2.2} />
                </span>
                <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                  {aboutHero.eyebrow}
                </p>
              </div>

              <h1 className="mt-6 max-w-4xl font-outfit text-4xl font-semibold leading-[1.02] tracking-tight text-slate-900 animate-slideUp sm:text-5xl md:text-6xl">
                {aboutHero.titleLead}{' '}
                <span className="bg-gradient-to-r from-primary via-sky-500 to-accent-purple bg-clip-text text-transparent">
                  {aboutHero.titleAccent}
                </span>
              </h1>

              <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {aboutHero.paragraphs.map((p, i) => (
                  <ScrollAnimate key={i} delay={i * 80}>
                    <p>{p}</p>
                  </ScrollAnimate>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroHighlights.map((item, i) => (
                  <ScrollAnimate key={item} delay={120 + i * 70}>
                    <div className="glass-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:text-slate-900">
                      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                      <span>{item}</span>
                    </div>
                  </ScrollAnimate>
                ))}
              </div>
            </div>

            <ScrollAnimate direction="left" className="lg:justify-self-end">
              <div className="glass-panel-strong glass-outline relative overflow-hidden rounded-[2rem] p-6 text-slate-900">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.14),transparent_32%),linear-gradient(160deg,rgba(255,255,255,0.38),rgba(255,255,255,0.08))]" />
                <div className="pointer-events-none absolute -left-16 top-10 h-28 w-28 rounded-full border border-white/30 animate-driftX" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
                  <span className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent animate-shimmerLine" />
                </div>

                <div className="relative">
                  <p className="font-outfit text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-700/80">
                    Operating signals
                  </p>
                  <div className="mt-6 space-y-4">
                    {aboutSignals.map((item, i) => (
                      <div
                        key={item.value}
                        className="glass-panel rounded-[1.35rem] p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="font-outfit text-lg font-semibold text-slate-900">
                              {item.value}
                            </div>
                            <div className="mt-1 text-sm text-slate-600">
                              {item.label}
                            </div>
                          </div>
                          <ArrowUpRight
                            className={cn(
                              'h-4 w-4 text-sky-600 transition-transform duration-300',
                              i % 2 === 0 ? 'rotate-0' : 'rotate-45',
                            )}
                            strokeWidth={2}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </header>

      <nav
        aria-label="About sections"
        className="sticky top-0 z-30 border-b border-white/60 bg-white/60 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {sectionLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="glass-chip shrink-0 rounded-full border border-transparent px-3 py-1.5 font-outfit text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 transition-colors hover:border-slate-200 hover:bg-white/90 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section
          id="mission"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Mission &amp; vision
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
              The north star behind our delivery standards.
            </p>
          </ScrollAnimate>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {missionVision.map((card, i) => (
              <ScrollAnimate key={card.title} delay={i * 60}>
                <article
                  className={cn(
                    'relative h-full rounded-[1.75rem] border border-slate-200 bg-white p-7 transition-colors duration-300 md:p-8',
                    'hover:border-slate-300',
                  )}
                >
                  <h3 className="font-outfit text-2xl font-semibold tracking-tight text-slate-950 md:text-[2rem]">
                    {card.title}
                  </h3>
                  <p className="mt-5 max-w-[34rem] text-lg leading-9 text-slate-600">
                    {card.description}
                  </p>
                </article>
              </ScrollAnimate>
            ))}
          </div>
        </section>

        <section
          id="what-we-do"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <ScrollAnimate>
                <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  {whatWeDo.title}
                </h2>
              </ScrollAnimate>
            </div>
            <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base lg:col-span-7 lg:mt-0">
              {whatWeDo.paragraphs.map((p, i) => (
                <ScrollAnimate key={i} delay={i * 60}>
                  <p className="glass-panel rounded-[1.4rem] px-5 py-4 transition-colors duration-300 hover:border-slate-200 hover:bg-white/85">
                    {p}
                  </p>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        <section
          id="values"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Our core values
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
              The behaviors we protect as we scale.
            </p>
          </ScrollAnimate>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <ScrollAnimate key={v.title} delay={i * 50}>
                <article
                  className={cn(
                    'glass-panel glass-outline group relative h-full overflow-hidden rounded-[1.55rem] p-5 transition-all duration-300',
                    'hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_14px_44px_-24px_rgba(var(--primary-rgb),0.26)]',
                  )}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-60" />
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-outfit text-[15px] font-semibold text-slate-900">
                      {v.title}
                    </h3>
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 text-primary/70"
                      strokeWidth={1.75}
                    />
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {v.description}
                  </p>
                </article>
              </ScrollAnimate>
            ))}
          </div>
        </section>

        <section
          id="founder"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/80 to-transparent" />
            <div className="pointer-events-none absolute left-0 top-10 hidden h-24 w-px bg-gradient-to-b from-sky-200/70 to-transparent lg:block" />
            <ScrollAnimate className="lg:col-span-5">
              <div className="flex flex-col items-start">
                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-[0_24px_70px_-38px_rgba(15,23,42,0.2)]">
                  <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/60" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.1),transparent)]" />
                  <Image
                    src={founder.imageSrc}
                    alt={founder.name}
                    fill
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    priority={false}
                  />
                </div>
                <a
                  href={settings.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} LinkedIn`}
                  className="glass-chip mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
            </ScrollAnimate>

            <div className="lg:col-span-7">
              <ScrollAnimate>
                <div className="inline-flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-2.5 w-2.5 rounded-full bg-primary/20 animate-pulseRing" />
                    <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                  </span>
                  <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                    {founder.title}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="font-outfit text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    Leadership that builds
                  </p>
                  <div className="mt-2 min-h-[2.8rem] md:min-h-[3.8rem]">
                    <TypedText
                      phrases={[
                        'reliable systems',
                        'scalable technology',
                        'long-term trust',
                      ]}
                      className="bg-gradient-to-r from-slate-900 via-primary to-sky-500 bg-clip-text font-outfit text-2xl font-semibold tracking-tight text-transparent drop-shadow-[0_10px_30px_rgba(59,130,246,0.14)] md:text-4xl"
                    />
                  </div>
                </div>
                <h2 className="mt-4 font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  {founder.name}{' '}
                  <span className="font-normal text-slate-400">
                    - {founder.role}
                  </span>
                </h2>
              </ScrollAnimate>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
                {founder.paragraphs.map((p, i) => (
                  <ScrollAnimate key={i} delay={i * 60}>
                    <p>{p}</p>
                  </ScrollAnimate>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="scroll-mt-[10rem] py-16 md:py-24">
          <ScrollAnimate>
            <div className="relative overflow-hidden py-6">
              <div className="pointer-events-none absolute inset-0 opacity-35 animate-gridDrift" aria-hidden style={{ backgroundImage: 'linear-gradient(to right, rgb(226 232 240 / 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              <div className="pointer-events-none absolute left-1/2 top-6 h-40 w-[32rem] -translate-x-1/2 rounded-full bg-sky-100/75 blur-3xl" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
                <span className="absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent animate-beamSweep" />
              </div>
              <div className="relative">
                <div className="mx-auto max-w-3xl text-center">
                  <div className="inline-flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                      <span className="absolute h-2.5 w-2.5 rounded-full bg-primary/20 animate-pulseRing" />
                      <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                    </span>
                    <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                      Team structure
                    </p>
                  </div>
                  <p className="mt-6 font-outfit text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    We move with
                  </p>
                  <div className="mt-2 min-h-[2.8rem] md:min-h-[4rem]">
                    <TypedText
                      phrases={[
                        'cross-functional clarity',
                        'process-led execution',
                        'client-first collaboration',
                      ]}
                      className="bg-gradient-to-r from-slate-900 via-primary to-sky-500 bg-clip-text font-outfit text-2xl font-semibold tracking-tight text-transparent drop-shadow-[0_10px_30px_rgba(59,130,246,0.14)] md:text-4xl"
                    />
                  </div>
                  <h2 className="mt-4 font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                    {team.title}
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                    {team.subtitle}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                  {[
                    'Cross-functional',
                    'Process-led',
                    'Client-first',
                  ].map((label) => (
                    <div key={label} className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimate>

          <div className="mt-6 grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
            {team.groups.map((g, i) => (
              <ScrollAnimate key={g.title} delay={i * 40}>
                <article
                  className={cn(
                    'glass-panel glass-outline group relative flex h-full flex-col overflow-hidden rounded-[1.65rem] p-5 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.16)] transition-all duration-300 md:p-6',
                    'hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_22px_54px_-30px_rgba(14,165,233,0.18)]',
                  )}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.06),transparent_26%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent opacity-80" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1.1rem] border border-sky-100 bg-sky-50 text-primary transition-transform duration-300 group-hover:scale-[1.04]">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </span>
                      <span className="glass-chip rounded-full px-3 py-1 font-outfit text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-[16ch] font-outfit text-lg font-semibold leading-tight tracking-tight text-slate-900">
                      {g.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {g.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                      <div className="glass-chip inline-flex items-center rounded-full px-3 py-1.5 font-outfit text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 transition-colors duration-300 group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
                        Team pillar
                      </div>

                      <div className="font-outfit text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Specialist lane
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollAnimate>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
