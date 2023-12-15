import Hero from '@/components/hero'
import Navbar from '@/components/navbar'
import Introduction from '@/components/introduction'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Introduction />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
    </main>
  )
}
