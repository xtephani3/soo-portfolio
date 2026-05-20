import { roles } from './portfolioData'

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-white px-5 py-24 text-center  text-[#151827] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.32em] text-[#f3c175]">
          About Me
        </p>

        <h2 className="mt-4 text-4xl text-[#151827] font-black uppercase leading-tight sm:text-5xl">
          Clean visuals, strong direction, and a human feeling.
        </h2>

        <div className="mx-auto mt-9 max-w-4xl space-y-5 text-xs font-semibold leading-7 text-black/90 sm:text-sm">
          <p>
            I&apos;m Soo, a graphic designer focused on creating clean,
            emotionally resonant visuals that blend creativity with purpose.
            My work centers around brand identity, digital design, and visual
            storytelling.
          </p>

          <p>
            With a bold and minimal style, I build visuals that balance
            clarity, artistic direction, and practical communication for modern
            brands.
          </p>

          <p>
            I enjoy turning ideas into visuals that feel memorable, human, and
            purposeful across logos, campaigns, posters, packaging, and digital
            content.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {roles.map((role) => (
            <span
              className="rounded-full border border-black/12 px-4 py-2 text-sm font-medium text-black"
              key={role}
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
