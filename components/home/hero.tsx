import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page grid items-stretch gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div className="flex flex-col justify-center gap-8">
          <p className="text-xs uppercase tracking-[0.22em] text-accent">
            Malaysian Trust Company &middot; Trust Companies Act 1949
          </p>
          <h1 className="text-4xl leading-[1.1] text-balance md:text-5xl lg:text-6xl">
            The steady hand behind Malaysian legacies and mandates.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-primary-foreground/75">
            Teras acts as trustee for families protecting what they have built, and for
            institutions that need assets held by a neutral party. Two mandates, one standard of
            stewardship &mdash; delivered on a platform built this decade, not retrofitted to it.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/personal"
              className="group flex items-center gap-2 bg-accent px-6 py-3.5 text-sm text-accent-foreground transition-colors hover:bg-accent/90"
            >
              For individuals &amp; families
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="/corporate"
              className="flex items-center gap-2 border border-primary-foreground/25 px-6 py-3.5 text-sm text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              For institutions
            </Link>
          </div>

          <dl className="mt-2 grid grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-8">
            {[
              {
                value: 'Independent',
                label: 'We hold assets. We do not manage money or sell products.',
              },
              {
                value: 'Perpetual',
                label: 'A corporate trustee carries the mandate without interruption.',
              },
              {
                value: 'API-first',
                label: 'Instruct, verify and report through your own systems.',
              },
            ].map((stat) => (
              <div key={stat.value} className="flex flex-col gap-1.5">
                <dt className="sr-only">{stat.value}</dt>
                <dd className="font-serif text-xl text-primary-foreground lg:text-2xl">
                  {stat.value}
                </dd>
                <p className="text-xs leading-relaxed text-primary-foreground/60">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative min-h-80 lg:min-h-full">
          <Image
            src="/images/hero-kl-skyline.png"
            alt="The Kuala Lumpur skyline at dusk"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 border-t-2 border-accent bg-primary/85 p-6 backdrop-blur-sm">
            <p className="text-sm leading-relaxed text-primary-foreground/85">
              A registered trust company under the Trust Companies Act 1949, incorporated to act
              as executor, trustee and custodian.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
