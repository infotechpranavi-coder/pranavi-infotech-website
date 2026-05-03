'use client'

import { Zap } from 'lucide-react'
import { ScrollAnimate } from './scroll-animate'
import Link from 'next/link'

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

          {/* Bottom CTA + stats */}
          <div className="md:col-span-12">
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
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 text-[12rem] md:text-[14rem] font-black text-slate-100/55 select-none pointer-events-none tracking-tighter opacity-50">
                    STACK
                  </div>

                  <div className="relative z-10 flex flex-col items-center mb-12 md:mb-16">
                    <div className="text-primary font-bold tracking-[0.28em] uppercase text-[11px] md:text-xs mb-5 flex items-center gap-2.5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-1 ring-primary/15">
                        <Zap size={16} className="fill-current" />
                      </span>
                      Engineering Ecosystem
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
                      Core <span className="text-primary italic">Technologies</span>
                    </h3>
                    <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-60 shadow-[0_0_24px_rgba(var(--primary-rgb),0.35)]" />
                  </div>

                  <div className="flex flex-wrap justify-center gap-3.5 md:gap-4 px-4">
                    {[
                      { name: 'Next.js', cat: 'frontend' }, { name: 'React', cat: 'frontend' }, { name: 'TypeScript', cat: 'frontend' },
                      { name: 'JavaScript', cat: 'frontend' }, { name: 'HTML5', cat: 'frontend' }, { name: 'CSS3', cat: 'frontend' },
                      { name: 'Node.js', cat: 'backend' }, { name: 'Go', cat: 'backend' }, { name: 'Python', cat: 'backend' },
                      { name: 'Rust', cat: 'backend' }, { name: 'Java', cat: 'backend' }, { name: '.NET', cat: 'backend' },
                      { name: 'AWS', cat: 'cloud' }, { name: 'Azure', cat: 'cloud' }, { name: 'GCP', cat: 'cloud' },
                      { name: 'Cloudflare', cat: 'cloud' }, { name: 'Vercel', cat: 'cloud' }, { name: 'Kubernetes', cat: 'devops' },
                      { name: 'Docker', cat: 'devops' }, { name: 'Terraform', cat: 'devops' }, { name: 'GitHub Actions', cat: 'devops' },
                      { name: 'Jenkins', cat: 'devops' }, { name: 'PostgreSQL', cat: 'data' }, { name: 'MongoDB', cat: 'data' },
                      { name: 'Redis', cat: 'data' }, { name: 'Elasticsearch', cat: 'data' }, { name: 'GraphQL', cat: 'data' },
                      { name: 'MySQL', cat: 'data' }, { name: 'Kafka', cat: 'data' }, { name: 'Snowflake', cat: 'data' },
                      { name: 'PyTorch', cat: 'ai' }, { name: 'TensorFlow', cat: 'ai' }, { name: 'OpenAI', cat: 'ai' },
                      { name: 'LangChain', cat: 'ai' }, { name: 'Hugging Face', cat: 'ai' }, { name: 'Vector DBs', cat: 'ai' },
                      { name: 'Tailwind CSS', cat: 'frontend' }, { name: 'Framer Motion', cat: 'frontend' }, { name: 'Three.js', cat: 'frontend' },
                      { name: 'Vite', cat: 'devops' }, { name: 'Svelte', cat: 'frontend' }, { name: 'Vue.js', cat: 'frontend' },
                      { name: 'Nuxt', cat: 'frontend' }, { name: 'Astro', cat: 'frontend' }
                    ].map((tech) => (
                      <div
                        key={tech.name}
                        className="group/chip flex cursor-default items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/90 px-4 py-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.04] hover:border-primary/45 hover:bg-white hover:shadow-[0_12px_40px_-12px_rgba(var(--primary-rgb),0.35)] hover:ring-2 hover:ring-primary/15 active:translate-y-0 active:scale-[1.02]"
                      >
                        <div
                          className={`h-2 w-2 shrink-0 rounded-full shadow-sm ring-2 ring-white transition-all duration-300 group-hover/chip:scale-110 group-hover/chip:shadow-[0_0_12px_currentColor] ${tech.cat === 'frontend'
                            ? 'bg-blue-400 text-blue-400 group-hover/chip:bg-primary group-hover/chip:text-primary'
                            : tech.cat === 'backend'
                              ? 'bg-emerald-400 text-emerald-400 group-hover/chip:bg-primary group-hover/chip:text-primary'
                              : tech.cat === 'cloud'
                                ? 'bg-orange-400 text-orange-400 group-hover/chip:bg-primary group-hover/chip:text-primary'
                                : tech.cat === 'ai'
                                  ? 'bg-purple-400 text-purple-400 group-hover/chip:bg-primary group-hover/chip:text-primary'
                                  : 'bg-slate-400 text-slate-400 group-hover/chip:bg-primary group-hover/chip:text-primary'
                            }`}
                        />
                        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-600 transition-colors duration-300 group-hover/chip:text-slate-900 sm:text-xs md:text-[13px]">
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
