import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, Clock, MapPin, Check, ArrowRight } from 'lucide-react'

const CONTACT = [
  { Icon: Phone,  label: 'Call to Reserve',  value: '+(91) 98200 00000' },
  { Icon: Mail,   label: 'Email Us',         value: 'hello@vellumcoffee.com' },
  { Icon: Clock,  label: 'Opening Hours',    value: 'Mon–Fri 7am–9pm · Sat–Sun 8am–10pm' },
  { Icon: MapPin, label: 'Find Us',          value: '42 Linking Road, Bandra, Mumbai' },
]

const INITIAL_FORM = { name: '', email: '', phone: '', date: '', guests: '2', message: '' }

export default function ReservationForm() {
  const [form,      setForm]      = useState(INITIAL_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200)) // simulate async
    setLoading(false)
    setSubmitted(true)
  }

  const reset = () => {
    setSubmitted(false)
    setForm(INITIAL_FORM)
  }

  return (
    <section id="reservation" className="bg-espresso-card py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: Info ──────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag mb-4">
              <span>Book a Table</span>
            </div>
            <h2 className="section-heading mb-6">
              Reserve Your<br />
              <em className="italic text-gold font-light">Experience</em>
            </h2>
            <p className="font-sans text-[15px] font-light leading-[1.9] text-cream/60 mb-10">
              We keep a small number of tables reserved for those who appreciate an unhurried morning.
              Book ahead for guaranteed seating and a complimentary coffee tasting card.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {CONTACT.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-gold/20 flex items-center justify-center shrink-0
                                  transition-all duration-300 hover:border-gold/50">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream-muted mb-1">
                      {label}
                    </p>
                    <p className="font-sans text-[14px] font-light text-cream">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                /* Success state */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-espresso border border-gold/20 p-12 lg:p-14 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-gold-light
                                  flex items-center justify-center mx-auto mb-6">
                    <Check size={28} className="text-espresso" />
                  </div>
                  <h3 className="font-display text-[32px] font-light text-cream mb-4">
                    Reservation Confirmed
                  </h3>
                  <p className="font-sans text-[14px] font-light leading-relaxed text-cream/60 mb-8">
                    Thank you, {form.name || 'Guest'}. We&rsquo;ve received your request and will
                    confirm via email within the hour.
                  </p>
                  <button className="btn-outline mx-auto" onClick={reset}>
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-espresso border border-gold/12 p-8 lg:p-10"
                >
                  <h3 className="font-display text-[26px] font-light text-cream mb-7 tracking-wide">
                    Reserve Your Seat
                  </h3>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream-muted block mb-2">
                        Full Name *
                      </label>
                      <input
                        className="input-luxury"
                        placeholder="Your full name"
                        required
                        value={form.name}
                        onChange={update('name')}
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream-muted block mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="input-luxury"
                        placeholder="you@email.com"
                        required
                        value={form.email}
                        onChange={update('email')}
                      />
                    </div>
                  </div>

                  {/* Phone + Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream-muted block mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="input-luxury"
                        placeholder="+91 98200 00000"
                        value={form.phone}
                        onChange={update('phone')}
                      />
                    </div>
                    <div>
                      <label className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream-muted block mb-2">
                        Date & Time *
                      </label>
                      <input
                        type="datetime-local"
                        className="input-luxury"
                        required
                        value={form.date}
                        onChange={update('date')}
                        style={{ colorScheme: 'dark' }}
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="mb-4">
                    <label className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream-muted block mb-2">
                      Number of Guests *
                    </label>
                    <select
                      className="input-luxury cursor-pointer"
                      value={form.guests}
                      onChange={update('guests')}
                      style={{ colorScheme: 'dark' }}
                    >
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <option key={n} value={n} style={{ background: '#080402' }}>
                          {n} {n === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-7">
                    <label className="font-sans text-[9px] tracking-[2.5px] uppercase text-cream-muted block mb-2">
                      Special Requests
                    </label>
                    <textarea
                      className="input-luxury resize-y"
                      rows={4}
                      placeholder="Dietary requirements, occasion, seating preference..."
                      value={form.message}
                      onChange={update('message')}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn-gold w-full justify-center py-4 text-[11px] ${
                      loading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-espresso/50 border-t-espresso rounded-full animate-spin" />
                        Confirming…
                      </>
                    ) : (
                      <>
                        Confirm Reservation <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
