import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollAnimate } from '@/components/scroll-animate'
import { Globe, Users, Lightbulb, Target } from 'lucide-react'
import { OurWork } from '@/components/our-work'
import { AboutGlobe } from '@/components/ui/about-globe'
import { getProjects, getAboutData } from '@/lib/cms'

const iconMap: { [key: string]: any } = {
  Globe,
  Users,
  Lightbulb,
  Target,
}


export const metadata = {
  title: 'About Pranavi Infotech',
  description:
    'Learn about Pranavi Infotech, our mission, vision, values, and the team behind our success.',
}

import { NeuralPaths, DataStreams } from '@/components/ui/neural-paths'

export default async function AboutPage() {
  const projects = await getProjects()
  const { values, team } = await getAboutData()
  return (
    <main className="bg-slate-50 selection:bg-primary selection:text-white relative min-h-screen">
      <Navbar />

      {/* CLEAN BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary-rgb),0.05),transparent_50%)]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pb-32 overflow-hidden bg-slate-50">
        {/* ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(var(--primary-rgb),0.05),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(var(--accent-purple-rgb),0.05),transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <ScrollAnimate>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Our Enterprise Journey
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={100}>
              <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter mb-8 italic">
                Strategic <span className="text-primary not-italic">Vision.</span>
              </h1>
            </ScrollAnimate>

            <ScrollAnimate delay={200}>
              <p className="text-xl text-slate-500/80 max-w-2xl mx-auto leading-relaxed font-light">
                Architecting enterprise-grade digital foundations that empower global organizations to scale with absolute technical integrity.
              </p>
            </ScrollAnimate>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 border-t border-slate-200 pt-16">
              {[
                { label: 'Founded', value: '2015' },
                { label: 'Market Presence', value: 'Global' },
                { label: 'Success Rate', value: '99.9%' }
              ].map((stat, i) => (
                <ScrollAnimate key={stat.label} delay={300 + i * 100}>
                  <div className="text-center">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</p>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visionary Directives (Clean 3-Column Grid) */}
      <section className="py-32 relative z-10 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Our Core Directives</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Foundational principles that drive our engineering excellence and client success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Provable Foundations',
                desc: 'Architecting digital backbones with absolute precision and clarity since 2015.',
                tag: 'STABILITY'
              },
              {
                title: 'Engineering Foresight',
                desc: 'Anticipating architectural shifts to ensure our clients remain at the global vanguard.',
                tag: 'INTELLIGENCE'
              },
              {
                title: 'Quantum Logic',
                desc: 'Pushing boundaries of efficiency and distributed systems for the next era of computing.',
                tag: 'INNOVATION'
              }
            ].map((item, i) => (
              <ScrollAnimate key={item.title} delay={i * 100}>
                <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors group">
                  <div className="text-primary font-bold text-[10px] tracking-widest mb-6">{item.tag}</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section >

      {/* LEADERSHIP SECTION */}
      <section className="py-32 relative z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-5 flex items-center justify-center gap-3">
              <span className="w-8 h-px bg-primary" />
              The People
              <span className="w-8 h-px bg-primary" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-[-0.03em] leading-[0.95] mb-4">
              Leadership <span className="text-primary italic">Team.</span>
            </h2>
            <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
              The visionary minds shaping our strategy and driving innovation across every project.
            </p>
          </div>

          {/* CEO Message Section */}
          <div className="max-w-6xl mx-auto mb-32">
            {team.slice(0, 1).map((member, index) => (
              <div key={member.name} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Left: Rectangular Card */}
                <ScrollAnimate delay={index * 100} direction="left" className="h-full">
                  <div className="relative aspect-[4/5] md:aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-[2rem] overflow-hidden group shadow-2xl shadow-slate-200 transition-all duration-700 hover:shadow-primary/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                      <div className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-2">Founder & CEO</div>
                      <h3 className="text-3xl font-black text-white tracking-tighter leading-none">{member.name}</h3>
                    </div>
                  </div>
                </ScrollAnimate>

                {/* Right: Message Content */}
                <ScrollAnimate delay={index * 100 + 200} direction="right">
                  <div className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="relative flex flex-col items-center text-center">
                      <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-primary/10 text-9xl font-serif select-none">"</span>
                      <h3 className="text-lg md:text-xl font-serif italic text-slate-800 leading-relaxed tracking-tight relative z-10 max-w-lg mx-auto">
                        {member.message || "Leading with precision and purpose."}
                      </h3>
                    </div>

                    <div className="space-y-6">
                      <p className="text-base text-slate-500 leading-relaxed">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-4">
                        {member.skills.map((skill: string) => (
                          <span key={skill} className="px-4 py-1.5 bg-white border border-slate-100 shadow-sm text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-xl">
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="pt-8 border-t border-slate-100 w-full lg:w-auto">
                        <div className="text-xs font-black text-slate-900 uppercase tracking-widest mb-1">{member.name}</div>
                        <div className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">{member.role}</div>
                      </div>
                    </div>
                  </div>
                </ScrollAnimate>
              </div>
            ))}
          </div>

          {/* Core Team Section - Small & Horizontal Align */}
          <div className="mt-40">
            <div className="flex items-center gap-6 mb-16 px-4">
              <div className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Division_01</div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">Core Strategic Team</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.slice(1).map((member, index) => (
                <ScrollAnimate key={member.name} delay={index * 100} direction="up">
                  <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-white border border-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-lg font-black text-white tracking-tight mb-1">{member.name}</h4>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none drop-shadow-sm">{member.role}</p>
                    </div>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Global Scale (Clean Stats Section) */}
      < section className="py-32 relative z-10 px-4 bg-white" >
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-24 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8">
                  Mission <span className="text-primary italic">Scale.</span>
                </h2>
                <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                  Maintaining critical technical infrastructure across global regions with absolute reliability and performance.
                </p>

                <div className="grid grid-cols-2 gap-8">
                  {[
                    { label: 'Uptime', value: '99.99%' },
                    { label: 'Latency', value: '<20ms' },
                    { label: 'Security', value: 'AES-256' },
                    { label: 'Support', value: '24/7' }
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className="text-3xl font-black text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center order-first lg:order-last">
                <div className="w-64 h-64 md:w-80 md:h-80 aspect-square">
                  <AboutGlobe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Corporate Values (Nexus Nodes) */}
      < section className="py-32 relative z-10 bg-slate-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Our Core Values</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">The beliefs that define our culture and guide our decision-making every day.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = iconMap[value.icon] || Lightbulb
              return (
                <ScrollAnimate key={value.title} delay={index * 100} direction="up">
                  <div className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-700 bg-white">
                    {/* Background Visual Layer */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={value.image}
                        alt={value.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Sophisticated Overlay System */}
                      <div className="absolute inset-0 bg-slate-900/50 transition-colors duration-700 group-hover:bg-slate-900/30" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-10 group-hover:opacity-30 transition-opacity duration-700`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                    </div>

                    {/* Content Layer */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                      {/* Floating Icon with Kinetic Glow */}
                      <div className="w-12 h-12 mb-6 relative group-hover:-translate-y-1 transition-transform duration-500">
                        <div className="absolute inset-0 bg-white rounded-xl rotate-45 opacity-10 group-hover:rotate-90 transition-transform duration-700" />
                        <div className="absolute inset-0 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white bg-white/5">
                          <Icon size={20} className="group-hover:scale-110 transition-transform duration-500" />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="inline-block px-2.5 py-0.5 bg-primary/10 border border-primary/20 rounded-full text-[8px] font-black tracking-[0.2em] text-primary uppercase">
                          NODE_0{index + 1}
                        </div>

                        <h3 className="text-2xl font-black text-white tracking-tighter leading-none">
                          {value.title}
                        </h3>

                        <p className="text-xs text-white/60 leading-relaxed font-light group-hover:text-white/90 transition-colors duration-500 line-clamp-3">
                          {value.description}
                        </p>

                        {/* Kinetic Interaction Bar */}
                        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                          <div className="h-0.5 w-16 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Scan Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                </ScrollAnimate>
              )
            })}
          </div>
        </div>
      </section >

      <OurWork projects={projects} />
      <Footer />
    </main >
  )
}
