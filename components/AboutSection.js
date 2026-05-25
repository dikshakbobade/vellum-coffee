import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Coffee } from 'lucide-react'

const STATS = [
  { number: '793', label: 'Cups Daily' },
  { number: '12',  label: 'Origin Partners' },
  { number: '98%', label: 'Direct Trade' },
  { number: '4.9★', label: 'Guest Rating' },
]

const fadeRight = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}
const fadeLeft = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-espresso-card py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Visual Panel ──────────────────────────────── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            {/* Main visual */}
            <div
              className="h-[480px] relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #2d1206 0%, #1a0904 50%, #3d1c0c 100%)' }}
            >
              {/* Centre decoration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[200px] h-[200px] rounded-full border border-gold/25
                                flex items-center justify-center bg-gold/[0.05]
                                animate-float">
                  {/* Steam */}
                  {[-20, 0, 20].map((x, i) => (
                    <div
                      key={i}
                      className="absolute bottom-14 w-[3px] h-7
                                 bg-gradient-to-t from-gold/55 to-transparent rounded-sm animate-steam"
                      style={{ left: `calc(50% + ${x}px)`, animationDelay: `${i * 0.85}s` }}
                    />
                  ))}
                  <Coffee size={64} className="text-gold/50" />
                </div>
              </div>

              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: 'repeating-linear-gradient(0deg,#c4903a 0px,#c4903a 1px,transparent 1px,transparent 44px),repeating-linear-gradient(90deg,#c4903a 0px,#c4903a 1px,transparent 1px,transparent 44px)' }}
              />

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 px-7 pb-7 pt-16
                              bg-gradient-to-t from-espresso/95 to-transparent">
                <p className="font-sans text-[9px] tracking-[3px] uppercase text-gold mb-1">
                  Sourced from
                </p>
                <p className="font-display text-xl text-cream font-light">
                  Ethiopia · Colombia · Panama
                </p>
              </div>
            </div>

            {/* Floating stat badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 lg:-right-6 bg-espresso border border-gold/25 p-6"
            >
              <div className="font-display text-[44px] font-medium text-gold leading-none">6+</div>
              <div className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream-muted mt-1">
                Years of Craft
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Text & Stats ─────────────────────────────── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="section-tag mb-4">
              <span>Our Story</span>
            </div>

            <h2 className="section-heading mb-6">
              Born From a<br />
              <em className="italic text-gold font-light">Love of Origin</em>
            </h2>

            <p className="font-sans text-[15px] font-light leading-[1.9] text-cream/60 mb-5">
              Vellum Coffee was founded in 2018 by two friends who spent three months travelling
              through Ethiopia&rsquo;s Yirgacheffe region, watching coffee transform from cherry
              to cup in the hands of generational farmers.
            </p>
            <p className="font-sans text-[15px] font-light leading-[1.9] text-cream/60 mb-10">
              We returned with a singular mission: to bring that story — unfiltered,
              unadulterated — to every cup we serve. We pay above-market rates to our
              partner farms. We roast in-house. We never compromise on flavour.
            </p>

            {/* Stats grid */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {STATS.map((s) => (
                <motion.div key={s.label} variants={fadeUp} className="stat-card">
                  <div className="font-display text-[32px] font-medium text-gold leading-none">
                    {s.number}
                  </div>
                  <div className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream-muted mt-2">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
