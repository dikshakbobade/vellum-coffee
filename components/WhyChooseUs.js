import { motion } from 'framer-motion'
import { Leaf, Award, Coffee, Users } from 'lucide-react'

const WHY_ITEMS = [
  {
    Icon:  Leaf,
    title: 'Single Origin Sourcing',
    desc:  'We partner directly with smallholder farms in Ethiopia, Colombia and Costa Rica — complete traceability from tree to cup.',
  },
  {
    Icon:  Award,
    title: 'Master Roaster Craft',
    desc:  'Our head roaster trained under two World Barista Champions. Every batch is roasted to within 2°C of flavour perfection.',
  },
  {
    Icon:  Coffee,
    title: 'Seasonal Menus',
    desc:  'Our offerings rotate with each harvest season, ensuring peak freshness and a menu that evolves with nature\'s rhythms.',
  },
  {
    Icon:  Users,
    title: 'Coffee Community',
    desc:  'Monthly cupping sessions, brewing workshops and barista training — because coffee knowledge is meant to be shared.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function WhyChooseUs() {
  return (
    <section className="bg-espresso py-24 lg:py-32">
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
            <span>The Vellum Difference</span>
          </div>
          <h2 className="section-heading">
            Four Reasons to{' '}
            <em className="italic text-gold font-light">Choose Us</em>
          </h2>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {WHY_ITEMS.map(({ Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="card-dark p-8 text-center group"
            >
              {/* Icon wrapper */}
              <div className="w-[60px] h-[60px] border border-gold/20 flex items-center justify-center
                              mx-auto mb-6 transition-all duration-400 ease-out
                              group-hover:border-gold/55 group-hover:bg-gold/[0.06]
                              group-hover:shadow-[0_0_24px_rgba(196,144,58,0.12)]">
                <Icon size={24} className="text-gold/65 transition-colors duration-400 group-hover:text-gold" />
              </div>

              {/* Title */}
              <h3 className="font-display text-[22px] font-medium text-cream mb-3 leading-snug">
                {title}
              </h3>

              {/* Desc */}
              <p className="font-sans text-[13px] font-light leading-relaxed text-cream-muted">
                {desc}
              </p>

              {/* Subtle bottom accent */}
              <div className="mt-6 h-px w-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent
                              mx-auto transition-all duration-500 ease-out group-hover:w-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
