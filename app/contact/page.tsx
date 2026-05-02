import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { ScrollAnimate } from '@/components/scroll-animate'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const contactDetails = {
  email: 'sales@mariyaenterprises.co.in',
  phones: ['+91 91361 54483', '+91 97699 07317'],
  addressLines: [
    'Shop No. 12, Juhi Niharika Mirage',
    'Sector 10, Koparkhairane',
    'Navi Mumbai – 400709, India',
  ],
  shortAddress:
    'Shop No. 12, Juhi Niharika Mirage, Sector 10, Koparkhairane, Navi Mumbai – 400709',
  hours: 'Monday – Saturday | 10:00 AM – 7:00 PM (IST)',
}

export const metadata = {
  title: 'Contact Us - Pranavi Infotech',
  description:
    'Get in touch for projects, technical support, partnerships, and business enquiries.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-primary/20 selection:text-slate-900">
      <Navbar />

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-slate-200/80 pt-28 pb-16 md:pt-32 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage:
              'linear-gradient(to right, rgb(226 232 240 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-accent-purple/[0.06] blur-3xl" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 inline-flex items-center gap-2 font-outfit text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Contact us
          </p>
          <h1 className="max-w-3xl font-outfit text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            We’re here to support your business with the right solutions.
            Whether you have a project in mind, need technical assistance, or
            want to explore opportunities, our team is ready to assist you.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <ScrollAnimate>
              <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
                Contact information
              </h2>
            </ScrollAnimate>

            <div className="mt-8 space-y-3">
              <ScrollAnimate delay={60}>
                <article className="rounded-2xl border border-slate-200/90 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-outfit text-[15px] font-semibold text-slate-900">
                        Email
                      </h3>
                      <a
                        href={`mailto:${contactDetails.email}`}
                        className="mt-1 inline-block text-sm text-primary hover:underline"
                      >
                        {contactDetails.email}
                      </a>
                      <p className="mt-1 text-sm text-slate-600">
                        For general inquiries and business communication.
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollAnimate>

              <ScrollAnimate delay={120}>
                <article className="rounded-2xl border border-slate-200/90 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-outfit text-[15px] font-semibold text-slate-900">
                        Phone
                      </h3>
                      <div className="mt-1 space-y-1">
                        {contactDetails.phones.map((phone) => (
                          <a
                            key={phone}
                            href={`tel:${phone.replace(/\s+/g, '')}`}
                            className="block text-sm text-primary hover:underline"
                          >
                            {phone}
                          </a>
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-slate-600">
                        Available during business hours.
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollAnimate>

              <ScrollAnimate delay={180}>
                <article className="rounded-2xl border border-slate-200/90 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-outfit text-[15px] font-semibold text-slate-900">
                        Address
                      </h3>
                      <div className="mt-1 space-y-0.5 text-sm text-slate-700">
                        {contactDetails.addressLines.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-slate-600">Primary Office</p>
                    </div>
                  </div>
                </article>
              </ScrollAnimate>

              <ScrollAnimate delay={240}>
                <article className="rounded-2xl border border-slate-200/90 bg-white p-5">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-outfit text-[15px] font-semibold text-slate-900">
                        Business hours
                      </h3>
                      <p className="mt-1 text-sm text-slate-700">
                        {contactDetails.hours}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollAnimate>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ScrollAnimate>
              <div className="rounded-3xl border border-slate-200/90 bg-white p-6 md:p-8">
                <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Have a requirement or question? Fill out the form below and
                  our team will get back to you.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </ScrollAnimate>

            <ScrollAnimate delay={120}>
              <div className="mt-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm text-slate-600">
                We aim to respond to all inquiries within 24 business hours.
              </div>
            </ScrollAnimate>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="border-y border-slate-100 bg-slate-50/70 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollAnimate>
            <h2 className="font-outfit text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Our location
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
              Our primary office is located in Navi Mumbai, enabling us to
              efficiently manage operations and serve clients across different
              regions.
            </p>
            <p className="mt-2 text-sm text-slate-700">
              You can find us at: {contactDetails.shortAddress}
            </p>
          </ScrollAnimate>

          <ScrollAnimate delay={100}>
            <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm">
              <iframe
                title="Pranavi Infotech office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5910606775504!2d73.07166137520448!3d19.03332148711681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c213259972b9%3A0xcb281f692066c0d!2sJuhi%20Niharika%20Mirage!5e0!3m2!1sen!2sin!4v1708600000000!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollAnimate>
        </div>
      </section>

      {/* Business & Support notes */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="grid gap-3 md:grid-cols-2">
          <ScrollAnimate>
            <article className="rounded-2xl border border-slate-200/90 bg-white p-6">
              <h3 className="font-outfit text-lg font-semibold text-slate-900">
                Business enquiries
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                For partnerships, collaborations, or large-scale project
                discussions, please contact us directly via email or phone for
                priority response.
              </p>
            </article>
          </ScrollAnimate>
          <ScrollAnimate delay={80}>
            <article className="rounded-2xl border border-slate-200/90 bg-white p-6">
              <h3 className="font-outfit text-lg font-semibold text-slate-900">
                Support
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                If you are an existing client, please include your project
                details in the message so we can assist you more efficiently.
              </p>
            </article>
          </ScrollAnimate>
        </div>
      </section>

      <Footer />
    </main>
  )
}
