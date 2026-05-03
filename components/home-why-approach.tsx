import {
  ArrowUpRight,
  BarChart3,
  CloudUpload,
  Code2,
  FileText,
  Headphones,
  Layers,
  Network,
  Search,
  ShieldCheck,
  UserCog,
} from 'lucide-react'
import { ScrollAnimate } from '@/components/scroll-animate'
import {
  homeApproachSteps,
  homeWhyCards,
  type ApproachIcon,
  type WhyCardIcon,
} from '@/lib/data/home-why-approach'
import { cn } from '@/lib/utils'

const whyIcons: Record<WhyCardIcon, typeof UserCog> = {
  'user-cog': UserCog,
  code: Code2,
  layers: Layers,
  chart: BarChart3,
  'shield-check': ShieldCheck,
  network: Network,
}

const approachIcons: Record<ApproachIcon, typeof Search> = {
  search: Search,
  'file-text': FileText,
  code: Code2,
  'shield-check': ShieldCheck,
  'cloud-upload': CloudUpload,
  headphones: Headphones,
}

const pillClass =
  'inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 font-outfit text-[10px] font-bold uppercase tracking-[0.22em] text-blue-600 shadow-none'

const cardShadow =
  'shadow-[0_4px_6px_-1px_rgb(0_0_0_/_0.07),0_2px_4px_-2px_rgb(0_0_0_/_0.05)] hover:shadow-[0_10px_15px_-3px_rgb(0_0_0_/_0.08),0_4px_6px_-4px_rgb(0_0_0_/_0.05)]'

export function HomeWhyApproach() {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-[#f9fafb] py-16 md:py-28">
      {/* Corner glows — reference soft color washes */}
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-400/[0.08] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-violet-400/[0.07] blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(70%,520px)] w-[min(90%,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-16 xl:grid-cols-2 xl:gap-0">
          {/* Left — Why choose us */}
          <div className="min-w-0 xl:border-r xl:border-slate-200 xl:pr-10 2xl:pr-14">
            <ScrollAnimate>
              <span className={pillClass}>Why choose us</span>
              <h2 className="mt-6 font-outfit text-3xl font-bold tracking-tight text-slate-900 md:text-[2.25rem] md:leading-tight">
                Why Pranavi Infotech
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 md:text-base">
                We combine technology, expertise, and commitment to deliver{' '}
                <span className="font-semibold text-blue-600">exceptional digital solutions.</span>
              </p>
            </ScrollAnimate>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:gap-8">
              {homeWhyCards.map((card, i) => {
                const Icon = whyIcons[card.icon]
                return (
                  <ScrollAnimate key={card.title} delay={i * 45}>
                    <article
                      className={cn(
                        'group relative flex h-full min-h-[148px] flex-col rounded-xl border border-slate-200/90 bg-white p-6 transition-all duration-300',
                        cardShadow,
                        'hover:-translate-y-0.5 hover:border-blue-200/80',
                      )}
                    >
                      <div className="flex gap-4">
                        <div
                          className={cn(
                            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-[1.06]',
                            card.accent,
                          )}
                          aria-hidden
                        >
                          <Icon className="h-[22px] w-[22px]" strokeWidth={2} />
                        </div>
                        <div className="min-w-0 flex-1 pr-7">
                          <h3 className="font-outfit text-[15px] font-semibold leading-snug text-slate-900 md:text-base">
                            {card.title}
                          </h3>
                          <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                            {card.description}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        className="absolute bottom-5 right-5 h-4 w-4 text-blue-500/70 transition-colors duration-300 group-hover:text-blue-600"
                        strokeWidth={2.25}
                      />
                    </article>
                  </ScrollAnimate>
                )
              })}
            </div>
          </div>

          {/* Right — Our approach */}
          <div className="min-w-0 xl:pl-10 2xl:pl-14">
            <ScrollAnimate>
              <span className={pillClass}>Our approach</span>
              <h2 className="mt-6 font-outfit text-3xl font-bold tracking-tight text-slate-900 md:text-[2.25rem] md:leading-tight">
                Our Approach
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 md:text-base">
                A structured methodology that ensures consistent results and client satisfaction.
              </p>
            </ScrollAnimate>

            <div className="relative mt-10">
              <div
                className="pointer-events-none absolute left-[26px] top-9 bottom-9 w-px bg-slate-200"
                aria-hidden
              />

              <ol className="relative space-y-6">
                {homeApproachSteps.map((step, i) => {
                  const Icon = approachIcons[step.icon]
                  const num = String(i + 1).padStart(2, '0')

                  return (
                    <ScrollAnimate key={step.title} delay={i * 50}>
                      <li className="relative flex gap-5">
                        <div className="relative flex w-[52px] shrink-0 justify-center pt-1">
                          <div
                            className={cn(
                              'relative z-[2] flex h-11 w-11 items-center justify-center rounded-full text-[11px] font-bold tabular-nums text-white ring-[5px] ring-white',
                              step.circleClass,
                            )}
                            aria-hidden
                          >
                            {num}
                          </div>
                        </div>

                        <article
                          className={cn(
                            'relative z-[2] flex min-w-0 flex-1 gap-4 rounded-xl border border-slate-200/90 bg-white p-5 transition-all duration-300',
                            cardShadow,
                            'hover:-translate-y-0.5 hover:border-blue-200/70',
                          )}
                        >
                          <div
                            className={cn(
                              'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-[1.03]',
                              step.iconTileClass,
                            )}
                            aria-hidden
                          >
                            <Icon className="h-6 w-6" strokeWidth={2} />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-outfit text-base font-semibold text-slate-900">{step.title}</h3>
                            <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{step.description}</p>
                          </div>
                        </article>
                      </li>
                    </ScrollAnimate>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
