import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceList, type Service } from '@/components/service-list'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Corporate Trust — Escrow, Custody & Digital Trusteeship',
  description:
    'Escrow, stakeholder accounts, custody and security agency for Malaysian institutions, delivered as a digital trustee with API-based instruction and reporting.',
}

const services: Service[] = [
  {
    id: 'escrow',
    title: 'Escrow & Stakeholder Accounts',
    summary:
      'A neutral third party holding funds or documents until agreed conditions are met — used in M&A completions, project finance drawdowns, property developments and platform settlement.',
    points: [
      'Transaction and retention escrow accounts',
      'Milestone and condition-based releases',
      'Housing development account monitoring',
      'Stakeholder accounts for marketplaces',
      'Independent verification of release conditions',
      'Statements and audit extracts on demand',
    ],
  },
  {
    id: 'custody',
    title: 'Document & Asset Custody',
    summary:
      'Safekeeping of the instruments that prove ownership, held by a trust company rather than sitting in a drawer or on a single director’s laptop.',
    points: [
      'Share certificates and title documents',
      'Executed deeds and agreements',
      'Source code and IP escrow deposits',
      'Sealed instructions released on a trigger event',
    ],
  },
  {
    id: 'security-agency',
    title: 'Security Agency & Trust',
    summary:
      'Where several lenders or investors share the same collateral, we hold and administer that security on their behalf so no single party has to trust another.',
    points: [
      'Holding and perfection of security',
      'Security agency for syndicated facilities',
      'Covenant and undertaking monitoring',
      'Convening and chairing holder meetings',
      'Enforcement on an event of default',
      'Conventional and Syariah-compliant structures',
    ],
  },
  {
    id: 'digital-trustee',
    title: 'Digital Trustee',
    summary:
      'The same fiduciary duties, executed digitally end to end. Instruments are signed, held and acted on electronically, with a timestamped chain of custody from instruction to distribution — so the record of what was held, and on whose authority, is available immediately rather than at the next reporting cycle.',
    points: [
      'Digitally executed deeds and instructions',
      'Electronic onboarding, KYC and screening',
      'Timestamped, tamper-evident audit trail',
      'Role-based access for principals and auditors',
      'Real-time visibility of held balances and assets',
      'Digital asset and tokenised instrument custody',
    ],
  },
  {
    id: 'api',
    title: 'Trustee API & Integrations',
    summary:
      'For platforms, fintechs and corporates that need trusteeship inside their own product rather than alongside it. Our API lets you open an account, hold a balance, release on a condition and pull the audit record without a single email — while the underlying obligation remains a trust, held by a licensed trust company.',
    points: [
      'REST API for account opening and releases',
      'Webhooks on deposit, release and exception events',
      'Programmatic condition and milestone checks',
      'Reconciliation and statement endpoints',
      'Sandbox environment and technical onboarding',
      'White-labelled escrow inside your own flow',
    ],
  },
]

export default function CorporatePage() {
  return (
    <>
      <PageHero
        eyebrow="For institutions"
        title="An independent trustee your counterparties and your engineers can both work with."
        description="We hold funds, documents and security for Malaysian institutions — and we expose that capability through an API, so trusteeship fits inside the transaction instead of slowing it down."
      />
      <ServiceList services={services} />
      <CtaBand
        title="Discuss a mandate"
        description="Send us the draft deed, term sheet or integration requirement and our corporate trust team will revert with a fee proposal and timeline."
      />
    </>
  )
}
