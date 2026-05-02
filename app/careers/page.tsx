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
    <main className="min-h-screen bg-white text-slate-900 selection:bg-primary/20 selection:text-slate-900">
      <Navbar />

      {/* Hero */}
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

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex items-center gap-2 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {careersHero.eyebrow}
          </p>
          <h1 className="max-w-3xl font-outfit text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {careersHero.titleLead}{' '}
            <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
              {careersHero.titleAccent}
            </span>
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {careersHero.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </header>

      {/* Jump nav */}
      <nav
        aria-label="Careers sections"
        className="sticky top-[calc(var(--announcement-height,0px)+3.5rem)] z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-transparent px-3 py-1.5 font-outfit text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 transition-colors hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Why work with us */}
        <section
          id="why-us"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Why work with us
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
              The things that make Pranavi a place to grow—not just clock in.
            </p>
          </ScrollAnimate>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whyWorkWithUs.map((item, i) => (
              <ScrollAnimate key={item.title} delay={i * 45}>
                <article
                  className={cn(
                    'h-full rounded-2xl border border-slate-200/90 bg-white p-5 transition-all duration-200',
                    'hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_40px_-24px_rgba(var(--primary-rgb),0.3)]',
                  )}
                >
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

        {/* Open positions */}
        <section
          id="roles"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Open positions
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600 md:text-base">
              Pick a role and email us your resume—we read every application.
            </p>
          </ScrollAnimate>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {openPositions.map((job, i) => (
              <ScrollAnimate key={job.title} delay={i * 40}>
                <article
                  className={cn(
                    'group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 transition-all duration-200',
                    'hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_40px_-24px_rgba(var(--primary-rgb),0.3)]',
                  )}
                >
                  <h3 className="font-outfit text-[15px] font-semibold leading-snug text-slate-900 md:text-base">
                    {job.title}
                  </h3>
                  <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
                    {job.description}
                  </p>
                  <a
                    href={`mailto:${applyInfo.email}?subject=${encodeURIComponent(`Application — ${job.title}`)}`}
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

        {/* Who we seek */}
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
                  No perfection required—just curiosity, ownership, and respect
                  for the craft.
                </p>
              </ScrollAnimate>
            </div>
            <ul className="mt-10 space-y-3 lg:col-span-7 lg:mt-0">
              {idealCandidateTraits.map((trait, i) => (
                <ScrollAnimate key={trait} delay={i * 50}>
                  <li className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm text-slate-700 md:text-[15px]">
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

        {/* Hiring process */}
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
                <li className="relative flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-5 pt-8">
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

        {/* Life at Pranavi */}
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

        {/* Apply */}
        <section
          id="apply"
          className="scroll-mt-[10rem] py-16 md:py-24"
        >
          <ScrollAnimate>
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/90 p-8 md:p-12">
              <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                {applyInfo.headline}
              </h2>
              <p className="mt-3 text-slate-600">{applyInfo.intro}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
                <a
                  href={`mailto:${applyInfo.email}`}
                  className="inline-flex items-center gap-2 font-outfit text-lg font-semibold text-primary hover:underline"
                >
                  <Mail className="h-5 w-5 shrink-0" strokeWidth={1.75} />
                  {applyInfo.email}
                </a>
                <span className="hidden text-slate-300 sm:inline">·</span>
                <span className="inline-flex items-center gap-2 text-slate-700">
                  <MapPin className="h-5 w-5 shrink-0 text-slate-400" strokeWidth={1.75} />
                  {applyInfo.location}
                </span>
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-6 py-3 font-outfit text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Contact form
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <p className="mt-10 border-t border-slate-200/80 pt-8 text-center text-xs leading-relaxed text-slate-500 md:text-sm">
                {equalOpportunity}
              </p>
            </div>
          </ScrollAnimate>
        </section>
      </div>

      <Footer />
    </main>
  )
}
