import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'

const TILES = [
  {
    id: 1,
    label: 'The Morning Pour',
    gradient: 'linear-gradient(135deg, #2d1006 0%, #4a2010 60%, #2a1005 100%)',
    colSpan: 'lg:col-span-2',
    height:  'h-[320px]',
  },
  {
    id: 2,
    label: 'Cold Brew Lab',
    gradient: 'linear-gradient(150deg, #0e1520 0%, #1a2a3c 60%, #0a1018 100%)',
    colSpan: 'lg:col-span-1',
    height:  'h-[320px]',
  },
  {
    id: 3,
    label: 'Single Origin Selection',
    gradient: 'linear-gradient(140deg, #1a0a04 0%, #3d1c0c 50%, #2a0e06 100%)',
    colSpan: 'lg:col-span-1',
    height:  'h-[260px]',
  },
  {
    id: 4,
    label: 'Latte Art',
    gradient: 'linear-gradient(160deg, #1c1005 0%, #3a2210 60%, #200e06 100%)',
    colSpan: 'lg:col-span-1',
    height:  'h-[260px]',
  },
  {
    id: 5,
    label: 'The Roasting Room',
    gradient: 'linear-gradient(150deg, #0a0c18 0%, #161e30 55%, #080c18 100%)',
    colSpan: 'lg:col-span-1',
    height:  'h-[260px]',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-espresso-card py-24 lg:py-32">
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
            <span>Visual Journal</span>
          </div>
          <h2 className="section-heading">
            A Glimpse into{' '}
            <em className="italic text-gold font-light">Our World</em>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {TILES.map((tile) => (
            <motion.div
              key={tile.id}
              variants={item}
              className={`gallery-tile ${tile.colSpan} ${tile.height}`}
            >
              {/* Background */}
              <div
                className="gallery-tile-inner w-full h-full relative"
                style={{ background: tile.gradient }}
              >
                {/* Centre icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Coffee
                    size={tile.colSpan.includes('2') ? 52 : 36}
                    className="text-gold/20"
                  />
                </div>

                {/* Grid texture */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(135deg, #c4903a 0px, #c4903a 1px, transparent 1px, transparent 48px)',
                  }}
                />

                {/* Overlay */}
                <div className="gallery-tile-overlay">
                  <span className="font-sans text-[10px] tracking-[2.5px] uppercase text-cream/75 font-medium">
                    {tile.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
