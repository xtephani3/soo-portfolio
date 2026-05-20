import { projects } from './portfolioData'

function WorkSection() {
  return (
    <section
      id="work"
      className="relative bg-[#151827] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f3c175]">
              <span className="h-px w-8 bg-[#f3c175]" />
              Selected Work
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black uppercase leading-[1.05] sm:text-5xl lg:text-6xl">
              Recent Design Projects
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/62">
            A selected look at identity, campaign, packaging, and digital
            design work. Titles and client details are placeholders for now.
          </p>
        </div>

        <div className="grid gap-x-9 gap-y-16 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className="group"
              key={`${project.title}-${index}`}
            >
              <a href="#contact" aria-label={`View ${project.title}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-white/[0.04]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              </a>

              <div className="pt-7">
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f3c175]">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <a href="#contact" className="inline-block">
                  <h3 className="mt-4 text-3xl font-black leading-tight">
                    {project.title}
                  </h3>
                </a>

                <p className="mt-5 text-lg leading-8 text-white/62">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span
                      className="rounded-full bg-white/[0.08] px-4 py-2 text-sm font-medium text-white/72"
                      key={tool}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm hidden text-white/45">{project.client}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSection
