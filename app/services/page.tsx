import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollAnimate } from '@/components/scroll-animate'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import {
  Code2,
  Briefcase,
  Cloud,
  Globe,
  Smartphone,
  Layers,
  Terminal,
  Brain,
  Cpu,
  BarChart3,
  Zap,
  Palette,
  Shield,
  Activity,
  RefreshCw,
  Settings,
  CheckCircle2,
  Microscope,
  Dna,
  Gauge,
  Bot,
  Lock,
} from 'lucide-react'
import { getServices } from '@/lib/cms'

const iconMap: { [key: string]: any } = {
  Code2,
  Briefcase,
  Cloud,
  Globe,
  Smartphone,
  Layers,
  Terminal,
  Brain,
  Cpu,
  BarChart3,
  Zap,
  Palette,
  Shield,
  Activity,
  RefreshCw,
  Settings,
  CheckCircle2,
  Microscope,
  Dna,
  Gauge,
  Bot,
  Lock,
}

export const metadata = {
  title: 'Services - Pranavi Infotech',
  description:
    'Explore our comprehensive technology solutions including software development, consulting, cloud services, and more.',
}

export default async function ServicesPage() {
  const serviceCategories = await getServices()
  return (
    <main className="bg-white selection:bg-primary selection:text-white relative min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-12 md:pb-16 overflow-hidden bg-slate-50">
        {/* VIBRANT ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.1),transparent_50%),radial-gradient(circle_at_0%_100%,rgba(var(--accent-purple-rgb),0.05),transparent_50%)] animate-pulse-subtle" />
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-blob" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left max-w-3xl">
            <div className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 flex items-center justify-center lg:justify-start gap-4">
              <span className="w-12 h-px bg-primary animate-expandRight" />
              <span className="animate-revealText" style={{ animationDelay: '0.2s' }}>02 / Comprehensive Capabilities</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] animate-maskReveal mb-8">
              Modern <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-purple to-primary italic">Software.</span>
            </h1>
            <p className="text-xl text-slate-500/80 leading-relaxed font-light animate-revealText" style={{ animationDelay: '0.8s' }}>
              We provide expert software development and smart technology solutions to help your business grow and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 bg-white relative z-10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {serviceCategories.map((service, index) => {
              const Icon = iconMap[service.icon] || Briefcase
              return (
                <ScrollAnimate key={service.id || service.title} delay={index * 50}>
                  <div className="relative isolate h-full group">
                    {/* Background Bloom */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 rounded-full z-0`} />

                    <SpotlightCard
                      className="h-full bg-white border-slate-100 hover:border-transparent transition-all duration-700 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 group rounded-[2.5rem]"
                    >
                      {/* Image Header */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                      </div>

                      <div className="p-10 pt-4 h-full flex flex-col relative z-10">
                        {/* Icon Container */}
                        <div className={`w-16 h-16 ${service.bg} ${service.color} rounded-2xl flex items-center justify-center mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_30px_-5px] group-hover:shadow-current -mt-12 bg-white/80 backdrop-blur-md shadow-lg border border-white/20`}>
                          <Icon className="w-8 h-8" />
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-slate-800 transition-colors duration-500 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-slate-500/80 leading-relaxed font-light mb-8 flex-grow text-sm group-hover:text-slate-600 transition-colors duration-500">
                          {service.description}
                        </p>


                        {/* Dynamic Accent Line */}
                        <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${service.accent} w-0 group-hover:w-full transition-all duration-700`} />
                      </div>
                    </SpotlightCard>
                  </div>
                </ScrollAnimate>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50 relative overflow-hidden selection:bg-primary selection:text-white">
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(var(--primary-rgb),0.03),transparent_50%),radial-gradient(circle_at_0%_100%,rgba(var(--accent-purple-rgb),0.03),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.01]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimate>
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Value Propositions
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6 italic">
                Why Choose <span className="text-primary not-italic">Us.</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
                We are committed to delivering high-quality work and professional engineering that you can trust.
              </p>
            </div>
          </ScrollAnimate>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Assurance',
                tag: 'RELIABLE',
                description: 'We build strong and reliable software that works perfectly for your business needs.',
                icon: Layers,
                image: 'https://images.unsplash.com/photo-1581092921461-7d15ce20092c?auto=format&fit=crop&q=80&w=2070',
              },
              {
                title: 'Expert Team',
                tag: 'EXPERTISE',
                description: 'Our team of experienced engineers uses the latest technology to solve your problems.',
                icon: Microscope,
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070',
              },
              {
                title: 'Smart Strategy',
                tag: 'PLANNING',
                description: 'We help you plan for the future by creating clear and effective technical solutions.',
                icon: Dna,
                image: 'https://images.unsplash.com/photo-1454165833762-02bc50e61d5d?auto=format&fit=crop&q=80&w=2070',
              },
              {
                title: 'Fast & Efficient',
                tag: 'SPEED',
                description: 'We make sure your software runs as fast as possible to keep your users happy.',
                icon: Gauge,
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
              },
              {
                title: 'Modern Tech',
                tag: 'INNOVATION',
                description: 'We use modern tools and AI to keep your business competitive and ahead of others.',
                icon: Bot,
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2070',
              },
              {
                title: 'Top Security',
                tag: 'PROTECTION',
                description: 'We keep your data safe by using the best security standards and encryption.',
                icon: Lock,
                image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <ScrollAnimate key={item.title} delay={index * 100}>
                  <div className="relative isolate h-full group">
                    {/* ENHANCED VIBRANT GLOWING LIGHT */}
                    <div className="absolute -inset-8 bg-primary/25 opacity-0 group-hover:opacity-100 blur-[100px] transition-all duration-700 rounded-full z-0 group-hover:scale-125" />

                    <SpotlightCard className="h-full bg-white border-slate-100 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 rounded-[2.5rem] overflow-hidden">
                      {/* Image Header */}
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                      </div>

                      <div className="p-10 pt-2 flex flex-col h-full relative z-10">
                        <div className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-8 flex items-center gap-3">
                          <span className="w-8 h-px bg-primary/20 group-hover:bg-primary transition-all duration-500" />
                          {item.tag}
                        </div>

                        <div className="w-12 h-12 bg-white rounded-xl shadow-lg border border-slate-100 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 -mt-14 relative z-20 backdrop-blur-md bg-white/80">
                          <Icon size={24} />
                        </div>

                        <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-slate-500 leading-relaxed font-light text-sm group-hover:text-slate-600 transition-colors flex-grow">
                          {item.description}
                        </p>
                      </div>
                    </SpotlightCard>
                  </div>
                </ScrollAnimate>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
