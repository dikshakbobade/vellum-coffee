import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee } from 'lucide-react'

const CATEGORIES = ['Espresso', 'Cappuccino', 'Latte', 'Mocha', 'Cold Coffee', 'Desserts']

const MENU = {
  Espresso: [
    { name: 'Single Origin',    desc: 'Ethiopian Yirgacheffe — bright, floral, citrus-forward',         price: '$4.80', badge: 'Signature' },
    { name: 'Double Ristretto', desc: 'Concentrated extraction, intensely sweet and velvety',            price: '$5.20', badge: null },
    { name: 'Lungo Noir',       desc: 'Extended pour, bold and smoky with caramel finish',              price: '$5.00', badge: null },
    { name: 'Cortado',          desc: 'Equal measures espresso and warm steamed milk',                  price: '$5.80', badge: 'Popular' },
  ],
  Cappuccino: [
    { name: 'Classic Cappuccino', desc: 'Silky microfoam crown over rich double espresso',             price: '$6.00', badge: null },
    { name: 'Dry Cappuccino',     desc: 'More foam, less milk — intense, airy and bold',               price: '$6.00', badge: null },
    { name: 'Flavoured Cap',      desc: 'Hazelnut, Madagascar vanilla or salted caramel',              price: '$6.80', badge: null },
    { name: 'Reserve Cap',        desc: 'Rare Panama Gesha beans, hand-poured foam art',               price: '$9.50', badge: 'Reserve' },
  ],
  Latte: [
    { name: 'Classic Latte',    desc: 'Smooth, creamy and perfectly balanced — a timeless cup',        price: '$6.20', badge: null },
    { name: 'Turmeric Latte',   desc: 'Golden milk blend with ginger, cardamom and honey',             price: '$7.00', badge: 'New' },
    { name: 'Lavender Latte',   desc: 'Delicate house-made lavender syrup, steamed oat milk',          price: '$7.50', badge: 'New' },
    { name: 'Matcha Latte',     desc: 'Ceremonial grade matcha, premium oat milk',                     price: '$7.80', badge: null },
  ],
  Mocha: [
    { name: 'Dark Mocha',       desc: '70% dark chocolate ganache, deep espresso warmth',              price: '$7.50', badge: 'Signature' },
    { name: 'White Mocha',      desc: 'Creamy white chocolate with Madagascar vanilla bean',            price: '$7.50', badge: null },
    { name: 'Spiced Mocha',     desc: 'Cinnamon, chilli de árbol and dark chocolate blend',            price: '$8.00', badge: 'Bold' },
    { name: 'Sea Salt Mocha',   desc: 'Dark chocolate espresso finished with fleur de sel',            price: '$8.20', badge: null },
  ],
  'Cold Coffee': [
    { name: 'Cold Brew',        desc: '18-hour slow steep — naturally sweet and silky smooth',         price: '$6.50', badge: null },
    { name: 'Nitro Cold Brew',  desc: 'Nitrogen-infused with a cascading velvet texture',              price: '$8.00', badge: 'Specialty' },
    { name: 'Iced Americano',   desc: 'Double espresso poured over crystal clear ice',                 price: '$5.50', badge: null },
    { name: 'Dalgona Storm',    desc: 'Whipped coffee cloud over ice-cold chilled milk',               price: '$7.00', badge: 'Popular' },
  ],
  Desserts: [
    { name: 'Coffee Tiramisu',      desc: 'House-made with real espresso soak, mascarpone cream',     price: '$9.00', badge: 'Bestseller' },
    { name: 'Espresso Crème Brûlée',desc: 'Caramelised custard torched tableside to order',           price: '$10.50', badge: null },
    { name: 'Affogato al Caffè',    desc: 'Vanilla bean ice cream drowned in fresh espresso',         price: '$8.00', badge: 'Classic' },
    { name: 'Dark Coffee Brownie',  desc: 'Fudgy dark chocolate with espresso crumb crust',           price: '$6.50', badge: null },
  ],
}

const BADGE_STYLE = {
  Signature: 'bg-gold text-espresso',
  Popular:   'bg-gold text-espresso',
  Reserve:   'border border-gold text-gold',
  New:       'bg-espresso-mid border border-gold text-gold',
  Specialty: 'bg-espresso-mid border border-gold text-gold',
  Bold:      'bg-gold/20 text-gold-light border border-gold/30',
  Bestseller:'bg-gold text-espresso',
  Classic:   'border border-cream/30 text-cream/70',
}

const cardsVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function MenuSection() {
  const [active, setActive] = useState('Espresso')

  return (
    <section id="menu" className="bg-espresso py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag justify-center mb-4">
            <span>Our Offerings</span>
          </div>
          <h2 className="section-heading">
            The Full{' '}
            <em className="italic text-gold font-light">Menu</em>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`cat-tab ${active === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Menu cards with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={cardsVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {(MENU[active] || []).map((item) => (
              <motion.div
                key={item.name}
                variants={cardVariant}
                className="card-dark p-7 group relative cursor-default"
              >
                {/* Badge */}
                {item.badge && (
                  <span className={`absolute top-4 right-4 px-2.5 py-0.5 text-[8px] font-sans
                                    font-semibold tracking-[1.5px] uppercase
                                    ${BADGE_STYLE[item.badge] || 'bg-gold/20 text-gold'}`}>
                    {item.badge}
                  </span>
                )}

                {/* Icon */}
                <div className="w-11 h-11 border border-gold/20 flex items-center justify-center mb-5
                                group-hover:border-gold/50 transition-colors duration-300">
                  <Coffee size={19} className="text-gold/65 group-hover:text-gold/90 transition-colors duration-300" />
                </div>

                {/* Name */}
                <h3 className="font-display text-[21px] font-medium text-cream mb-2 leading-snug">
                  {item.name}
                </h3>

                {/* Desc */}
                <p className="font-sans text-[12px] font-light leading-relaxed text-cream-muted mb-5">
                  {item.desc}
                </p>

                {/* Price row */}
                <div className="flex items-center justify-between pt-4 border-t border-gold/10
                                group-hover:border-gold/25 transition-colors duration-300">
                  <span className="font-display text-[23px] font-medium text-gold">
                    {item.price}
                  </span>
                  <button className="btn-outline py-1.5 px-4 text-[9px]">
                    Add
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
