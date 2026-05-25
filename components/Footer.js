import { motion } from 'framer-motion'
import { Coffee, Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const LINKS = {
  Navigate: ['Home', 'Menu', 'About', 'Gallery', 'Reservation'],
  Coffee:   ['Espresso', 'Cold Brew', 'Single Origin', 'Reserve Series', 'Brewing Guide'],
  Company:  ['Our Story', 'Origin Sourcing', 'Press & Media', 'Careers', 'Contact'],
}

const SOCIALS = [
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Twitter,   label: 'Twitter'   },
  { Icon: Facebook,  label: 'Facebook'  },
  { Icon: Youtube,   label: 'YouTube'   },
]

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Footer() {
  return (
    <footer className="bg-[#060402] border-t border-gold/10">

      {/* ── CTA Banner ──────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="border-b border-gold/10"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col md:flex-row
                        items-center justify-between gap-6">
          <div>
            <p className="font-sans text-[9px] tracking-[4px] uppercase text-gold mb-2">
              Start your ritual
            </p>
            <h3 className="font-display text-[clamp(28px,4vw,44px)] font-light text-cream leading-tight">
              Reserve a table &amp; experience
              <br className="hidden md:block" />{' '}
              <em className="italic text-gold font-light">Vellum in person</em>
            </h3>
          </div>
          <button
            className="btn-gold shrink-0 px-10 py-4"
            onClick={() => scrollTo('reservation')}
          >
            Book a Table
          </button>
        </div>
      </motion.div>

      {/* ── Main Footer ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-3 mb-5 cursor-pointer bg-transparent border-none outline-none"
            >
              <div className="w-8 h-8 border border-gold flex items-center justify-center">
                <Coffee size={15} className="text-gold" />
              </div>
              <span className="font-display text-xl tracking-[4px] text-cream uppercase font-medium">
                Vellum
              </span>
            </button>

            {/* Brand desc */}
            <p className="font-sans text-[13px] font-light leading-relaxed text-cream-muted max-w-[260px] mb-7">
              Specialty coffee roasted with intention, served with care. Every cup is a direct
              connection to its origin.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {SOCIALS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="social-link flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-sans text-[9px] tracking-[3px] uppercase text-gold font-semibold mb-5">
                {heading}
              </h4>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-[13px] font-light text-cream-muted
                                 hover:text-cream transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-gold mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] font-light text-cream/30 tracking-wide">
            © {new Date().getFullYear()} Vellum Coffee. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Use', 'Cookie Preferences'].map((l) => (
              <a
                key={l}
                href="#"
                className="font-sans text-[10px] font-light text-cream/30
                           hover:text-cream/60 transition-colors duration-300"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
