export type HomeIndustryIcon = 'landmark' | 'heart-pulse' | 'shopping-cart' | 'building' | 'factory'

export type HomeIndustry = {
  title: string
  eyebrow: string
  description: string
  icon: HomeIndustryIcon
  /** Gradient icon disc + ring */
  iconClass: string
  /** Subtle hover tint wash inside the cell */
  hoverWash: string
  /** Bottom glow line on hover */
  glowLine: string
}

export const homeIndustries: HomeIndustry[] = [
  {
    title: 'Banking and Financial Services',
    eyebrow: 'Compliance-led platforms',
    description: 'Secure digital systems for modern finance.',
    icon: 'landmark',
    iconClass:
      'bg-gradient-to-br from-sky-400 to-blue-600 text-white ring-2 ring-white shadow-lg shadow-blue-500/40',
    hoverWash: 'bg-gradient-to-b from-blue-500/[0.12] via-transparent to-indigo-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-blue-400/90 to-transparent',
  },
  {
    title: 'Healthcare and Life Sciences',
    eyebrow: 'Patient-centric systems',
    description: 'Care-focused platforms built for clarity and trust.',
    icon: 'heart-pulse',
    iconClass:
      'bg-gradient-to-br from-violet-400 to-purple-600 text-white ring-2 ring-white shadow-lg shadow-purple-500/40',
    hoverWash: 'bg-gradient-to-b from-purple-500/[0.12] via-transparent to-fuchsia-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-purple-400/90 to-transparent',
  },
  {
    title: 'Retail and E-Commerce',
    eyebrow: 'Growth-ready commerce',
    description: 'Fast commerce experiences across stores and channels.',
    icon: 'shopping-cart',
    iconClass:
      'bg-gradient-to-br from-emerald-400 to-teal-600 text-white ring-2 ring-white shadow-lg shadow-emerald-500/40',
    hoverWash: 'bg-gradient-to-b from-emerald-500/[0.12] via-transparent to-teal-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-emerald-400/90 to-transparent',
  },
  {
    title: 'Real Estate and Construction',
    eyebrow: 'Built for operations',
    description: 'Smart workflows for property, projects, and teams.',
    icon: 'building',
    iconClass:
      'bg-gradient-to-br from-amber-400 to-orange-600 text-white ring-2 ring-white shadow-lg shadow-orange-500/40',
    hoverWash: 'bg-gradient-to-b from-orange-500/[0.12] via-transparent to-amber-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-orange-400/90 to-transparent',
  },
  {
    title: 'Manufacturing and Supply Chain',
    eyebrow: 'Operational resilience',
    description: 'Connected operations with stronger delivery visibility.',
    icon: 'factory',
    iconClass:
      'bg-gradient-to-br from-fuchsia-400 to-violet-600 text-white ring-2 ring-white shadow-lg shadow-violet-500/40',
    hoverWash: 'bg-gradient-to-b from-violet-500/[0.12] via-transparent to-fuchsia-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-violet-400/90 to-transparent',
  },
]
