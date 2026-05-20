import heroImage from '../assets/png/hero-image.jpeg'
import { roles } from './portfolioData'

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#151827] px-5 py-20 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-lg border border-white/10">
          <img
            src={heroImage}
            alt="Soo Samuel portrait"
            className="h-full max-h-[620px] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f3c175]">
            About Soo
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            Clean visuals, strong direction, and a human feeling.
          </h2>
          <p className="mt-6 text-base leading-8 text-white/70">
            I&apos;m Soo, a graphic designer focused on creating clean,
            emotionally resonant visuals that blend creativity with purpose. My
            work centers around brand identity, digital design, and visual
            storytelling, with a style that balances minimalism, clarity, and
            strong artistic direction. I enjoy turning ideas into visuals that
            feel modern, memorable, and human.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {roles.map((role) => (
              <span
                className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/74"
                key={role}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
