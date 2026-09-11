import Link from 'next/link'
import { ArrowUpRight, Users, Building2 } from 'lucide-react'

const tracks = [
  {
    icon: Users,
    eyebrow: 'Retail',
    title: 'Personal Trust',
    body: 'For individuals and families who want their wishes carried out exactly, without their heirs facing years of frozen assets.',
    items: [
      'Wasiat & conventional will writing',
      'Private and testamentary trusts',
      'Hibah Amanah for Muslim clients',
      'Estate administration & probate support',
    ],
    href: '/personal',
  },
  {
    icon: Building2,
    eyebrow: 'Institutional',
    title: 'Corporate Trust',
    body: 'For companies, platforms and boards that need a neutral party holding funds or documents — and an audit trail their counterparties will accept.',
    items: [
      'Escrow and stakeholder accounts',
      'Document and asset custody',
      'Security agency for lenders',
      'Digital trustee and API integration',
    ],
    href: '/corporate',
  },
]

export function ServiceSplit() {
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/70">
          What we do
        </p>
        <h2 className="max-w-2xl text-3xl leading-tight text-balance lg:text-4xl">
          Two distinct practices, held to the same fiduciary standard.
        </h2>
      </div>

      <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
        {tracks.map((track) => (
          <div key={track.title} className="flex flex-col gap-6 bg-card p-8 lg:p-10">
            <track.icon className="size-6 text-accent" aria-hidden="true" />
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {track.eyebrow}
              </p>
              <h3 className="text-2xl text-card-foreground">{track.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{track.body}</p>
            </div>
            <ul className="flex flex-col gap-3 border-t border-border pt-6">
              {track.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-card-foreground"
                >
                  <span aria-hidden="true" className="mt-1.5 size-1 flex-shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href={track.href}
              className="group mt-auto flex items-center gap-2 text-sm text-primary"
            >
              Explore {track.title.toLowerCase()}
              <ArrowUpRight
                className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
