import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    initials: 'AK',
    name:     'Ananya Krishnan',
    role:     'Food & Lifestyle Writer',
    rating:    5,
    text:     'Vellum Coffee has redefined what I expect from a specialty café. The Reserve Cappuccino was unlike anything I\'ve tasted — complex, ephemeral, and absolutely worth the journey across the city.',
  },
  {
    initials: 'RM',
    name:     'Rohan Mehta',
    role:     'Architect & Design Critic',
    rating:    5,
    text:     'The space itself is a work of art. I come for the Nitro Cold Brew and stay for the atmosphere. It feels like stepping into a Milanese café with a Bombay soul — effortlessly refined.',
  },
  {
    initials: 'LN',
    name:     'Leila Nasser',
    role:     'International Travel Writer',
    rating:    5,
    text:     'Of all the cafés I\'ve visited across 44 countries, Vellum holds its own against the finest. The single origin espresso program alone earns five stars. The cold brew is extraordinary.',
  },
]

const slideVariants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.35 } }),
}

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="#c4903a" className="text-gold" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((p) => (p + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }

  const tc = TESTIMONIALS[current]

  return (
    <section className="bg-espresso py-24 lg:py-32">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="section-tag justify-center mb-4">
            <span>Voices</span>
          </div>
          <h2 className="section-heading">
            What Our Guests{' '}
            <em className="italic text-gold font-light">Are Saying</em>
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-espresso-card border border-gold/12 p-10 lg:p-14 relative overflow-hidden"
        >
          {/* Decorative quote mark */}
          <div className="font-display text-[130px] leading-none text-gold/[0.06] font-semibold
                          absolute top-2 left-8 pointer-events-none select-none">
            "
          </div>

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex justify-center mb-5">
              <Stars count={tc.rating} />
            </div>

            {/* Quote */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.blockquote
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="font-display font-light italic text-cream leading-[1.6] mb-10"
                style={{ fontSize: 'clamp(18px, 2.5vw, 26px)' }}
              >
                &ldquo;{tc.text}&rdquo;
              </motion.blockquote>
            </AnimatePresence>

            {/* Avatar + name */}
            <div className="flex items-center gap-4 justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light
                              flex items-center justify-center text-espresso font-sans font-semibold text-sm">
                {tc.initials}
              </div>
              <div className="text-left">
                <p className="font-sans text-[14px] font-medium text-cream">{tc.name}</p>
                <p className="font-sans text-[11px] font-light tracking-[1.5px] text-cream-muted">
                  {tc.role}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dot indicators */}
        <div className="flex gap-3 justify-center mt-7">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`tc-dot ${current === i ? 'active' : ''}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
