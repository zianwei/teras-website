import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Teras Trustees Berhad is a Malaysian trust company regulated under the Trust Companies Act 1949, acting as executor, trustee and custodian.',
}

const licences = [
  {
    label: 'Trust Companies Act 1949',
    detail: 'Registered trust company, permitting us to act as executor and trustee.',
  },
  {
    label: 'Companies Act 2016',
    detail: `Incorporated in Malaysia as a public company limited by shares (${site.companyNo}).`,
  },
  {
    label: 'AMLA 2001',
    detail: 'Reporting institution with full KYC, screening and record-keeping obligations.',
  },
  {
    label: 'PDPA 2010',
    detail: 'Client and beneficiary data handled under a documented retention and access policy.',
  },
]

/*
 * Leadership section — intentionally withheld while the company remains in stealth.
 * Restore this block (with real names, roles and bios) when we are ready to go public.
 *
 * const leadership = [
 *   {
 *     name: 'Chairman',
 *     role: 'Chairman',
 *     bio: 'Three decades in Malaysian capital markets regulation.',
 *   },
 *   {
 *     name: 'Chief Executive Officer',
 *     role: 'Chief Executive Officer',
 *     bio: 'A trust practitioner previously responsible for corporate trust at a regional banking group.',
 *   },
 *   {
 *     name: 'Head of Estate Planning',
 *     role: 'Head of Estate Planning',
 *     bio: 'Advocate and Solicitor of the High Court of Malaya, specialising in probate and Syariah estate matters.',
 *   },
 *   {
 *     name: 'Head of Corporate Trust',
 *     role: 'Head of Corporate Trust',
 *     bio: 'Oversees escrow, custody and security agency mandates.',
 *   },
 * ]
 */

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A trustee is only as good as the institution standing behind it."
        description={`${site.name} is a Malaysian trust company formed to act as executor, trustee and custodian — for families, and for institutions that need assets held by a neutral party.`}
      />

      <section className="container-page grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:py-28">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl leading-tight text-balance lg:text-4xl">Our mandate</h2>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              We exist for one reason: to hold property that is not ours, and to deal with it
              exactly as the instrument requires. That is a narrow business, and we have
              deliberately kept it narrow — we do not manage money, sell investments, or take
              positions that could put us on the other side of a client.
            </p>
            <p>
              For families, that means a will or trust that will still be honoured decades from
              now, administered by an institution rather than a relative. For companies and
              platforms, it means a trustee whose only interest in the transaction is that the
              deed is followed.
            </p>
            <p>
              Being new is the reason we are built the way we are. We are not carrying three
              decades of paper files and batch processes, so we could design the firm around
              digital execution, an auditable record and an API from the first mandate onwards.
            </p>
          </div>
        </div>

        <div id="governance" className="flex scroll-mt-32 flex-col gap-6">
          <h2 className="text-xl text-foreground">Licences &amp; governance</h2>
          <dl className="flex flex-col">
            {licences.map((licence) => (
              <div
                key={licence.label}
                className="flex flex-col gap-1.5 border-t border-border py-5 first:border-0 first:pt-0"
              >
                <dt className="text-sm font-semibold text-foreground">{licence.label}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">
                  {licence.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/*
        Leadership grid hidden while in stealth — see the commented `leadership` array above.

        <section className="bg-secondary">
          <div className="container-page py-20 lg:py-28">
            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/70">
                Leadership
              </p>
              <h2 className="max-w-2xl text-3xl leading-tight text-balance text-secondary-foreground lg:text-4xl">
                The people accountable for your mandate.
              </h2>
            </div>

            <ul className="mt-12 grid gap-px bg-secondary-foreground/10 sm:grid-cols-2">
              {leadership.map((person) => (
                <li key={person.role} className="flex flex-col gap-2 bg-secondary p-8">
                  <h3 className="text-lg text-secondary-foreground">{person.name}</h3>
                  <p className="text-xs uppercase tracking-[0.16em] text-accent-foreground/70">
                    {person.role}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-secondary-foreground/75">
                    {person.bio}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      */}

      <div className="pt-20 lg:pt-28">
        <CtaBand />
      </div>
    </>
  )
}
