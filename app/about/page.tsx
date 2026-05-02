import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollAnimate } from '@/components/scroll-animate'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import {
  aboutClosing,
  aboutHero,
  approach,
  coreValues,
  founder,
  missionVision,
  team,
  whatWeDo,
} from '@/lib/data/about-page'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'About Pranavi Infotech',
  description:
    'Learn about Pranavi Infotech: mission, vision, approach, values, founder message, and the team behind reliable technology delivery.',
}

const sectionLinks = [
  { href: '#mission', label: 'Mission & vision' },
  { href: '#what-we-do', label: 'What we do' },
  { href: '#approach', label: 'Approach' },
  { href: '#values', label: 'Values' },
  { href: '#founder', label: 'Founder' },
  { href: '#team', label: 'Team' },
]

export default function AboutPage() {
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
            {aboutHero.eyebrow}
          </p>
          <h1 className="max-w-4xl font-outfit text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            {aboutHero.titleLead}{' '}
            <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
              {aboutHero.titleAccent}
            </span>
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {aboutHero.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </header>

      {/* Jump nav */}
      <nav
        aria-label="About sections"
        className="sticky top-[calc(var(--announcement-height,0px)+3.5rem)] z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8 scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {sectionLinks.map((item) => (
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
        {/* Mission + Vision */}
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
                    'h-full rounded-2xl border border-slate-200/90 bg-white p-6 transition-all duration-200',
                    'hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_40px_-24px_rgba(var(--primary-rgb),0.3)]',
                  )}
                >
                  <h3 className="font-outfit text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
                    {card.description}
                  </p>
                </article>
              </ScrollAnimate>
            ))}
          </div>
        </section>

        {/* What we do */}
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
                  <p>{p}</p>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section
          id="approach"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              {approach.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              {approach.subtitle}
            </p>
          </ScrollAnimate>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {approach.steps.map((step, i) => (
              <ScrollAnimate key={step.title} delay={i * 45}>
                <li className="rounded-2xl border border-slate-200/90 bg-white p-5">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-primary">
                    Step {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-2 font-outfit text-base font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </li>
              </ScrollAnimate>
            ))}
          </ol>
        </section>

        {/* Values */}
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
                    'h-full rounded-2xl border border-slate-200/90 bg-white p-5 transition-all duration-200',
                    'hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_12px_40px_-24px_rgba(var(--primary-rgb),0.3)]',
                  )}
                >
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

        {/* Founder */}
        <section
          id="founder"
          className="scroll-mt-[10rem] border-b border-slate-100 py-16 md:py-24"
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <ScrollAnimate className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={founder.imageSrc}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                </div>
              </div>
              <p className="mt-4 text-xs text-slate-500">
                Replace this placeholder with a real photo by adding{' '}
                <span className="font-mono text-slate-700">
                  public/founder-anupam.jpg
                </span>{' '}
                and updating{' '}
                <span className="font-mono text-slate-700">
                  founder.imageSrc
                </span>
                .
              </p>
            </ScrollAnimate>

            <div className="lg:col-span-7">
              <ScrollAnimate>
                <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                  {founder.title}
                </p>
                <h2 className="mt-3 font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                  {founder.name}{' '}
                  <span className="text-slate-400 font-normal">— {founder.role}</span>
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

        {/* Team */}
        <section
          id="team"
          className="scroll-mt-[10rem] py-16 md:py-24"
        >
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              {team.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              {team.subtitle}
            </p>
          </ScrollAnimate>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {team.groups.map((g, i) => (
              <ScrollAnimate key={g.title} delay={i * 40}>
                <article className="rounded-2xl border border-slate-200/90 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="font-outfit text-[15px] font-semibold text-slate-900">
                        {g.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {g.description}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollAnimate>
            ))}
          </div>

          {/* Closing positioning */}
          <div className="mt-14 rounded-3xl border border-slate-200/90 bg-slate-50/90 p-8 md:p-12">
            <ScrollAnimate>
              <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.25em] text-primary">
                Closing positioning statement
              </p>
              <p className="mt-6 font-outfit text-lg font-medium leading-relaxed text-slate-800 md:text-xl">
                {aboutClosing}
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-6 py-3 font-outfit text-sm font-semibold text-white transition-colors hover:bg-slate-800"
              >
                Talk to us
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </ScrollAnimate>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
