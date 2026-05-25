import { motion } from 'framer-motion'
import { ArrowRight, Coffee } from 'lucide-react'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center overflow-hidden bg-espresso">

      {/* ── Animated Background ────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-espresso-radial" />

        {/* Radial glow orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[560px] h-[560px] rounded-full
                        bg-gold/[0.13] blur-3xl animate-glow-pulse" />
        <div className="absolute top-2/3 left-[60%]
                        w-[320px] h-[320px] rounded-full
                        bg-gold/[0.07] blur-2xl animate-glow-pulse [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-1/4
                        w-[200px] h-[200px] rounded-full
                        bg-gold/[0.04] blur-xl animate-glow-pulse [animation-delay:4s]" />

        {/* Diagonal grid texture */}
        <div className="absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: 'repeating-linear-gradient(135deg, #c4903a 0px, #c4903a 1px, transparent 1px, transparent 60px)',
          }}
        />
      </div>

      {/* ── Floating Decorative Ring ──────────────────────────── */}
      <div className="absolute right-[4%] top-1/2 -translate-y-1/2 hidden xl:flex items-center justify-center animate-float">
        <div className="w-[440px] h-[440px] rounded-full border border-gold/[0.08] flex items-center justify-center">
          <div className="w-[330px] h-[330px] rounded-full border border-gold/[0.13] flex items-center justify-center">
            <div className="w-[216px] h-[216px] rounded-full border border-gold/[0.22]
                            bg-gold/[0.05] flex items-center justify-center">
              {/* Steam lines */}
              <div className="relative flex items-center justify-center">
                {[-20, 0, 20].map((x, i) => (
                  <div
                    key={i}
                    className="absolute bottom-12 w-[3px] h-7 bg-gradient-to-t from-gold/60 to-transparent
                               rounded-sm animate-steam"
                    style={{ left: `calc(50% + ${x}px)`, animationDelay: `${i * 0.85}s` }}
                  />
                ))}
                <Coffee size={58} className="text-gold/55" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Content ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-10 h-px bg-gold" />
          <span className="font-sans text-[10px] tracking-[5px] uppercase text-gold font-medium">
            Est. 2018 · Specialty Coffee
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="font-display font-light leading-[0.95] text-cream tracking-tight mb-7"
          style={{ fontSize: 'clamp(58px, 9.5vw, 112px)' }}
        >
          Where Coffee
          <br />
          <em className="italic text-gold not-italic font-light">Becomes</em>
          <br />
          Ritual.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-[15px] font-light leading-relaxed text-cream/60 max-w-[420px] mb-10"
        >
          Single-origin beans, master-roasted and hand-poured. Every cup tells
          the story of its origin, its journey, and the artisan hands behind it.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <button className="btn-gold" onClick={() => scrollTo('menu')}>
            Explore Menu <ArrowRight size={15} />
          </button>
          <button className="btn-outline" onClick={() => scrollTo('about')}>
            Our Story
          </button>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="flex flex-wrap gap-10 pt-8 border-t border-gold/[0.15]"
        >
          {[
            ['12+',  'Origins Sourced'],
            ['98%',  'Direct Trade'],
            ['6+',   'Years Craft'],
            ['4.9★', 'Guest Rating'],
          ].map(([number, label]) => (
            <div key={label}>
              <div className="font-display text-[30px] font-medium text-gold leading-none">
                {number}
              </div>
              <div className="font-sans text-[9px] uppercase tracking-[2.5px] text-cream/45 mt-1.5">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[8px] tracking-[4px] uppercase text-cream/25">Scroll</span>
        <div className="w-px h-9 bg-gradient-to-b from-gold/50 to-transparent" />
      </motion.div>
    </section>
  )
}
