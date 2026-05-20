const serviceCards = [
  {
    icon: 'BI',
    title: 'Brand Identity Design',
    description:
      'Logos, visual systems, color direction, and clean brand assets built for recognition.',
  },
  {
    icon: 'VG',
    title: 'Visual Graphic Design',
    description:
      'Posters, social graphics, print layouts, and digital visuals with strong composition.',
  },
  {
    icon: 'DM',
    title: 'Digital Marketing Design',
    description:
      'Campaign visuals, launch creatives, and scroll-ready graphics for online presence.',
  },
]

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-[#151827] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr_auto] lg:items-start">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f3c175]">
              <span className="h-px w-8 bg-[#f3c175]" />
              My services 
            </p>
            <h2 className="mt-5 max-w-md text-4xl font-black uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              What I&apos;m Offering
            </h2>
          </div>

          <p className="max-w-md hidden text-sm leading-7 text-white/62 lg:pt-9">
            Focused design services for brands that need clean identity,
            memorable visuals, and digital assets with a clear creative
            direction.
          </p>

          <a
            href="#contact"
            className="hidden h-14 items-center justify-center rounded-full bg-[#f3c175] px-8 text-sm font-bold uppercase text-[#151827] transition hover:bg-white lg:mt-6"
          >
            All Service
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[92px_1fr]">
          <div className="hidden flex-col items-center pt-5 lg:flex">
            <span className="rotate-180 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55 [writing-mode:vertical-rl]">
              Scroll Down
            </span>
            <span className="mt-5 h-24 w-px bg-white/30" />
            <a
              href="#work"
              aria-label="Scroll to work section"
              className="mt-5 grid size-14  place-items-center rounded-full bg-[#f3c175] text-xl font-semibold text-[#151827] transition hover:bg-white"
            >
              v
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {serviceCards.map((service, index) => (
              <article
                className={
                  index === 0
                    ? 'flex min-h-[285px] flex-col justify-between border border-[#f3c175] bg-[#f3c175] p-8 text-[#151827]'
                    : 'flex min-h-[285px] flex-col justify-between border border-white/20 bg-white/[0.03] p-8 text-white transition hover:border-[#f3c175] hover:bg-white/[0.06]'
                }
                key={service.title}
              >
                <div>
                  <div
                    className={
                      index === 0
                        ? 'grid size-14 place-items-center border border-[#151827] text-sm font-black'
                        : 'grid size-14 place-items-center border border-white/35 text-sm font-black text-[#f3c175]'
                    }
                  >
                    {service.icon}
                  </div>
                  <h3 className="mt-8 max-w-[220px] text-2xl font-black uppercase leading-tight">
                    {service.title}
                  </h3>
                  <p
                    className={
                      index === 0
                        ? 'mt-4 text-sm leading-6 text-[#151827]/72'
                        : 'mt-4 text-sm leading-6 text-white/58'
                    }
                  >
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="mt-8  hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.06em]"
                >
                  Read More
                  <span>-&gt;</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
