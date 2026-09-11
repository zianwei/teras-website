import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { ServiceList, type Service } from '@/components/service-list'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Personal Trust — Wasiat, Wills & Estate Administration',
  description:
    'Wasiat and will writing, private trusts, Hibah Amanah and estate administration for Malaysian individuals and families.',
}

const services: Service[] = [
  {
    id: 'wasiat',
    title: 'Wasiat & Will Writing',
    summary:
      'A will is the cheapest insurance a family can buy. Without one, your estate is distributed under the Distribution Act 1958 or Faraid, and your family may wait years for a Letter of Administration.',
    points: [
      'Conventional wills for non-Muslim clients',
      'Wasiat drafted in line with Syariah principles',
      'Appointment of Teras as executor',
      'Guardianship nominations for minor children',
      'Safekeeping of the original instrument',
      'Unlimited amendments in the first year',
    ],
  },
  {
    id: 'private-trust',
    title: 'Private Trust',
    summary:
      'A living trust moves assets out of your estate now, so they pass to your beneficiaries without probate — and on the terms you set, not all at once.',
    points: [
      'Declaration of trust over property and shares',
      'Staged distributions by age or milestone',
      'Protection for beneficiaries with special needs',
      'Insurance policy trusts (nomination & trust)',
      'Education and maintenance trusts',
      'Standby trusts triggered on incapacity',
    ],
  },
  {
    id: 'hibah',
    title: 'Hibah Amanah',
    summary:
      'For Muslim clients, Hibah is an inter vivos gift that takes effect immediately and falls outside the Faraid distribution, letting you provide for a specific dependant with certainty.',
    points: [
      'Syariah-compliant gift documentation',
      'Hibah over cash, property or takaful benefits',
      'Combined Wasiat and Hibah structuring',
      'Review by our Syariah advisory panel',
    ],
  },
  {
    id: 'estate',
    title: 'Estate Administration & Probate',
    summary:
      'When a death occurs we take over the administrative burden — locating assets, settling liabilities and obtaining the grant — so the family can grieve rather than queue.',
    points: [
      'Petition for Probate or Letter of Administration',
      'Asset tracing across banks, EPF and registries',
      'Settlement of debts and outstanding tax',
      'Transfer of land titles and share registers',
      'Distribution to beneficiaries with full accounts',
      'Trust administration after distribution',
    ],
  },
]

export default function PersonalPage() {
  return (
    <>
      <PageHero
        eyebrow="For individuals & families"
        title="Make sure what you built reaches the people you built it for."
        description="Billions of ringgit in Malaysian assets sit frozen or unclaimed because estates were left unplanned. We help you avoid becoming part of that figure."
      />
      <ServiceList services={services} />
      <CtaBand
        title="Start with a will review"
        description="Bring what you have — or nothing at all. The first consultation is complimentary and carries no obligation."
      />
    </>
  )
}
