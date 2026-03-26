'use client'

import { CheckCircle2, Zap, TrendingUp, Award, ArrowRight } from 'lucide-react'
import { ScrollAnimate } from './scroll-animate'
import Link from 'next/link'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { Button } from '@/components/ui/button'

const reasons = [
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Years of experience working with different types of businesses.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
  },
  {
    icon: Zap,
    title: 'Quick Implementation',
    description: 'We deliver fast results while making sure everything works perfectly.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Consistent track record of delivering measurable business value.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015',
  },
  {
    icon: CheckCircle2,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes for superior outcomes.',
    image: 'https://images.unsplash.com/photo-1581092921461-7d15ce20092c?auto=format&fit=crop&q=80&w=2070',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-32 relative overflow-hidden bg-white">
      {/* MINIMAL ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />

        {/* Precision Technical Grid (Light) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Subtle Floating Blobs */}
        <div className="absolute top-0 -left-1/4 w-[50%] h-[50%] bg-primary/[0.03] rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-0 -right-1/4 w-[50%] h-[50%] bg-accent-purple/[0.03] rounded-full blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-fr">

          {/* 1. Header Block — Why Industry Leaders Trust Pranavi */}
          <div className="md:col-span-8 flex flex-col justify-center mb-12 md:mb-0 relative py-8">
            {/* Top kinetic line */}
            <div className="absolute -top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            {/* Subtle watermark */}
            <div className="absolute -top-32 left-0 w-full h-40 opacity-[0.04] select-none pointer-events-none hidden md:block">
              <div className="text-[12rem] font-black tracking-tighter leading-none">TRUST</div>
            </div>

            {/* Status badge */}
            <div className="absolute -top-12 right-0 text-[8px] font-mono text-slate-400 opacity-40 flex items-center gap-2 hidden lg:flex">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SYSTEM_STATUS: ACTIVE_NODE
              <span className="w-12 h-px bg-slate-200" />
              VER_02.9.1
            </div>

            <ScrollAnimate delay={0}>
              <div className="relative flex flex-col items-start text-left max-w-2xl">
                {/* Eyebrow — aligned */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-px bg-primary shrink-0" />
                  <span className="text-primary font-bold tracking-[0.25em] uppercase text-xs">
                    Technical Excellence
                  </span>
                  <span className="w-10 h-px bg-primary shrink-0" />
                </div>

                {/* Headline — strong hierarchy, catchy lockup */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-[1.08]">
                  <span className="block">Why Industry Leaders</span>
                  <span className="block mt-2 bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent italic">
                    Trust Pranavi.
                  </span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/30 rounded-full mt-6" />

                {/* Tagline — clear structure & alignment */}
                <div className="mt-8 space-y-6 w-full">
                  <p className="text-base sm:text-lg text-slate-600 leading-[1.75] font-normal max-w-xl">
                    We bridge the gap between complex engineering and strategic business imperatives with{' '}
                    <span className="font-semibold text-slate-800">technical precision</span> and{' '}
                    <span className="font-semibold text-slate-800">global scalability</span>.
                  </p>
                  {/* Pill cards — structured 2-col grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
                    {[
                      { label: 'Architecture', value: 'Enterprise Core', tag: 'CORE_V4' },
                      { label: 'Deployment', value: 'Multi-Region', tag: 'EDGE_01' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-col p-4 sm:p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/25 transition-all duration-300 group/mini"
                      >
                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex justify-between items-center">
                          {item.label}
                          <span className="text-primary opacity-0 group-hover/mini:opacity-100 italic transition-opacity text-[8px]">{item.tag}</span>
                        </div>
                        <div className="text-sm font-black text-slate-900 tracking-tight">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

          {/* 2. Primary Stat Block */}
          <div className="md:col-span-4 md:row-span-2">
            <ScrollAnimate delay={100} className="h-full">
              <div className="h-full p-8 flex flex-col justify-between bg-slate-950 text-white rounded-[2rem] relative overflow-hidden group shadow-2xl shadow-primary/20 transition-all duration-700 hover:-translate-y-2 border border-white/5">
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-10 shadow-[0_0_20px_-5px_rgba(var(--primary-rgb),0.5)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Award size={24} className="text-white" />
                  </div>
                  <div className="text-6xl font-black mb-3 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-primary/50">99.9%</div>
                  <div className="text-lg font-bold opacity-90 mb-5 tracking-tight uppercase leading-tight">Uptime SLA <br />Guaranteed</div>

                  <div className="space-y-3 mb-10">
                    {[
                      'Enterprise Architecture',
                      'Zero Tech Debt',
                      'Future-Proof',
                      'ISO 27001'
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-70">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4 border-t border-white/10 pt-6 mt-auto">
                    {[
                      { label: 'Uptime', value: '99.99%' },
                      { label: 'Success', value: '100%' },
                      { label: 'Support', value: '24/7' }
                    ].map((stat) => (
                      <div key={stat.label} className="flex justify-between items-end border-b border-white/5 pb-1">
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-40">{stat.label}</span>
                        <span className="text-base font-black tracking-tight text-primary">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kinetic Background Elements */}
                <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '24px 24px' }} />
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/20 rounded-full blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45" />
              </div>
            </ScrollAnimate>
          </div>

          {/* 3-6. Reason Cards */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 md:-mt-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <ScrollAnimate key={reason.title} delay={200 + index * 100}>
                  <div className="relative isolate h-full group">
                    <div className="absolute -inset-4 bg-primary/10 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-700 rounded-full z-0 group-hover:scale-105" />

                    <SpotlightCard className="h-full bg-white border-slate-100 hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-[1.5rem] overflow-hidden">
                      {/* Image Header - Ultra Compact */}
                      <div className="relative h-24 overflow-hidden">
                        <img
                          src={reason.image}
                          alt={reason.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                      </div>

                      <div className="p-4 pt-0 flex flex-col h-full relative z-10">
                        <div className="w-8 h-8 bg-white rounded-lg shadow-md border border-slate-100 flex items-center justify-center mb-3 text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 -mt-5 relative z-20 backdrop-blur-md bg-white/80">
                          <Icon size={16} />
                        </div>
                        <h3 className="text-xs font-black text-slate-900 mb-1 tracking-tight group-hover:text-primary transition-colors">{reason.title}</h3>
                        <p className="text-[10px] text-slate-500/90 leading-normal group-hover:text-slate-600 transition-colors flex-grow font-light">{reason.description}</p>

                        <div className="absolute top-3 right-3 text-[6px] font-mono text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                          ID_{index + 1}
                        </div>
                      </div>
                    </SpotlightCard>
                  </div>
                </ScrollAnimate>
              )
            })}
          </div>

          {/* 7. Bottom CTA Redesign */}
          <div className="md:col-span-12 mt-20">
            <ScrollAnimate delay={600}>
              <div className="relative p-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-[2.5rem] overflow-hidden group">
                {/* Background Animation */}
                <div className="absolute inset-0 bg-slate-50 transition-colors group-hover:bg-white duration-500" />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scanline" />

                <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="flex items-center gap-8">
                    <div className="relative w-20 h-20 shrink-0">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-45 group-hover:rotate-90 transition-transform duration-700 animate-pulse" />
                      <div className="absolute inset-2 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]">
                        <Zap size={28} className="text-white fill-current" />
                      </div>
                    </div>
                    <div>
                      <div className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        Infrastructure Live
                      </div>
                      <h4 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tighter">
                        Ready to <span className="text-primary italic">Initiate?</span>
                      </h4>
                      <p className="text-slate-500 text-sm font-light mt-2">
                        Join elite global enterprises powered by Pranavi's high-fidelity systems.
                      </p>
                      <div className="flex flex-wrap gap-3 mt-6">
                        {['Scalable Cloud', 'AI Optimized', 'Secured Core'].map((feature) => (
                          <div key={feature} className="flex items-center gap-2 px-3 py-1 bg-white/50 border border-slate-200/50 rounded-full backdrop-blur-sm group-hover:border-primary/20 transition-colors duration-500">
                            <div className="w-1 h-1 rounded-full bg-primary" />
                            <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 shrink-0">
                    <div className="hidden lg:block text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Reach</div>
                      <div className="text-sm font-black text-slate-900 tracking-tight">Active Deployment</div>
                    </div>
                    <Link href="/contact">
                      <button className="relative px-16 py-5 bg-slate-950 text-white rounded-2xl text-xs font-black tracking-[0.3em] uppercase overflow-hidden group/btn shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-1">
                        <span className="relative z-10">Get Started Now</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent-purple opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                        <div className="absolute -inset-2 bg-white/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-all duration-500 -translate-x-full group-hover/btn:translate-x-full" />
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Technical Integrity Bar (Bottom) */}
                <div className="relative border-t border-slate-200/50 bg-slate-100/30 px-8 py-3 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6 text-[8px] font-mono text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      ENCRYPTION: AES-256
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      LATENCY: &lt;50MS
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      INTEGRITY: 100%
                    </span>
                  </div>
                  <div className="text-[7px] font-mono text-slate-300">
                    AUTH_PROTOCOL_V4.2 // PRANAVI_INFOTECH_CORE_SERVICES
                  </div>
                </div>
              </div>
            </ScrollAnimate>

            {/* Gap Filler: Global Engineering Capabilities */}
            <ScrollAnimate delay={800}>
              <div className="mt-20 pt-16 border-t border-slate-100/50 flex flex-col items-center">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em] mb-12 flex items-center gap-4">
                  <span className="w-12 h-px bg-slate-100" />
                  Global Engineering Capabilities
                  <span className="w-12 h-px bg-slate-100" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
                  {[
                    { value: '250+', label: 'Project Nodes', detail: 'Deployed Worldwide' },
                    { value: '45+', label: 'Global Regions', detail: 'Low-Latency Edge' },
                    { value: '99.9%', label: 'Uptime SLA', detail: 'Enterprise Grade' },
                    { value: '24/7', label: 'Tech Support', detail: 'Expert Monitoring' }
                  ].map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center text-center group/stat cursor-default">
                      <div className="text-4xl font-black text-slate-900 tracking-tighter mb-2 group-hover/stat:text-primary transition-colors duration-500">
                        {stat.value}
                      </div>
                      <div className="text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-1">{stat.label}</div>
                      <div className="text-[9px] font-medium text-slate-400 uppercase tracking-tight opacity-0 group-hover/stat:opacity-100 transition-opacity duration-500">
                        {stat.detail}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technical Ecosystem - Designed Grid */}
                <div className="mt-32 relative flex flex-col items-center max-w-6xl mx-auto border-t border-slate-100/30 pt-24">
                  {/* Background Watermark */}
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[10rem] font-black text-slate-100/50 select-none pointer-events-none tracking-tighter opacity-40">
                    STACK
                  </div>

                  <div className="relative z-10 flex flex-col items-center mb-16">
                    <div className="text-primary font-bold tracking-[0.3em] uppercase text-[9px] mb-4 flex items-center gap-2">
                      <Zap size={12} className="fill-current" />
                      Engineering Ecosystem
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                      Core <span className="text-primary italic">Technologies</span>
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 opacity-30" />
                  </div>

                  <div className="flex flex-wrap justify-center gap-3 opacity-80 hover:opacity-100 transition-all duration-1000 px-4">
                    {[
                      { name: 'Next.js', cat: 'frontend' }, { name: 'React', cat: 'frontend' }, { name: 'TypeScript', cat: 'frontend' },
                      { name: 'Node.js', cat: 'backend' }, { name: 'Go', cat: 'backend' }, { name: 'Python', cat: 'backend' },
                      { name: 'Rust', cat: 'backend' }, { name: 'AWS', cat: 'cloud' }, { name: 'Azure', cat: 'cloud' },
                      { name: 'GCP', cat: 'cloud' }, { name: 'Kubernetes', cat: 'devops' }, { name: 'Docker', cat: 'devops' },
                      { name: 'Terraform', cat: 'devops' }, { name: 'PostgreSQL', cat: 'data' }, { name: 'MongoDB', cat: 'data' },
                      { name: 'Redis', cat: 'data' }, { name: 'Elasticsearch', cat: 'data' }, { name: 'GraphQL', cat: 'data' },
                      { name: 'PyTorch', cat: 'ai' }, { name: 'TensorFlow', cat: 'ai' }, { name: 'OpenAI', cat: 'ai' },
                      { name: 'Tailwind CSS', cat: 'frontend' }, { name: 'Framer Motion', cat: 'frontend' }, { name: 'Three.js', cat: 'frontend' },
                      { name: 'Vite', cat: 'devops' }, { name: 'Svelte', cat: 'frontend' }, { name: 'Vue.js', cat: 'frontend' }
                    ].map((tech) => (
                      <div key={tech.name} className="p-1 px-3 bg-white border border-slate-100 rounded-full hover:border-primary/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group/chip flex items-center gap-2 cursor-default">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors ${tech.cat === 'frontend' ? 'bg-blue-400 group-hover/chip:bg-primary' :
                          tech.cat === 'backend' ? 'bg-emerald-400 group-hover/chip:bg-primary' :
                            tech.cat === 'cloud' ? 'bg-orange-400 group-hover/chip:bg-primary' :
                              tech.cat === 'ai' ? 'bg-purple-400 group-hover/chip:bg-primary' :
                                'bg-slate-300 group-hover/chip:bg-primary'
                          }`} />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600 group-hover/chip:text-slate-900 transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollAnimate>
          </div>

        </div>
      </div>
    </section>
  )
}
