import heroImage from '../assets/png/hero-media.jpeg'

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#151827] px-5 py-7 text-[#20242a] sm:px-8 lg:px-12">
      <div className="absolute left-[72%] top-0 hidden h-full w-px bg-[#f3b4ad]/60 lg:block" />
      <div className="absolute right-[10%] top-[32%] size-3 rounded-full bg-[#6d63d8]" />
      <div className="absolute left-[53%] top-[40%] size-2 rounded-full bg-[#6d63d8]" />
      <div className="absolute bottom-[28%] left-[53%] size-3 rounded-full bg-[#f4a044]" />
      <div className="absolute bottom-[16%] right-[10%] text-5xl font-light text-[#f08ed8]">
        +
      </div>
      <div className="absolute right-[36%] top-[25%] hidden text-7xl font-light text-[#52c6e7] md:block">
        ✦
      </div>

      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-1 text-2xl font-black text-[#f3c175]">
          <span className="grid size-10 place-items-center rounded-full bg-[#20242a] text-white">
            S
          </span>
          oo
        </a>

        <nav className="hidden items-center gap-11 text-sm font-semibold text-[#eaf8ff]/72 md:flex">
          <a className="transition hover:text-[#f3c175]" href="#services">
            Service
          </a>
          <a className="transition hover:text-[#f3c175]" href="#work">
            Works
          </a>
          <a className="transition hover:text-[#f3c175]" href="#about">
            About
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-[#20242a] px-5 py-3 text-sm font-semibold transition hover:bg-[#20242a] hover:text-white"
        >
          Contact Me
        </a>
      </header>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-12 py-12 lg:grid-cols-[0.9fr_1fr] lg:py-0">
        <div>
          <p className="text-xl font-semibold hidden text-[#eaf8ff] sm:text-2xl">
            Say Hello To{' '}
            <span className="font-black text-[#ef7f72]">Soo Samuel</span>
          </p>

          <h1 className="mt-7 max-w-2xl text-6xl font-black  text-[#eaf8ff] leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
            Your Brand Visual Designer
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-9 text-[#eaf8ff]/66">
            Creating clean, bold, and modern visual identities with minimal
            design, clear storytelling, and strong artistic direction.
          </p>

          <a
            href="mailto:soosamuel04@gmail.com"
            className="mt-9 inline-flex min-w-40 items-center justify-center rounded-full bg-[#f3c175] px-9 py-4 text-base font-bold text-black transition hover:bg-[#f3c175] hover:text-[#20242a]"
          >
            Hire Me
          </a>

          <div className="mt-16 max-w-xl  hidden grid-cols-3 gap-6">
            {[
              ['05+', 'Projects'],
              ['03+', 'Brand Systems'],
              ['08+', 'Design Services'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-3xl font-black sm:text-4xl">
                  {value.slice(0, -1)}
                  <span className="text-[#ef7f72]">+</span>
                </p>
                <p className="mt-2 text-sm text-[#20242a]/62">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-140 items-center justify-center lg:justify-end">
          <div className="absolute -right-2 top-8 h-130 w-90 rounded-[44%_44%_46%_46%/34%_34%_52%_52%] border-4 border-[#f3c175]/70 sm:w-107.5" />
          <div className="absolute bottom-2 right-2 h-90 w-65 rounded-[48%_48%_48%_48%/40%_40%_58%_58%] border-4 border-[#f3c175]/70 sm:w-87.5" />

          <div className="relative h-130 w-full max-w-110 overflow-hidden rounded-[44%_44%_46%_46%/34%_34%_52%_52%] bg-[#ff7f70] shadow-2xl shadow-[#20242a]/10">
            <div className="absolute inset-0 bg-[repeating-radial-gradient(ellipse_at_center,transparent_0,transparent_56px,rgba(255,255,255,0.75)_58px,rgba(255,255,255,0.75)_62px)] opacity-80" />
            <img
              src={heroImage}
              alt="Soo Samuel"
              className="relative z-10 h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
