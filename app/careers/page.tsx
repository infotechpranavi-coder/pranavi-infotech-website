import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ScrollAnimate } from '@/components/scroll-animate'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, MapPin, Briefcase } from 'lucide-react'

const jobListings = [
  {
    id: 1,
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    level: 'Senior',
    description:
      'Lead architectural decisions and mentor junior engineers on complex software projects.',
  },
  {
    id: 2,
    title: 'Cloud Solutions Architect',
    department: 'Cloud Services',
    location: 'New York, NY',
    type: 'Full-time',
    level: 'Senior',
    description:
      'Design and implement enterprise cloud solutions for Fortune 500 companies.',
  },
  {
    id: 3,
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    level: 'Mid-level',
    description:
      'Drive product strategy and roadmap for our enterprise software platform.',
  },
  {
    id: 4,
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'Boston, MA',
    type: 'Full-time',
    level: 'Mid-level',
    description: 'Build machine learning models and analytics solutions for clients.',
  },
  {
    id: 5,
    title: 'DevOps Engineer',
    department: 'Infrastructure',
    location: 'Austin, TX',
    type: 'Full-time',
    level: 'Mid-level',
    description:
      'Manage cloud infrastructure and CI/CD pipelines at scale.',
  },
  {
    id: 6,
    title: 'Security Consultant',
    department: 'Cybersecurity',
    location: 'Chicago, IL',
    type: 'Full-time',
    level: 'Senior',
    description:
      'Help enterprises secure their infrastructure and data systems.',
  },
]

const benefits = [
  'Competitive salary and equity',
  'Comprehensive health insurance',
  'Remote work flexibility',
  'Professional development budget',
  'Collaborative culture',
  'Career growth opportunities',
]

export const metadata = {
  title: 'Careers - Parnavi Infotech',
  description:
    'Join our team of talented engineers, consultants, and innovators shaping the future of enterprise technology.',
}

export default function CareersPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 md:pb-32 overflow-hidden bg-slate-50">
        {/* VIBRANT ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(var(--primary-rgb),0.1),transparent_50%),radial-gradient(circle_at_0%_100%,rgba(var(--accent-purple-rgb),0.05),transparent_50%)] animate-pulse-subtle" />
          <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-blob" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-primary animate-expandRight" />
                <span className="animate-revealText" style={{ animationDelay: '0.2s' }}>04 / Global Careers</span>
              </div>
              <div className="overflow-hidden mb-8">
                <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] animate-maskReveal">
                  Scale the <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-purple to-primary italic">Foundation.</span>
                </h1>
              </div>
              <p className="text-xl text-slate-500/80 max-w-xl leading-relaxed font-light animate-revealText" style={{ animationDelay: '0.8s' }}>
                Join a collective of visionary engineers and strategic architects dedicated to clinical precision and long-term enterprise impact.
              </p>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="p-10 bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-xl animate-revealText" style={{ animationDelay: '1s' }}>
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4 opacity-60">Join the Syndicate</p>
                <p className="text-slate-900 font-bold leading-relaxed mb-6">Build the digital backbone of the modern era with clinical precision.</p>
                <div className="w-12 h-1 bg-primary/20 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimate>
              <div>
                <div className="overflow-hidden mb-6">
                  <h2 className="text-4xl font-bold text-foreground animate-maskReveal">
                    Our Culture
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed animate-revealText" style={{ animationDelay: '0.4s' }}>
                  At Parnavi, we believe that great products are built by great people. We foster an environment of innovation, collaboration, and continuous learning where every team member can thrive.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed animate-revealText" style={{ animationDelay: '0.6s' }}>
                  We're committed to diversity, inclusion, and creating opportunities for career growth in a supportive and dynamic workplace.
                </p>
              </div>
            </ScrollAnimate>

            <ScrollAnimate direction="up" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="bg-secondary rounded-lg p-4 text-center"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <div className="overflow-hidden mb-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-maskReveal">
                  Open Positions
                </h2>
              </div>
              <p className="text-xl text-muted-foreground animate-revealText" style={{ animationDelay: '0.4s' }}>
                We're always looking for talented individuals to join our team
              </p>
            </div>
          </ScrollAnimate>

          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <ScrollAnimate key={job.id} delay={index * 50}>
                <div className="relative isolate group overflow-hidden rounded-xl">
                  {/* Kinetic Reveal Sweep Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent z-30 pointer-events-none translate-y-[-100%] group-hover:animate-sweep transition-all" />

                  <div className="bg-white/40 backdrop-blur-2xl p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-700 border border-border/40 hover:border-primary/20 animate-cardEntrance" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                      {/* Job Info */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-500 tracking-tight">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-muted-foreground mb-3">
                          <div className="flex items-center gap-2 group-hover:text-foreground transition-colors">
                            <Briefcase size={18} />
                            <span className="text-sm font-bold uppercase tracking-widest">{job.department}</span>
                          </div>
                          <div className="flex items-center gap-2 group-hover:text-foreground transition-colors">
                            <MapPin size={18} />
                            <span className="text-sm">{job.location}</span>
                          </div>
                          <span className="text-sm font-black text-primary uppercase tracking-[0.2em]">
                            {job.type}
                          </span>
                          <span className="text-xs font-bold bg-secondary px-3 py-1 rounded border border-border/50 uppercase tracking-widest">
                            {job.level}
                          </span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                          {job.description}
                        </p>
                      </div>

                      {/* Apply Button */}
                      <div className="flex-shrink-0">
                        <Link href="/contact">
                          <Button className="btn-diagnostic-primary group/btn">
                            Apply Now
                            <ArrowRight
                              className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                              size={18}
                            />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimate>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't see a perfect fit?
            </h2>
          </ScrollAnimate>
          <ScrollAnimate delay={100}>
            <p className="text-xl text-primary-foreground/90 mb-8">
              We're always interested in meeting talented individuals. Send us your resume and let's explore opportunities together.
            </p>
          </ScrollAnimate>
          <ScrollAnimate delay={200}>
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-primary-foreground px-8 py-6 text-lg">
                Get In Touch
              </Button>
            </Link>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />
    </main>
  )
}
