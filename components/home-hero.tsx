'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-900 bg-[#030712] pt-28 pb-20 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_80%_22%,rgba(56,189,248,0.12),transparent_24%),linear-gradient(180deg,#020617_0%,#030712_54%,#020617_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.45]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,0.4))',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.7]"
        aria-hidden
        style={{
          backgroundImage:
            'linear-gradient(90deg, transparent 0 8%, rgba(125,211,252,0.45) 8.2%, transparent 8.4%), linear-gradient(180deg, transparent 0 16%, rgba(191,219,254,0.36) 16.2%, transparent 16.4%), linear-gradient(90deg, transparent 0 38%, rgba(196,181,253,0.34) 38.2%, transparent 38.4%), linear-gradient(180deg, transparent 0 52%, rgba(125,211,252,0.28) 52.2%, transparent 52.4%), linear-gradient(90deg, transparent 0 68%, rgba(191,219,254,0.32) 68.2%, transparent 68.4%), linear-gradient(180deg, transparent 0 76%, rgba(165,180,252,0.26) 76.2%, transparent 76.4%), linear-gradient(90deg, transparent 0 88%, rgba(125,211,252,0.3) 88.2%, transparent 88.4%)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />
      <div className="pointer-events-none absolute left-[12%] top-[18%] h-32 w-32 rounded-full bg-sky-400/12 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-[14%] top-[28%] h-40 w-40 rounded-full bg-indigo-400/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute left-[48%] bottom-[14%] h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl animate-pulse" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <span className="absolute left-[6%] top-[14%] h-px w-24 bg-gradient-to-r from-transparent via-sky-300/80 to-transparent animate-[pulse_4s_ease-in-out_infinite]" />
        <span className="absolute left-[18%] top-[38%] h-16 w-px bg-gradient-to-b from-transparent via-slate-200/70 to-transparent animate-[pulse_5s_ease-in-out_infinite]" />
        <span className="absolute right-[16%] top-[22%] h-px w-28 bg-gradient-to-r from-transparent via-indigo-200/80 to-transparent animate-[pulse_4.5s_ease-in-out_infinite]" />
        <span className="absolute right-[10%] bottom-[24%] h-20 w-px bg-gradient-to-b from-transparent via-cyan-200/60 to-transparent animate-[pulse_5.5s_ease-in-out_infinite]" />
        <span className="absolute left-[34%] bottom-[18%] h-px w-20 bg-gradient-to-r from-transparent via-sky-100/80 to-transparent animate-[pulse_4.8s_ease-in-out_infinite]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl py-10 md:py-16">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 font-outfit text-[10px] font-semibold uppercase tracking-[0.26em] text-sky-100/80 backdrop-blur-sm">
            Professional technology delivery
          </div>

          <h1 className="mt-7 max-w-4xl font-outfit text-5xl font-semibold leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.75rem]">
            Modern systems
            <span className="block text-slate-300">for serious</span>
            <span className="block bg-gradient-to-r from-sky-200 via-white to-indigo-200 bg-clip-text text-transparent">
              business growth.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            We build secure software, cloud infrastructure, and automation with a calm execution style and a clear
            technical standard.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-outfit text-sm font-semibold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Start a project
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <div className="font-outfit text-[11px] font-medium uppercase tracking-[0.24em] text-slate-400">
              Reliable. Scalable. Professional.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
