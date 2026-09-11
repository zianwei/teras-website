import Link from 'next/link'
import { site } from '@/lib/site'

export function CtaBand({
  title = 'Speak with a trust officer',
  description = 'A confidential, no-obligation discussion about your estate or your corporate mandate.',
}: {
  title?: string
  description?: string
}) {
  return (
    <section className="container-page">
      <div className="flex flex-col items-start gap-6 border-t-2 border-accent bg-secondary px-8 py-12 md:flex-row md:items-center md:justify-between lg:px-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-secondary-foreground">{title}</h2>
          <p className="max-w-xl text-sm leading-relaxed text-secondary-foreground/80">
            {description}
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-wrap gap-3">
          <Link
            href="/contact"
            className="bg-primary px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a consultation
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="border border-primary/25 px-6 py-3 text-sm text-primary transition-colors hover:bg-primary/5"
          >
            Email us
          </a>
        </div>
      </div>
    </section>
  )
}
