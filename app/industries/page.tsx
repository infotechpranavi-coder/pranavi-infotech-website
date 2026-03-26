import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollAnimate } from '@/components/scroll-animate'
import {
  BarChart3,
  Heart,
  ShoppingCart,
  Factory,
  GraduationCap,
  TrendingUp,
} from 'lucide-react'

const industries = [
  {
    icon: BarChart3,
    name: 'Financial Services',
    description:
      'Innovative fintech solutions for banking, insurance, and investment firms.',
    expertise:
      'Digital banking, payment systems, risk management, compliance automation',
  },
  {
    icon: Heart,
    name: 'Healthcare',
    description:
      'HIPAA-compliant solutions for hospitals, clinics, and medical providers.',
    expertise:
      'EHR systems, telemedicine platforms, patient management, analytics',
  },
  {
    icon: ShoppingCart,
    name: 'Retail & E-commerce',
    description: 'Omnichannel solutions to enhance customer experience and sales.',
    expertise:
      'E-commerce platforms, inventory management, POS systems, analytics',
  },
  {
    icon: Factory,
    name: 'Manufacturing',
    description:
      'Smart manufacturing solutions to optimize production and reduce costs.',
    expertise: 'IoT platforms, ERP systems, supply chain optimization, automation',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description:
      'EdTech solutions to enhance learning outcomes and institutional efficiency.',
    expertise:
      'Learning management systems, student portals, analytics dashboards',
  },
  {
    icon: TrendingUp,
    name: 'Telecommunications',
    description:
      'Network and service solutions for telecom operators and providers.',
    expertise: 'Network management, billing systems, customer care platforms',
  },
]

export const metadata = {
  title: 'Industries - Pranavi Infotech',
  description:
    'Explore our expertise across financial services, healthcare, retail, manufacturing, education, and telecommunications.',
}

export default function IndustriesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pb-32 overflow-hidden bg-slate-50">
        {/* VIBRANT ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(var(--primary-rgb),0.08),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(var(--accent-purple-rgb),0.05),transparent_50%)] animate-pulse-subtle" />

          {/* Peripheral Glowing Blobs */}
          <div className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%] bg-primary/5 rounded-full blur-[120px] animate-blob" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[60%] h-[60%] bg-accent-purple/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />

          {/* Fine Technical Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left max-w-3xl">
            <div className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center lg:justify-start gap-4">
              <span className="w-12 h-px bg-primary animate-expandRight" />
              <span className="animate-revealText" style={{ animationDelay: '0.2s' }}>03 / Vertical Expertise</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] animate-maskReveal mb-8">
              Industry <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-purple to-primary italic">Deep-Dive.</span>
            </h1>
            <p className="text-xl text-slate-500/80 leading-relaxed font-light animate-revealText" style={{ animationDelay: '0.8s' }}>
              Solving mission-critical compliance and operational challenges with surgical precision across global enterprise sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              return (
                <ScrollAnimate key={industry.name} delay={index * 100}>
                  <div className="relative isolate h-full">
                    {/* Kinetic Reveal Sweep Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-30 pointer-events-none translate-y-[-100%] animate-sweep" style={{ animationDelay: `${index * 100 + 400}ms` }} />

                    <div className="group bg-white/40 backdrop-blur-2xl rounded-2xl p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 border border-border/40 hover:border-primary/20 h-full flex flex-col animate-cardEntrance" style={{ animationDelay: `${index * 100}ms` }}>
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent-purple/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-primary/30">
                        <Icon
                          className="text-primary transition-colors duration-500 group-hover:text-white"
                          size={28}
                        />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                        {industry.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-500 flex-grow">
                        {industry.description}
                      </p>

                      {/* Expertise */}
                      <div className="pt-4 border-t border-border/50 group-hover:border-primary/20 transition-colors duration-500">
                        <p className="text-sm font-bold text-primary mb-2 uppercase tracking-widest">
                          Our Expertise:
                        </p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-500">
                          {industry.expertise}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollAnimate>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <div className="overflow-hidden mb-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-maskReveal">
                  Our Industry Impact
                </h2>
              </div>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '6+',
                label: 'Industries Served',
                description:
                  'Proven expertise across multiple industry verticals',
              },
              {
                number: '500+',
                label: 'Enterprise Clients',
                description: 'Trusted by leading organizations worldwide',
              },
              {
                number: '98%',
                label: 'Satisfaction Rate',
                description: 'Consistent delivery of exceptional results',
              },
            ].map((stat, index) => (
              <ScrollAnimate key={stat.label} delay={index * 100}>
                <div className="relative isolate">
                  {/* Kinetic Reveal Sweep Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-30 pointer-events-none translate-y-[-100%] animate-sweep" style={{ animationDelay: `${index * 100 + 400}ms` }} />

                  <div className="bg-white rounded-xl p-8 text-center border border-border/50 hover:border-primary/20 hover:shadow-2xl transition-all duration-700 animate-cardEntrance" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="text-5xl font-black text-primary tracking-tighter mb-3">
                      {stat.number}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 uppercase tracking-widest">
                      {stat.label}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
