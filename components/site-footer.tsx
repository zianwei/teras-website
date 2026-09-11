import Link from 'next/link'
import { Logo } from '@/components/logo'
import { site } from '@/lib/site'

const columns = [
  {
    heading: 'Personal Trust',
    links: [
      { href: '/personal#wasiat', label: 'Wasiat & Will Writing' },
      { href: '/personal#private-trust', label: 'Private Trust' },
      { href: '/personal#hibah', label: 'Hibah Amanah' },
      { href: '/personal#estate', label: 'Estate Administration' },
    ],
  },
  {
    heading: 'Corporate Trust',
    links: [
      { href: '/corporate#escrow', label: 'Escrow & Custody' },
      { href: '/corporate#security-agency', label: 'Security Agency' },
      { href: '/corporate#digital-trustee', label: 'Digital Trustee' },
      { href: '/corporate#api', label: 'Trustee API' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About Us' },
      { href: '/about#governance', label: 'Governance' },
      { href: '/contact', label: 'Contact' },
      { href: '/contact#offices', label: 'Office' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Logo className="size-9 text-accent" />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-base font-semibold">{site.wordmark.lead}</span>
              <span className="text-[0.65rem] uppercase tracking-[0.18em] text-primary-foreground/60">
                {site.wordmark.tail}
              </span>
            </span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            A Malaysian trust company built for families safeguarding what they have, and for
            institutions that need a trustee wired into their systems.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            {site.email}
          </a>
        </div>

        {columns.map((col) => (
          <div key={col.heading} className="flex flex-col gap-4">
            <h2 className="font-sans text-xs uppercase tracking-[0.16em] text-accent">
              {col.heading}
            </h2>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name} ({site.companyNo}). All rights reserved.
          </p>
          <p>Registered under the Trust Companies Act 1949</p>
        </div>
      </div>
    </footer>
  )
}
