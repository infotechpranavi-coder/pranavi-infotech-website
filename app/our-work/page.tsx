import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { OurWork } from '@/components/our-work'
import { getProjects } from '@/lib/projects'

export const metadata = {
  title: 'Our Projects - Pranavi Infotech',
  description:
    'Explore selected engagements and technical outcomes from Pranavi Infotech.',
}

export default async function OurWorkPage() {
  const projects = await getProjects()

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-primary/20 selection:text-slate-900">
      <Navbar />
      <OurWork projects={projects} />
      <Footer />
    </main>
  )
}
