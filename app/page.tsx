import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhyChooseUs } from '@/components/why-choose-us'
import { ScrollAnimate } from '@/components/scroll-animate'
import { TechAnnouncementBar } from '@/components/tech-announcement-bar'
import { HomeServicesSlider } from '@/components/home-services-slider'
import { HomeWhyApproach } from '@/components/home-why-approach'
import { HomeIndustriesRow } from '@/components/home-industries-row'
import { homePageServices } from '@/lib/data/home-services'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

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

      <section className="relative overflow-hidden border-b border-slate-200/80 pt-28 pb-16 md:pt-32 md:pb-20">
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
            Pranavi Infotech
          </p>
          <h1 className="max-w-4xl font-outfit text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Building Reliable, Scalable, and{' '}
            <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
              Future-Ready
            </span>{' '}
            Digital Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Pranavi Infotech is a technology solutions company focused on helping businesses transform operations,
            improve efficiency, and scale with confidence. We deliver secure, high-performance, and maintainable
            systems aligned with real business objectives.
          </p>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Our approach is rooted in clarity, structured execution, and long-term value creation, ensuring every
            solution is practical, reliable, and built to last.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-900 bg-slate-900 px-6 py-3 font-outfit text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 font-outfit text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

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
              Pranavi Infotech works with organizations to design, develop, and manage technology solutions that solve
              real-world challenges. We understand that technology is not just about development—it is about enabling
              businesses to operate efficiently, make informed decisions, and stay competitive.
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

      <section className="border-y border-slate-100 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl lg:text-4xl">
              Industries we serve
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              Delivering solutions across multiple sectors.
            </p>
          </ScrollAnimate>
          <HomeIndustriesRow />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollAnimate>
            <article className="rounded-3xl border border-slate-200/90 bg-white p-8 md:p-10">
              <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Founder’s message
              </p>
              <h2 className="mt-3 font-outfit text-2xl font-semibold tracking-tight text-slate-900">
                Anupam Mishra — Founder
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Pranavi Infotech was established with a clear focus on delivering dependable technology solutions that
                businesses can rely on. Our objective is to build systems that are functional, scalable, maintainable,
                and aligned with long-term business goals.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                We believe in structured execution, technical clarity, and consistent delivery standards. Our focus
                remains on creating value through reliable systems and building long-term relationships based on trust
                and performance.
              </p>
            </article>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <article className="rounded-3xl border border-slate-200/90 bg-slate-50/90 p-8 md:p-10">
              <p className="font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Our team
              </p>
              <h2 className="mt-3 font-outfit text-2xl font-semibold tracking-tight text-slate-900">
                Skilled professionals driving quality and innovation
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                Our team consists of engineers, designers, and technology specialists who work collaboratively to
                deliver high-quality solutions. Each member is aligned with our focus on accountability, precision,
                and continuous improvement.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                We invest in continuous learning and skill development to ensure our team stays updated with the latest
                technologies and industry practices.
              </p>
            </article>
          </ScrollAnimate>
        </div>
      </section>

      <WhyChooseUs />

      <Footer />
      </main>
    </>
  )
}

