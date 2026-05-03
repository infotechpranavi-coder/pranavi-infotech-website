import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollAnimate } from '@/components/scroll-animate'
import Image from 'next/image'
import { Check, Linkedin, ShieldCheck } from 'lucide-react'
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
        className="border-b border-slate-200/80 bg-white/85 backdrop-blur-md"
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
              <div className="flex flex-col items-start">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={founder.imageSrc}
                    alt={founder.name}
                    fill
                    className="object-contain object-center"
                    priority={false}
                  />
                </div>
                <a
                  href={settings.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${founder.name} LinkedIn`}
                  className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Linkedin className="h-4 w-4" strokeWidth={2} />
                </a>
              </div>
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
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/90 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_48%,#ffffff_100%)] p-6 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.16)] md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.06),transparent_26%)]" />
              <div className="relative">
                <div className="max-w-3xl">
                  <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                    Team structure
                  </p>
                  <h2 className="mt-3 font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                    {team.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {team.subtitle}
                  </p>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ['Cross-functional', 'Engineering, design, QA, DevOps, and data working as one team.'],
                    ['Process-led', 'Clear ownership, practical workflows, and measurable quality standards.'],
                    ['Client-first', 'Professional collaboration centered on clarity, trust, and long-term value.'],
                  ].map(([label, text]) => (
                    <div
                      key={label}
                      className="rounded-[1.35rem] border border-slate-200 bg-white/88 p-4 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.16)]"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-50 text-primary">
                        <Check className="h-4 w-4" strokeWidth={2.5} />
                      </div>
                      <div className="mt-4 font-outfit text-base font-semibold text-slate-900">{label}</div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
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
                      'group relative flex h-full flex-col overflow-hidden rounded-[1.65rem] border border-slate-200/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,250,252,0.96))] p-5 shadow-[0_18px_48px_-34px_rgba(15,23,42,0.16)] transition-all duration-300 md:p-6',
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
                      <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1 font-outfit text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-5 max-w-[16ch] font-outfit text-lg font-semibold leading-tight tracking-tight text-slate-900">
                      {g.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {g.description}
                    </p>

                    <div className="mt-auto pt-5 flex items-center justify-between gap-3">
                      <div className="inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-3 py-1.5 font-outfit text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500 transition-colors duration-300 group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
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
