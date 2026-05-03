/** Homepage “Why” cards — icon keys resolved in the component. */
export type WhyCardIcon =
  | 'user-cog'
  | 'code'
  | 'layers'
  | 'chart'
  | 'shield-check'
  | 'network'

export type HomeWhyCard = {
  title: string
  description: string
  icon: WhyCardIcon
  /** Tailwind accent classes for icon tile */
  accent: string
}

/** Homepage approach timeline — icon keys resolved in the component. */
export type ApproachIcon =
  | 'search'
  | 'file-text'
  | 'code'
  | 'shield-check'
  | 'cloud-upload'
  | 'headphones'

export type HomeApproachStep = {
  title: string
  description: string
  icon: ApproachIcon
  circleClass: string
  iconTileClass: string
}

export const homeWhyCards: HomeWhyCard[] = [
  {
    title: 'Client-Centric Approach',
    description:
      'We focus on understanding your goals and delivering solutions that create real business value.',
    icon: 'user-cog',
    accent: 'bg-blue-500 text-white shadow-[0_8px_24px_-10px_rgba(59,130,246,0.55)]',
  },
  {
    title: 'Strong Technical Expertise',
    description:
      'Our team has deep expertise in modern technologies to build robust and future-ready solutions.',
    icon: 'code',
    accent: 'bg-purple-500 text-white shadow-[0_8px_24px_-10px_rgba(168,85,247,0.45)]',
  },
  {
    title: 'Structured Execution',
    description:
      'We follow a proven process that ensures transparency, quality, and on-time delivery always.',
    icon: 'layers',
    accent: 'bg-emerald-500 text-white shadow-[0_8px_24px_-10px_rgba(16,185,129,0.45)]',
  },
  {
    title: 'Scalable Solutions',
    description: 'We build scalable and flexible solutions that grow with your business.',
    icon: 'chart',
    accent: 'bg-orange-500 text-white shadow-[0_8px_24px_-10px_rgba(249,115,22,0.45)]',
  },
  {
    title: 'Focus on Security & Reliability',
    description: 'Security and reliability are at the core of everything we build.',
    icon: 'shield-check',
    accent: 'bg-pink-500 text-white shadow-[0_8px_24px_-10px_rgba(236,72,153,0.45)]',
  },
  {
    title: 'End-to-End Capabilities',
    description:
      'From consultation to implementation and support, we handle it all.',
    icon: 'network',
    accent: 'bg-sky-500 text-white shadow-[0_8px_24px_-10px_rgba(14,165,233,0.45)]',
  },
]

export const homeApproachSteps: HomeApproachStep[] = [
  {
    title: 'Requirement Analysis',
    description:
      'We analyze your requirements, challenges, and objectives in detail.',
    icon: 'search',
    circleClass: 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_4px_14px_-6px_rgba(59,130,246,0.65)]',
    iconTileClass: 'bg-blue-500/12 text-blue-600 ring-1 ring-blue-500/20',
  },
  {
    title: 'Planning and Architecture',
    description:
      'We create a strategic plan and design a scalable architecture.',
    icon: 'file-text',
    circleClass: 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-[0_4px_14px_-6px_rgba(168,85,247,0.55)]',
    iconTileClass: 'bg-purple-500/12 text-purple-600 ring-1 ring-purple-500/25',
  },
  {
    title: 'Development and Implementation',
    description:
      'Our team develops high-quality solutions using best practices.',
    icon: 'code',
    circleClass: 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-[0_4px_14px_-6px_rgba(59,130,246,0.55)]',
    iconTileClass: 'bg-blue-500/12 text-blue-600 ring-1 ring-blue-500/20',
  },
  {
    title: 'Quality Assurance',
    description:
      'We test rigorously to ensure performance, security, and reliability.',
    icon: 'shield-check',
    circleClass: 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-[0_4px_14px_-6px_rgba(16,185,129,0.5)]',
    iconTileClass: 'bg-emerald-500/12 text-emerald-700 ring-1 ring-emerald-500/25',
  },
  {
    title: 'Deployment and Optimization',
    description: 'We deploy smoothly and optimize for maximum efficiency.',
    icon: 'cloud-upload',
    circleClass: 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_4px_14px_-6px_rgba(249,115,22,0.45)]',
    iconTileClass: 'bg-orange-500/12 text-orange-600 ring-1 ring-orange-500/25',
  },
  {
    title: 'Ongoing Support',
    description:
      'We provide continuous support and evolution to keep you ahead.',
    icon: 'headphones',
    circleClass: 'bg-gradient-to-br from-pink-500 to-pink-600 shadow-[0_4px_14px_-6px_rgba(236,72,153,0.45)]',
    iconTileClass: 'bg-pink-500/12 text-pink-600 ring-1 ring-pink-500/25',
  },
]
