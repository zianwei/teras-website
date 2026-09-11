export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="container-page flex flex-col gap-5 py-16 lg:py-20">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
        <h1 className="max-w-3xl text-4xl leading-tight text-balance lg:text-5xl">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-primary-foreground/75">
          {description}
        </p>
      </div>
    </section>
  )
}
