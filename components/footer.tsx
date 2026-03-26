import Link from 'next/link'
import { getSettings } from '@/lib/cms'

export async function Footer() {
  const settings = await getSettings()
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Careers', href: '/careers' },
        { label: 'Admin', href: '/admin/projects' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Strategic',
      links: [
        { label: 'Finance', href: '/industries' },
        { label: 'Healthcare', href: '/industries' },
        { label: 'Retail', href: '/industries' },
        { label: 'Manufacturing', href: '/industries' },
      ],
    },
    {
      title: 'Core Architecture',
      links: [
        { label: 'System Design', href: '/services' },
        { label: 'Consultancy', href: '/services' },
        { label: 'Cloud Core', href: '/services' },
        { label: 'DevOps', href: '/contact' },
      ],
    },
  ]

  return (
    <footer className="relative bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Cinematic Atmospheric Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary Cyan Light Leak */}
        <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] animate-lightLeak" />
        {/* Secondary Flare */}
        <div className="absolute bottom-0 -right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] animate-flare" />
        {/* Surface Illumination */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/[0.01] to-transparent animate-surface" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

          {/* Brand Terminal Block */}
          <div className="md:col-span-4">
            <div className="mb-10">
              <img
                src="/logo-removebg-preview (1).png"
                alt="Pranavi Infotech"
                className="h-28 md:h-32 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-sm">
              We bridge the gap between complex engineering and strategic business imperatives with absolute technical precision.
            </p>
            <div className="flex gap-4">
              <a href={settings.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group">
                <span className="text-xs font-bold text-slate-900 group-hover:text-white group-hover:scale-110 transition-all">In</span>
              </a>
              <a href={settings.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary transition-all cursor-pointer group">
                <span className="text-xs font-bold text-slate-900 group-hover:text-white group-hover:scale-110 transition-all">X</span>
              </a>
            </div>
          </div>

          {/* Nav Links Grid */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[10px] font-bold text-primary tracking-[0.3em] uppercase mb-8">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-3 text-sm text-slate-500 hover:text-primary transition-all duration-300"
                      >
                        <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-500" />
                        <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cinematic Horizontal Divider */}
        <div className="relative h-px w-full bg-slate-200 mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
          <div className="flex items-center gap-4">
            <span>&copy; {currentYear} Pranavi Infotech</span>
            <span className="w-1 h-1 rounded-full bg-slate-200" />
            <span className="italic">Technical Heritage</span>
          </div>
          <div className="flex gap-10">
            {['Privacy Protocol', 'Service Terms', 'Security Integrity'].map((item) => (
              <Link key={item} href="#" className="hover:text-primary transition-all duration-300 hover:tracking-widest">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Technical Watermark */}
      <div className="absolute bottom-[-5%] right-[-5%] text-[20vw] font-black text-slate-900/[0.02] select-none pointer-events-none uppercase tracking-tighter italic">
        Systems
      </div>
    </footer>
  )
}
