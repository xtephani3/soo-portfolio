import heroImage from '../assets/png/hero-image.jpeg'

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#151827] px-5 py-6 sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_35%,rgba(243,193,117,0.22),transparent_34%),linear-gradient(90deg,rgba(0,0,0,0.55),transparent_42%,rgba(0,0,0,0.58))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#151827] via-[#151827]/70 to-transparent" />

      <header className="relative z-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-full bg-white/12 px-4 py-3 text-sm font-medium text-white backdrop-blur-md ring-1 ring-white/10"
        >
          <span className="grid size-7 place-items-center rounded-full bg-[#f3c175] text-sm font-black text-[#151827]">
            S
          </span>
          Soo Samuel
        </a>

        <nav className="hidden items-center gap-7 rounded-full bg-white/10 px-6 py-3 text-sm text-white/80 backdrop-blur-md ring-1 ring-white/10 md:flex">
          <a className="transition hover:text-[#f3c175]" href="#work">
            Work
          </a>
          <a className="transition hover:text-[#f3c175]" href="#services">
            Services
          </a>
          <a className="transition hover:text-[#f3c175]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#f3c175]" href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.8fr_1.1fr_0.7fr]">
          <div className="order-2 space-y-9 pt-10 lg:order-1 lg:pt-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm text-white/85 ring-1 ring-white/10">
              <span className="size-2 rounded-full bg-[#f3c175]" />
              Available for work
            </span>

            <div className="space-y-5">
              <p className="text-3xl font-light leading-tight text-white sm:text-4xl lg:text-5xl">
                Graphic designer crafting clean, memorable brand visuals.
              </p>
              <p className="max-w-md text-sm leading-7 text-white/62 sm:text-base">
                Brand identity, digital design, and visual storytelling with a
                bold minimal direction.
              </p>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative h-[54vh] min-h-[430px] w-full max-w-[560px] overflow-hidden rounded-b-[48%] rounded-t-[30rem] bg-black/20 shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:h-[68vh]">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_72px)]" />
              <img
                src={heroImage}
                alt="Soo Samuel"
                className="relative z-10 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#151827] via-transparent to-black/20" />
            </div>
          </div>

          <div className="order-3 flex flex-col items-start gap-8 lg:items-end">
            <a
              href="mailto:soosamuel04@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full bg-[#f3c175] py-3 pl-3 pr-7 text-base font-semibold text-[#151827] transition hover:bg-white"
            >
              <span className="grid size-11 place-items-center rounded-full bg-white text-2xl transition group-hover:translate-x-1">
                -&gt;
              </span>
              Let&apos;s Collaborate
            </a>

            <div className="hidden flex-col items-center gap-4 lg:flex">
              <div className="h-28 w-px bg-white/24" />
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-10 place-items-center rounded-full bg-white/12 text-sm font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-[#f3c175] hover:text-[#151827]"
              >
                IG
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center rounded-full bg-white/12 text-sm font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-[#f3c175] hover:text-[#151827]"
              >
                in
              </a>
              <a
                href="#"
                aria-label="X"
                className="grid size-10 place-items-center rounded-full bg-white/12 text-sm font-semibold text-white/80 ring-1 ring-white/10 transition hover:bg-[#f3c175] hover:text-[#151827]"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className="pointer-events-none absolute -bottom-5 left-1/2 z-20 w-full -translate-x-1/2 px-4 text-center text-[24vw] font-black leading-none tracking-normal text-white sm:-bottom-10 sm:text-[18vw] lg:-bottom-14 lg:text-[15vw]">
        Soo
      </h1>
    </section>
  )
}

export default HeroSection
