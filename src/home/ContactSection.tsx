import {
  RiInstagramFill,
  RiLinkedinFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from '@remixicon/react'

const socialLinks = [
  {
    href: 'https://www.instagram.com/soo_samuel1',
    label: 'Instagram',
    Icon: RiInstagramFill,
  },
  {
    href: '#',
    label: 'LinkedIn',
    Icon: RiLinkedinFill,
  },
  {
    href: '#',
    label: 'X',
    Icon: RiTwitterXFill,
  },
  {
    href: 'https://wa.me/2348082948221',
    label: 'WhatsApp',
    Icon: RiWhatsappFill,
  },
]

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#151827] px-5 py-20 text-white sm:px-8 lg:px-12"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-white/10 pt-16 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f3c175]">
            Contact
          </p>
          <h2 className="mt-3 max-w-3xl text-5xl font-semibold leading-tight sm:text-7xl">
            Let&apos;s build visuals that people remember.
          </h2>
        </div>

        <div className="space-y-5">
          <a
            href="mailto:soosamuel04@gmail.com"
            className="inline-flex items-center gap-3 rounded-full bg-[#f3c175] py-3 pl-3 pr-7 text-base font-semibold text-[#151827] transition hover:bg-white"
          >
            <span className="grid size-11 place-items-center rounded-full bg-white text-2xl text-[#151827]">
              -&gt;
            </span>
            soosamuel04@gmail.com
          </a>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                href={href}
                aria-label={label}
                className="grid size-14 place-items-center rounded-full bg-white text-[#151827] transition duration-300 hover:-translate-y-1 hover:bg-[#f3c175] hover:shadow-lg hover:shadow-[#f3c175]/20"
                key={label}
              >
                <Icon size={25} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
