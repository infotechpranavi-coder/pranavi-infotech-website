export type HomeIndustryIcon = 'shield' | 'stethoscope' | 'shopping-bag' | 'building' | 'boxes'

export type HomeIndustry = {
  title: string
  description: string
  audience: string
  icon: HomeIndustryIcon
  /** Ambient glow behind the logo */
  iconGlowClass: string
  /** Outer logo capsule tint */
  iconShellClass: string
  /** Inner logo tile tint */
  iconPlateClass: string
  /** Icon stroke color */
  iconColorClass: string
  /** Small accent chips around the logo */
  iconAccentClass: string
  /** Subtle hover tint wash inside the cell */
  hoverWash: string
  /** Bottom glow line on hover */
  glowLine: string
  /** Small status dot tint */
  markerClass: string
}

export const homeIndustries: HomeIndustry[] = [
  {
    title: 'Banking and Financial Services',
    description: 'Secure digital systems for modern finance.',
    audience: 'Banks, fintech teams, and payment platforms',
    icon: 'shield',
    iconGlowClass: 'from-sky-500/30 via-cyan-400/18 to-blue-600/30',
    iconShellClass:
      'border-sky-200/90 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100 shadow-[0_24px_50px_-28px_rgba(14,165,233,0.9)]',
    iconPlateClass:
      'bg-gradient-to-br from-sky-400 via-cyan-500 to-blue-700 shadow-[0_22px_38px_-18px_rgba(37,99,235,0.9)]',
    iconColorClass: 'text-white',
    iconAccentClass: 'bg-sky-500/90',
    hoverWash: 'bg-gradient-to-b from-blue-500/[0.12] via-transparent to-indigo-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-blue-400/90 to-transparent',
    markerClass: 'bg-sky-500',
  },
  {
    title: 'Healthcare and Life Sciences',
    description: 'Care-focused platforms built for clarity and trust.',
    audience: 'Hospitals, clinics, and health-tech teams',
    icon: 'stethoscope',
    iconGlowClass: 'from-fuchsia-500/28 via-rose-400/18 to-violet-600/28',
    iconShellClass:
      'border-fuchsia-200/90 bg-gradient-to-br from-fuchsia-50 via-rose-50 to-violet-100 shadow-[0_24px_50px_-28px_rgba(168,85,247,0.85)]',
    iconPlateClass:
      'bg-gradient-to-br from-fuchsia-500 via-rose-500 to-violet-700 shadow-[0_22px_38px_-18px_rgba(147,51,234,0.9)]',
    iconColorClass: 'text-white',
    iconAccentClass: 'bg-fuchsia-500/90',
    hoverWash: 'bg-gradient-to-b from-purple-500/[0.12] via-transparent to-fuchsia-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-purple-400/90 to-transparent',
    markerClass: 'bg-fuchsia-500',
  },
  {
    title: 'Retail and E-Commerce',
    description: 'Fast commerce experiences across stores and channels.',
    audience: 'Retail brands, marketplaces, and D2C teams',
    icon: 'shopping-bag',
    iconGlowClass: 'from-emerald-500/30 via-teal-400/18 to-cyan-600/28',
    iconShellClass:
      'border-emerald-200/90 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 shadow-[0_24px_50px_-28px_rgba(16,185,129,0.82)]',
    iconPlateClass:
      'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-700 shadow-[0_22px_38px_-18px_rgba(13,148,136,0.9)]',
    iconColorClass: 'text-white',
    iconAccentClass: 'bg-emerald-500/90',
    hoverWash: 'bg-gradient-to-b from-emerald-500/[0.12] via-transparent to-teal-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-emerald-400/90 to-transparent',
    markerClass: 'bg-emerald-500',
  },
  {
    title: 'Real Estate and Construction',
    description: 'Smart workflows for property, projects, and teams.',
    audience: 'Developers, builders, and property operations',
    icon: 'building',
    iconGlowClass: 'from-amber-500/30 via-orange-400/18 to-yellow-500/28',
    iconShellClass:
      'border-amber-200/90 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 shadow-[0_24px_50px_-28px_rgba(245,158,11,0.84)]',
    iconPlateClass:
      'bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 shadow-[0_22px_38px_-18px_rgba(234,88,12,0.92)]',
    iconColorClass: 'text-white',
    iconAccentClass: 'bg-orange-500/90',
    hoverWash: 'bg-gradient-to-b from-orange-500/[0.12] via-transparent to-amber-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-orange-400/90 to-transparent',
    markerClass: 'bg-orange-500',
  },
  {
    title: 'Manufacturing and Supply Chain',
    description: 'Connected operations with stronger delivery visibility.',
    audience: 'Factories, distributors, and logistics teams',
    icon: 'boxes',
    iconGlowClass: 'from-violet-500/28 via-fuchsia-400/18 to-indigo-600/30',
    iconShellClass:
      'border-violet-200/90 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-indigo-100 shadow-[0_24px_50px_-28px_rgba(139,92,246,0.82)]',
    iconPlateClass:
      'bg-gradient-to-br from-violet-500 via-fuchsia-500 to-indigo-700 shadow-[0_22px_38px_-18px_rgba(99,102,241,0.92)]',
    iconColorClass: 'text-white',
    iconAccentClass: 'bg-violet-500/90',
    hoverWash: 'bg-gradient-to-b from-violet-500/[0.12] via-transparent to-fuchsia-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-violet-400/90 to-transparent',
    markerClass: 'bg-violet-500',
  },
]
