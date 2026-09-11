import Image from 'next/image'

const points = [
  {
    title: 'A corporate trustee does not die',
    body: 'An individual executor can predecease you, emigrate, or fall out with the family. A licensed trust company carries the mandate without interruption.',
  },
  {
    title: 'Assets segregated by law',
    body: 'Trust property is held separately from the company balance sheet and is not available to our creditors. Client accounts are reconciled every business day.',
  },
  {
    title: 'No conflict to manage',
    body: 'We do not manage money, sell investments or lend. Our only interest in a mandate is that the instrument is followed exactly as written.',
  },
]

export function Assurance() {
  return (
    <section className="bg-secondary">
      <div className="container-page grid items-center gap-14 py-20 lg:grid-cols-2 lg:py-28">
        <div className="relative h-72 w-full sm:h-96 lg:h-auto lg:aspect-4/3">
          <Image
            src="/images/consultation.png"
            alt="A trust officer reviewing estate documents with clients at a Kuala Lumpur office"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/70">
              Why a trust company
            </p>
            <h2 className="text-3xl leading-tight text-balance text-secondary-foreground lg:text-4xl">
              Continuity is the whole point of a trustee.
            </h2>
          </div>

          <ul className="flex flex-col">
            {points.map((point) => (
              <li
                key={point.title}
                className="flex flex-col gap-2 border-t border-secondary-foreground/15 py-6 first:border-0 first:pt-0"
              >
                <h3 className="text-base font-semibold text-secondary-foreground">
                  {point.title}
                </h3>
                <p className="text-sm leading-relaxed text-secondary-foreground/75">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
