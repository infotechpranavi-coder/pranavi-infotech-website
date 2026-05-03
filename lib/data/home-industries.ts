export type HomeIndustryIcon = 'landmark' | 'heart-pulse' | 'shopping-cart' | 'building' | 'factory'

export type HomeIndustry = {
  title: string
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
    description: 'Secure, compliant and innovative solutions.',
    icon: 'landmark',
    iconClass:
      'bg-gradient-to-br from-sky-400 to-blue-600 text-white ring-2 ring-white shadow-lg shadow-blue-500/40',
    hoverWash: 'bg-gradient-to-b from-blue-500/[0.12] via-transparent to-indigo-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-blue-400/90 to-transparent',
  },
  {
    title: 'Healthcare and Life Sciences',
    description: 'Technology solutions that improve patient care.',
    icon: 'heart-pulse',
    iconClass:
      'bg-gradient-to-br from-violet-400 to-purple-600 text-white ring-2 ring-white shadow-lg shadow-purple-500/40',
    hoverWash: 'bg-gradient-to-b from-purple-500/[0.12] via-transparent to-fuchsia-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-purple-400/90 to-transparent',
  },
  {
    title: 'Retail and E-Commerce',
    description: 'Scalable platforms and retail solutions.',
    icon: 'shopping-cart',
    iconClass:
      'bg-gradient-to-br from-emerald-400 to-teal-600 text-white ring-2 ring-white shadow-lg shadow-emerald-500/40',
    hoverWash: 'bg-gradient-to-b from-emerald-500/[0.12] via-transparent to-teal-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-emerald-400/90 to-transparent',
  },
  {
    title: 'Real Estate and Construction',
    description: 'Smart property and construction solutions.',
    icon: 'building',
    iconClass:
      'bg-gradient-to-br from-amber-400 to-orange-600 text-white ring-2 ring-white shadow-lg shadow-orange-500/40',
    hoverWash: 'bg-gradient-to-b from-orange-500/[0.12] via-transparent to-amber-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-orange-400/90 to-transparent',
  },
  {
    title: 'Manufacturing and Supply Chain',
    description: 'Optimize operations and strengthen resilience.',
    icon: 'factory',
    iconClass:
      'bg-gradient-to-br from-fuchsia-400 to-violet-600 text-white ring-2 ring-white shadow-lg shadow-violet-500/40',
    hoverWash: 'bg-gradient-to-b from-violet-500/[0.12] via-transparent to-fuchsia-500/[0.06]',
    glowLine: 'bg-gradient-to-r from-transparent via-violet-400/90 to-transparent',
  },
]
