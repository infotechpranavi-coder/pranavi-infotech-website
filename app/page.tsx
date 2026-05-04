import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhyChooseUs } from '@/components/why-choose-us'
import { ScrollAnimate } from '@/components/scroll-animate'
import { TechAnnouncementBar } from '@/components/tech-announcement-bar'
import { HomeHero } from '@/components/home-hero'
import { HomeServicesSlider } from '@/components/home-services-slider'
import { HomeWhyApproach } from '@/components/home-why-approach'
import { homePageServices } from '@/lib/data/home-services'
import { TypedText } from '@/components/ui/typed-text'

export const metadata = {
  title: 'Pranavi Infotech - Enterprise Technology Solutions',
  description:
    'Building reliable, scalable, and future-ready digital solutions for real business outcomes.',
}

export default function HomePage() {
  return (
    <>
      <TechAnnouncementBar />
      <main className="min-h-screen bg-white text-slate-900 selection:bg-primary/20 selection:text-slate-900">
        <Navbar />
        <HomeHero />

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Company overview
            </h2>
            <p className="mt-2 text-sm text-slate-600 md:text-base">
              A technology partner focused on business outcomes.
            </p>
          </ScrollAnimate>
          <div className="mt-8 space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
            <ScrollAnimate delay={60}>
              <p>
                Pranavi Infotech works with organizations to design, develop, and manage technology solutions that
                solve real-world challenges. We understand that technology is not just about development, it is about
                enabling businesses to operate efficiently, make informed decisions, and stay competitive.
              </p>
            </ScrollAnimate>
            <ScrollAnimate delay={120}>
              <p>
                Our team brings together expertise across application development, cloud infrastructure, enterprise
                systems, and data-driven solutions to deliver integrated and scalable platforms.
              </p>
            </ScrollAnimate>
            <ScrollAnimate delay={180}>
              <p>
                We focus on building long-term partnerships by delivering consistent quality, maintaining transparency,
                and ensuring accountability in every project.
              </p>
            </ScrollAnimate>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-slate-50/70 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollAnimate>
              <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Our services
              </h2>
              <p className="mt-2 text-sm text-slate-600 md:text-base">
                Comprehensive IT services for modern businesses.
              </p>
            </ScrollAnimate>
            <div className="mt-10">
              <HomeServicesSlider services={homePageServices} />
            </div>
          </div>
        </section>

        <HomeWhyApproach />

        <WhyChooseUs />

        <section className="relative mx-auto max-w-6xl overflow-hidden px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-35 animate-gridDrift"
            aria-hidden
            style={{
              backgroundImage:
                'linear-gradient(to right, rgb(226 232 240 / 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.3) 1px, transparent 1px)',
              backgroundSize: '42px 42px',
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-12 h-40 w-[34rem] -translate-x-1/2 rounded-full bg-sky-100/75 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
            <span className="absolute left-0 top-0 h-px w-28 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent animate-beamSweep" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollAnimate>
              <article className="relative">
                <div className="pointer-events-none absolute left-0 top-6 hidden h-24 w-px bg-gradient-to-b from-sky-200/70 to-transparent lg:block" />
                <div className="inline-flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-2.5 w-2.5 rounded-full bg-primary/20 animate-pulseRing" />
                    <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                  </span>
                  <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Founder&apos;s message
                  </p>
                </div>
                <p className="mt-6 font-outfit text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Built on
                </p>
                <div className="mt-2 min-h-[2.8rem] md:min-h-[3.8rem]">
                  <TypedText
                    phrases={['dependable delivery', 'scalable systems', 'long-term trust']}
                    className="bg-gradient-to-r from-slate-900 via-primary to-sky-500 bg-clip-text font-outfit text-2xl font-semibold tracking-tight text-transparent drop-shadow-[0_10px_30px_rgba(59,130,246,0.14)] md:text-4xl"
                  />
                </div>
                <h2 className="mt-4 font-outfit text-2xl font-semibold tracking-tight text-slate-900">
                  Anupam Mishra - Founder
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Pranavi Infotech was established with a clear focus on delivering dependable technology solutions that
                  businesses can rely on. Our objective is to build systems that are functional, scalable,
                  maintainable, and aligned with long-term business goals.
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                  We believe in structured execution, technical clarity, and consistent delivery standards. Our focus
                  remains on creating value through reliable systems and building long-term relationships based on trust
                  and performance.
                </p>
              </article>
            </ScrollAnimate>

            <ScrollAnimate delay={100}>
              <article className="relative">
                <div className="pointer-events-none absolute right-0 top-6 hidden h-24 w-px bg-gradient-to-b from-sky-200/70 to-transparent lg:block" />
                <div className="inline-flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="absolute h-2.5 w-2.5 rounded-full bg-primary/20 animate-pulseRing" />
                    <span className="relative h-2 w-2 rounded-full bg-gradient-to-r from-primary to-sky-400" />
                  </span>
                  <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                    Our team
                  </p>
                </div>
                <p className="mt-6 font-outfit text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
                  Driven by
                </p>
                <div className="mt-2 min-h-[2.8rem] md:min-h-[3.8rem]">
                  <TypedText
                    phrases={['quality and innovation', 'cross-functional clarity', 'continuous improvement']}
                    className="bg-gradient-to-r from-slate-900 via-primary to-sky-500 bg-clip-text font-outfit text-2xl font-semibold tracking-tight text-transparent drop-shadow-[0_10px_30px_rgba(59,130,246,0.14)] md:text-4xl"
                  />
                </div>
                <h2 className="mt-4 font-outfit text-2xl font-semibold tracking-tight text-slate-900">
                  Skilled professionals driving quality and innovation
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                  Our team consists of engineers, designers, and technology specialists who work collaboratively to
                  deliver high-quality solutions. Each member is aligned with our focus on accountability, precision,
                  and continuous improvement.
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                  We invest in continuous learning and skill development to ensure our team stays updated with the
                  latest technologies and industry practices.
                </p>
              </article>
            </ScrollAnimate>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
