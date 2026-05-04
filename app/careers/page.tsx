import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollAnimate } from '@/components/scroll-animate'
import Link from 'next/link'
import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import {
  applyInfo,
  careersHero,
  equalOpportunity,
  hiringProcess,
  idealCandidateTraits,
  lifeAtPranavi,
  openPositions,
  whyWorkWithUs,
} from '@/lib/data/careers-page'
import { cn } from '@/lib/utils'
import { TypedText } from '@/components/ui/typed-text'

const navLinks = [
  { href: '#why-us', label: 'Why us' },
  { href: '#roles', label: 'Open roles' },
  { href: '#you', label: 'Who we seek' },
  { href: '#process', label: 'Process' },
  { href: '#life', label: 'Life here' },
  { href: '#apply', label: 'Apply' },
]

export const metadata = {
  title: 'Careers - Pranavi Infotech',
  description:
    'Build the future with Pranavi Infotech. Growth-oriented culture, impactful work, and open roles across engineering, design, data, and more.',
}

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[linear-gradient(180deg,#f6f9ff_0%,#ffffff_30%,#f7fbff_100%)] text-slate-900 selection:bg-primary/20 selection:text-slate-900">
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
                  {careersHero.eyebrow}
                </p>
              </div>

              <h1 className="mt-6 max-w-4xl font-outfit text-4xl font-semibold leading-[1.02] tracking-tight text-slate-900 animate-slideUp sm:text-5xl md:text-6xl">
                {careersHero.titleLead}{' '}
                <span className="bg-gradient-to-r from-primary via-sky-500 to-accent-purple bg-clip-text text-transparent">
                  {careersHero.titleAccent}
                </span>
              </h1>

              <div className="mt-5 max-w-3xl">
                <p className="font-outfit text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  We&apos;re hiring for
                </p>
                <div className="mt-3 min-h-[3rem] md:min-h-[4.25rem]">
                  <TypedText
                    phrases={[
                      'builders with curiosity',
                      'engineers with ownership',
                      'designers with clarity',
                    ]}
                    className="bg-gradient-to-r from-slate-900 via-primary to-sky-500 bg-clip-text font-outfit text-3xl font-semibold tracking-tight text-transparent drop-shadow-[0_10px_30px_rgba(59,130,246,0.16)] md:text-5xl"
                  />
                </div>
              </div>

              <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {careersHero.paragraphs.map((p, i) => (
                  <ScrollAnimate key={i} delay={i * 70}>
                    <p>{p}</p>
                  </ScrollAnimate>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {['Growth-first', 'Meaningful projects', 'Tech-led culture'].map((item, index) => (
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
                    'Learning, mentorship, and real delivery exposure',
                    'Cross-functional teams with practical ownership',
                    'Open roles across engineering, design, QA, and data',
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
        aria-label="Careers sections"
        className="sticky top-0 z-30 border-b border-white/60 bg-white/60 shadow-[0_20px_40px_-36px_rgba(15,23,42,0.2)] backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="glass-chip tech-beam shrink-0 rounded-full border border-transparent px-3 py-1.5 font-outfit text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white/90 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <section
          id="why-us"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Why work with us
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
              The things that make Pranavi a place to grow, not just clock in.
            </p>
          </ScrollAnimate>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyWorkWithUs.map((item, i) => (
              <ScrollAnimate key={item.title} delay={i * 45}>
                <article
                  className={cn(
                    'glass-panel glass-outline tech-grid relative h-full rounded-[1.55rem] p-5 transition-all duration-500',
                    'hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_56px_-26px_rgba(var(--primary-rgb),0.28)]',
                  )}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent opacity-80" />
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-outfit text-[15px] font-semibold leading-snug text-slate-900">
                      {item.title}
                    </h3>
                    <Sparkles
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary/70"
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

        <section
          id="roles"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Open positions
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
              Pick a role and email us your resume. We read every application.
            </p>
          </ScrollAnimate>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {openPositions.map((job, i) => (
              <ScrollAnimate key={job.title} delay={i * 40}>
                <article
                  className={cn(
                    'glass-panel glass-outline tech-grid group relative flex h-full flex-col rounded-[1.55rem] p-5 transition-all duration-500',
                    'hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_56px_-26px_rgba(var(--primary-rgb),0.28)]',
                  )}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/80 to-transparent opacity-80" />
                  <h3 className="font-outfit text-[15px] font-semibold leading-snug text-slate-900 md:text-base">
                    {job.title}
                  </h3>
                  <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
                    {job.description}
                  </p>
                  <a
                    href={`mailto:${applyInfo.email}?subject=${encodeURIComponent(`Application - ${job.title}`)}`}
                    className="mt-4 inline-flex items-center gap-1.5 font-outfit text-xs font-semibold uppercase tracking-[0.14em] text-primary transition-colors group-hover:gap-2"
                  >
                    Apply
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </a>
                </article>
              </ScrollAnimate>
            ))}
          </div>
        </section>

        <section
          id="you"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <ScrollAnimate>
                <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  Who we&apos;re looking for
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  No perfection required, just curiosity, ownership, and respect for the craft.
                </p>
              </ScrollAnimate>
            </div>
            <ul className="mt-10 space-y-3 lg:col-span-7 lg:mt-0">
              {idealCandidateTraits.map((trait, i) => (
                <ScrollAnimate key={trait} delay={i * 50}>
                  <li className="glass-panel tech-grid flex gap-3 rounded-[1.2rem] px-4 py-3 text-sm text-slate-700 md:text-[15px]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {trait}
                  </li>
                </ScrollAnimate>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="process"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Hiring process
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
              Transparent steps from hello to offer.
            </p>
          </ScrollAnimate>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {hiringProcess.map((phase, i) => (
              <ScrollAnimate key={phase.step} delay={i * 55}>
                <li className="glass-panel glass-outline tech-grid relative flex h-full flex-col rounded-[1.55rem] p-5 pt-8">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-primary">
                    Step {phase.step}
                  </span>
                  <h3 className="mt-2 font-outfit text-base font-semibold text-slate-900">
                    {phase.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {phase.description}
                  </p>
                </li>
              </ScrollAnimate>
            ))}
          </ol>
        </section>

        <section
          id="life"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Life at Pranavi Infotech
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              {lifeAtPranavi}
            </p>
          </ScrollAnimate>
        </section>

        <section id="apply" className="scroll-mt-[10rem] py-16 md:py-24">
          <ScrollAnimate>
            <div className="relative overflow-hidden py-8 md:py-12">
              <div className="pointer-events-none absolute inset-0 opacity-40 animate-gridDrift" aria-hidden style={{ backgroundImage: 'linear-gradient(to right, rgb(226 232 240 / 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.35) 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
              <div className="pointer-events-none absolute left-1/2 top-8 h-40 w-[36rem] -translate-x-1/2 rounded-full bg-sky-100/80 blur-3xl" />
              <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/[0.12] blur-3xl animate-floatSlow" />
              <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-accent-purple/[0.12] blur-3xl animate-blob" />

              <div className="relative mx-auto max-w-4xl text-center">
                <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/80 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
                  <span className="absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent animate-beamSweep" />
                </div>
                <div className="pointer-events-none absolute left-8 top-8 h-20 w-px bg-gradient-to-b from-sky-200/70 to-transparent md:left-0 md:h-28" />
                <div className="pointer-events-none absolute right-8 top-8 h-20 w-px bg-gradient-to-b from-sky-200/70 to-transparent md:right-0 md:h-28" />

                <div className="mx-auto flex w-fit items-center gap-2 px-3 py-1.5">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-2.5 w-2.5 rounded-full bg-primary/20 animate-pulseRing" />
                    <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                  </span>
                  <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                    Careers at Pranavi
                  </p>
                </div>

                <h2 className="mt-8 font-outfit text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  {applyInfo.headline}
                </h2>
                <div className="mt-3 min-h-[3.6rem] md:min-h-[4.5rem]">
                  <TypedText
                    phrases={[
                      'send your resume',
                      'start the conversation',
                      'build the future with us',
                    ]}
                    className="bg-gradient-to-r from-slate-900 via-primary to-sky-500 bg-clip-text font-outfit text-3xl font-semibold tracking-tight text-transparent drop-shadow-[0_10px_30px_rgba(59,130,246,0.16)] md:text-5xl"
                  />
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                  {applyInfo.intro} Share your profile and we&apos;ll connect with you if there&apos;s a strong match.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:flex-wrap sm:gap-6">
                  <a
                    href={`mailto:${applyInfo.email}`}
                    className="inline-flex items-center gap-3 font-outfit text-sm font-semibold text-slate-900 transition-colors hover:text-primary"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-primary shadow-[0_10px_24px_-20px_rgba(59,130,246,0.35)]">
                      <Mail className="h-4 w-4 shrink-0" strokeWidth={1.9} />
                    </span>
                    {applyInfo.email}
                  </a>
                  <div className="hidden h-6 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent sm:block" />
                  <div className="inline-flex items-center gap-3 font-outfit text-sm font-medium text-slate-700">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 text-slate-500 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.25)]">
                      <MapPin className="h-4 w-4 shrink-0" strokeWidth={1.9} />
                    </span>
                    {applyInfo.location}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                  {['Growth opportunities', 'Modern workflows', 'Collaborative teams'].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-slate-500"
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
                  Contact form
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </Link>

                <p className="mx-auto mt-10 max-w-3xl border-t border-slate-200/70 pt-6 text-center text-xs leading-relaxed text-slate-500 md:text-sm">
                  {equalOpportunity}
                </p>
              </div>
            </div>
          </ScrollAnimate>
        </section>
      </div>

      <Footer />
    </main>
  )
}
