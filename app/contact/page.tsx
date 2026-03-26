import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { ScrollAnimate } from '@/components/scroll-animate'
import { SpotlightCard } from '@/components/ui/spotlight-card'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { getSettings } from '@/lib/cms'


export const metadata = {
  title: 'Contact Us - Pranavi Infotech',
  description:
    'Get in touch with our team. Contact us for inquiries, support, or partnership opportunities.',
}

export default async function ContactPage() {
  const settings = await getSettings()

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: settings.contact.email,
      description: 'For general inquiries',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: settings.contact.phone,
      description: 'Available during business hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: settings.contact.address,
      description: 'Primary Office',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Monday - Saturday',
      description: '10:00 AM - 7:00 PM IST',
    },
  ]
  return (
    <main>
      <Navbar />



      {/* Hero Section */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-slate-50">
        {/* VIBRANT ATMOSPHERIC BACKGROUND */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(var(--primary-rgb),0.12),transparent_50%),radial-gradient(circle_at_100%_100%,rgba(var(--accent-purple-rgb),0.08),transparent_50%)] animate-pulse-subtle" />

          {/* Peripheral Glowing Blobs */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-accent-purple/5 rounded-full blur-[120px] animate-blob animation-delay-2000" />

          {/* Fine Technical Grid */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-primary animate-expandRight" />
              <span className="animate-revealText" style={{ animationDelay: '0.2s' }}>05 / Project Initiation</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] animate-maskReveal mb-8">
              Secure the <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent-purple to-primary italic">Blueprint.</span>
            </h1>
            <p className="text-xl text-slate-500/80 leading-relaxed font-light animate-revealText" style={{ animationDelay: '0.8s' }}>
              Initiate a high-impact collaboration. We deploy surgical precision to architect your organization's digital heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-start">

            {/* Left Column: Content & Info */}
            <div>
              <div className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-6 flex items-center gap-4">
                <span className="w-12 h-px bg-primary animate-expandRight" />
                <span className="animate-revealText" style={{ animationDelay: '0.2s' }}>05 / Contact</span>
              </div>
              <div className="overflow-hidden mb-8">
                <h1 className="text-6xl md:text-7xl font-bold text-foreground tracking-tighter leading-[0.9] animate-maskReveal">
                  Initiate <br />
                  <span className="text-primary italic">Partnership.</span>
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-md animate-revealText" style={{ animationDelay: '0.8s' }}>
                Secure your project’s success with a consultation. We prioritize high-impact enterprise transformations.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={info.title} className="flex items-start gap-6 group animate-revealText" style={{ animationDelay: `${1 + index * 0.1}s` }}>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg mb-1">{info.title}</h3>
                        <p className="text-primary font-medium mb-1">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="animate-revealText" style={{ animationDelay: '1.5s' }}>
              <SpotlightCard className="p-10 md:p-12 bg-white/40 backdrop-blur-3xl border-primary/20 shadow-2xl shadow-primary/5 rounded-[2.5rem] overflow-hidden">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-2">Send us a Message</h2>
                  <p className="text-muted-foreground">Fill out the form below and we'll get back to you shortly.</p>
                </div>
                <ContactForm />
              </SpotlightCard>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[600px] w-full overflow-hidden mt-20">
        {/* Full Width Map Background */}
        <div className="absolute inset-0 w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-1000 ease-in-out">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5910606775504!2d73.07166137520448!3d19.03332148711681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c213259972b9%3A0xcb281f692066c0d!2sJuhi%20Niharika%20Mirage!5e0!3m2!1sen!2sin!4v1708600000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Floating Overlay Card */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none flex items-center">
          <ScrollAnimate delay={200} className="pointer-events-auto">
            <SpotlightCard className="bg-white/90 backdrop-blur-md p-8 md:p-10 max-w-md border-white/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Global HQ</h2>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="text-lg text-foreground font-medium">{settings.contact.address.split(',').slice(0, 2).join(',')}</p>
                  <p className="text-lg text-foreground font-medium">{settings.contact.address.split(',').slice(2).join(',')}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-1">Contact</p>
                  <p className="text-foreground">{settings.contact.phone}</p>
                  <p className="text-foreground">{settings.contact.email}</p>
                </div>
              </div>

              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="block">
                <Button variant="expand" className="w-full">
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </SpotlightCard>
          </ScrollAnimate>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimate>
            <div className="text-center mb-16">
              <div className="overflow-hidden mb-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground animate-maskReveal">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </ScrollAnimate>

          <div className="space-y-4">
            {[
              {
                question: 'What is your typical project timeline?',
                answer:
                  'Project timelines vary based on complexity and scope. Most projects range from 3-12 months. We provide detailed estimates during the consultation phase.',
              },
              {
                question: 'Do you offer support after project completion?',
                answer:
                  'Yes, we offer comprehensive support packages including maintenance, updates, and optimization services. Details are customized based on your needs.',
              },
              {
                question: 'Can you work with our existing systems?',
                answer:
                  'Absolutely. We specialize in integrating with existing infrastructure and legacy systems to create seamless solutions.',
              },
              {
                question: 'How do you handle data security?',
                answer:
                  'We follow industry best practices and compliance standards. Our security measures include encryption, regular audits, and adherence to regulations like GDPR and HIPAA.',
              },
            ].map((faq, index) => (
              <ScrollAnimate key={faq.question} delay={index * 50}>
                <div className="relative isolate group overflow-hidden rounded-xl">
                  {/* Kinetic Reveal Sweep Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-30 pointer-events-none translate-y-[-100%] group-hover:animate-sweep transition-all" />

                  <div className="bg-secondary/50 p-6 hover:shadow-2xl transition-all duration-700 border border-transparent hover:border-primary/20 animate-cardEntrance" style={{ animationDelay: `${index * 50}ms` }}>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors duration-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollAnimate>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
