export type Service = {
  id: string
  title: string
  summary: string
  points: string[]
}

export function ServiceList({ services }: { services: Service[] }) {
  return (
    <div className="container-page flex flex-col py-20 lg:py-28">
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="grid scroll-mt-32 gap-8 border-t border-border py-12 first:border-0 first:pt-0 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl leading-tight text-balance text-foreground lg:text-3xl">
              {service.title}
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-base leading-relaxed text-muted-foreground">{service.summary}</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 bg-muted px-4 py-3 text-sm leading-relaxed text-foreground"
                >
                  <span aria-hidden="true" className="mt-1.5 size-1 flex-shrink-0 bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  )
}
