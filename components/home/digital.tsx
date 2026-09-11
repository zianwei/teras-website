import Link from 'next/link'
import { ArrowUpRight, Plug, ShieldCheck, FileClock } from 'lucide-react'

const capabilities = [
  {
    icon: Plug,
    title: 'Trustee API',
    body: 'Open an escrow, release a milestone, lodge a beneficiary change — programmatically, from your own platform, with every call signed and logged.',
  },
  {
    icon: FileClock,
    title: 'Digital instruments',
    body: 'Deeds, instructions and consents executed and stored digitally, with a timestamped chain of custody from signature to distribution.',
  },
  {
    icon: ShieldCheck,
    title: 'Verifiable records',
    body: 'Beneficiaries, auditors and counterparties can confirm what is held and on what terms, without waiting on a quarterly statement.',
  },
]

export function Digital() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page py-20 lg:py-28">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Digital trustee</p>
          <h2 className="max-w-2xl text-3xl leading-tight text-balance lg:text-4xl">
            Trusteeship that speaks to your systems, not just your lawyers.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/75">
            Most trust work still moves by letter, wet signature and reconciliation after the fact.
            We built Teras the other way round: a licensed fiduciary with an API in front of it, so
            holding, releasing and reporting on assets happens in the same flow as the transaction
            itself.
          </p>
        </div>

        <ul className="mt-12 grid gap-px bg-primary-foreground/15 md:grid-cols-3">
          {capabilities.map((cap) => (
            <li key={cap.title} className="flex flex-col gap-4 bg-primary p-8">
              <cap.icon className="size-6 text-accent" aria-hidden="true" />
              <h3 className="text-lg text-primary-foreground">{cap.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">{cap.body}</p>
            </li>
          ))}
        </ul>

        <Link
          href="/corporate#digital-trustee"
          className="group mt-10 inline-flex items-center gap-2 text-sm text-accent"
        >
          See how the digital mandate works
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  )
}
