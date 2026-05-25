import { Cormorant_Garamond, Jost } from 'next/font/google'
import '../styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${cormorant.variable} ${jost.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
