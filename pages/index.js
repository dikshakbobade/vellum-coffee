import Head from 'next/head'
import Navbar          from '@/components/Navbar'
import Hero            from '@/components/Hero'
import FeaturedDrinks  from '@/components/FeaturedDrinks'
import MenuSection     from '@/components/MenuSection'
import AboutSection    from '@/components/AboutSection'
import WhyChooseUs     from '@/components/WhyChooseUs'
import GallerySection  from '@/components/GallerySection'
import Testimonials    from '@/components/Testimonials'
import ReservationForm from '@/components/ReservationForm'
import Footer          from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vellum Coffee — Where Coffee Becomes Ritual</title>
        <meta name="description" content="Single-origin specialty coffee, master-roasted and hand-poured. Reserve your table at Vellum Coffee." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Vellum Coffee" />
        <meta property="og:description" content="Where Coffee Becomes Ritual" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <FeaturedDrinks />
        <MenuSection />
        <AboutSection />
        <WhyChooseUs />
        <GallerySection />
        <Testimonials />
        <ReservationForm />
      </main>

      <Footer />
    </>
  )
}
