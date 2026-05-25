import { motion } from 'framer-motion'
import { Coffee, ArrowRight } from 'lucide-react'

const FEATURED = [
  {
    name:        'Single Origin Espresso',
    from:        'Ethiopia — Yirgacheffe',
    notes:       'Bright · Floral · Citrus',
    price:       '$4.80',
    badge:       'Signature',
    gradient:    'linear-gradient(135deg, #1f0c05 0%, #3e1c0c 100%)',
    badgeStyle:  'bg-gold text-espresso',
  },
  {
    name:        'Nitro Cold Brew',
    from:        'Colombia — Huila',
    notes:       'Smooth · Velvety · Chocolate',
    price:       '$8.00',
    badge:       'Specialty',
    gradient:    'linear-gradient(135deg, #0d1420 0%, #1a2a40 100%)',
    badgeStyle:  'border border-gold text-gold',
  },
  {
    name:        'Reserve Cappuccino',
    from:        'Panama — La Esmeralda',
    notes:       'Complex · Floral · Rare',
    price:       '$9.50',
    badge:       'Reserve',
    gradient:    'linear-gradient(135deg, #1a1005 0%, #342210 100%)',
    badgeStyle:  'bg-gold text-espresso',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}
const item = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function FeaturedDrinks() {
  return (
    <section className="bg-espresso-card py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag justify-center mb-4">
            <span>House Favourites</span>
          </div>
          <h2 className="section-heading">
            Signature{' '}
            <em className="italic text-gold font-light">Creations</em>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {FEATURED.map((drink) => (
            <motion.div
              key={drink.name}
              variants={item}
              className="card-dark group overflow-hidden cursor-default"
            >
              {/* Visual area */}
              <div
                className="h-52 relative flex items-center justify-center"
                style={{ background: drink.gradient }}
              >
                {/* Badge */}
                <span className={`absolute top-4 right-4 px-3 py-1 text-[9px] font-sans font-semibold
                                  tracking-[1.5px] uppercase ${drink.badgeStyle}`}>
                  {drink.badge}
                </span>

                {/* Icon with steam */}
                <div className="relative flex items-center justify-center">
                  {[-18, 0, 18].map((x, i) => (
                    <div
                      key={i}
                      className="absolute bottom-12 w-[3px] h-6 bg-gradient-to-t from-gold/50 to-transparent
                                 rounded-sm animate-steam opacity-0 group-hover:opacity-100"
                      style={{ left: `calc(50% + ${x}px)`, animationDelay: `${i * 0.8}s`,
                               transition: 'opacity 0.4s ease' }}
                    />
                  ))}
                  <div className="w-[110px] h-[110px] rounded-full border border-gold/25
                                  flex items-center justify-center bg-gold/[0.05]
                                  transition-all duration-500 group-hover:border-gold/50
                                  group-hover:bg-gold/[0.08]">
                    <Coffee size={46} className="text-gold/55 group-hover:text-gold/80 transition-colors duration-500" />
                  </div>
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-espresso-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="font-sans text-[9px] tracking-[3px] uppercase text-cream-muted mb-2">
                  {drink.from}
                </p>
                <h3 className="font-display text-[23px] font-medium text-cream mb-2 leading-tight">
                  {drink.name}
                </h3>
                <p className="font-sans text-[11px] tracking-[2px] text-cream-muted">
                  {drink.notes}
                </p>

                <div className="flex items-center justify-between mt-6 pt-5 border-t border-gold/10">
                  <span className="font-display text-[27px] font-medium text-gold">
                    {drink.price}
                  </span>
                  <button
                    className="btn-gold py-2.5 px-5 text-[9px]"
                    onClick={() => scrollTo('reservation')}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            className="btn-outline flex items-center gap-2 mx-auto"
            onClick={() => scrollTo('menu')}
          >
            View Full Menu <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
