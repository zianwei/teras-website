const steps = [
  {
    step: 'Step 1',
    title: 'Consultation',
    body: 'We map your assets, dependants and intentions — or for institutions, the mandate and deed structure.',
  },
  {
    step: 'Step 2',
    title: 'Structuring',
    body: 'We recommend the instrument that fits: a will, a living trust, a hibah, or the appropriate trusteeship arrangement.',
  },
  {
    step: 'Step 3',
    title: 'Execution',
    body: 'Documents are drafted, witnessed and placed in safekeeping. Deeds are lodged with the relevant authority.',
  },
  {
    step: 'Step 4',
    title: 'Administration',
    body: 'When the trust takes effect we act — distributing to beneficiaries or releasing on condition, and reporting throughout.',
  },
]

export function Process() {
  return (
    <section className="container-page py-20 lg:py-28">
      <div className="flex flex-col gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/70">How it works</p>
        <h2 className="max-w-2xl text-3xl leading-tight text-balance lg:text-4xl">
          From first meeting to final distribution.
        </h2>
      </div>

      <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.title} className="flex flex-col gap-3 border-t-2 border-primary pt-5">
            <p className="text-xs uppercase tracking-[0.16em] text-accent-foreground/70">
              {step.step}
            </p>
            <h3 className="text-lg text-foreground">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
