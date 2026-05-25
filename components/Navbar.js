import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, Menu, X } from 'lucide-react'

const NAV_LINKS = ['home', 'menu', 'about', 'gallery', 'reservation']

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
  exit:   { opacity: 0, height: 0,    transition: { duration: 0.25 } },
}

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'py-3 bg-espresso/92 backdrop-blur-2xl border-b border-gold/10 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* Logo */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          onClick={() => scrollTo('home')}
          className="flex items-center gap-3 cursor-pointer bg-transparent border-none outline-none"
        >
          <div className="w-8 h-8 border border-gold flex items-center justify-center shrink-0">
            <Coffee size={15} className="text-gold" />
          </div>
          <span className="font-display text-xl tracking-[4px] text-cream uppercase font-medium">
            Vellum
          </span>
        </motion.button>

        {/* Desktop nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden md:flex items-center gap-9"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="nav-link"
              aria-label={`Navigate to ${link}`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden md:block"
        >
          <button className="btn-gold py-2.5 px-6 text-[10px]" onClick={() => scrollTo('reservation')}>
            Reserve a Table
          </button>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="md:hidden bg-transparent border-none text-cream cursor-pointer p-1 outline-none"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-espresso/97 backdrop-blur-2xl border-t border-gold/10 overflow-hidden"
          >
            <div className="px-6 pt-8 pb-10 flex flex-col items-center gap-7">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => scrollTo(link)}
                  className="font-display text-4xl font-light text-cream/80 hover:text-gold
                             transition-colors duration-300 tracking-widest cursor-pointer
                             bg-transparent border-none outline-none"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="btn-gold mt-3 px-10 py-3"
                onClick={() => scrollTo('reservation')}
              >
                Reserve a Table
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
