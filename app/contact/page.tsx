import type { Metadata } from 'next'
import { Mail, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { EnquiryForm } from '@/components/enquiry-form'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Speak with a trust officer at ${site.name}. Email ${site.email} or send an enquiry through the form.`,
}

// Single placeholder office — replace with the registered address once confirmed.
const offices = [site.office]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to a trust officer, not a call centre."
        description="Every enquiry is reviewed by a qualified member of our estate planning or corporate trust team."
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-28">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-foreground">Get in touch</h2>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3.5">
                <Mail className="mt-0.5 size-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-foreground hover:text-primary"
                  >
                    {site.email}
                  </a>
                  <p className="text-xs text-muted-foreground">Replies within one business day</p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <Clock className="mt-0.5 size-4 flex-shrink-0 text-accent" aria-hidden="true" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm text-foreground">Monday to Friday, 9.00am – 6.00pm</p>
                  <p className="text-xs text-muted-foreground">Meetings by appointment</p>
                </div>
              </li>
            </ul>
          </div>

          <div id="offices" className="flex scroll-mt-32 flex-col gap-5">
            <h2 className="text-2xl text-foreground">Our office</h2>
            <ul className="flex flex-col">
              {offices.map((office) => (
                <li
                  key={office.city}
                  className="flex flex-col gap-1.5 border-t border-border py-5 first:border-0 first:pt-0"
                >
                  <div className="flex items-baseline gap-2.5">
                    <h3 className="text-base font-semibold text-foreground">{office.city}</h3>
                    <span className="text-[0.65rem] uppercase tracking-[0.14em] text-accent-foreground/70">
                      {office.tag}
                    </span>
                  </div>
                  <address className="text-sm not-italic leading-relaxed text-muted-foreground">
                    {office.address.join(', ')}
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <EnquiryForm />
      </section>
    </>
  )
}
